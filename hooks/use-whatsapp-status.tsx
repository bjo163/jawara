import { useState, useEffect, useCallback } from 'react'
import type { BackendStatusResponse } from '@/types/whatsapp'

interface UseWhatsAppStatusProps {
  sessionId?: string
  autoStart?: boolean
}

interface UseWhatsAppStatusReturn {
  data: BackendStatusResponse | null
  isLoading: boolean
  error: string | null
  refetch: () => Promise<void>
}

export function useWhatsAppStatus({
  sessionId = process.env.NEXT_PUBLIC_WHATSAPP_SESSION_ID ?? '6285893429926',
  autoStart = true,
}: UseWhatsAppStatusProps = {}): UseWhatsAppStatusReturn {
  const [data, setData] = useState<BackendStatusResponse | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchStatus = useCallback(async () => {
    if (!sessionId) {
      setError('Session ID is required')
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/whatsapp/session/status/${sessionId}`)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()
      if (result.success) {
        setData(result)
      } else {
        setError(result.error ?? 'Failed to fetch status')
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error'
      setError(errorMessage)
      console.error('WhatsApp status check failed:', err)
    } finally {
      setIsLoading(false)
    }
  }, [sessionId])

  // Smart refresh interval based on status
  const getRefreshInterval = useCallback(() => {
    if (!data) return 5000 // Default 5s

    switch (data.status) {
      case 'AUTHENTICATED':
        return 30000 // 30s for connected status
      case 'LOADING':
        return 3000 // 3s for loading status
      case 'QRCODE':
        return 10000 // 10s for QR ready
      case 'DISCONNECTED':
        return data.qrCodeAvailable ? 10000 : 15000
      case 'DESTROYED':
        return 60000 // 1min for destroyed
      case 'UNKNOWN':
        return 5000 // 5s for unknown
      default:
        return 5000
    }
  }, [data])

  // Auto-start effect
  useEffect(() => {
    if (autoStart) {
      void fetchStatus()
    }
  }, [autoStart, fetchStatus])

  // Smart auto-refresh effect
  useEffect(() => {
    const interval = getRefreshInterval()

    const timer = setInterval(() => {
      void fetchStatus()
    }, interval)

    return () => clearInterval(timer)
  }, [getRefreshInterval, fetchStatus])

  return {
    data,
    isLoading,
    error,
    refetch: fetchStatus,
  }
}
