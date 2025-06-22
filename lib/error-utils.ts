// Error Utilities
// Core utilities for error handling, transformation, and management

import type {
  AppError,
  ErrorCategory,
  ErrorLevel,
  ErrorSeverity,
  ComponentError,
  NetworkError,
  ErrorValidationError,
  AppApiError,
  ErrorRecoveryStrategy,
} from '@/types'

// Generate unique error ID
export function generateErrorId(): string {
  return `err_${Date.now()}_${Math.random().toString(36).substring(2, 11)}`
}

// Create base error
export function createAppError(
  message: string,
  category: ErrorCategory = 'unknown',
  level: ErrorLevel = 'medium',
  options: Partial<AppError> = {}
): AppError {
  return {
    id: generateErrorId(),
    message,
    category,
    level,
    severity: getSeverityFromLevel(level),
    timestamp: new Date(),
    userAgent:
      typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
    url: typeof window !== 'undefined' ? window.location.href : undefined,
    isRetryable: false,
    retryCount: 0,
    maxRetries: 3,
    ...options,
  }
}

// Transform JavaScript Error to AppError
export function transformError(
  error: unknown,
  category: ErrorCategory = 'runtime',
  level: ErrorLevel = 'medium'
): AppError {
  if (error instanceof Error) {
    return createAppError(error.message, category, level, {
      stack: error.stack,
      cause: error.cause,
    })
  }

  if (typeof error === 'string') {
    return createAppError(error, category, level)
  }

  if (typeof error === 'object' && error !== null) {
    const obj = error as Record<string, unknown>
    return createAppError(
      obj.message?.toString() ?? 'Unknown error occurred',
      category,
      level,
      { cause: error }
    )
  }

  return createAppError('Unknown error occurred', category, level, {
    cause: error,
  })
}

// Create Component Error
export function createComponentError(
  error: Error,
  componentName?: string,
  componentStack?: string,
  errorBoundary?: string
): ComponentError {
  return {
    ...createAppError(error.message, 'component', 'high'),
    category: 'component',
    componentName,
    componentStack,
    errorBoundary,
    stack: error.stack,
    cause: error,
    isRetryable: true,
    maxRetries: 2,
  }
}

// Create Network Error
export function createNetworkError(
  message: string,
  statusCode?: number,
  endpoint?: string,
  method?: string,
  options: Partial<NetworkError> = {}
): NetworkError {
  const level: ErrorLevel = statusCode && statusCode >= 500 ? 'high' : 'medium'
  const isRetryable =
    statusCode === undefined || statusCode >= 500 || statusCode === 408

  return {
    ...createAppError(message, 'network', level),
    category: 'network',
    statusCode,
    endpoint,
    method,
    isRetryable,
    recoveryStrategy: isRetryable ? 'retry' : 'fallback',
    ...options,
  }
}

// Create API Error
export function createApiError(
  message: string,
  endpoint: string,
  method: string,
  statusCode: number,
  options: Partial<AppApiError> = {}
): AppApiError {
  let level: ErrorLevel = 'low'
  if (statusCode >= 500) {
    level = 'high'
  } else if (statusCode >= 400) {
    level = 'medium'
  }

  const isRetryable =
    statusCode >= 500 || statusCode === 408 || statusCode === 429

  return {
    ...createAppError(message, 'api', level),
    category: 'api' as const,
    endpoint,
    method,
    statusCode,
    isRetryable,
    recoveryStrategy: isRetryable ? 'retry' : 'fallback',
    ...options,
  } as AppApiError
}

// Create Validation Error
export function createValidationError(
  message: string,
  field?: string,
  validationRule?: string,
  value?: unknown
): ErrorValidationError {
  return {
    ...createAppError(message, 'validation', 'low'),
    category: 'validation',
    field: field ?? undefined,
    validationRule,
    value,
    isRetryable: false,
    recoveryStrategy: 'ignore',
  }
}

// Get severity from level
export function getSeverityFromLevel(level: ErrorLevel): ErrorSeverity {
  switch (level) {
    case 'low':
      return 'info'
    case 'medium':
      return 'warning'
    case 'high':
      return 'error'
    case 'critical':
      return 'fatal'
    default:
      return 'warning'
  }
}

// Get recovery strategy for error
export function getRecoveryStrategy(error: AppError): ErrorRecoveryStrategy {
  if (error.recoveryStrategy) {
    return error.recoveryStrategy
  }

  switch (error.category) {
    case 'network':
    case 'api':
      return error.isRetryable ? 'retry' : 'fallback'
    case 'component':
    case 'chunk-load':
      return 'refresh'
    case 'validation':
      return 'ignore'
    case 'authentication':
    case 'authorization':
      return 'fallback'
    default:
      return 'fallback'
  }
}

