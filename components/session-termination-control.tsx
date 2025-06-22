import { useState } from 'react'
import { Power, AlertTriangle, Loader2, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import type { 
  TerminationResult, 
  TerminateSessionResponse 
} from '@/types/whatsapp'

interface SessionTerminationControlProps {
  readonly sessionId?: string
  readonly currentStatus?: string
  readonly disabled?: boolean
  readonly onTerminationComplete?: (result: TerminationResult) => void
}

export function SessionTerminationControl({
  sessionId,
  currentStatus,
  disabled = false,
  onTerminationComplete,
}: SessionTerminationControlProps) {  const [isTerminating, setIsTerminating] = useState(false)
  const [reason, setReason] = useState('')
  const [lastResult, setLastResult] = useState<TerminationResult | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const canTerminate = sessionId && !disabled && 
    currentStatus && ['working', 'scan_qr', 'starting'].includes(currentStatus)

  const handleTerminate = async () => {
    if (!sessionId) return

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
      
      if (onTerminationComplete) {
        onTerminationComplete(result)
      }      // Close dialog on success
      if (result.success) {
        setIsDialogOpen(false)
        setReason('')
      }

    } catch (error) {
      const result: TerminationResult = {
        success: false,
        sessionId,
        message: error instanceof Error ? error.message : 'Unknown error occurred',
        timestamp: new Date(),
      }
      
      setLastResult(result)
      
      if (onTerminationComplete) {
        onTerminationComplete(result)
      }
    } finally {      setIsTerminating(false)
    }
  }
  const handleConfirmTermination = () => {
    void handleTerminate()
  }

  const getStatusColor = () => {
    if (!lastResult) return 'text-gray-400'
    return lastResult.success ? 'text-green-400' : 'text-red-400'
  }

  const getStatusIcon = () => {
    if (isTerminating) {
      return <Loader2 className="h-4 w-4 animate-spin" />
    }
    if (lastResult?.success) {
      return <CheckCircle className="h-4 w-4 text-green-400" />
    }
    if (lastResult && !lastResult.success) {
      return <AlertTriangle className="h-4 w-4 text-red-400" />
    }
    return <Power className="h-4 w-4" />
  }

  return (
    <Card className="bg-slate-900 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Power className="h-5 w-5 text-red-400" />
            Session Control
          </span>
          {lastResult && (
            <div className={`text-xs ${getStatusColor()}`}>
              {lastResult.success ? 'Terminated' : 'Failed'}
            </div>
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-gray-400">          Current Status: <span className="text-white font-medium">
            {currentStatus ?? 'Unknown'}
          </span>
        </div>

        {/* Termination Button with Dialog */}
        <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <AlertDialogTrigger asChild>
            <Button
              variant="destructive"
              disabled={!canTerminate || isTerminating}
              className="w-full"
            >
              {getStatusIcon()}
              <span className="ml-2">
                {isTerminating ? 'Terminating...' : 'Terminate Session'}
              </span>
            </Button>
          </AlertDialogTrigger>
          
          <AlertDialogContent className="bg-slate-900 border-gray-700">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-white flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-red-400" />
                Terminate WhatsApp Session
              </AlertDialogTitle>
              <AlertDialogDescription className="text-gray-300">
                This action will terminate the active WhatsApp session. 
                The session will be disconnected and you&apos;ll need to scan QR code again to reconnect.
              </AlertDialogDescription>
            </AlertDialogHeader>

            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="reason" className="text-white">
                  Reason (Optional)
                </Label>
                <Textarea
                  id="reason"
                  placeholder="Enter reason for termination..."
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  className="bg-slate-800 border-gray-600 text-white placeholder-gray-400"
                  rows={3}
                />
              </div>

              <div className="bg-slate-800 p-3 rounded border border-gray-600">
                <div className="text-sm text-gray-300">
                  <strong>Session ID:</strong> {sessionId}
                </div>
                <div className="text-sm text-gray-300">
                  <strong>Current Status:</strong> {currentStatus}
                </div>
              </div>
            </div>

            <AlertDialogFooter>
              <AlertDialogCancel 
                className="bg-slate-800 border-gray-600 text-white hover:bg-slate-700"
                disabled={isTerminating}
              >
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction
                onClick={handleConfirmTermination}
                disabled={isTerminating}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                {isTerminating ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Terminating...
                  </>
                ) : (
                  <>
                    <Power className="h-4 w-4 mr-2" />
                    Terminate Session
                  </>
                )}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        {/* Last Result Display */}
        {lastResult && (
          <div className={`p-3 rounded border text-sm ${
            lastResult.success 
              ? 'bg-green-900/20 border-green-500/20 text-green-300'
              : 'bg-red-900/20 border-red-500/20 text-red-300'
          }`}>
            <div className="font-medium">
              {lastResult.success ? '✅ Success' : '❌ Failed'}
            </div>
            <div className="text-xs mt-1">{lastResult.message}</div>
            <div className="text-xs text-gray-400 mt-1">
              {lastResult.timestamp.toLocaleString()}
            </div>
          </div>
        )}

        {/* Status Info */}
        {!canTerminate && sessionId && (
          <div className="text-xs text-gray-500 bg-slate-800 p-2 rounded">
            {currentStatus === 'stopped' || currentStatus === 'failed' 
              ? 'Session is already terminated'
              : 'Session termination not available for current status'}
          </div>
        )}

        {!sessionId && (
          <div className="text-xs text-gray-500 bg-slate-800 p-2 rounded">
            No session ID available
          </div>
        )}
      </CardContent>
    </Card>
  )
}
