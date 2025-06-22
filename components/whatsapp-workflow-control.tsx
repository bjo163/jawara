import {
  Play,
  RotateCcw,
  CheckCircle,
  AlertTriangle,
  Loader2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { useWhatsAppWorkflow } from '@/hooks/use-whatsapp-workflow'
import type { WorkflowResult } from '@/lib/whatsapp-workflow'

interface WhatsAppWorkflowControlProps {
  readonly onWorkflowComplete?: (result: WorkflowResult) => void
}

export function WhatsAppWorkflowControl({
  onWorkflowComplete,
}: WhatsAppWorkflowControlProps) {
  const { result, loading, error, execute, reset } = useWhatsAppWorkflow()

  const handleExecute = async () => {
    await execute()
    if (result && onWorkflowComplete) {
      onWorkflowComplete(result)
    }
  }

  const getStepIcon = (
    step: string,
    isActive: boolean,
    isComplete: boolean
  ) => {
    if (isActive) return <Loader2 className="h-4 w-4 animate-spin" />
    if (isComplete) return <CheckCircle className="h-4 w-4 text-green-500" />
    return <div className="h-4 w-4 rounded-full border-2 border-gray-400" />
  }

  const getStepStatus = (step: string) => {
    if (!result) return 'pending'
    if (result.step === step && loading) return 'active'

    const stepOrder = ['ping', 'status', 'start', 'complete']
    const currentIndex = stepOrder.indexOf(result.step)
    const stepIndex = stepOrder.indexOf(step)

    if (stepIndex <= currentIndex) return 'complete'
    return 'pending'
  }

  const getStepTextColor = (isComplete: boolean, isActive: boolean) => {
    if (isComplete) return 'text-green-400'
    if (isActive) return 'text-blue-400'
    return 'text-gray-400'
  }

  const getStepBadgeVariant = (isComplete: boolean, isActive: boolean) => {
    if (isComplete) return 'default' as const
    if (isActive) return 'secondary' as const
    return 'outline' as const
  }

  const getStepBadgeText = (isComplete: boolean, isActive: boolean) => {
    if (isComplete) return 'Done'
    if (isActive) return 'Running'
    return 'Pending'
  }

  const steps = [
    {
      key: 'ping',
      label: 'Server Ping',
      description: 'Check server connectivity',
    },
    {
      key: 'status',
      label: 'Session Status',
      description: 'Check current session state',
    },
    {
      key: 'start',
      label: 'Auto Start',
      description: 'Start session if needed',
    },
    { key: 'complete', label: 'Complete', description: 'Workflow finished' },
  ]

  return (
    <Card className="bg-slate-900 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          <span>WhatsApp Workflow Control</span>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={reset}
              disabled={loading}
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
            <Button
              onClick={() => void handleExecute()}
              disabled={loading}
              size="sm"
            >
              {loading ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Play className="h-4 w-4 mr-2" />
              )}
              {loading ? 'Running...' : 'Start Workflow'}
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Error Display */}
        {error && (
          <div className="flex items-center gap-2 p-3 bg-red-900/30 border border-red-500 rounded">
            <AlertTriangle className="h-4 w-4 text-red-400" />
            <span className="text-red-400 text-sm">{error}</span>
          </div>
        )}
        {/* Workflow Steps */}{' '}
        <div className="space-y-3">
          {steps.map(step => {
            const status = getStepStatus(step.key)
            const isActive = status === 'active'
            const isComplete = status === 'complete'

            return (
              <div key={step.key} className="flex items-center gap-3">
                {getStepIcon(step.key, isActive, isComplete)}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-medium ${getStepTextColor(isComplete, isActive)}`}
                    >
                      {step.label}
                    </span>
                    <Badge
                      variant={getStepBadgeVariant(isComplete, isActive)}
                      className="text-xs"
                    >
                      {getStepBadgeText(isComplete, isActive)}
                    </Badge>
                  </div>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
        {/* Result Display */}
        {result && (
          <div className="mt-4 p-3 bg-slate-800 border border-gray-600 rounded">
            <h4 className="text-sm font-medium text-white mb-2">
              Workflow Result
            </h4>
            <div className="text-xs text-gray-300 space-y-1">
              <div>Status: {result.success ? '✅ Success' : '❌ Failed'}</div>
              <div>Last Step: {result.step}</div>
              {result.data && (
                <div>Data: {JSON.stringify(result.data, null, 2)}</div>
              )}
              {result.details && <div>Details: {result.details}</div>}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