// Check if error should be retried
export function shouldRetryError(error: AppError): boolean {
  if (!error.isRetryable) return false
  const retryCount = error.retryCount ?? 0
  const maxRetries = error.maxRetries ?? 3
  if (retryCount >= maxRetries) return false

  const strategy = getRecoveryStrategy(error)
  return strategy === 'retry'
}

// Format error message for user display
export function formatErrorForUser(error: AppError): string {
  switch (error.category) {
    case 'network':
      return 'Koneksi internet bermasalah. Silakan coba lagi.'
    case 'api':
      return 'Terjadi kesalahan saat memproses permintaan. Silakan coba lagi.'
    case 'validation':
      return error.message
    case 'authentication':
      return 'Sesi Anda telah berakhir. Silakan login kembali.'
    case 'authorization':
      return 'Anda tidak memiliki akses untuk melakukan tindakan ini.'
    case 'component':
      return 'Terjadi kesalahan tampilan. Silakan refresh halaman.'
    case 'chunk-load':
      return 'Gagal memuat halaman. Silakan refresh browser.'
    default:
      return 'Terjadi kesalahan. Silakan coba lagi atau hubungi support.'
  }
}

// Check if error is critical
export function isCriticalError(error: AppError): boolean {
  return error.level === 'critical' || error.severity === 'fatal'
}

// Check if error requires immediate attention
export function requiresImmediateAttention(error: AppError): boolean {
  return (
    isCriticalError(error) ||
    error.category === 'authentication' ||
    error.category === 'authorization' ||
    (error.category === 'network' && !error.isRetryable)
  )
}

// Sanitize error for logging/reporting
export function sanitizeError(error: AppError): AppError {
  // Remove sensitive data
  const sanitized = { ...error }

  if (sanitized.metadata) {
    const metadata = { ...sanitized.metadata }
    // Remove common sensitive keys
    const sensitiveKeys = [
      'password',
      'token',
      'key',
      'secret',
      'auth',
      'credential',
    ]
    for (const key in metadata) {
      if (
        sensitiveKeys.some(sensitive => key.toLowerCase().includes(sensitive))
      ) {
        metadata[key] = '[REDACTED]'
      }
    }
    sanitized.metadata = metadata
  }

  return sanitized
}

// Group errors by category
export function groupErrorsByCategory(
  errors: AppError[]
): Record<ErrorCategory, AppError[]> {
  return errors.reduce(
    (groups, error) => {
      if (!groups[error.category]) {
        groups[error.category] = []
      }
      groups[error.category].push(error)
      return groups
    },
    {} as Record<ErrorCategory, AppError[]>
  )
}

// Group errors by level
export function groupErrorsByLevel(
  errors: AppError[]
): Record<ErrorLevel, AppError[]> {
  return errors.reduce(
    (groups, error) => {
      if (!groups[error.level]) {
        groups[error.level] = []
      }
      groups[error.level].push(error)
      return groups
    },
    {} as Record<ErrorLevel, AppError[]>
  )
}

// Filter errors by time range
export function filterErrorsByTimeRange(
  errors: AppError[],
  startTime: Date,
  endTime: Date = new Date()
): AppError[] {
  return errors.filter(
    error => error.timestamp >= startTime && error.timestamp <= endTime
  )
}

// Get error statistics
export interface ErrorStats {
  total: number
  byCategory: Record<ErrorCategory, number>
  byLevel: Record<ErrorLevel, number>
  bySeverity: Record<ErrorSeverity, number>
  criticalCount: number
  retryableCount: number
  recentCount: number // last hour
}

export function getErrorStats(errors: AppError[]): ErrorStats {
  const now = new Date()
  const lastHour = new Date(now.getTime() - 60 * 60 * 1000)

  const stats: ErrorStats = {
    total: errors.length,
    byCategory: {} as Record<ErrorCategory, number>,
    byLevel: {} as Record<ErrorLevel, number>,
    bySeverity: {} as Record<ErrorSeverity, number>,
    criticalCount: 0,
    retryableCount: 0,
    recentCount: 0,
  }

  errors.forEach(error => {
    // Count by category
    stats.byCategory[error.category] =
      (stats.byCategory[error.category] || 0) + 1

    // Count by level
    stats.byLevel[error.level] = (stats.byLevel[error.level] || 0) + 1

    // Count by severity
    stats.bySeverity[error.severity] =
      (stats.bySeverity[error.severity] || 0) + 1

    // Count critical errors
    if (isCriticalError(error)) {
      stats.criticalCount++
    }

    // Count retryable errors
    if (error.isRetryable) {
      stats.retryableCount++
    }

    // Count recent errors
    if (error.timestamp >= lastHour) {
      stats.recentCount++
    }
  })

  return stats
}
