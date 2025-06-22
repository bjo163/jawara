// API route for ping test
import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const timestamp = Date.now()

  return NextResponse.json({
    timestamp,
    server: 'jawara-net-internal',
    message: 'pong',
  })
}

export async function POST() {
  const timestamp = Date.now()

  return NextResponse.json({
    timestamp,
    server: 'jawara-net-internal',
    message: 'pong',
  })
}
