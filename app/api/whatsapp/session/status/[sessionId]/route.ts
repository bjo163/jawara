import { NextResponse } from 'next/server'
import type { BackendStatusResponse, WhatsAppApiError } from '@/types/whatsapp'

export async function GET(
  request: Request,
  context: { params: { sessionId: string } }
) {
  try {
    const { sessionId } = context.params

    const sessionIdRegex = /^[a-zA-Z0-9-]+$/
    if (!sessionIdRegex.test(sessionId)) {
      const errorData: WhatsAppApiError = {
        success: false,
        error: 'Invalid session ID format',
        details:
          'Session ID must contain only alphanumeric characters and hyphens',
        code: 422,
      }
      return NextResponse.json(errorData, { status: 422 })
    }

    const backendBaseUrl =
      process.env.NEXT_PUBLIC_SERVER_BACKEND_URL ??
      'https://backend-api.apps.pundidigitaldynamics.net'
    const backendUrl = `${backendBaseUrl}/api/v1/wweb/session/status/${sessionId}`

    const response = await fetch(backendUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      signal: AbortSignal.timeout(15000),
    })

    if (!response.ok) {
      const errorData: WhatsAppApiError = {
        success: false,
        error: `HTTP ${response.status}`,
        details: `Backend server responded with status ${response.status}`,
        code: response.status,
      }
      return NextResponse.json(errorData, { status: response.status })
    }

    const data: BackendStatusResponse = await response.json()

    return NextResponse.json(data, {
      status: 200,
      headers: { 'Cache-Control': 'no-cache, no-store, must-revalidate' },
    })
  } catch (error) {
    console.error('WhatsApp session status failed:', error)

    const errorData: WhatsAppApiError = {
      success: false,
      error: 'Network connection failed',
      details: 'Unable to reach backend server',
    }

    return NextResponse.json(errorData, { status: 500 })
  }
}
