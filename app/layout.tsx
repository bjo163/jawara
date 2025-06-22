import type { Metadata } from 'next'
import { GlobalErrorHandler } from '@/components/global-error-handler'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jawara-Net - Internet Nusantara',
  description: 'Internet Service Provider yang menguasai nusantara dengan koneksi secepat kilat petir',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body>
        <GlobalErrorHandler
          options={{
            enableLogging: process.env.NODE_ENV === 'development',
            enableReporting: process.env.NODE_ENV === 'production',
            maxErrors: 100,
            enableNotifications: true,
          }}
          enableToasts={true}
          enableBoundary={true}
          toastPosition="top-right"
          maxToasts={5}
        >
          {children}
        </GlobalErrorHandler>
      </body>
    </html>
  )
}
