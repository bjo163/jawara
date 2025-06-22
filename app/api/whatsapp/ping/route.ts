import { NextResponse } from 'next/server'
import { buildWhatsAppUrl } from '@/lib/whatsapp-config'
import type { PingResponse, WhatsAppApiError } from '@/types/whatsapp'

export async function GET() {
  try {
    // Build ping URL
    const pingUrl = buildWhatsAppUrl('/ping')
    
    // Make request to WhatsApp server
    const response = await fetch(pingUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // Add timeout to prevent hanging
      signal: AbortSignal.timeout(10000), // 10 seconds timeout
    })

    if (!response.ok) {
      const errorData: WhatsAppApiError = {
        success: false,
        error: `HTTP ${response.status}`,
        details: `WhatsApp server responded with status ${response.status}`,
        code: response.status,
      }
      
      return NextResponse.json(errorData, { 
        status: response.status 
      })
    }

    const data: PingResponse = await response.json()
    
    // Validate response format
    if (typeof data.success !== 'boolean' || typeof data.message !== 'string') {
      const errorData: WhatsAppApiError = {
        success: false,
        error: 'Invalid response format',
        details: 'WhatsApp server returned unexpected response format',
      }
      
      return NextResponse.json(errorData, { 
        status: 502 
      })
    }

    // Return successful response
    return NextResponse.json(data, { 
      status: 200,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    })

  } catch (error) {
    console.error('WhatsApp ping failed:', error)
    
    let errorMessage = 'Unknown error occurred'
    let details = 'Failed to connect to WhatsApp server'
    
    if (error instanceof TypeError && error.message.includes('fetch')) {
      errorMessage = 'Network connection failed'
      details = 'Unable to reach WhatsApp server. Check server URL and network connectivity.'
    } else if (error instanceof Error) {
      if (error.name === 'TimeoutError') {
        errorMessage = 'Connection timeout'
        details = 'WhatsApp server did not respond within 10 seconds'
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
    
    return NextResponse.json(errorData, { 
      status: 500 
    })
  }
}
