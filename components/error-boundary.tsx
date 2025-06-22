'use client'

// Error Boundary Component
// React Error Boundary with advanced error handling features

import { Component, type ErrorInfo } from 'react'
import type {
  ErrorBoundaryProps,
  ErrorBoundaryState,
  ErrorFallbackProps,
} from '@/types'
import { createComponentError } from '@/lib/error-utils'

// Default Error Fallback Component
function DefaultErrorFallback({
  error,
  resetError,
  retry,
  canRetry,
  retryCount,
  maxRetries,
}: Readonly<ErrorFallbackProps>) {
  return (
    <div className="min-h-[400px] flex items-center justify-center bg-slate-950 text-white">
      <div className="max-w-md mx-auto p-6 text-center">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
              />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-white mb-2">
            Oops! Terjadi Kesalahan
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Terjadi kesalahan pada komponen ini. Kami sudah mencatat masalah ini dan akan segera memperbaikinya.
          </p>
          
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-4 text-left">
              <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-400">
                Detail Error (Development Mode)
              </summary>
              <div className="mt-2 p-3 bg-slate-800 rounded text-xs text-gray-300 font-mono">
                <div className="mb-2">
                  <strong>ID:</strong> {error.id}
                </div>
                <div className="mb-2">
                  <strong>Message:</strong> {error.message}
                </div>
                <div className="mb-2">
                  <strong>Component:</strong> {error.componentName ?? 'Unknown'}
                </div>
                {error.stack && (
                  <div className="mt-3">
                    <strong>Stack Trace:</strong>
                    <pre className="mt-1 text-xs overflow-auto max-h-32">
                      {error.stack}
                    </pre>
                  </div>
                )}
              </div>
            </details>
          )}
        </div>

        <div className="space-y-3">
          {canRetry && (
            <button
              onClick={retry}
              disabled={retryCount >= maxRetries}
              className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              {retryCount >= maxRetries 
                ? `Sudah dicoba ${maxRetries}x` 
                : `Coba Lagi (${retryCount}/${maxRetries})`}
            </button>
          )}
          
          <button
            onClick={resetError}
            className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Reset Komponen
          </button>
          
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
          >
            Refresh Halaman
          </button>
        </div>
      </div>
    </div>
  )
}

// Error Boundary Class Component
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private retryTimeoutId: NodeJS.Timeout | null = null

  constructor(props: ErrorBoundaryProps) {
    super(props)
    
    this.state = {
      hasError: false,
      error: null,
      retryCount: 0,
    }
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
    }
  }  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const componentError = createComponentError(
      error,
      this.constructor.name,
      errorInfo.componentStack ?? undefined
    )

    this.setState({
      error: componentError,
      errorId: componentError.id,
      lastErrorTime: new Date(),
    })

    // Call onError prop if provided
    const customErrorInfo: import('@/types').ErrorInfo = {
      componentStack: errorInfo.componentStack ?? '',
    }
    this.props.onError?.(componentError, customErrorInfo)    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('🚨 Error Boundary Caught Error')
      console.error('Error:', error)
      console.error('Error Info:', errorInfo)
      console.error('Component Error:', componentError)
      console.groupEnd()
    }
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps) {
    const { resetOnPropsChange, resetKeys } = this.props
    const { hasError } = this.state

    // Reset if resetOnPropsChange is true and props changed
    if (resetOnPropsChange && hasError && prevProps.children !== this.props.children) {
      this.resetError()
      return
    }

    // Reset if resetKeys changed
    if (resetKeys && hasError) {
      const prevKeys = prevProps.resetKeys || []
      const currentKeys = resetKeys
      
      if (prevKeys.length !== currentKeys.length || 
          prevKeys.some((key, index) => key !== currentKeys[index])) {
        this.resetError()
      }
    }
  }

  componentWillUnmount() {
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId)
    }
  }

  resetError = () => {
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId)
      this.retryTimeoutId = null
    }

    this.setState({
      hasError: false,
      error: null,
      errorId: undefined,
      retryCount: 0,
      lastErrorTime: undefined,
    })
  }

  retry = () => {
    const { maxRetries = 3 } = this.props
    const { retryCount } = this.state

    if (retryCount >= maxRetries) {
      return
    }

    // Call onRetry prop if provided
    this.props.onRetry?.()

    // Reset with incremented retry count
    this.setState(prevState => ({
      hasError: false,
      error: null,
      errorId: undefined,
      retryCount: prevState.retryCount + 1,
      lastErrorTime: undefined,
    }))
  }

  render() {
    const { hasError, error, retryCount } = this.state
    const { 
      children, 
      fallback: FallbackComponent = DefaultErrorFallback,
      enableRetry = true,
      maxRetries = 3,
    } = this.props

    if (hasError && error) {
      const canRetry = enableRetry && retryCount < maxRetries

      return (
        <FallbackComponent
          error={error}
          resetError={this.resetError}
          retry={this.retry}
          canRetry={canRetry}
          retryCount={retryCount}
          maxRetries={maxRetries}
        />
      )
    }

    return children
  }
}

// Higher-Order Component for Error Boundary
export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<ErrorBoundaryProps, 'children'>
) {
  const WrappedComponent = (props: P) => (
    <ErrorBoundary {...errorBoundaryProps}>
      <Component {...props} />
    </ErrorBoundary>
  )

  WrappedComponent.displayName = `withErrorBoundary(${Component.displayName ?? Component.name})`
  
  return WrappedComponent
}

// Hook for Error Boundary
export function useErrorBoundary() {
  const throwError = (error: Error) => {
    // This will be caught by the nearest error boundary
    throw error
  }

  return { throwError }
}
