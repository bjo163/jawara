'use client'

// Global Error Handler Setup
// Main component that sets up global error handling for the application

import { ErrorProvider } from '@/lib/error-context'
import { ErrorBoundary } from './error-boundary'
import { ErrorToastContainer } from './error-toast'
import type { ReactNode } from 'react'
import type { ErrorHandlerOptions } from '@/types'

// Global Error Handler Props
interface GlobalErrorHandlerProps {
  readonly children: ReactNode
  readonly options?: Partial<ErrorHandlerOptions>
  readonly enableToasts?: boolean
  readonly toastPosition?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'
  readonly enableBoundary?: boolean
  readonly maxToasts?: number
}

// Development Error Panel (only in dev mode)
function DevErrorPanel() {
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <details className="bg-slate-900 border border-red-500/50 rounded-lg p-4 text-white max-w-md">
        <summary className="cursor-pointer text-sm font-semibold text-red-400 hover:text-red-300">
          🐛 Dev Error Panel
        </summary>
        <div className="mt-2 text-xs space-y-2">
          <div>
            <strong>Error Boundaries:</strong> Active
          </div>
          <div>
            <strong>Global Handler:</strong> Active
          </div>
          <div>
            <strong>Toast Notifications:</strong> Active
          </div>
          <div className="pt-2 border-t border-gray-700">
            <strong>Console:</strong> Check browser console for detailed logs
          </div>
        </div>
      </details>
    </div>
  )
}

// Main Global Error Handler Component
export function GlobalErrorHandler({
  children,
  options = {},
  enableToasts = true,
  toastPosition = 'top-right',
  enableBoundary = true,
  maxToasts = 5,
}: GlobalErrorHandlerProps) {
  // Default options with development-friendly settings
  const defaultOptions: Partial<ErrorHandlerOptions> = {
    enableLogging: true,
    enableReporting: process.env.NODE_ENV === 'production',
    maxErrors: 100,
    autoRetry: false,
    retryDelay: 1000,
    enableNotifications: enableToasts,
    notificationDuration: 5000,
  }

  const finalOptions = { ...defaultOptions, ...options }

  const content = (
    <ErrorProvider options={finalOptions}>
      {children}
      {enableToasts && (
        <ErrorToastContainer
          position={toastPosition}
          maxToasts={maxToasts}
        />
      )}
      <DevErrorPanel />
    </ErrorProvider>
  )

  if (enableBoundary) {
    return (
      <ErrorBoundary
        onError={(error, errorInfo) => {
          // Log error boundary catches
          console.group('🚨 Root Error Boundary')
          console.error('Component Error:', error)
          console.error('Error Info:', errorInfo)
          console.groupEnd()
        }}
        enableRetry={true}
        maxRetries={3}
        resetOnPropsChange={false}
      >
        {content}
      </ErrorBoundary>
    )
  }

  return content
}

// Convenience exports for common setups
export function ProductionErrorHandler({ children }: { readonly children: ReactNode }) {
  return (
    <GlobalErrorHandler
      options={{
        enableLogging: false,
        enableReporting: true,
        enableNotifications: true,
      }}
      enableToasts={true}
      enableBoundary={true}
    >
      {children}
    </GlobalErrorHandler>
  )
}

export function DevelopmentErrorHandler({ children }: { readonly children: ReactNode }) {
  return (
    <GlobalErrorHandler
      options={{
        enableLogging: true,
        enableReporting: false,
        enableNotifications: true,
        maxErrors: 200,
      }}
      enableToasts={true}
      enableBoundary={true}
      maxToasts={8}
    >
      {children}
    </GlobalErrorHandler>
  )
}
