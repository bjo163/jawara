import { useState, useEffect, useCallback } from 'react'
import { useWhatsAppWorkflow } from '@/hooks/use-whatsapp-workflow'
import { useSessionStatus } from '@/hooks/use-session-status'
import type { StatusSessionResponse } from '@/types/whatsapp'
import type { WorkflowResult } from '@/lib/whatsapp-workflow'

interface UseAutoWorkflowProps {
  readonly autoStart?: boolean
  readonly refreshInterval?: number
  readonly onStatusChange?: (status: StatusSessionResponse | null) => void
  readonly onWorkflowComplete?: (result: WorkflowResult) => void
}

interface UseAutoWorkflowReturn {
  readonly sessionStatus: StatusSessionResponse | null
  readonly workflowResult: WorkflowResult | null
  readonly isLoading: boolean
  readonly error: string | null
  readonly startWorkflow: () => Promise<void>
  readonly refreshStatus: () => Promise<void>
  readonly showQRCode: boolean
}

export function useAutoWorkflow({
  autoStart = true,
  refreshInterval = 5000,
  onStatusChange,
  onWorkflowComplete,
}: UseAutoWorkflowProps = {}): UseAutoWorkflowReturn {
  const [hasStarted, setHasStarted] = useState(false)
  
  const { 
    status: sessionStatus, 
    loading: statusLoading, 
    error: statusError, 
    refresh: refreshStatus 
  } = useSessionStatus({
    autoRefresh: true,
    refreshInterval,
  })

  const { 
    result: workflowResult, 
    loading: workflowLoading, 
    error: workflowError, 
    execute: executeWorkflow 
  } = useWhatsAppWorkflow()

  const isLoading = statusLoading || workflowLoading
  const error = statusError ?? workflowError
  const showQRCode = sessionStatus?.status === 'scan_qr'

  // Call onStatusChange when status updates
  useEffect(() => {
    if (onStatusChange) {
      onStatusChange(sessionStatus)
    }
  }, [sessionStatus, onStatusChange])

  // Call onWorkflowComplete when workflow completes
  useEffect(() => {
    if (workflowResult && onWorkflowComplete) {
      onWorkflowComplete(workflowResult)
    }
  }, [workflowResult, onWorkflowComplete])

  // Auto-start workflow on mount if enabled
  useEffect(() => {
    if (autoStart && !hasStarted) {
      setHasStarted(true)
      void executeWorkflow()
    }
  }, [autoStart, hasStarted, executeWorkflow])

  const startWorkflow = useCallback(async () => {
    await executeWorkflow()
  }, [executeWorkflow])

  return {
    sessionStatus,
    workflowResult,
    isLoading,
    error,
    startWorkflow,
    refreshStatus,
    showQRCode,
  }
}
