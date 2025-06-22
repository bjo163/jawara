import { useState, useEffect } from 'react'
import type { User } from '@/types/auth'
import type { Company } from '@/types/company'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [company, setCompany] = useState<Company | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userStr = localStorage.getItem('pdd_user')
      const companyStr = localStorage.getItem('pdd_company')
      const tokenStr = localStorage.getItem('pdd_token')
      setUser(userStr ? JSON.parse(userStr) : null)
      setCompany(companyStr ? JSON.parse(companyStr) : null)
      setToken(tokenStr || null)
      setLoading(false)
    }
  }, [])

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('pdd_user')
      localStorage.removeItem('pdd_company')
      localStorage.removeItem('pdd_token')
      setUser(null)
      setCompany(null)
      setToken(null)
    }
  }

  return { user, company, token, logout, loading }
}
