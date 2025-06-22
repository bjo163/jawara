import { useState } from 'react'
import {
  Download,
  RefreshCw,
  QrCode,
  Loader2,
  AlertTriangle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useQRCode } from '@/hooks/use-qr-code'

interface QRCodeDisplayProps {
  readonly sessionId?: string
  readonly autoRefresh?: boolean
  readonly refreshInterval?: number
  readonly showDownload?: boolean
  readonly showRefresh?: boolean
}

export function QRCodeDisplay({
  sessionId,
  autoRefresh = true,
  refreshInterval = 5000,
  showDownload = true,
  showRefresh = true,
}: QRCodeDisplayProps) {
  const [imageError, setImageError] = useState(false)
  const { qrCode, loading, error, refresh } = useQRCode({
    sessionId,
    autoRefresh,
    refreshInterval,
  })

  const handleDownload = () => {
    if (!qrCode) return

    try {
      const link = document.createElement('a')
      link.href = qrCode
      link.download = `whatsapp-qr-${sessionId ?? 'session'}.png`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (err) {
      console.error('Download failed:', err)
    }
  }

  const handleImageError = () => {
    setImageError(true)
  }

  const handleImageLoad = () => {
    setImageError(false)
  }

  if (!sessionId) {
    return (
      <Card className="bg-slate-900 border-gray-700">
        <CardContent className="p-6 text-center">
          <AlertTriangle className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
          <p className="text-gray-400">No session ID provided</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-slate-900 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          <span className="flex items-center gap-2">
            <QrCode className="h-5 w-5" />
            WhatsApp QR Code
          </span>
          <div className="flex gap-2">
            {showRefresh && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => void refresh()}
                disabled={loading}
              >
                <RefreshCw
                  className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`}
                />
              </Button>
            )}
            {showDownload && qrCode && !imageError && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleDownload}
                disabled={loading || !qrCode}
              >
                <Download className="h-4 w-4" />
              </Button>
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        {loading && (
          <div className="flex flex-col items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-blue-500 mb-4" />
            <p className="text-gray-400">Loading QR Code...</p>
          </div>
        )}

        {error && !loading && (
          <div className="flex flex-col items-center justify-center py-12">
            <AlertTriangle className="h-8 w-8 text-red-500 mb-4" />
            <p className="text-red-400 text-center mb-4">{error}</p>
            {showRefresh && (
              <Button variant="outline" onClick={() => void refresh()}>
                Try Again
              </Button>
            )}
          </div>
        )}

        {qrCode && !loading && !error && (
          <div className="flex flex-col items-center">
            {imageError ? (
              <div className="w-64 h-64 bg-slate-800 border-2 border-dashed border-gray-600 flex items-center justify-center rounded-lg mb-4">
                <div className="text-center">
                  <AlertTriangle className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">
                    Failed to load QR image
                  </p>
                </div>
              </div>
            ) : (
              <div className="bg-white p-4 rounded-lg mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={qrCode}
                  alt="WhatsApp QR Code"
                  className="w-64 h-64 object-contain"
                  onError={handleImageError}
                  onLoad={handleImageLoad}
                />
              </div>
            )}

            <div className="text-center">
              <p className="text-white font-medium mb-2">Scan with WhatsApp</p>
              <p className="text-gray-400 text-sm max-w-sm">
                Open WhatsApp on your phone, go to Settings {'>'} Linked Devices{' '}
                {'>'}
                Link a Device, and scan this QR code.
              </p>

              {autoRefresh && (
                <p className="text-xs text-gray-500 mt-3">
                  Auto-refreshing every {Math.floor(refreshInterval / 1000)}{' '}
                  seconds
                </p>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
