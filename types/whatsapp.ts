export type SessionStatusType = 'starting' | 'scan_qr' | 'working' | 'failed' | 'stopped'
export type BackendStatusType = 'AUTHENTICATED' | 'DISCONNECTED' | 'QRCODE' | 'LOADING' | 'DESTROYED' | 'UNKNOWN'

export interface PingResponse {
  success: boolean
  message: string
}

export interface SessionStatus {
  success: boolean
  status: SessionStatusType
  message?: string
  sessionId?: string
}

export interface StartSessionResponse {
  success: boolean
  status?: SessionStatusType
  message?: string
  sessionId?: string
  qr?: string
}

export interface QRCodeResponse {
  success: boolean
  qr?: string
  message?: string
}

// Backend API Response Types
export interface BackendStatusResponse {
  success: boolean
  sessionId: string
  status: BackendStatusType
  message: string
  pingCheck: string
  autoCreated: boolean
  qrCodeAvailable: boolean
  data: {
    success: boolean
    state: string | null
    message: string
  }
  qrCodeBase64?: string
  qrCodeDataUrl?: string
  qrCodeError?: string
  qrCodeNote?: string
}

export interface WhatsAppApiError {
  success: false
  error: string
  details?: string
  code?: number
}

export interface WhatsAppConfig {
  serverUrl: string
  apiKey: string
  sessionId: string
}

export type WhatsAppResponse<T = any> = 
  | (T & { success: true })
  | WhatsAppApiError

export interface StatusSessionResponse {
  success: boolean
  status?: SessionStatusType
  message?: string
  sessionId?: string
  qr?: string
}

export interface TerminateSessionResponse {
  success: boolean
  message?: string
  sessionId?: string
}

// New types for termination actions
export interface TerminationConfirmData {
  sessionId: string
  reason?: string
  forceTerminate?: boolean
}

export interface TerminationResult {
  success: boolean
  sessionId: string
  message: string
  timestamp: Date
}
