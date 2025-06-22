// Error Handling Types
// Comprehensive types for error boundaries and global error handling

import type { ReactNode } from 'react'

// Error Levels
export type ErrorLevel = 'low' | 'medium' | 'high' | 'critical'

// Error Categories
export type ErrorCategory =
  | 'network'
  | 'validation'
  | 'authentication'
  | 'authorization'
  | 'api'
  | 'component'
  | 'chunk-load'
  | 'runtime'
  | 'unknown'

// Error Severity
export type ErrorSeverity = 'info' | 'warning' | 'error' | 'fatal'

// Error Recovery Strategy
export type ErrorRecoveryStrategy = 'retry' | 'refresh' | 'fallback' | 'ignore'

// Base Error Interface
export interface AppError {
  id: string
  message: string
  category: ErrorCategory
  level: ErrorLevel
  severity: ErrorSeverity
  timestamp: Date
  userAgent?: string
  url?: string
  userId?: string
  sessionId?: string
  stack?: string
  cause?: unknown
  metadata?: Record<string, unknown>
  recoveryStrategy?: ErrorRecoveryStrategy
  isRetryable?: boolean
  retryCount?: number
  maxRetries?: number
}

// Network Error
export interface NetworkError extends AppError {
  category: 'network'
  statusCode?: number
  endpoint?: string
  method?: string
  requestData?: unknown
  responseData?: unknown
}

// Validation Error
export interface ValidationError extends AppError {
  category: 'validation'
  field?: string
  validationRule?: string
  value?: unknown
}

// API Error
export interface ApiError extends AppError {
  category: 'api'
  endpoint: string
  method: string
  statusCode: number
  requestId?: string
  correlationId?: string
}

// Component Error (React Error Boundary)
export interface ComponentError extends AppError {
  category: 'component'
  componentName?: string
  componentStack?: string
  errorBoundary?: string
}

// Error Boundary State
export interface ErrorBoundaryState {
  hasError: boolean
  error: ComponentError | null
  errorId?: string
  retryCount: number
  lastErrorTime?: Date
}

// Error Boundary Props
export interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ComponentType<ErrorFallbackProps>
  onError?: (error: ComponentError, errorInfo: ErrorInfo) => void
  onRetry?: () => void
  resetOnPropsChange?: boolean
  resetKeys?: Array<string | number>
  maxRetries?: number
  enableRetry?: boolean
  level?: ErrorLevel
  category?: ErrorCategory
}

// Error Fallback Props
export interface ErrorFallbackProps {
  error: ComponentError
  resetError: () => void
  retry: () => void
  canRetry: boolean
  retryCount: number
  maxRetries: number
}

// Error Context
export interface ErrorContextValue {
  reportError: (error: AppError) => void
  clearError: (errorId: string) => void
  clearAllErrors: () => void
  errors: AppError[]
  hasErrors: boolean
  getErrorsByCategory: (category: ErrorCategory) => AppError[]
  getErrorsByLevel: (level: ErrorLevel) => AppError[]
  subscribe: (callback: (errors: AppError[]) => void) => () => void
}

// Error Handler Options
export interface ErrorHandlerOptions {
  enableLogging?: boolean
  enableReporting?: boolean
  maxErrors?: number
  autoRetry?: boolean
  retryDelay?: number
  reportingEndpoint?: string
  enableNotifications?: boolean
  notificationDuration?: number
}

// Error Log Entry
export interface ErrorLogEntry extends AppError {
  reported: boolean
  reportedAt?: Date
  resolved: boolean
  resolvedAt?: Date
  resolutionNote?: string
}

// Error Reporter Interface
export interface ErrorReporter {
  report: (error: AppError) => Promise<void>
  batch: (errors: AppError[]) => Promise<void>
  configure: (options: ErrorReporterOptions) => void
}

// Error Reporter Options
export interface ErrorReporterOptions {
  endpoint?: string
  apiKey?: string
  batchSize?: number
  flushInterval?: number
  enabledEnvironments?: string[]
  filters?: {
    categories?: ErrorCategory[]
    levels?: ErrorLevel[]
    severities?: ErrorSeverity[]
  }
}

// Global Error Handler Config
export interface GlobalErrorConfig {
  enableErrorBoundaries?: boolean
  enableGlobalHandler?: boolean
  enableUnhandledRejectionHandler?: boolean
  enableConsoleErrorCapture?: boolean
  reporter?: ErrorReporter
  onError?: (error: AppError) => void
  fallbackComponent?: ComponentType<ErrorFallbackProps>
  maxRetries?: number
  retryDelay?: number
  enableDevtools?: boolean
}

// React Error Info (from React.ErrorInfo)
export interface ErrorInfo {
  componentStack: string
  errorBoundary?: string
  errorBoundaryStack?: string
}

// Component Type (from React)
type ComponentType<P = {}> = React.ComponentType<P>

// Utility Types
export type ErrorHandler = (error: AppError) => void | Promise<void>
export type ErrorFilter = (error: AppError) => boolean
export type ErrorTransformer = (error: unknown) => AppError
