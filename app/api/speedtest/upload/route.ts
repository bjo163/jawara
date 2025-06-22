// API route for upload test
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const startTime = Date.now()

    // Read the uploaded data
    const data = await request.arrayBuffer()
    const size = data.byteLength

    const endTime = Date.now()
    const duration = endTime - startTime

    return NextResponse.json({
      received: true,
      size: size,
      duration: duration,
      timestamp: endTime,
      server: 'jawara-net-internal',
    })
  } catch (error) {
    return NextResponse.json({ error: 'Upload failed' }, { status: 500 })
  }
}
