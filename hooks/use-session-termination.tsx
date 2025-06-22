import { useState, useCallback } from 'react'
import type { 
  TerminationResult, 
  TerminateSessionResponse 
} from '@/types/whatsapp'

interface UseSessionTerminationProps {
  readonly onSuccess?: (result: TerminationResult) => void
  readonly onError?: (result: TerminationResult) => void
}

interface UseSessionTerminationReturn {
  readonly isTerminating: boolean
  readonly lastResult: TerminationResult | null
  readonly terminate: (sessionId: string) => Promise<TerminationResult>
  readonly reset: () => void
}

export function useSessionTermination({
  onSuccess,
  onError,
}: UseSessionTerminationProps = {}): UseSessionTerminationReturn {
  const [isTerminating, setIsTerminating] = useState(false)
  const [lastResult, setLastResult] = useState<TerminationResult | null>(null)

  const terminate = useCallback(async (sessionId: string): Promise<TerminationResult> => {
    setIsTerminating(true)
    
    try {
      const response = await fetch(`/api/whatsapp/session/terminate/${sessionId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data: TerminateSessionResponse = await response.json()
      
      const result: TerminationResult = {
        success: data.success,
        sessionId,
        message: data.message ?? (data.success ? 'Session terminated successfully' : 'Failed to terminate session'),
        timestamp: new Date(),
      }

      setLastResult(result)

      // Call appropriate callback
      if (result.success && onSuccess) {
        onSuccess(result)
      } else if (!result.success && onError) {
        onError(result)
      }

      return result

    } catch (error) {
      const result: TerminationResult = {
        success: false,
        sessionId,
        message: error instanceof Error ? error.message : 'Unknown error occurred',
        timestamp: new Date(),
      }
      
      setLastResult(result)
      
      if (onError) {
        onError(result)
      }

      return result
    } finally {
      setIsTerminating(false)
    }
  }, [onSuccess, onError])

  const reset = useCallback(() => {
    setLastResult(null)
    setIsTerminating(false)
  }, [])

  return {
    isTerminating,
    lastResult,
    terminate,
    reset,
  }
}
