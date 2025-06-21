"use client"

import { useEffect, useState } from "react"
import { LogOut, User, Wifi, CreditCard, HeadphonesIcon, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getAuthData, clearAuthData, type User as UserType } from "@/data/auth"

export default function PelangganDashboard() {
  const [user, setUser] = useState<UserType | null>(null)

  useEffect(() => {
    const { user: authUser } = getAuthData()
    if (!authUser || authUser.role !== 'pelanggan') {
      window.location.href = '/login/pelanggan'
      return
    }
    setUser(authUser)
  }, [])

  const handleLogout = () => {
    clearAuthData()
    window.location.href = '/login/pelanggan'
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="bg-slate-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold">Portal Pelanggan</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Halo, {user.name}</span>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Selamat Datang, {user.name}!</h2>
          <p className="text-gray-400">Kelola akun dan berlangganan internet Anda di sini</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-slate-900 border-gray-700">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-gray-400">Paket Aktif</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-3">
                <Wifi className="h-8 w-8 text-blue-400" />
                <div>
                  <div className="text-xl font-bold text-white">{user.package}</div>
                  <div className="text-sm text-green-400">Aktif</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-gray-700">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-gray-400">Status Pembayaran</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-3">
                <CreditCard className="h-8 w-8 text-green-400" />
                <div>
                  <div className="text-xl font-bold text-white">Lunas</div>
                  <div className="text-sm text-gray-400">Jatuh tempo: 25 Jan</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-gray-700">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm text-gray-400">Status Koneksi</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 bg-green-400 rounded-full"></div>
                <div>
                  <div className="text-xl font-bold text-white">Online</div>
                  <div className="text-sm text-gray-400">Uptime: 99.8%</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-slate-900 border-gray-700 hover:bg-slate-800 transition-colors cursor-pointer">
            <CardContent className="p-6 text-center">
              <User className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Profil Saya</h3>
              <p className="text-sm text-gray-400">Kelola informasi akun</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-gray-700 hover:bg-slate-800 transition-colors cursor-pointer">
            <CardContent className="p-6 text-center">
              <CreditCard className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Pembayaran</h3>
              <p className="text-sm text-gray-400">Riwayat & tagihan</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-gray-700 hover:bg-slate-800 transition-colors cursor-pointer">
            <CardContent className="p-6 text-center">
              <HeadphonesIcon className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Support</h3>
              <p className="text-sm text-gray-400">Bantuan & tiket</p>
            </CardContent>
          </Card>

          <Card className="bg-slate-900 border-gray-700 hover:bg-slate-800 transition-colors cursor-pointer">
            <CardContent className="p-6 text-center">
              <Settings className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Pengaturan</h3>
              <p className="text-sm text-gray-400">Konfigurasi akun</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="bg-slate-900 border-gray-700 mt-8">
          <CardHeader>
            <CardTitle className="text-white">Aktivitas Terbaru</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm">
                <div className="h-2 w-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">Pembayaran bulan Januari berhasil</span>
                <span className="text-gray-500">2 hari lalu</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">Speed test: 98.5 Mbps</span>
                <span className="text-gray-500">1 minggu lalu</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <div className="h-2 w-2 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-300">Maintenance terjadwal selesai</span>
                <span className="text-gray-500">2 minggu lalu</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
