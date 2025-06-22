// Widget & State Management Types
// Types for widgets, application state, and global state management

// Widget System
export type WidgetType = 'chat' | 'subscription' | null

export interface WidgetState {
  activeWidget: WidgetType
  isVisible: boolean
  position: 'fixed' | 'inline'
  zIndex?: number
}

export interface ChatWidgetState extends WidgetState {
  isOnline: boolean
  lastMessage?: Date
  unreadCount: number
}

export interface SubscriptionWidgetState extends WidgetState {
  selectedPackage?: string
  step: 'package' | 'form' | 'confirmation'
}

// Toast Notifications (from existing toast types)
export interface ToastState {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: React.ReactElement
  variant?: 'default' | 'destructive'
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export type ToastAction =
  | { type: 'ADD_TOAST'; toast: ToastState }
  | { type: 'UPDATE_TOAST'; toast: Partial<ToastState> }
  | { type: 'DISMISS_TOAST'; toastId?: string }
  | { type: 'REMOVE_TOAST'; toastId?: string }

// Global App State
export interface AppState {
  user: import('./auth').User | null
  isAuthenticated: boolean
  theme: 'light' | 'dark' | 'system'
  language: 'id' | 'en'
  widgets: {
    chat: ChatWidgetState
    subscription: SubscriptionWidgetState
  }
  notifications: ToastState[]
  loading: {
    global: boolean
    components: Record<string, boolean>
  }
}

// Preferences
export interface UserPreferences {
  theme: 'light' | 'dark' | 'system'
  language: 'id' | 'en'
  notifications: {
    email: boolean
    push: boolean
    sms: boolean
  }
  privacy: {
    analytics: boolean
    marketing: boolean
  }
}

// Session
export interface SessionData {
  user: import('./auth').User
  token: string
  expiresAt: Date
  refreshToken?: string
}

export type ThemeMode = 'light' | 'dark' | 'system'
export type Language = 'id' | 'en'
