"use client"

import { useEffect } from "react"
import { Shield, BarChart3, Settings, Users } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { LoginForm } from "@/components/login-form"
import { LiveChatWidget } from "@/components/live-chat-widget"
import { SubscriptionWidget } from "@/components/subscription-widget-fixed"
import { Card, CardContent } from "@/components/ui/card"
import { isAuthenticated, isAdmin } from "@/data/auth"

export default function AdminLoginPage() {
  useEffect(() => {
    // Redirect if already logged in as admin
    if (isAuthenticated() && isAdmin()) {
      window.location.href = '/admin/dashboard'
    }
  }, [])

  const adminFeatures = [
    {
      icon: <BarChart3 className="h-6 w-6 text-blue-400" />,
      title: "Dashboard Analytics",
      description: "Monitor performa jaringan, revenue, dan statistik pelanggan"
    },
    {
      icon: <Users className="h-6 w-6 text-green-400" />,
      title: "Manajemen Pelanggan",
      description: "Kelola data pelanggan, paket, dan status berlangganan"
    },
    {
      icon: <Settings className="h-6 w-6 text-orange-400" />,
      title: "Konfigurasi Sistem",
      description: "Atur paket, harga, coverage area, dan pengaturan lainnya"
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-400" />,
      title: "Keamanan & Audit",
      description: "Monitor aktivitas sistem dan log keamanan"
    }
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <PageHeader />

      <main className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Login Form */}
            <div>
              <div className="text-center lg:text-left mb-8">
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
                  Admin Panel
                </h1>
                <p className="text-xl text-gray-300">
                  Masuk ke panel administrator untuk mengelola sistem Jawara-Net
                </p>
              </div>

              <LoginForm userType="admin" />
            </div>

            {/* Right Side - Admin Features */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Panel Administrator
                </h2>
                <p className="text-gray-400 mb-8">
                  Akses lengkap untuk mengelola infrastruktur, pelanggan, dan operasional Jawara-Net
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {adminFeatures.map((feature, index) => (
                  <Card key={index} className="bg-slate-900/50 border-gray-700 hover:bg-slate-800/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {feature.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Security Notice */}
              <div className="bg-gradient-to-r from-red-900/20 to-purple-900/20 p-6 rounded-lg border border-red-500/20">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-red-400 mb-2">
                      Akses Terbatas
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Panel admin hanya untuk authorized personnel. Semua aktivitas akan dilog dan dimonitor. 
                      Gunakan kredensial yang telah diberikan oleh IT Manager.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact IT */}
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 p-6 rounded-lg border border-gray-700">
                <h3 className="font-semibold text-white mb-2">
                  Perlu Akses Admin?
                </h3>
                <p className="text-gray-400 mb-4">
                  Hubungi IT Manager untuk mendapatkan akses admin
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="mailto:it@jawara-net.com"
                    className="flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    <span>📧</span>
                    <span>Email IT</span>
                  </a>
                  <a
                    href="https://wa.me/6281295295734?text=Halo!%20Saya%20perlu%20akses%20admin%20panel%20Jawara-Net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    <span>💬</span>
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Widgets */}
      <LiveChatWidget />
      <SubscriptionWidget />
    </div>
  )
}
