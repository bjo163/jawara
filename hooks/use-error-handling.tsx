'use client'

// Error Handling Hooks
// Custom hooks for error handling in React components

import { useCallback, useEffect, useState } from 'react'
import { useErrorContext } from '@/lib/error-context'
import type { AppError, ErrorCategory, ErrorLevel } from '@/types'
import {
  createNetworkError,
  createValidationError,
  createApiError,
  transformError,
  shouldRetryError,
} from '@/lib/error-utils'

// Hook for async operations with error handling
export function useAsyncError() {
  const { reportError } = useErrorContext()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<AppError | null>(null)
  const execute = useCallback(
    async <T,>(
      asyncFunction: () => Promise<T>,
      options?: {
        category?: ErrorCategory
        level?: ErrorLevel
        onError?: (error: AppError) => void
        retryOnError?: boolean
        maxRetries?: number
      }
    ): Promise<T | null> => {
      setLoading(true)
      setError(null)

      try {
        const result = await asyncFunction()
        setLoading(false)
        return result
      } catch (err) {
        const appError = transformError(
          err,
          options?.category ?? 'runtime',
          options?.level ?? 'medium'
        )

        setError(appError)
        setLoading(false)

        // Report to global error context
        reportError(appError)

        // Call custom error handler if provided
        options?.onError?.(appError)

        return null
      }
    },
    [reportError]
  )

  const clearError = useCallback(() => {
    setError(null)
  }, [])
  const retry = useCallback(
    async <T,>(asyncFunction: () => Promise<T>): Promise<T | null> => {
      if (!error || !shouldRetryError(error)) {
        return null
      }

      return execute(asyncFunction)
    },
    [error, execute]
  )

  return {
    execute,
    loading,
    error,
    clearError,
    retry,
    canRetry: error ? shouldRetryError(error) : false,
  }
}

// Hook for API calls with automatic error handling
export function useApiError() {
  const { reportError } = useErrorContext()

  const handleApiError = useCallback(
    (
      error: unknown,
      endpoint: string,
      method: string = 'GET',
      options?: {
        expectedStatus?: number[]
        onError?: (error: AppError) => void
      }
    ) => {
      let statusCode = 500
      let message = 'API request failed'

      // Extract status code and message from different error types
      if (error instanceof Response) {
        statusCode = error.status
        message = `HTTP ${statusCode}: ${error.statusText}`
      } else if (error instanceof Error) {
        message = error.message
        // Try to extract status code from fetch error
        if (error.message.includes('fetch')) {
          statusCode = 0 // Network error
        }
      } else if (typeof error === 'object' && error !== null) {
        const errorObj = error as {
          status?: number
          statusCode?: number
          message?: string
          error?: string
        }
        statusCode = errorObj.status ?? errorObj.statusCode ?? 500
        message = errorObj.message ?? errorObj.error ?? message
      }

      // Don't report expected status codes as errors
      if (options?.expectedStatus?.includes(statusCode)) {
        return
      }

      const apiError = createApiError(message, endpoint, method, statusCode)
      reportError(apiError)
      options?.onError?.(apiError)

      return apiError
    },
    [reportError]
  )

  return { handleApiError }
}

// Hook for form validation errors
export function useValidationError() {
  const { reportError } = useErrorContext()
  const [validationErrors, setValidationErrors] = useState<
    Record<string, string>
  >({})

  const addValidationError = useCallback(
    (field: string, message: string) => {
      const error = createValidationError(message, field)
      reportError(error)

      setValidationErrors(prev => ({
        ...prev,
        [field]: message,
      }))
    },
    [reportError]
  )

  const clearValidationError = useCallback((field: string) => {
    setValidationErrors(prev => {
      const newErrors = { ...prev }
      delete newErrors[field]
      return newErrors
    })
  }, [])

  const clearAllValidationErrors = useCallback(() => {
    setValidationErrors({})
  }, [])

  const hasValidationErrors = Object.keys(validationErrors).length > 0

  return {
    validationErrors,
    addValidationError,
    clearValidationError,
    clearAllValidationErrors,
    hasValidationErrors,
  }
}

// Hook for network status and error handling
export function useNetworkError() {
  const { reportError } = useErrorContext()
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  )

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true)
    }

    const handleOffline = () => {
      setIsOnline(false)
      reportError(
        createNetworkError(
          'Koneksi internet terputus',
          0,
          undefined,
          undefined,
          { level: 'high' }
        )
      )
    }

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [reportError])

  const reportNetworkError = useCallback(
    (message: string, statusCode?: number, endpoint?: string) => {
      const error = createNetworkError(message, statusCode, endpoint)
      reportError(error)
      return error
    },
    [reportError]
  )

  return {
    isOnline,
    reportNetworkError,
  }
}

