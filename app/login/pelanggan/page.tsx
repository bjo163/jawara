"use client"

import { useEffect } from "react"
import { Shield, Users, Zap, Clock } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { LoginForm } from "@/components/login-form"
import { LiveChatWidget } from "@/components/live-chat-widget"
import { SubscriptionWidget } from "@/components/subscription-widget-fixed"
import { Card, CardContent } from "@/components/ui/card"
import { isAuthenticated, isPelanggan } from "@/data/auth"

export default function PelangganLoginPage() {
  useEffect(() => {
    // Redirect if already logged in as pelanggan
    if (isAuthenticated() && isPelanggan()) {
      window.location.href = '/pelanggan/dashboard'
    }
  }, [])

  const benefits = [
    {
      icon: <Users className="h-6 w-6 text-blue-400" />,
      title: "Kelola Akun",
      description: "Lihat informasi akun, paket, dan riwayat pembayaran"
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-400" />,
      title: "Monitor Usage",
      description: "Pantau penggunaan internet dan kecepatan real-time"
    },
    {
      icon: <Clock className="h-6 w-6 text-green-400" />,
      title: "Riwayat Layanan",
      description: "Akses riwayat tiket support dan maintenance"
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-400" />,
      title: "Keamanan",
      description: "Ubah password dan pengaturan keamanan akun"
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
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                  Portal Pelanggan
                </h1>
                <p className="text-xl text-gray-300">
                  Masuk ke akun Anda untuk mengakses layanan dan informasi berlangganan
                </p>
              </div>

              <LoginForm userType="pelanggan" />
            </div>

            {/* Right Side - Benefits */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold mb-4 text-white">
                  Akses Portal Pelanggan
                </h2>
                <p className="text-gray-400 mb-8">
                  Kelola berlangganan internet Anda dengan mudah melalui portal pelanggan Jawara-Net
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="bg-slate-900/50 border-gray-700 hover:bg-slate-800/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          {benefit.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Help Section */}
              <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 p-6 rounded-lg border border-gray-700">
                <h3 className="font-semibold text-white mb-2">
                  Butuh Bantuan?
                </h3>
                <p className="text-gray-400 mb-4">
                  Tim customer service kami siap membantu 24/7
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://wa.me/6281295295734?text=Halo%20Jawara-Net!%20Saya%20butuh%20bantuan%20dengan%20akun%20pelanggan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    <span>💬</span>
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="/contact"
                    className="flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    <span>📞</span>
                    <span>Hubungi Kami</span>
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
