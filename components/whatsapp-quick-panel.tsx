import {
  MessageCircle,
  CheckCircle,
  AlertTriangle,
  Loader2,
  QrCode,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { QRCodeDisplay } from '@/components/qr-code-display-simple'
import { useWhatsAppStatus } from '@/hooks/use-whatsapp-status'
import type { BackendStatusResponse } from '@/types/whatsapp'

interface WhatsAppQuickPanelProps {
  readonly onStatusChange?: (status: BackendStatusResponse | null) => void
}

export function WhatsAppQuickPanel({
  onStatusChange,
}: WhatsAppQuickPanelProps) {
  const {
    data: statusData,
    isLoading,
    error,
  } = useWhatsAppStatus({
    autoStart: true,
    refreshInterval: 5000,
  })

  // Notify parent of status changes
  React.useEffect(() => {
    onStatusChange?.(statusData)
  }, [statusData, onStatusChange])

  const getStatusIcon = () => {
    if (isLoading) {
      return <Loader2 className="h-5 w-5 animate-spin text-blue-400" />
    }
    if (error) {
      return <AlertTriangle className="h-5 w-5 text-red-400" />
    }
    if (sessionStatus?.status === 'working') {
      return <CheckCircle className="h-5 w-5 text-green-400" />
    }
    if (sessionStatus?.status === 'scan_qr') {
      return <QrCode className="h-5 w-5 text-yellow-400" />
    }
    return <MessageCircle className="h-5 w-5 text-gray-400" />
  }

  const getStatusText = () => {
    if (isLoading) return 'Starting...'
    if (error) return 'Error'
    if (!sessionStatus) return 'Unknown'

    switch (sessionStatus.status) {
      case 'working':
        return 'Connected'
      case 'scan_qr':
        return 'Scan QR'
      case 'starting':
        return 'Starting'
      case 'failed':
        return 'Failed'
      case 'stopped':
        return 'Stopped'
      default:
        return 'Unknown'
    }
  }

  const getStatusColor = () => {
    if (error || !sessionStatus) return 'destructive'

    switch (sessionStatus.status) {
      case 'working':
        return 'default' as const
      case 'scan_qr':
        return 'secondary' as const
      case 'starting':
        return 'outline' as const
      case 'failed':
      case 'stopped':
        return 'destructive' as const
      default:
        return 'outline' as const
    }
  }

  return (
    <Card className="bg-slate-900 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          <span className="flex items-center gap-2">
            <MessageCircle className="h-6 w-6 text-green-400" />
            WhatsApp Service
          </span>
          <div className="flex items-center gap-2">
            {getStatusIcon()}
            <Badge variant={getStatusColor()}>{getStatusText()}</Badge>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Status Message */}
        {sessionStatus?.message && (
          <div className="text-sm text-gray-300 bg-slate-800 p-3 rounded border border-gray-600">
            {sessionStatus.message}
          </div>
        )}

        {/* Error Display */}
        {error && (
          <div className="text-sm text-red-300 bg-red-900/20 p-3 rounded border border-red-500/20">
            <div className="flex items-center gap-2 mb-1">
              <AlertTriangle className="h-4 w-4" />
              <span className="font-medium">Error</span>
            </div>
            {error}
          </div>
        )}

        {/* QR Code Display */}
        {showQRCode && (
          <div className="space-y-3">
            <div className="text-sm font-medium text-white flex items-center gap-2">
              <QrCode className="h-4 w-4 text-yellow-400" />
              Scan QR Code to Connect
            </div>
            <QRCodeDisplay
              sessionId={process.env.NEXT_PUBLIC_WHATSAPP_SESSION_ID}
              autoRefresh={true}
              refreshInterval={10000}
              showDownload={true}
              showRefresh={true}
            />
          </div>
        )}

        {/* Workflow Result */}
        {workflowResult && !showQRCode && (
          <div className="text-sm bg-slate-800 p-3 rounded border border-gray-600">
            <div className="font-medium text-white mb-1">
              Workflow Status:{' '}
              {workflowResult.success ? '✅ Success' : '❌ Failed'}
            </div>
            <div className="text-gray-300">Step: {workflowResult.step}</div>
            {workflowResult.details && (
              <div className="text-gray-400 text-xs mt-1">
                {workflowResult.details}
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => refreshStatus()}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              'Refresh'
            )}
          </Button>

          {(error ||
            sessionStatus?.status === 'failed' ||
            sessionStatus?.status === 'stopped') && (
            <Button
              variant="default"
              size="sm"
              onClick={() => void startWorkflow()}
              disabled={isLoading}
              className="bg-green-600 hover:bg-green-700"
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Starting...
                </>
              ) : (
                <>
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Start WhatsApp
                </>
              )}
            </Button>
          )}
        </div>

        {/* Quick Info */}
        <div className="text-xs text-gray-500 bg-slate-800 p-2 rounded">
          {sessionStatus?.status === 'working' &&
            '🟢 WhatsApp is ready for use'}
          {sessionStatus?.status === 'scan_qr' &&
            '📱 Open WhatsApp and scan the QR code above'}
          {sessionStatus?.status === 'starting' &&
            '⏳ Initializing WhatsApp session...'}
          {(sessionStatus?.status === 'failed' ||
            sessionStatus?.status === 'stopped') &&
            '🔴 WhatsApp session is not active'}
          {!sessionStatus && '❓ Unable to determine session status'}
        </div>
      </CardContent>
    </Card>
  )
}
