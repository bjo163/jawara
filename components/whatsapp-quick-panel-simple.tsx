import { useEffect } from 'react'
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
    refetch,
  } = useWhatsAppStatus({
    autoStart: true,
  })

  // Notify parent of status changes
  useEffect(() => {
    onStatusChange?.(statusData)
  }, [statusData, onStatusChange])
  const getStatusIcon = () => {
    if (isLoading) {
      return <Loader2 className="h-5 w-5 animate-spin text-blue-400" />
    }
    if (error) {
      return <AlertTriangle className="h-5 w-5 text-red-400" />
    }
    if (statusData?.status === 'AUTHENTICATED') {
      return <CheckCircle className="h-5 w-5 text-green-400" />
    }
    if (statusData?.status === 'QRCODE') {
      return <QrCode className="h-5 w-5 text-yellow-400" />
    }
    if (statusData?.status === 'LOADING') {
      return <Loader2 className="h-5 w-5 animate-spin text-blue-400" />
    }
    if (statusData?.status === 'DISCONNECTED') {
      return statusData?.qrCodeAvailable ? (
        <QrCode className="h-5 w-5 text-yellow-400" />
      ) : (
        <AlertTriangle className="h-5 w-5 text-red-400" />
      )
    }
    return <MessageCircle className="h-5 w-5 text-gray-400" />
  }
  const getStatusText = () => {
    if (isLoading) return 'Checking...'
    if (error) return 'Error'
    if (!statusData) return 'Unknown'

    switch (statusData.status) {
      case 'AUTHENTICATED':
        return 'Connected'
      case 'QRCODE':
        return 'Scan QR'
      case 'LOADING':
        return 'Starting...'
      case 'DISCONNECTED':
        return statusData.qrCodeAvailable ? 'Scan QR' : 'Disconnected'
      case 'DESTROYED':
        return 'Terminated'
      case 'UNKNOWN':
        return 'Unknown'
      default:
        return 'Unknown'
    }
  }
  const getStatusColor = () => {
    if (error || !statusData) return 'destructive'

    switch (statusData.status) {
      case 'AUTHENTICATED':
        return 'default' as const
      case 'QRCODE':
        return 'secondary' as const
      case 'LOADING':
        return 'outline' as const
      case 'DISCONNECTED':
        return statusData.qrCodeAvailable
          ? ('secondary' as const)
          : ('destructive' as const)
      case 'DESTROYED':
        return 'destructive' as const
      case 'UNKNOWN':
        return 'outline' as const
      default:
        return 'outline' as const
    }
  }

  const showQRCode =
    (statusData?.status === 'DISCONNECTED' && statusData?.qrCodeAvailable) ||
    statusData?.status === 'QRCODE'

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
        {statusData?.message && (
          <div className="text-sm text-gray-300 bg-slate-800 p-3 rounded border border-gray-600">
            {statusData.message}
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
              data={statusData}
              showDownload={true}
              showRefresh={true}
              onRefresh={refetch}
              isLoading={isLoading}
            />
          </div>
        )}
        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={refetch}
            disabled={isLoading}
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              'Refresh'
            )}
          </Button>
        </div>{' '}
        {/* Quick Info */}
        <div className="text-xs text-gray-500 bg-slate-800 p-2 rounded">
          {statusData?.status === 'AUTHENTICATED' &&
            '🟢 WhatsApp is ready for use'}
          {statusData?.status === 'QRCODE' &&
            '📱 QR code ready - please scan to connect'}
          {statusData?.status === 'DISCONNECTED' &&
            statusData?.qrCodeAvailable &&
            '📱 Open WhatsApp and scan the QR code above'}
          {statusData?.status === 'DISCONNECTED' &&
            !statusData?.qrCodeAvailable &&
            '🔴 WhatsApp session is disconnected'}
          {statusData?.status === 'LOADING' &&
            '⏳ Starting WhatsApp session...'}
          {statusData?.status === 'DESTROYED' &&
            '🔴 WhatsApp session terminated'}
          {statusData?.status === 'UNKNOWN' &&
            '❓ Status unclear, please refresh'}
          {!statusData && '❓ Unable to determine session status'}
        </div>
      </CardContent>
    </Card>
  )
}
