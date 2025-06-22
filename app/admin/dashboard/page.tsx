"use client"

import { useEffect, useState } from "react"
import { LogOut, Users, BarChart3, Settings, Shield, Wifi, DollarSign, TrendingUp, MessageCircle, AlertTriangle, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getAuthData, clearAuthData, type User as UserType } from "@/data/auth"

export default function AdminDashboard() {
  const [user, setUser] = useState<UserType | null>(null)
  const [whatsappHealth, setWhatsappHealth] = useState<'checking' | 'healthy' | 'unhealthy'>('checking')

  useEffect(() => {
    const { user: authUser } = getAuthData()
    if (!authUser || authUser.role !== 'admin') {
      window.location.href = '/login/admin'
      return    }
    setUser(authUser)
    
    // Check WhatsApp server health on load
    checkWhatsAppHealth()
  }, [])

  const checkWhatsAppHealth = async () => {
    setWhatsappHealth('checking')
    try {
      const response = await fetch('/api/whatsapp/health')
      const result = await response.json()
      setWhatsappHealth(result.success ? 'healthy' : 'unhealthy')
      
      if (!result.success) {
        console.error('WhatsApp health check failed:', result.error, result.details)
      }
    } catch (error) {
      console.error('WhatsApp health check failed:', error)
      setWhatsappHealth('unhealthy')
    }
  }

  const handleLogout = () => {
    clearAuthData()
    window.location.href = '/login/admin'
  }
  const navigateToWhatsApp = () => {
    if (whatsappHealth === 'healthy') {
      window.location.href = '/admin/whatsapp-single'
    }
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  const stats = [
    {
      title: "Total Pelanggan",
      value: "1,234",
      change: "+12%",
      icon: Users,
      color: "text-blue-400"
    },
    {
      title: "Revenue Bulan Ini",
      value: "Rp 125M",
      change: "+8%",
      icon: DollarSign,
      color: "text-green-400"
    },
    {
      title: "Network Uptime",
      value: "99.8%",
      change: "+0.2%",
      icon: Wifi,
      color: "text-purple-400"
    },
    {
      title: "Growth Rate",
      value: "15.3%",
      change: "+3%",
      icon: TrendingUp,
      color: "text-orange-400"
    }
  ]

  const getWhatsAppStatusIcon = () => {
    if (whatsappHealth === 'checking') return <div className="h-5 w-5 animate-spin border-2 border-gray-300 border-t-blue-400 rounded-full" />
    if (whatsappHealth === 'healthy') return <CheckCircle className="h-5 w-5 text-green-400" />
    return <AlertTriangle className="h-5 w-5 text-red-400" />
  }

  const getWhatsAppStatusText = () => {
    if (whatsappHealth === 'checking') return 'Checking...'
    if (whatsappHealth === 'healthy') return 'Online'
    return 'Offline'
  }

  const getWhatsAppStatusColor = () => {
    if (whatsappHealth === 'checking') return 'text-blue-400'
    if (whatsappHealth === 'healthy') return 'text-green-400'
    return 'text-red-400'
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <header className="bg-slate-900 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Shield className="h-8 w-8 text-red-400" />
            <h1 className="text-xl font-bold">Admin Panel</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Admin: {user.name}</span>
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
          <h2 className="text-3xl font-bold mb-2">Dashboard Administrator</h2>
          <p className="text-gray-400">Monitor dan kelola operasional Jawara-Net</p>
        </div>

        {/* WhatsApp Health Status */}
        <Card className="bg-slate-900 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center justify-between">
              <span className="flex items-center">
                <MessageCircle className="h-6 w-6 text-green-400 mr-2" />
                WhatsApp Service Status
              </span>
              <Button
                variant="outline"
                size="sm"
                onClick={checkWhatsAppHealth}
                disabled={whatsappHealth === 'checking'}
              >
                Refresh
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                {getWhatsAppStatusIcon()}
                <div>
                  <div className={`font-semibold ${getWhatsAppStatusColor()}`}>
                    {getWhatsAppStatusText()}
                  </div>
                  <div className="text-sm text-gray-400">
                    {whatsappHealth === 'healthy' && 'WhatsApp server is ready for use'}
                    {whatsappHealth === 'unhealthy' && 'WhatsApp server is not responding'}
                    {whatsappHealth === 'checking' && 'Checking server status...'}
                  </div>
                </div>
              </div>
              <div className="flex space-x-2">
                {whatsappHealth === 'unhealthy' && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.location.href = '/admin/diagnostics'}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Diagnostics
                  </Button>
                )}
                <Button
                  variant={whatsappHealth === 'healthy' ? 'default' : 'secondary'}
                  onClick={navigateToWhatsApp}
                  disabled={whatsappHealth !== 'healthy'}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Manage WhatsApp
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-slate-900 border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-gray-400 flex items-center justify-between">
                  {stat.title}
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-green-400">{stat.change} dari bulan lalu</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-900 border-gray-700 hover:bg-slate-800 transition-colors cursor-pointer">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold text-white mb-2">Manajemen Pelanggan</h3>
              <p className="text-sm text-gray-400">Kelola data pelanggan</p>
            </CardContent>
          </Card>

          <Card 
            className={`bg-slate-900 border-gray-700 transition-colors cursor-pointer ${
              whatsappHealth === 'healthy' ? 'hover:bg-slate-800' : 'opacity-50 cursor-not-allowed'
            }`}
            onClick={navigateToWhatsApp}
          >
            <CardContent className="p-6 text-center">
              <div className="relative">
                <MessageCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <div className="absolute -top-1 -right-1">
                  {whatsappHealth === 'healthy' && <CheckCircle className="h-4 w-4 text-green-400" />}
                  {whatsappHealth === 'unhealthy' && <AlertTriangle className="h-4 w-4 text-red-400" />}
                  {whatsappHealth === 'checking' && (
                    <div className="h-4 w-4 animate-spin border border-gray-300 border-t-blue-400 rounded-full" />
                  )}
                </div>
              </div>
              <h3 className="font-semibold text-white mb-2">WhatsApp Management</h3>
              <p className="text-sm text-gray-400">
                {whatsappHealth === 'healthy' && 'Manage WhatsApp sessions'}
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
                  <span className="text-gray-300">Pelanggan baru: John Smith</span>
                  <span className="text-gray-500">5 menit lalu</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="h-2 w-2 bg-blue-400 rounded-full"></div>
                  <span className="text-gray-300">Maintenance sektor A selesai</span>
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
                  <div className="text-red-400 font-semibold text-sm">High Priority</div>
                  <div className="text-gray-300 text-sm">Server CPU usage &gt;90%</div>
                </div>
                <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <div className="text-yellow-400 font-semibold text-sm">Medium Priority</div>
                  <div className="text-gray-300 text-sm">Scheduled maintenance tomorrow</div>
                </div>
                <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                  <div className="text-blue-400 font-semibold text-sm">Info</div>
                  <div className="text-gray-300 text-sm">Monthly report ready</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
