'use client'

// Next.js Global Error Page
// Handles errors at the root layout level

import { useEffect } from 'react'
import { RefreshCw, Home, AlertTriangle } from 'lucide-react'
import { transformError } from '@/lib/error-utils'

interface GlobalErrorProps {
  readonly error: Error & { digest?: string }
  readonly reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log the error
    const appError = transformError(error, 'runtime', 'critical')
    console.group('🚨 Global Error Page')
    console.error('Original Error:', error)
    console.error('App Error:', appError)
    console.error('Error Digest:', error.digest)
    console.groupEnd()
  }, [error])

  return (
    <html lang="id">
      <body>
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
          <div className="max-w-lg mx-auto text-center">
            {/* Error Icon */}
            <div className="mx-auto w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center mb-8">
              <AlertTriangle className="w-12 h-12 text-red-400" />
            </div>

            {/* Error Message */}
            <h1 className="text-3xl font-bold text-white mb-4">
              Ups! Terjadi Kesalahan
            </h1>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Aplikasi mengalami masalah yang tidak terduga. Tim kami sudah mendapat laporan dan akan segera memperbaikinya.
            </p>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && (
              <div className="mb-8 text-left">
                <details className="bg-slate-900 border border-red-500/30 rounded-lg p-4">
                  <summary className="cursor-pointer text-sm font-semibold text-red-400 hover:text-red-300 mb-3">
                    Detail Error (Development Mode)
                  </summary>
                  <div className="space-y-3 text-xs">
                    <div>
                      <strong className="text-gray-300">Message:</strong>
                      <div className="mt-1 p-2 bg-slate-800 rounded text-gray-400 font-mono">
                        {error.message}
                      </div>
                    </div>
                    
                    {error.digest && (
                      <div>
                        <strong className="text-gray-300">Digest:</strong>
                        <div className="mt-1 p-2 bg-slate-800 rounded text-gray-400 font-mono">
                          {error.digest}
                        </div>
                      </div>
                    )}
                    
                    {error.stack && (
                      <div>
                        <strong className="text-gray-300">Stack Trace:</strong>
                        <pre className="mt-1 p-2 bg-slate-800 rounded text-gray-400 font-mono text-xs overflow-auto max-h-40">
                          {error.stack}
                        </pre>
                      </div>
                    )}
                  </div>
                </details>
              </div>
            )}

            {/* Action Buttons */}
            <div className="space-y-4">
              <button
                onClick={reset}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <RefreshCw className="w-5 h-5" />
                <span>Coba Lagi</span>
              </button>
              
              <button
                onClick={() => window.location.href = '/'}
                className="w-full bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
              >
                <Home className="w-5 h-5" />
                <span>Kembali ke Beranda</span>
              </button>
              
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Refresh Halaman
              </button>
            </div>

            {/* Contact Information */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-sm mb-4">
                Jika masalah berlanjut, silakan hubungi support kami:
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/6281295295734?text=Halo%20Jawara-Net!%20Saya%20mengalami%20error%20pada%20website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  <span>📱</span>
                  <span>WhatsApp Support</span>
                </a>
                <a
                  href="mailto:support@jawara-net.com?subject=Error%20Report&body=Saya%20mengalami%20error%20pada%20website%20Jawara-Net"
                  className="inline-flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  <span>📧</span>
                  <span>Email Support</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
