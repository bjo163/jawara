import { useState, useEffect, useCallback } from 'react'
import type { QRCodeResponse } from '@/types/whatsapp'

interface UseQRCodeProps {
  readonly sessionId?: string
  readonly autoRefresh?: boolean
  readonly refreshInterval?: number
}

interface UseQRCodeReturn {
  readonly qrCode: string | null
  readonly loading: boolean
  readonly error: string | null
  readonly refresh: () => Promise<void>
}

export function useQRCode({
  sessionId,
  autoRefresh = false,
  refreshInterval = 5000,
}: UseQRCodeProps): UseQRCodeReturn {
  const [qrCode, setQrCode] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchQRCode = useCallback(async () => {
    if (!sessionId) {
      setError('Session ID is required')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await fetch(`/api/whatsapp/session/qr/${sessionId}`)
      const data: QRCodeResponse = await response.json()

      if (!data.success) {
        throw new Error(data.message ?? 'Failed to fetch QR code')
      }

      setQrCode(data.qr ?? null)
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error'
      setError(errorMessage)
      setQrCode(null)
    } finally {
      setLoading(false)
    }
  }, [sessionId])

  const refresh = useCallback(async () => {
    await fetchQRCode()
  }, [fetchQRCode])

  // Initial fetch
  useEffect(() => {
    if (sessionId) {
      void fetchQRCode()
    }
  }, [sessionId, fetchQRCode])

  // Auto refresh
  useEffect(() => {
    if (!autoRefresh || !sessionId) return

    const interval = setInterval(() => {
      void fetchQRCode()
    }, refreshInterval)

    return () => clearInterval(interval)
  }, [autoRefresh, refreshInterval, sessionId, fetchQRCode])

  return {
    qrCode,
    loading,
    error,
    refresh,
  }
}
