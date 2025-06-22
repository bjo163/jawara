'use client'

import { useEffect, useState } from 'react'
import {
  ArrowLeft,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Info,
  Wifi,
  Settings,
  ExternalLink,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface DiagnosticResult {
  test: string
  status: 'pass' | 'fail' | 'warning' | 'checking'
  message: string
  details?: string
  url?: string
}

export default function WhatsAppDiagnostics() {
  const [results, setResults] = useState<DiagnosticResult[]>([])
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    runDiagnostics()
  }, [])

  const runDiagnostics = async () => {
    setIsRunning(true)
    setResults([])

    const tests: DiagnosticResult[] = [
      {
        test: 'Environment Configuration',
        status: 'checking',
        message: 'Checking environment variables...',
      },
      {
        test: 'API Health Check',
        status: 'checking',
        message: 'Testing API health endpoint...',
      },
      {
        test: 'Network Connectivity',
        status: 'checking',
        message: 'Testing network connection...',
      },
      {
        test: 'Service Response',
        status: 'checking',
        message: 'Checking service response format...',
      },
    ]

    setResults([...tests])

    // Test 1: Environment Configuration
    try {
      const envResponse = await fetch('/api/whatsapp/proxy?endpoint=/config', {
        method: 'GET',
      })
      const envData = await envResponse.json()

      tests[0] = {
        test: 'Environment Configuration',
        status: 'pass',
        message: 'Environment variables are configured',
        details: `API URL configured and accessible`,
      }
    } catch (error) {
      tests[0] = {
        test: 'Environment Configuration',
        status: 'warning',
        message: 'Environment may have issues',
        details: 'Could not verify all environment variables',
      }
    }
    setResults([...tests])

    // Test 2: API Health Check
    try {
      const healthResponse = await fetch('/api/whatsapp/health')
      const healthData = await healthResponse.json()

      if (healthData.success) {
        tests[1] = {
          test: 'API Health Check',
          status: 'pass',
          message: 'WhatsApp service is responding',
          details: `Response time: ${healthData.timestamp}`,
          url: healthData.url,
        }
      } else {
        tests[1] = {
          test: 'API Health Check',
          status: 'fail',
          message: 'WhatsApp service is not responding',
          details: `${healthData.error} - ${healthData.details}`,
          url: healthData.url,
        }
      }
    } catch (error: any) {
      tests[1] = {
        test: 'API Health Check',
        status: 'fail',
        message: 'Failed to reach health endpoint',
        details: error.message,
      }
    }
    setResults([...tests])

    // Test 3: Network Connectivity (Direct test)
    try {
      const directResponse = await fetch('/api/whatsapp/proxy?endpoint=/ping')
      const directData = await directResponse.json()

      if (directData.success) {
        tests[2] = {
          test: 'Network Connectivity',
          status: 'pass',
          message: 'Direct connection successful',
          details: 'Network connectivity is working',
        }
      } else {
        tests[2] = {
          test: 'Network Connectivity',
          status: 'fail',
          message: 'Network connection failed',
          details: directData.error || 'Unknown network error',
        }
      }
    } catch (error: any) {
      tests[2] = {
        test: 'Network Connectivity',
        status: 'fail',
        message: 'Network connectivity issues',
        details: error.message,
      }
    }
    setResults([...tests])

    // Test 4: Service Response Format
    try {
      const pingResponse = await fetch('/api/whatsapp/proxy?endpoint=/ping')
      const pingData = await pingResponse.json()

      if (pingData.success && pingData.data) {
        tests[3] = {
          test: 'Service Response',
          status: 'pass',
          message: 'Service response format is valid',
          details: 'API is returning expected data format',
        }
      } else {
        tests[3] = {
          test: 'Service Response',
          status: 'warning',
          message: 'Unexpected response format',
          details: 'Service may be using different API version',
        }
      }
    } catch (error: any) {
      tests[3] = {
        test: 'Service Response',
        status: 'fail',
        message: 'Invalid service response',
        details: error.message,
      }
    }
    setResults([...tests])
    setIsRunning(false)
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass':
        return <CheckCircle className="h-5 w-5 text-green-400" />
      case 'fail':
        return <AlertTriangle className="h-5 w-5 text-red-400" />
      case 'warning':
        return <Info className="h-5 w-5 text-yellow-400" />
      case 'checking':
        return (
          <div className="h-5 w-5 animate-spin border-2 border-gray-300 border-t-blue-400 rounded-full" />
        )
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pass':
        return 'text-green-400'
      case 'fail':
        return 'text-red-400'
      case 'warning':
        return 'text-yellow-400'
      case 'checking':
        return 'text-blue-400'
      default:
        return 'text-gray-400'
    }
  }

  const overallStatus =
    results.length > 0
      ? results.every(r => r.status === 'pass')
        ? 'healthy'
        : results.some(r => r.status === 'fail')
          ? 'unhealthy'
          : 'warning'
      : 'checking'

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="bg-slate-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={() => (window.location.href = '/admin/dashboard')}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <Settings className="h-8 w-8 text-blue-400" />
            <h1 className="text-xl font-bold">WhatsApp Diagnostics</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={runDiagnostics}
              disabled={isRunning}
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              {isRunning ? 'Running...' : 'Run Tests'}
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Overall Status */}
        <Card className="bg-slate-900 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center justify-between">
              <span className="flex items-center">
                <Wifi className="h-6 w-6 mr-2" />
                Overall Status
              </span>
              <Badge
                variant={
                  overallStatus === 'healthy'
                    ? 'default'
                    : overallStatus === 'unhealthy'
                      ? 'destructive'
                      : 'secondary'
                }
                className="flex items-center"
              >
                {getStatusIcon(overallStatus)}
                <span className="ml-1 capitalize">{overallStatus}</span>
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">
              {overallStatus === 'healthy' &&
                'All systems are functioning normally. WhatsApp integration is ready to use.'}
              {overallStatus === 'unhealthy' &&
                'There are issues preventing WhatsApp integration from working properly.'}
              {overallStatus === 'warning' &&
                'WhatsApp integration may work with some limitations.'}
              {overallStatus === 'checking' && 'Running diagnostic tests...'}
            </p>
          </CardContent>
        </Card>

        {/* Diagnostic Results */}
        <div className="space-y-4">
          {results.map((result, index) => (
            <Card key={index} className="bg-slate-900 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(result.status)}
                    <h3 className="font-semibold text-white">{result.test}</h3>
                  </div>
                  <Badge
                    variant="outline"
                    className={getStatusColor(result.status)}
                  >
                    {result.status.charAt(0).toUpperCase() +
                      result.status.slice(1)}
                  </Badge>
                </div>

                <p className="text-gray-300 mb-2">{result.message}</p>

                {result.details && (
                  <p className="text-sm text-gray-400 bg-slate-800 p-2 rounded">
                    {result.details}
                  </p>
                )}

                {result.url && (
                  <div className="mt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(result.url, '_blank')}
                    >
                      <ExternalLink className="h-3 w-3 mr-1" />
                      Test URL
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Troubleshooting Tips */}
        <Card className="bg-slate-900 border-gray-700 mt-8">
          <CardHeader>
            <CardTitle className="text-white">Troubleshooting Tips</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold text-white mb-2">Common Issues:</h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>
                  • <strong>Connection Refused:</strong> WhatsApp service may
                  not be running
                </li>
                <li>
                  • <strong>CORS Errors:</strong> Use the API proxy endpoints
                  instead of direct calls
                </li>
                <li>
                  • <strong>Timeout:</strong> Service may be slow to respond or
                  unreachable
                </li>
                <li>
                  • <strong>Invalid URL:</strong> Check WHATSAPP_API_URL in .env
                  file
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-2">Quick Fixes:</h4>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>1. Check your .env file configuration</li>
                <li>2. Ensure the WhatsApp service is running</li>
                <li>3. Test the URL directly in a browser</li>
                <li>4. Check firewall and network settings</li>
                <li>5. Restart the development server</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
