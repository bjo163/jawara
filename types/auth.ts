// Authentication & User Types
// Types for user authentication, authorization, and user management

export interface User {
  id: string
  username: string
  email: string
  name: string
  role: 'pelanggan' | 'admin'
  avatar?: string
  phone?: string
  address?: string
  package?: string
  status: 'active' | 'inactive' | 'suspended'
  createdAt: Date
  lastLogin?: Date
}

export interface LoginCredentials {
  username: string
  password: string
}

export interface AuthResponse {
  success: boolean
  user?: User
  token?: string
  message: string
}

export type UserRole = 'pelanggan' | 'admin'
export type UserStatus = 'active' | 'inactive' | 'suspended'
