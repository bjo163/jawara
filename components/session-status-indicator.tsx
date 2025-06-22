import { useEffect } from 'react'
import { CheckCircle, AlertTriangle, Clock, XCircle, Loader2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { QRCodeDisplay } from '@/components/qr-code-display'
import { useSessionStatus } from '@/hooks/use-session-status'
import type { StatusSessionResponse } from '@/types/whatsapp'

interface SessionStatusIndicatorProps {
  readonly sessionId?: string
  readonly autoRefresh?: boolean
  readonly refreshInterval?: number
  readonly showRefreshButton?: boolean
  readonly showQRCode?: boolean
  readonly onStatusChange?: (status: StatusSessionResponse | null) => void
}

export function SessionStatusIndicator({
  sessionId,
  autoRefresh = false,
  refreshInterval = 5000,
  showRefreshButton = true,
  showQRCode = false,
  onStatusChange,
}: SessionStatusIndicatorProps) {
  const { status, loading, error, refresh } = useSessionStatus({
    sessionId,
    autoRefresh,
    refreshInterval,
  })

  // Call onStatusChange when status updates
  useEffect(() => {
    onStatusChange?.(status)
  }, [status, onStatusChange])

  const getStatusIcon = () => {
    if (loading) {
      return <Loader2 className="h-4 w-4 animate-spin" />
    }

    if (error) {
      return <XCircle className="h-4 w-4 text-red-500" />
    }

    if (!status) {
      return <AlertTriangle className="h-4 w-4 text-gray-500" />
    }

    switch (status.status) {
      case 'working':
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case 'scan_qr':
        return <Clock className="h-4 w-4 text-yellow-500" />
      case 'starting':
        return <Loader2 className="h-4 w-4 text-blue-500 animate-spin" />
      case 'failed':
      case 'stopped':
        return <XCircle className="h-4 w-4 text-red-500" />
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-500" />
    }
  }

  const getStatusColor = () => {
    if (error || !status) return 'destructive'
    
    switch (status.status) {
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

  const getStatusText = () => {
    if (loading) return 'Checking...'
    if (error) return 'Error'
    if (!status) return 'Unknown'

    switch (status.status) {
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

  const getStatusMessage = () => {
    if (error) return error
    if (!status) return 'No session data available'
    return status.message ?? 'No additional information'
  }
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          {getStatusIcon()}
          <div>
            <Badge variant={getStatusColor()} className="flex items-center gap-1">
              {getStatusText()}
            </Badge>
            <div className="text-xs text-gray-500 mt-1">
              {getStatusMessage()}
            </div>
          </div>
        </div>
        
        {showRefreshButton && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => void refresh()}
            disabled={loading}
          >
            {loading ? (
              <Loader2 className="h-3 w-3 animate-spin" />
            ) : (
              'Refresh'
            )}
          </Button>
        )}
      </div>

      {/* QR Code Display for scan_qr status */}
      {showQRCode && status?.status === 'scan_qr' && sessionId && (
        <QRCodeDisplay
          sessionId={sessionId}
          autoRefresh={true}
          refreshInterval={10000}
          showDownload={true}
          showRefresh={true}
        />
      )}
    </div>
  )
}
