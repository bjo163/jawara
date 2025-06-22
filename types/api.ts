// API & Response Types
// Types for API requests, responses, and data transfer

// Generic API Response
export interface ApiResponse<T = unknown> {
  success: boolean
  data?: T
  message?: string
  error?: string
  timestamp: string
}

// Pagination
export interface PaginationMeta {
  page: number
  limit: number
  total: number
  totalPages: number
  hasNext: boolean
  hasPrev: boolean
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta: PaginationMeta
}

// Speed Test API Types
export interface SpeedTestResult {
  downloadSpeed: number
  uploadSpeed: number
  ping: number
  jitter: number
  timestamp: Date
  location?: string
  serverId?: string
}

export interface SpeedTestRequest {
  size?: number
  duration?: number
  server?: string
}

// Diagnostic Types
export interface DiagnosticResult {
  test: string
  status: 'pass' | 'fail' | 'warning' | 'checking'
  message: string
  details?: string
  url?: string
}

export type DiagnosticStatus = 'pass' | 'fail' | 'warning' | 'checking'

// Network Status
export interface NetworkStatus {
  isOnline: boolean
  latency?: number
  bandwidth?: {
    download: number
    upload: number
  }
  lastChecked: Date
}

// Error Types
export interface ApiError {
  code: string
  message: string
  details?: unknown
  timestamp: string
}

export interface ValidationApiError extends ApiError {
  validationErrors: Array<{
    field: string
    message: string
  }>
}

// Request/Response Utils
export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'

export interface ApiRequestConfig {
  method: ApiMethod
  headers?: Record<string, string>
  body?: unknown
  timeout?: number
}
