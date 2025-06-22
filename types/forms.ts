// Form Types
// Types for forms, validation, and user input

// Subscription Form
export interface SubscriptionForm {
  name: string
  phone: string
  email: string
  address: string
  package: string
  notes: string
}

// Contact Form
export interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  message: string
  type: 'inquiry' | 'support' | 'complaint' | 'suggestion'
}

// Login Form
export interface LoginForm {
  username: string
  password: string
  rememberMe?: boolean
}

// Registration Form
export interface RegistrationForm {
  username: string
  email: string
  password: string
  confirmPassword: string
  name: string
  phone: string
  address?: string
  agreeToTerms: boolean
}

// Form Validation
export interface ValidationError {
  field: string
  message: string
}

export interface FormState<T> {
  data: T
  errors: ValidationError[]
  isSubmitting: boolean
  isValid: boolean
}

// Form Field Types
export type InputType =
  | 'text'
  | 'email'
  | 'password'
  | 'tel'
  | 'url'
  | 'number'
  | 'textarea'
  | 'select'
  | 'checkbox'
  | 'radio'

export type ContactFormType = 'inquiry' | 'support' | 'complaint' | 'suggestion'
