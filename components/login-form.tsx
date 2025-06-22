'use client'

import { useState } from 'react'
import {
  Eye,
  EyeOff,
  Loader2,
  User as UserIcon,
  Lock,
  AlertCircle,
  CheckCircle,
  WifiOff,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  authenticateUser,
  saveAuthData,
  type LoginCredentials,
} from '@/data/auth'
import { useBackendStatus } from '@/hooks/use-backend-status'
import type { User } from '@/types'

interface LoginFormProps {
  readonly userType: 'pelanggan' | 'admin'
  readonly onSuccess?: (user: User) => void
}

export function LoginForm({ userType, onSuccess }: LoginFormProps) {
  const [formData, setFormData] = useState<LoginCredentials>({
    username: '',
    password: '',
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const { isOnline: isBackendOnline, isLoading: isCheckingStatus } = useBackendStatus()

  const handleInputChange = (field: keyof LoginCredentials, value: string) => {
    setFormData((prev: LoginCredentials) => ({
      ...prev,
      [field]: value,
    }))
    // Clear error when user starts typing
    if (error) setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')
    setSuccess('')

    try {
      // Check backend status first
      if (!isBackendOnline) {
        setError('Server sedang tidak tersedia. Silakan coba lagi nanti.')
        setIsLoading(false)
        return
      }

      // Validate input
      if (!formData.username || !formData.password) {
        setError('Username dan password harus diisi')
        setIsLoading(false)
        return
      }

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Authenticate
      const response = authenticateUser(formData)

      if (!response.success) {
        setError(response.message)
        setIsLoading(false)
        return
      }

      // Check user role matches login type
      if (response.user?.role !== userType) {
        setError(
          `Akun ini bukan untuk ${userType}. Silakan gunakan halaman login yang sesuai.`
        )
        setIsLoading(false)
        return
      }

      // Save auth data
      if (response.user && response.token) {
        saveAuthData(response.user, response.token)
        setSuccess('Login berhasil! Mengalihkan...')

        // Call success callback
        if (onSuccess) {
          onSuccess(response.user)
        }

        // Redirect after short delay
        setTimeout(() => {
          if (userType === 'admin') {
            window.location.href = '/admin/dashboard'
          } else {
            window.location.href = '/pelanggan/dashboard'
          }
        }, 1500)
      }
    } catch {
      setError('Terjadi kesalahan. Silakan coba lagi.')
    } finally {
      setIsLoading(false)
    }
  }

  const demoCredentials = {
    admin: [
      { username: 'admin', password: 'password123' },
      { username: 'superadmin', password: 'password123' },
    ],
    pelanggan: [
      { username: 'john.doe', password: 'password123' },
      { username: 'jane.smith', password: 'password123' },
    ],
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-slate-900 border-gray-700">
      <CardHeader className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mb-4 mx-auto">
          {userType === 'admin' ? (
            <Lock className="h-8 w-8 text-white" />
          ) : (
            <UserIcon className="h-8 w-8 text-white" />
          )}
        </div>
        <CardTitle className="text-2xl font-bold text-white">
          Login {userType === 'admin' ? 'Admin' : 'Pelanggan'}
        </CardTitle>
        <p className="text-gray-400">
          {userType === 'admin'
            ? 'Masuk ke panel administrator'
            : 'Masuk ke akun pelanggan Anda'}
        </p>
      </CardHeader>

      <CardContent className="space-y-6">
        {/* Backend Status Warning */}
        {!isBackendOnline && !isCheckingStatus && (
          <div className="flex items-center space-x-2 text-amber-400 bg-amber-500/10 p-3 rounded-lg border border-amber-500/20">
            <WifiOff className="h-4 w-4 flex-shrink-0" />
            <span className="text-sm">
              Server sedang tidak tersedia. Login mungkin tidak berfungsi.
            </span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div className="space-y-2">
            <Label htmlFor="username" className="text-white">
              Username
            </Label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="username"
                type="text"
                placeholder="Masukkan username"
                value={formData.username}
                onChange={e => handleInputChange('username', e.target.value)}
                className="pl-10 bg-slate-800 border-gray-600 text-white placeholder-gray-400"
                disabled={isLoading}
              />
            </div>
          </div>

          {/* Password */}
          <div className="space-y-2">
            <Label htmlFor="password" className="text-white">
              Password
            </Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Masukkan password"
                value={formData.password}
                onChange={e => handleInputChange('password', e.target.value)}
                className="pl-10 pr-10 bg-slate-800 border-gray-600 text-white placeholder-gray-400"
                disabled={isLoading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                disabled={isLoading}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="flex items-center space-x-2 text-red-400 bg-red-500/10 p-3 rounded-lg border border-red-500/20">
              <AlertCircle className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm">{error}</span>
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="flex items-center space-x-2 text-green-400 bg-green-500/10 p-3 rounded-lg border border-green-500/20">
              <CheckCircle className="h-4 w-4 flex-shrink-0" />
              <span className="text-sm">{success}</span>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading || !isBackendOnline}
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Memproses...
              </>
            ) : (
              <>
                {!isBackendOnline ? 'Server Tidak Tersedia' : 'Masuk'}
              </>
            )}
          </Button>
        </form>

        {/* Demo Credentials */}
        <div className="mt-6 p-4 bg-slate-800/50 rounded-lg border border-gray-700">
          <h4 className="text-sm font-semibold text-white mb-2">
            Demo Credentials:
          </h4>
          <div className="space-y-2 text-xs text-gray-300">
            {demoCredentials[userType].map((cred) => (
              <div key={`${cred.username}-${cred.password}`} className="flex justify-between">
                <span>
                  Username:{' '}
                  <code className="text-orange-400">{cred.username}</code>
                </span>
                <span>
                  Password:{' '}
                  <code className="text-orange-400">{cred.password}</code>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Alternative Login */}
        <div className="text-center text-sm text-gray-400">
          {userType === 'admin' ? (
            <>
              Bukan admin?{' '}
              <a
                href="/login/pelanggan"
                className="text-orange-400 hover:text-orange-300"
              >
                Login sebagai Pelanggan
              </a>
            </>
          ) : (
            <>
              Admin?{' '}
              <a
                href="/login/admin"
                className="text-orange-400 hover:text-orange-300"
              >
                Login sebagai Admin
              </a>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
