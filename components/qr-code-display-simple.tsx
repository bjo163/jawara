import { useState } from 'react'
import { Download, RefreshCw, QrCode, Loader2, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { BackendStatusResponse } from '@/types/whatsapp'

interface QRCodeDisplayProps {
  readonly data?: BackendStatusResponse | null
  readonly showDownload?: boolean
  readonly showRefresh?: boolean
  readonly onRefresh?: () => void
  readonly isLoading?: boolean
}

export function QRCodeDisplay({
  data,
  showDownload = true,
  showRefresh = true,
  onRefresh,
  isLoading = false,
}: QRCodeDisplayProps) {
  const [imageError, setImageError] = useState(false)

  const handleDownload = () => {
    if (!data?.qrCodeBase64) return

    try {
      const link = document.createElement('a')
      link.href = data.qrCodeDataUrl ?? `data:image/png;base64,${data.qrCodeBase64}`
      link.download = `whatsapp-qr-${data.sessionId}.png`
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

  const handleRefresh = () => {
    setImageError(false)
    onRefresh?.()
  }

  // Show loading state
  if (isLoading) {
    return (
      <Card className="bg-slate-900 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <QrCode className="h-5 w-5" />
            QR Code
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center p-8">
          <div className="flex flex-col items-center gap-3">
            <Loader2 className="h-8 w-8 animate-spin text-blue-400" />
            <p className="text-gray-400 text-sm">Loading QR code...</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  // Show error if QR not available
  if (!data?.qrCodeAvailable || data.qrCodeError) {
    return (
      <Card className="bg-slate-900 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <QrCode className="h-5 w-5" />
            QR Code
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center p-8">
          <div className="flex flex-col items-center gap-3 text-center">
            <AlertTriangle className="h-8 w-8 text-yellow-400" />
            <p className="text-gray-400 text-sm">
              {data?.qrCodeError ?? 'QR code not available'}
            </p>
            {data?.qrCodeNote && (
              <p className="text-gray-500 text-xs">{data.qrCodeNote}</p>
            )}
            {showRefresh && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefresh}
                disabled={isLoading}
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }

  // Show QR code if available
  if (data?.qrCodeBase64 || data?.qrCodeDataUrl) {
    const qrSrc = data.qrCodeDataUrl ?? `data:image/png;base64,${data.qrCodeBase64}`

    return (
      <Card className="bg-slate-900 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center justify-between">
            <span className="flex items-center gap-2">
              <QrCode className="h-5 w-5" />
              QR Code
            </span>
            <div className="flex gap-2">
              {showRefresh && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleRefresh}
                  disabled={isLoading}
                >
                  <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                </Button>
              )}
              {showDownload && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleDownload}
                >
                  <Download className="h-4 w-4" />
                </Button>
              )}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-4">
          <div className="relative">
            {imageError ? (
              <div className="w-64 h-64 bg-slate-800 border border-gray-600 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <AlertTriangle className="h-8 w-8 text-red-400 mx-auto mb-2" />
                  <p className="text-gray-400 text-sm">Failed to load QR code</p>
                </div>
              </div>
            ) : (
              <img
                src={qrSrc}
                alt="WhatsApp QR Code"
                className="w-64 h-64 border border-gray-600 rounded-lg bg-white p-2"
                onError={handleImageError}
                onLoad={handleImageLoad}
              />
            )}
          </div>
          <div className="text-center">
            <p className="text-white font-medium mb-1">Scan with WhatsApp</p>
            <p className="text-gray-400 text-sm">
              Open WhatsApp → Settings → Linked Devices → Link a Device
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return null
}
