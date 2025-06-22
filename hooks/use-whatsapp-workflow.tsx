import { useState, useCallback } from 'react'
import { whatsappWorkflow, type WorkflowResult } from '@/lib/whatsapp-workflow'

interface UseWhatsAppWorkflowReturn {
  result: WorkflowResult | null
  loading: boolean
  error: string | null
  execute: () => Promise<void>
  reset: () => void
}

export function useWhatsAppWorkflow(): UseWhatsAppWorkflowReturn {
  const [result, setResult] = useState<WorkflowResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const execute = useCallback(async () => {
    setLoading(true)
    setError(null)
    setResult(null)

    try {
      const workflowResult = await whatsappWorkflow.executeFullWorkflow()
      setResult(workflowResult)

      if (!workflowResult.success) {
        setError(workflowResult.error ?? 'Workflow failed')
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error'
      setError(errorMessage)
      console.error('Workflow execution failed:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  const reset = useCallback(() => {
    setResult(null)
    setLoading(false)
    setError(null)
  }, [])

  return {
    result,
    loading,
    error,
    execute,
    reset,
  }
}
