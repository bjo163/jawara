'use client'

import { useState, useEffect, useCallback } from 'react'

interface BackendStatus {
  isOnline: boolean
  isLoading: boolean
  lastChecked: Date | null
  error: string | null
}

interface BackendStatusResponse {
  status: string
}

export function useBackendStatus(
  checkInterval: number = 30000, // 30 seconds default
  timeout: number = 5000 // 5 seconds timeout
) {
  const [status, setStatus] = useState<BackendStatus>({
    isOnline: false,
    isLoading: true,
    lastChecked: null,
    error: null,
  })

  const checkBackendStatus = useCallback(async (): Promise<boolean> => {
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), timeout)

      const response = await fetch('/api/v1/status', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
        cache: 'no-store',
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: BackendStatusResponse = await response.json()
      
      // Check if status is "OK"
      const isOnline = data.status === 'OK'
      
      setStatus({
        isOnline,
        isLoading: false,
        lastChecked: new Date(),
        error: isOnline ? null : 'Backend status is not OK',
      })

      return isOnline
    } catch (error) {
      let errorMessage = 'Unknown error occurred'
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          errorMessage = 'Request timeout'
        } else {
          errorMessage = error.message
        }
      }

      setStatus({
        isOnline: false,
        isLoading: false,
        lastChecked: new Date(),
        error: errorMessage,
      })

      return false
    }
  }, [timeout])

  useEffect(() => {
    // Initial check
    checkBackendStatus()

    // Set up interval for periodic checks
    const interval = setInterval(checkBackendStatus, checkInterval)

    return () => {
      clearInterval(interval)
    }
  }, [checkBackendStatus, checkInterval])

  // Manual refresh function
  const refresh = useCallback(() => {
    setStatus(prev => ({ ...prev, isLoading: true }))
    return checkBackendStatus()
  }, [checkBackendStatus])

  return {
    ...status,
    refresh,
  }
}
