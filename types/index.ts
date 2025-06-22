// Main Types Export
// Central export point for all application types

// Auth & User
export type {
  User,
  LoginCredentials,
  AuthResponse,
  UserRole,
  UserStatus,
} from './auth'

// Packages & Products
export type {
  Package,
  PackageCategory,
  PackageColor,
  PackageFilter,
} from './packages'

// Contact & Location
export type {
  ContactInfo,
  OfficeLocation,
  CoverageArea,
  ContactType,
  ContactColor,
  CoverageStatus,
  ContactPageState,
} from './contact'

// Content & FAQ
export type {
  FAQItem,
  FAQCategory,
  HelpArticle,
  SupportTicket,
  TicketStatus,
  TicketPriority,
} from './content'

// UI & Components
export type {
  BreadcrumbItem,
  PageConfig,
  TestimonialCardProps,
  ServiceCardProps,
  ProductCardProps,
  SectionTitleProps,
  PageHeaderProps,
  ContactPageHeaderProps,
  PageLayoutProps,
  StandardPageProps,
  TimelineStep,
  TechTimelineProps,
} from './ui'

// Forms
export type {
  SubscriptionForm,
  ContactForm,
  LoginForm,
  RegistrationForm,
  ValidationError,
  FormState,
  InputType,
  ContactFormType,
} from './forms'

// API & Responses
export type {
  ApiResponse,
  PaginationMeta,
  PaginatedResponse,
  SpeedTestResult,
  SpeedTestRequest,
  DiagnosticResult,
  DiagnosticStatus,
  NetworkStatus,
  ApiError,
  ValidationApiError,
  ApiMethod,
  ApiRequestConfig,
} from './api'

// State & Widgets
export type {
  WidgetType,
  WidgetState,
  ChatWidgetState,
  SubscriptionWidgetState,
  ToastState,
  ToastAction,
  AppState,
  UserPreferences,
  SessionData,
  ThemeMode,
  Language,
} from './state'

// Utility Types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredBy<T, K extends keyof T> = T & Required<Pick<T, K>>
export type NonNullable<T> = T extends null | undefined ? never : T
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

// Common Types
export type ID = string | number
export type Timestamp = string | Date
export type Status = 'idle' | 'loading' | 'success' | 'error'
export type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type Variant =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'error'
export type Position = 'top' | 'bottom' | 'left' | 'right' | 'center'
