import { useState, useEffect, useCallback } from 'react'
import { getWhatsAppConfig } from '@/lib/whatsapp-config'
import type { StatusSessionResponse } from '@/types/whatsapp'

interface UseSessionStatusOptions {
  autoRefresh?: boolean
  refreshInterval?: number
  sessionId?: string
}

interface UseSessionStatusReturn {
  status: StatusSessionResponse | null
  loading: boolean
  error: string | null
  refresh: () => Promise<void>
}

export function useSessionStatus(
  options: UseSessionStatusOptions = {}
): UseSessionStatusReturn {
  const { 
    autoRefresh = false, 
    refreshInterval = 5000, 
    sessionId 
  } = options

  const [status, setStatus] = useState<StatusSessionResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getSessionId = useCallback(() => {
    if (sessionId) return sessionId
    try {
      const config = getWhatsAppConfig()
      return config.sessionId
    } catch {
      return null
    }
  }, [sessionId])

  const fetchStatus = useCallback(async () => {
    const currentSessionId = getSessionId()
    if (!currentSessionId) {
      setError('Session ID not configured')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(
        `/api/whatsapp/session/status/${currentSessionId}`,
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        }
      )

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.details ?? data.error ?? 'Failed to fetch status')
      }

      setStatus(data)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error'
      setError(errorMessage)
      console.error('Session status fetch failed:', err)
    } finally {
      setLoading(false)
    }
  }, [getSessionId])

  const refresh = useCallback(async () => {
    await fetchStatus()
  }, [fetchStatus])

  // Initial fetch
  useEffect(() => {
    void fetchStatus()
  }, [fetchStatus])

  // Auto refresh setup
  useEffect(() => {
    if (!autoRefresh) return

    const interval = setInterval(() => {
      void fetchStatus()
    }, refreshInterval)

    return () => clearInterval(interval)
  }, [autoRefresh, refreshInterval, fetchStatus])

  return {
    status,
    loading,
    error,
    refresh,
  }
}
