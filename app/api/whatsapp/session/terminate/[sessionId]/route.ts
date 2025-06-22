import { NextResponse } from 'next/server'
import { buildWhatsAppUrl, getWhatsAppHeaders } from '@/lib/whatsapp-config'
import type { TerminateSessionResponse, WhatsAppApiError } from '@/types/whatsapp'

interface Params {
  sessionId: string
}

function validateSessionId(sessionId: string): WhatsAppApiError | null {
  const sessionIdRegex = /^[a-zA-Z0-9-]+$/
  if (!sessionIdRegex.test(sessionId)) {
    return {
      success: false,
      error: 'Invalid session ID format',
      details: 'Session ID must contain only alphanumeric characters and hyphens',
      code: 422,
    }
  }
  return null
}

function handleHttpError(status: number): WhatsAppApiError {
  const errorMap: Record<number, { message: string; details: string }> = {
    403: {
      message: 'Forbidden',
      details: 'Invalid API key or insufficient permissions',
    },
    422: {
      message: 'Unprocessable Entity',
      details: 'Invalid session ID or session not found',
    },
    500: {
      message: 'Server failure',
      details: 'WhatsApp server internal error',
    },
  }

  const error = errorMap[status] || {
    message: `HTTP ${status}`,
    details: `WhatsApp server responded with status ${status}`,
  }

  return {
    success: false,
    error: error.message,
    details: error.details,
    code: status,
  }
}

export async function GET(
  request: Request,
  { params }: { params: Params }
) {
  try {
    const { sessionId } = params

    // Validate sessionId format
    const validationError = validateSessionId(sessionId)
    if (validationError) {
      return NextResponse.json(validationError, { status: 422 })
    }

    // Build terminate session URL and make request
    const terminateUrl = buildWhatsAppUrl(`/session/terminate/${sessionId}`)
    const headers = getWhatsAppHeaders()
    
    console.log(`Terminating WhatsApp session: ${sessionId}`)
    
    const response = await fetch(terminateUrl, {
      method: 'GET',
      headers,
      signal: AbortSignal.timeout(15000), // 15 seconds timeout
    })

    if (!response.ok) {
      const errorData = handleHttpError(response.status)
      console.error(`Failed to terminate session ${sessionId}:`, errorData)
      return NextResponse.json(errorData, { status: response.status })
    }

    const data: TerminateSessionResponse = await response.json()
    
    // Validate response format
    if (typeof data.success !== 'boolean') {
      const errorData: WhatsAppApiError = {
        success: false,
        error: 'Invalid response format',
        details: 'WhatsApp server returned unexpected response format',
      }
      
      return NextResponse.json(errorData, { status: 502 })
    }

    console.log(`Session ${sessionId} terminate result:`, data)

    return NextResponse.json(data, { 
      status: 200,
      headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate' },
    })

  } catch (error) {
    console.error('WhatsApp session terminate failed:', error)
    
    let errorMessage = 'Unknown error occurred'
    let details = 'Failed to terminate session'
    
    if (error instanceof TypeError && error.message.includes('fetch')) {
      errorMessage = 'Network connection failed'
      details = 'Unable to reach WhatsApp server. Check server URL and network connectivity.'
    } else if (error instanceof Error) {
      if (error.name === 'TimeoutError') {
        errorMessage = 'Connection timeout'
        details = 'WhatsApp server did not respond within 15 seconds'
      } else {
        errorMessage = error.message
        details = 'Configuration or network error'
      }
    }

    const errorData: WhatsAppApiError = {
      success: false,
      error: errorMessage,
      details,
    }
    
    return NextResponse.json(errorData, { status: 500 })
  }
}
