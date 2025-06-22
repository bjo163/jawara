import { NextResponse } from 'next/server'
import os from 'os'

export async function GET() {
  try {
    // Simulate checking backend services
    // In a real implementation, this would check database connectivity,
    // external services, etc.    // For testing purposes, you can modify this to return different statuses
    const isHealthy = true // Change to false to test offline behavior

    if (isHealthy) {
      // Get system information similar to the expected response
      const uptime = process.uptime()
      const memoryUsage = process.memoryUsage()
      const platform = process.platform
      const arch = process.arch
      const hostname = os.hostname()
      const cpus = os.cpus()

      return NextResponse.json(
        {
          status: 'OK',
          uptime: uptime,
          memoryUsage: {
            rss: memoryUsage.rss,
            heapTotal: memoryUsage.heapTotal,
            heapUsed: memoryUsage.heapUsed,
            external: memoryUsage.external,
            arrayBuffers: memoryUsage.arrayBuffers || 0,
          },
          platform: platform,
          arch: arch,
          hostname: hostname,
          cpu: cpus.map(cpu => ({
            model: cpu.model,
            speed: cpu.speed,
            times: cpu.times,
          })),
          serverTime: new Date().toISOString(),
          port: process.env.PORT ?? 3000,
        },
        { status: 200 }
      )
    } else {
      return NextResponse.json(
        {
          status: 'ERROR',
          timestamp: new Date().toISOString(),
          error: 'Backend services are down',
        },
        { status: 503 }
      )
    }
  } catch (error) {
    console.error('Status check error:', error)
    return NextResponse.json(
      {
        status: 'ERROR',
        timestamp: new Date().toISOString(),
        error: 'Internal server error',
      },
      { status: 500 }
    )
  }
}