// Hook for component-level error boundaries
export function useComponentError(componentName?: string) {
  const { reportError } = useErrorContext()

  const reportComponentError = useCallback(
    (error: Error, additionalInfo?: Record<string, unknown>) => {
      const appError = transformError(error, 'component', 'high')
      appError.metadata = {
        ...appError.metadata,
        componentName,
        ...additionalInfo,
      }
      reportError(appError)
      return appError
    },
    [reportError, componentName]
  )
  const wrapAsync = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <T extends (...args: any[]) => Promise<any>>(fn: T): T => {
      return ((...args: Parameters<T>) => {
        try {
          const result = fn(...args)
          if (result instanceof Promise) {
            return result.catch((error: Error) => {
              reportComponentError(error, { args })
              throw error
            })
          }
          return result
        } catch (error) {
          reportComponentError(error as Error, { args })
          throw error
        }
      }) as T
    },
    [reportComponentError]
  )
  const wrapSync = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    <T extends (...args: any[]) => any>(fn: T): T => {
      return ((...args: Parameters<T>) => {
        try {
          return fn(...args)
        } catch (error) {
          reportComponentError(error as Error, { args })
          throw error
        }
      }) as T
    },
    [reportComponentError]
  )

  return {
    reportComponentError,
    wrapAsync,
    wrapSync,
  }
}

// Hook for error statistics and monitoring
export function useErrorStats() {
  const { errors, getErrorsByCategory, getErrorsByLevel } = useErrorContext()
  const [stats, setStats] = useState({
    total: 0,
    critical: 0,
    recent: 0,
    categories: {} as Record<ErrorCategory, number>,
    levels: {} as Record<ErrorLevel, number>,
  })

  useEffect(() => {
    const now = new Date()
    const lastHour = new Date(now.getTime() - 60 * 60 * 1000)

    const newStats = {
      total: errors.length,
      critical: errors.filter(e => e.level === 'critical').length,
      recent: errors.filter(e => e.timestamp >= lastHour).length,
      categories: {} as Record<ErrorCategory, number>,
      levels: {} as Record<ErrorLevel, number>,
    }

    // Count by category
    const categories: ErrorCategory[] = [
      'network',
      'api',
      'component',
      'validation',
      'authentication',
      'authorization',
      'chunk-load',
      'runtime',
      'unknown',
    ]
    categories.forEach(category => {
      newStats.categories[category] = getErrorsByCategory(category).length
    })

    // Count by level
    const levels: ErrorLevel[] = ['low', 'medium', 'high', 'critical']
    levels.forEach(level => {
      newStats.levels[level] = getErrorsByLevel(level).length
    })

    setStats(newStats)
  }, [errors, getErrorsByCategory, getErrorsByLevel])

  return stats
}

// Hook for error filtering and searching
export function useErrorFilter() {
  const { errors } = useErrorContext()
  const [filters, setFilters] = useState({
    category: null as ErrorCategory | null,
    level: null as ErrorLevel | null,
    timeRange: 'all' as 'hour' | 'day' | 'week' | 'all',
    search: '',
  })

  const filteredErrors = errors.filter(error => {
    // Category filter
    if (filters.category && error.category !== filters.category) {
      return false
    }

    // Level filter
    if (filters.level && error.level !== filters.level) {
      return false
    }

    // Time range filter
    if (filters.timeRange !== 'all') {
      const now = new Date()
      const cutoff = new Date()

      switch (filters.timeRange) {
        case 'hour':
          cutoff.setHours(now.getHours() - 1)
          break
        case 'day':
          cutoff.setDate(now.getDate() - 1)
          break
        case 'week':
          cutoff.setDate(now.getDate() - 7)
          break
      }

      if (error.timestamp < cutoff) {
        return false
      }
    }

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      return (
        error.message.toLowerCase().includes(searchLower) ||
        error.category.toLowerCase().includes(searchLower) ||
        error.id.toLowerCase().includes(searchLower)
      )
    }

    return true
  })

  return {
    filters,
    setFilters,
    filteredErrors,
    hasFilters:
      Boolean(filters.category) ||
      Boolean(filters.level) ||
      filters.timeRange !== 'all' ||
      Boolean(filters.search),
  }
}
