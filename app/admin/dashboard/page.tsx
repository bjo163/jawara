'use client'

import { useEffect, useState } from 'react'
import {
  LogOut,
  Users,
  BarChart3,
  Settings,
  Wifi,
  MessageCircle,
  AlertTriangle,
  CheckCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { WhatsAppQuickPanel } from '@/components/whatsapp-quick-panel-simple'
import { clearAuthData } from '@/data/auth'
import { useAuth } from '@/hooks/use-auth'
import type { BackendStatusResponse } from '@/types/whatsapp'

export default function AdminDashboard() {
  const { user, company, loading } = useAuth()
  const [whatsappHealth, setWhatsappHealth] = useState<
    'checking' | 'healthy' | 'unhealthy'
  >('checking')

  useEffect(() => {
    if (!loading) {
      if (!user || user.role !== 'admin') {
        window.location.href = '/login/admin'
        return
      }
      // Check WhatsApp server health on load
      checkWhatsAppHealth()
    }
  }, [user, loading])
  const checkWhatsAppHealth = async () => {
    setWhatsappHealth('checking')
    try {
      const response = await fetch('/api/whatsapp/ping')
      const result = await response.json()
      setWhatsappHealth(result.success ? 'healthy' : 'unhealthy')

      if (!result.success) {
        console.error(
          'WhatsApp ping check failed:',
          result.error,
          result.details
        )
      }
    } catch (error) {
      console.error('WhatsApp ping check failed:', error)
      setWhatsappHealth('unhealthy')
    }
  }
  const handleLogout = () => {
    clearAuthData()
    window.location.href = '/login/admin'
  }

  const handleWhatsAppStatusChange = (status: BackendStatusResponse | null) => {
    console.log('WhatsApp status updated:', status)
    // Update health status based on session status
    if (status?.status === 'AUTHENTICATED') {
      setWhatsappHealth('healthy')
    } else {
      setWhatsappHealth('unhealthy')
    }
  }

  // Dummy statistik, ganti dengan data asli jika sudah ada
  const stats = [
    { label: 'Total User', value: 0 },
    { label: 'Paket Aktif', value: 0 },
    { label: 'Status WhatsApp', value: whatsappHealth },
  ]

  // Debug log untuk memastikan data user & company
  console.log('user', user)
  console.log('company', company)

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }
  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">
            Selamat datang, {user.name}
          </h1>
          <div className="text-gray-400 text-sm">{user.email}</div>
          {company ? (
            <div className="mt-2 text-orange-400 font-semibold text-base">
              {company.name}
            </div>
          ) : (
            <div className="mt-2 text-gray-500 text-sm italic">
              (Data perusahaan tidak tersedia)
            </div>
          )}
        </div>
        <Button variant="outline" onClick={handleLogout}>
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>
      {/* Welcome Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Dashboard Administrator</h2>
        <p className="text-gray-400">
          Monitor dan kelola operasional Jawara-Net
        </p>
      </div>{' '}
      {/* WhatsApp Quick Panel */}
      <div className="mb-8">
        {' '}
        <WhatsAppQuickPanel onStatusChange={handleWhatsAppStatusChange} />
      </div>
      {/* Panel Info User & Company */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-slate-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Info Admin</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-gray-300 text-sm">
              <div>
                <span className="font-semibold text-white">Nama:</span>{' '}
                {user.name}
              </div>
              <div>
                <span className="font-semibold text-white">Email:</span>{' '}
                {user.email}
              </div>
              <div>
                <span className="font-semibold text-white">Username:</span>{' '}
                {user.username}
              </div>
              <div>
                <span className="font-semibold text-white">Role:</span>{' '}
                {user.role}
              </div>
              <div>
                <span className="font-semibold text-white">Status:</span>{' '}
                <span
                  className={`px-2 py-1 rounded text-xs ${user.status === 'active' ? 'bg-green-700 text-green-200' : 'bg-red-700 text-red-200'}`}
                >
                  {user.status}
                </span>
              </div>
              <div>
                <span className="font-semibold text-white">
                  Tanggal Registrasi:
                </span>{' '}
                {user.createdAt
                  ? new Date(user.createdAt).toLocaleString()
                  : '-'}
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Info Perusahaan</CardTitle>
          </CardHeader>
          <CardContent>
            {company ? (
              <div className="space-y-2 text-gray-300 text-sm">
                <div>
                  <span className="font-semibold text-white">Nama:</span>{' '}
                  {company.name}
                </div>
                <div>
                  <span className="font-semibold text-white">Partner ID:</span>{' '}
                  {company.partner_id ?? '-'}
                </div>
                <div>
                  <span className="font-semibold text-white">Registry:</span>{' '}
                  {company.company_registry ?? '-'}
                </div>
                <div>
                  <span className="font-semibold text-white">Email:</span>{' '}
                  {company.email ?? '-'}
                </div>
                <div>
                  <span className="font-semibold text-white">Telepon:</span>{' '}
                  {company.phone ?? '-'}
                </div>
                <div>
                  <span className="font-semibold text-white">Alamat:</span>{' '}
                  {company.street ?? ''} {company.city ?? ''}{' '}
                  {company.state ?? ''} {company.country ?? ''}
                </div>
                <div>
                  <span className="font-semibold text-white">Website:</span>{' '}
                  {company.website ? (
                    <a
                      href={company.website}
                      className="text-blue-400 underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {company.website}
                    </a>
                  ) : (
                    '-'
                  )}
                </div>
                <div>
                  <span className="font-semibold text-white">VAT/NPWP:</span>{' '}
                  {company.vat ?? '-'}
                </div>
              </div>
            ) : (
              <div className="text-gray-500 italic">
                (Data perusahaan tidak tersedia)
              </div>
            )}
          </CardContent>
        </Card>
      </div>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map(stat => (
          <Card key={stat.label} className="bg-slate-900 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white text-lg">{stat.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-400">
                {stat.value}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-slate-900 border-gray-700 hover:bg-slate-800 transition-colors cursor-pointer">
          <CardContent className="p-6 text-center">
            <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="font-semibold text-white mb-2">
              Manajemen Pelanggan
            </h3>
            <p className="text-sm text-gray-400">Kelola data pelanggan</p>
          </CardContent>
        </Card>{' '}
        <Card className="bg-slate-900 border-gray-700 hover:bg-slate-800 transition-colors cursor-pointer">
          <CardContent className="p-6 text-center">
            <div className="relative">
              <MessageCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <div className="absolute -top-1 -right-1">
                {whatsappHealth === 'healthy' && (
                  <CheckCircle className="h-4 w-4 text-green-400" />
                )}
                {whatsappHealth === 'unhealthy' && (
                  <AlertTriangle className="h-4 w-4 text-red-400" />
                )}
                {whatsappHealth === 'checking' && (
                  <div className="h-4 w-4 animate-spin border border-gray-300 border-t-blue-400 rounded-full" />
                )}
              </div>
            </div>
            <h3 className="font-semibold text-white mb-2">WhatsApp Service</h3>
            <p className="text-sm text-gray-400">
              {whatsappHealth === 'healthy' && 'Service is running'}
              {whatsappHealth === 'unhealthy' && 'Service unavailable'}
              {whatsappHealth === 'checking' && 'Checking status...'}
            </p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-gray-700 hover:bg-slate-800 transition-colors cursor-pointer">
          <CardContent className="p-6 text-center">
            <BarChart3 className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="font-semibold text-white mb-2">Analytics</h3>
            <p className="text-sm text-gray-400">Laporan dan statistik</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-gray-700 hover:bg-slate-800 transition-colors cursor-pointer">
          <CardContent className="p-6 text-center">
            <Wifi className="h-12 w-12 text-orange-400 mx-auto mb-4" />
            <h3 className="font-semibold text-white mb-2">Network Monitor</h3>
            <p className="text-sm text-gray-400">Status jaringan</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900 border-gray-700 hover:bg-slate-800 transition-colors cursor-pointer">
          <CardContent className="p-6 text-center">
            <Settings className="h-12 w-12 text-purple-400 mx-auto mb-4" />
            <h3 className="font-semibold text-white mb-2">Pengaturan</h3>
            <p className="text-sm text-gray-400">Konfigurasi sistem</p>
          </CardContent>
        </Card>
      </div>
      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Aktivitas Sistem</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm">
                <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">
                  Pelanggan baru: John Smith
                </span>
                <span className="text-gray-500">5 menit lalu</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">
                  Maintenance sektor A selesai
                </span>
                <span className="text-gray-500">1 jam lalu</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="h-2 w-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300">Server backup completed</span>
                <span className="text-gray-500">3 jam lalu</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="h-2 w-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-300">Payment gateway update</span>
                <span className="text-gray-500">1 hari lalu</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Alerts & Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <div className="text-red-400 font-semibold text-sm">
                  High Priority
                </div>
                <div className="text-gray-300 text-sm">
                  Server CPU usage &gt;90%
                </div>
              </div>
              <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <div className="text-yellow-400 font-semibold text-sm">
                  Medium Priority
                </div>
                <div className="text-gray-300 text-sm">
                  Scheduled maintenance tomorrow
                </div>
              </div>
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <div className="text-blue-400 font-semibold text-sm">Info</div>
                <div className="text-gray-300 text-sm">
                  Monthly report ready
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
