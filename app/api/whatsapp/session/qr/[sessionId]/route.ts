import { NextResponse } from 'next/server'
import { getWhatsAppConfig } from '@/lib/whatsapp-config'
import type { QRCodeResponse } from '@/types/whatsapp'

export async function GET(
  request: Request,
  { params }: { params: { sessionId: string } }
) {
  try {
    const config = getWhatsAppConfig()
    const { sessionId } = params

    if (!sessionId) {
      return NextResponse.json(
        {
          success: false,
          error: 'Session ID is required',
        } as QRCodeResponse,
        { status: 400 }
      )
    }
    const url = `${config.serverUrl}/session/qr/${sessionId}/image`
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-API-Key': config.apiKey,
      },
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('QR fetch failed:', response.status, errorText)

      return NextResponse.json(
        {
          success: false,
          error: 'Failed to fetch QR code',
          message: `Server responded with ${response.status}`,
        } as QRCodeResponse,
        { status: response.status }
      )
    }

    // Convert image to base64 data URL
    const imageBuffer = await response.arrayBuffer()
    const base64Image = Buffer.from(imageBuffer).toString('base64')
    const dataUrl = `data:image/png;base64,${base64Image}`

    return NextResponse.json({
      success: true,
      qr: dataUrl,
      message: 'QR code retrieved successfully',
    } as QRCodeResponse)
  } catch (error) {
    console.error('QR fetch error:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      } as QRCodeResponse,
      { status: 500 }
    )
  }
}
