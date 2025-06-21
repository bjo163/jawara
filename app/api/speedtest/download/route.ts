// API route for download test
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const size = parseInt(searchParams.get('size') || '1048576') // Default 1MB
  const maxSize = 10 * 1024 * 1024 // Max 10MB
  
  // Limit size to prevent abuse
  const actualSize = Math.min(size, maxSize)
  
  // Generate random data buffer
  const buffer = Buffer.alloc(actualSize)
  for (let i = 0; i < actualSize; i++) {
    buffer[i] = Math.floor(Math.random() * 256)
  }
  
  return new NextResponse(buffer, {
    headers: {
      'Content-Type': 'application/octet-stream',
      'Content-Length': actualSize.toString(),
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  })
}
