'use client'

// Error Toast Notifications
// Display error notifications with proper styling and actions

import { useEffect, useState, useCallback } from 'react'
import { X, AlertTriangle, AlertCircle, Info, Wifi, RefreshCw } from 'lucide-react'
import { useErrorContext } from '@/lib/error-context'
import type { AppError } from '@/types'
import { formatErrorForUser, shouldRetryError } from '@/lib/error-utils'

// Toast Item Component
interface ErrorToastProps {
  readonly error: AppError
  readonly onClose: () => void
  readonly onRetry?: () => void
}

function ErrorToast({ error, onClose, onRetry }: ErrorToastProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isLeaving, setIsLeaving] = useState(false)
  const handleClose = useCallback(() => {
    setIsLeaving(true)
    setTimeout(onClose, 200)
  }, [onClose])

  const handleRetry = () => {
    onRetry?.()
    handleClose()
  }

  // Animation effects
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50)
    return () => clearTimeout(timer)
  }, [])
  
  // Auto-close for low-level errors
  useEffect(() => {
    if (error.level === 'low' || error.category === 'validation') {
      const timer = setTimeout(() => {
        handleClose()
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [error, handleClose])

  // Get icon based on error level
  const getIcon = () => {
    switch (error.level) {
      case 'low':
        return <Info className="h-5 w-5" />
      case 'medium':
        return <AlertCircle className="h-5 w-5" />
      case 'high':
      case 'critical':
        return <AlertTriangle className="h-5 w-5" />
      default:
        return <AlertCircle className="h-5 w-5" />
    }
  }

  // Get styles based on error level
  const getStyles = () => {
    const baseStyles = 'border transition-all duration-200'
    
    switch (error.level) {
      case 'low':
        return `${baseStyles} bg-blue-900/90 border-blue-500/50 text-blue-100`
      case 'medium':
        return `${baseStyles} bg-yellow-900/90 border-yellow-500/50 text-yellow-100`
      case 'high':
        return `${baseStyles} bg-orange-900/90 border-orange-500/50 text-orange-100`
      case 'critical':
        return `${baseStyles} bg-red-900/90 border-red-500/50 text-red-100`
      default:
        return `${baseStyles} bg-gray-900/90 border-gray-500/50 text-gray-100`
    }
  }

  // Get network status indicator
  const isNetworkError = error.category === 'network' || error.category === 'api'
  const canRetry = shouldRetryError(error)

  return (
    <div
      className={`
        fixed z-50 max-w-sm w-full mx-auto p-4 rounded-lg shadow-lg backdrop-blur-sm
        ${getStyles()}
        transition-all duration-200 transform
        ${isVisible && !isLeaving 
          ? 'translate-y-0 opacity-100 scale-100' 
          : 'translate-y-2 opacity-0 scale-95'
        }
      `}
    >
      <div className="flex items-start space-x-3">
        {/* Icon */}
        <div className="flex-shrink-0 mt-0.5">
          {isNetworkError ? (
            <Wifi className="h-5 w-5" />
          ) : (
            getIcon()
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium">
                {formatErrorForUser(error)}
              </p>
              
              {process.env.NODE_ENV === 'development' && (
                <p className="mt-1 text-xs opacity-70">
                  [{error.category}] {error.id}
                </p>
              )}
            </div>

            {/* Close Button */}
            <button
              onClick={handleClose}
              className="ml-2 p-1 rounded hover:bg-white/10 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Actions */}
          {(canRetry || error.isRetryable) && (
            <div className="mt-3 flex gap-2">
              {canRetry && onRetry && (
                <button
                  onClick={handleRetry}
                  className="inline-flex items-center space-x-1 text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded transition-colors"
                >
                  <RefreshCw className="h-3 w-3" />
                  <span>Coba Lagi</span>
                </button>
              )}
              
              {error.category === 'chunk-load' && (
                <button
                  onClick={() => window.location.reload()}
                  className="inline-flex items-center space-x-1 text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded transition-colors"
                >
                  <RefreshCw className="h-3 w-3" />
                  <span>Refresh</span>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Toast Container Component
interface ErrorToastContainerProps {
  readonly position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'
  readonly maxToasts?: number
}

export function ErrorToastContainer({ 
  position = 'top-right', 
  maxToasts = 5 
}: ErrorToastContainerProps) {
  const { errors, clearError } = useErrorContext()
  const [displayedErrors, setDisplayedErrors] = useState<Set<string>>(new Set())

  // Filter errors to show (only recent errors that need user attention)
  const errorsToShow = errors
    .filter(error => {
      // Don't show if already displayed
      if (displayedErrors.has(error.id)) return false
      
      // Only show errors from last 10 seconds
      const isRecent = (Date.now() - error.timestamp.getTime()) < 10000
      if (!isRecent) return false

      // Show validation errors, network errors, and high/critical errors
      return (
        error.category === 'validation' ||
        error.category === 'network' ||
        error.category === 'api' ||
        error.category === 'chunk-load' ||
        error.level === 'high' ||
        error.level === 'critical'
      )
    })
    .slice(-maxToasts) // Limit number of toasts

  // Mark errors as displayed
  useEffect(() => {
    errorsToShow.forEach(error => {
      setDisplayedErrors(prev => new Set(prev).add(error.id))
    })
  }, [errorsToShow])
  // Clean up displayed errors periodically
  useEffect(() => {
    const cleanupDisplayedErrors = () => {
      const activeErrorIds = new Set(errors.map(e => e.id))
      const filteredIds = [...displayedErrors].filter(id => activeErrorIds.has(id))
      return new Set(filteredIds)
    }

    const interval = setInterval(() => {
      setDisplayedErrors(cleanupDisplayedErrors)
    }, 30000) // Clean up every 30 seconds

    return () => clearInterval(interval)
  }, [errors, displayedErrors])

  // Get position styles
  const getPositionStyles = () => {
    switch (position) {
      case 'top-right':
        return 'top-4 right-4'
      case 'top-left':
        return 'top-4 left-4'
      case 'bottom-right':
        return 'bottom-4 right-4'
      case 'bottom-left':
        return 'bottom-4 left-4'
      case 'top-center':
        return 'top-4 left-1/2 transform -translate-x-1/2'
      case 'bottom-center':
        return 'bottom-4 left-1/2 transform -translate-x-1/2'
      default:
        return 'top-4 right-4'
    }
  }

  if (errorsToShow.length === 0) {
    return null
  }

  return (
    <div className={`fixed z-50 ${getPositionStyles()}`}>
      <div className="space-y-2">
        {errorsToShow.map(error => (
          <ErrorToast
            key={error.id}
            error={error}
            onClose={() => clearError(error.id)}
            onRetry={shouldRetryError(error) ? () => {
              // Here you would implement actual retry logic
              console.log('Retrying error:', error.id)
            } : undefined}
          />
        ))}
      </div>
    </div>
  )
}

// Hook for showing error toasts
export function useErrorToast() {
  const { reportError } = useErrorContext()

  return {
    showError: (message: string, options?: Partial<AppError>) => {
      reportError({
        id: `toast_${Date.now()}`,
        message,
        category: 'unknown',
        level: 'medium',
        severity: 'warning',
        timestamp: new Date(),
        isRetryable: false,
        ...options,
      })
    },
    showNetworkError: (message: string = 'Koneksi internet bermasalah') => {
      reportError({
        id: `network_toast_${Date.now()}`,
        message,
        category: 'network',
        level: 'medium',
        severity: 'error',
        timestamp: new Date(),
        isRetryable: true,
        maxRetries: 3,
      })
    },
    showValidationError: (message: string, field?: string) => {
      reportError({
        id: `validation_toast_${Date.now()}`,
        message,
        category: 'validation',
        level: 'low',
        severity: 'warning',
        timestamp: new Date(),
        isRetryable: false,
        metadata: { field },
      })
    },
  }
}
