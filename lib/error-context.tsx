'use client'

// Error Context Provider
// Global error state management using React Context

import { createContext, useContext, useCallback, useRef, useEffect, useMemo } from 'react'
import type { ReactNode } from 'react'
import type {
  AppError,
  ErrorContextValue,
  ErrorCategory,
  ErrorLevel,
  ErrorHandlerOptions,
} from '@/types'

// Default options
const defaultOptions: ErrorHandlerOptions = {
  enableLogging: true,
  enableReporting: false,
  maxErrors: 100,
  autoRetry: false,
  retryDelay: 1000,
  enableNotifications: true,
  notificationDuration: 5000,
}

// Create Context
const ErrorContext = createContext<ErrorContextValue | null>(null)

// Error Provider Props
interface ErrorProviderProps {
  readonly children: ReactNode
  readonly options?: Partial<ErrorHandlerOptions>
}

// Error Provider Component
export function ErrorProvider({ children, options = {} }: ErrorProviderProps) {
  const config = useMemo(() => ({ ...defaultOptions, ...options }), [options])
  const errorsRef = useRef<AppError[]>([])
  const subscribersRef = useRef<Set<(errors: AppError[]) => void>>(new Set())

  // Notify subscribers
  const notifySubscribers = useCallback(() => {
    subscribersRef.current.forEach(callback => {
      try {
        callback([...errorsRef.current])
      } catch (error) {
        console.error('Error in error context subscriber:', error)
      }
    })
  }, [])

  // Report error function
  const reportError = useCallback(
    (error: AppError) => {
      // Log to console if enabled
      if (config.enableLogging) {
        console.group(`🚨 Error Report [${error.level.toUpperCase()}]`)
        console.error('Message:', error.message)
        console.error('Category:', error.category)
        console.error('Details:', {
          id: error.id,
          timestamp: error.timestamp,
          url: error.url,
          userAgent: error.userAgent,
          stack: error.stack,
          metadata: error.metadata,
        })
        if (error.cause) {
          console.error('Cause:', error.cause)
        }
        console.groupEnd()
      }

      // Add to errors array
      errorsRef.current.push(error)

      // Maintain max errors limit
      if (errorsRef.current.length > config.maxErrors!) {
        errorsRef.current = errorsRef.current.slice(-config.maxErrors!)
      }

      // Notify subscribers
      notifySubscribers()

      // Auto-retry if enabled and error is retryable
      if (config.autoRetry && error.isRetryable && error.retryCount === 0) {
        setTimeout(() => {
          // Implementation would depend on retry mechanism
          console.log('Auto-retry would be triggered for:', error.id)
        }, config.retryDelay)
      }
    },
    [config, notifySubscribers]
  )

  // Clear specific error
  const clearError = useCallback(
    (errorId: string) => {
      errorsRef.current = errorsRef.current.filter(error => error.id !== errorId)
      notifySubscribers()
    },
    [notifySubscribers]
  )

  // Clear all errors
  const clearAllErrors = useCallback(() => {
    errorsRef.current = []
    notifySubscribers()
  }, [notifySubscribers])

  // Get errors by category
  const getErrorsByCategory = useCallback((category: ErrorCategory) => {
    return errorsRef.current.filter(error => error.category === category)
  }, [])

  // Get errors by level
  const getErrorsByLevel = useCallback((level: ErrorLevel) => {
    return errorsRef.current.filter(error => error.level === level)
  }, [])

  // Subscribe to error changes
  const subscribe = useCallback((callback: (errors: AppError[]) => void) => {
    subscribersRef.current.add(callback)
    
    // Return unsubscribe function
    return () => {
      subscribersRef.current.delete(callback)
    }
  }, [])

  // Computed values
  const hasErrors = errorsRef.current.length > 0
  // Context value
  const contextValue: ErrorContextValue = useMemo(() => ({
    reportError,
    clearError,
    clearAllErrors,
    errors: errorsRef.current,
    hasErrors,
    getErrorsByCategory,
    getErrorsByLevel,
    subscribe,
  }), [reportError, clearError, clearAllErrors, hasErrors, getErrorsByCategory, getErrorsByLevel, subscribe])

  // Global error handlers
  useEffect(() => {
    // Handle unhandled Promise rejections
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const error = event.reason
      let message = 'Unhandled Promise rejection'
      
      if (error instanceof Error) {
        message = error.message
      } else if (typeof error === 'string') {
        message = error
      }

      reportError({
        id: `unhandled_${Date.now()}`,
        message,
        category: 'runtime',
        level: 'high',
        severity: 'error',
        timestamp: new Date(),
        cause: error,
        isRetryable: false,
      })

      // Prevent default behavior
      event.preventDefault()
    }

    // Handle global JavaScript errors
    const handleError = (event: ErrorEvent) => {
      reportError({
        id: `global_${Date.now()}`,
        message: event.message,
        category: 'runtime',
        level: 'high',
        severity: 'error',
        timestamp: new Date(),
        url: event.filename,
        stack: event.error?.stack,
        cause: event.error,
        isRetryable: false,
        metadata: {
          lineno: event.lineno,
          colno: event.colno,
        },
      })
    }

    // Add event listeners
    window.addEventListener('unhandledrejection', handleUnhandledRejection)
    window.addEventListener('error', handleError)

    // Cleanup
    return () => {
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
      window.removeEventListener('error', handleError)
    }
  }, [reportError])

  return (
    <ErrorContext.Provider value={contextValue}>
      {children}
    </ErrorContext.Provider>
  )
}

// Custom hook to use error context
export function useErrorContext(): ErrorContextValue {
  const context = useContext(ErrorContext)
  
  if (!context) {
    throw new Error('useErrorContext must be used within an ErrorProvider')
  }
  
  return context
}

// Custom hook for error reporting
export function useErrorReporter() {
  const { reportError } = useErrorContext()
  
  return {
    reportError,
    reportNetworkError: (message: string, statusCode?: number, endpoint?: string) => {
      reportError({
        id: `network_${Date.now()}`,
        message,
        category: 'network',
        level: statusCode && statusCode >= 500 ? 'high' : 'medium',
        severity: 'error',
        timestamp: new Date(),
        isRetryable: !statusCode || statusCode >= 500,
        metadata: { statusCode, endpoint },
      })
    },
    reportValidationError: (message: string, field?: string) => {
      reportError({
        id: `validation_${Date.now()}`,
        message,
        category: 'validation',
        level: 'low',
        severity: 'warning',
        timestamp: new Date(),
        isRetryable: false,
        metadata: { field },
      })
    },
    reportComponentError: (error: Error, componentName?: string) => {
      reportError({
        id: `component_${Date.now()}`,
        message: error.message,
        category: 'component',
        level: 'high',
        severity: 'error',
        timestamp: new Date(),
        stack: error.stack,
        cause: error,
        isRetryable: true,
        metadata: { componentName },
      })
    },
  }
}
