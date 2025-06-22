// Authentication Data and Types
// Data autentikasi tersentralisasi untuk sistem login

import type { User, LoginCredentials, AuthResponse } from '@/types'

// Demo data for testing (in real app, this would come from API/database)
export const demoUsers: User[] = [
  // Admin users
  {
    id: 'admin-001',
    username: 'admin',
    email: 'admin@jawara-net.com',
    name: 'Admin Jawara-Net',
    role: 'admin',
    avatar: '/placeholder-user.jpg',
    status: 'active',
    createdAt: new Date('2024-01-01'),
    lastLogin: new Date(),
  },
  {
    id: 'admin-002',
    username: 'superadmin',
    email: 'superadmin@jawara-net.com',
    name: 'Super Admin',
    role: 'admin',
    status: 'active',
    createdAt: new Date('2024-01-01'),
    lastLogin: new Date(),
  },
  // Customer users
  {
    id: 'customer-001',
    username: 'john.doe',
    email: 'john.doe@email.com',
    name: 'John Doe',
    role: 'pelanggan',
    phone: '081234567890',
    address: 'Jl. Raya Jakarta No. 123, Jakarta',
    package: 'Jagoan 50 Mbps',
    status: 'active',
    createdAt: new Date('2024-02-15'),
    lastLogin: new Date(),
  },
  {
    id: 'customer-002',
    username: 'jane.smith',
    email: 'jane.smith@email.com',
    name: 'Jane Smith',
    role: 'pelanggan',
    phone: '081987654321',
    address: 'Jl. Sudirman No. 456, Jakarta',
    package: 'Sultan 100 Mbps',
    status: 'active',
    createdAt: new Date('2024-03-10'),
    lastLogin: new Date(),
  },
]

// Demo credentials (password: 'password123' for all)
export const demoCredentials = {
  // Admin
  admin: 'password123',
  superadmin: 'password123',
  // Customers
  'john.doe': 'password123',
  'jane.smith': 'password123',
}

// Helper functions
export function authenticateUser(credentials: LoginCredentials): AuthResponse {
  const { username, password } = credentials

  // Check credentials
  if (demoCredentials[username as keyof typeof demoCredentials] !== password) {
    return {
      success: false,
      message: 'Username atau password salah',
    }
  }

  // Find user
  const user = demoUsers.find(u => u.username === username)
  if (!user) {
    return {
      success: false,
      message: 'User tidak ditemukan',
    }
  }

  if (user.status !== 'active') {
    return {
      success: false,
      message: 'Akun tidak aktif. Hubungi customer service.',
    }
  }

  // Generate token (in real app, use JWT)
  const token = `token_${user.id}_${Date.now()}`

  return {
    success: true,
    user,
    token,
    message: 'Login berhasil',
  }
}

export function getUserByRole(role: 'pelanggan' | 'admin'): User[] {
  return demoUsers.filter(user => user.role === role)
}

export function getUserById(id: string): User | undefined {
  return demoUsers.find(user => user.id === id)
}

// Local storage helpers
export function saveAuthData(user: User, token: string) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jawara_user', JSON.stringify(user))
    localStorage.setItem('jawara_token', token)
  }
}

export function getAuthData(): { user: User | null; token: string | null } {
  if (typeof window !== 'undefined') {
    const userStr = localStorage.getItem('jawara_user')
    const token = localStorage.getItem('jawara_token')

    return {
      user: userStr ? JSON.parse(userStr) : null,
      token,
    }
  }

  return { user: null, token: null }
}

export function clearAuthData() {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jawara_user')
    localStorage.removeItem('jawara_token')
  }
}

export function isAuthenticated(): boolean {
  const { user, token } = getAuthData()
  return !!(user && token)
}

export function isAdmin(): boolean {
  const { user } = getAuthData()
  return user?.role === 'admin'
}

export function isPelanggan(): boolean {
  const { user } = getAuthData()
  return user?.role === 'pelanggan'
}
