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
  Plus,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { clearAuthData } from '@/data/auth'
import { useAuth } from '@/hooks/use-auth'
import { useToast } from '@/hooks/use-toast'
import AdminLayout from '@/components/admin-layout'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@/components/ui/breadcrumb'

export default function AdminDashboard() {
  const { user, company, loading } = useAuth()
  const { toast } = useToast()
  const [whatsappHealth, setWhatsappHealth] = useState<
    'checking' | 'healthy' | 'unhealthy'
  >('checking')
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false)

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
  const handleLogout = () => setLogoutDialogOpen(true)
  const confirmLogout = () => {
    clearAuthData()
    toast({
      title: 'Logout Berhasil',
      description: 'Anda telah keluar dari admin panel.',
      variant: 'default',
    })
    setTimeout(() => {
      window.location.href = '/login/admin'
    }, 1200)
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
      <AdminLayout>
        <div className="min-h-screen flex flex-col gap-8 items-center justify-center">
          <div className="w-full max-w-2xl grid grid-cols-1 md:grid-cols-2 gap-8">
            <Skeleton className="h-40 w-full" />
            <Skeleton className="h-40 w-full" />
          </div>
          <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
          </div>
        </div>
      </AdminLayout>
    )
  }
  if (!user) {
    return null
  }

  return (
    <AdminLayout>
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
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
        <Button
          variant="outline"
          onClick={handleLogout}
          className="font-semibold"
        >
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
        <Dialog open={logoutDialogOpen} onOpenChange={setLogoutDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Konfirmasi Logout</DialogTitle>
              <DialogDescription>
                Apakah Anda yakin ingin logout dari admin panel?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setLogoutDialogOpen(false)}
              >
                Batal
              </Button>
              <Button variant="destructive" onClick={confirmLogout}>
                Logout
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin/dashboard">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* Welcome Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Dashboard Administrator</h2>
        <p className="text-gray-400">
          Monitor dan kelola operasional Jawara-Net
        </p>
      </div>
      {/* WhatsApp Quick Panel */}
      {/* <div className="mb-8">
        <WhatsAppQuickPanel onStatusChange={handleWhatsAppStatusChange} />
      </div> */}
      {/* Panel Info User & Company */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
      {/* Floating Action Button (FAB) */}
      <button
        className="fixed z-40 bottom-8 right-8 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center text-3xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
        aria-label="Tambah Data"
        onClick={() => alert('Aksi cepat: Tambah data!')}
        style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.18)' }}
      >
        <Plus className="w-8 h-8" />
      </button>
    </AdminLayout>
  )
}
