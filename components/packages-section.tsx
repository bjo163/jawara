"use client"

import { useState } from "react"
import { SectionTitle } from "@/components/section-title"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"

export function PackagesSection() {
  const [activeCategory, setActiveCategory] = useState("rumah")

  const packages = {
    rumah: [
      {
        name: "Jagoan Neon",
        icon: "🌟",
        speed: "10 Mbps",
        quota: "Unlimited FUP",
        price: "Rp150.000",
        originalPrice: "Rp200.000",
        features: [
          "🆓 Gratis instalasi",
          "🏠 Cocok untuk rumahan",
          "📺 Streaming HD lancar",
          "📱 Support 5-8 device",
          "🛡️ Customer support 24/7",
        ],
        popular: false,
        color: "orange",
        character: "🧙‍♂️",
      },
      {
        name: "Mandor Sakti",
        icon: "🔨",
        speed: "25 Mbps",
        quota: "Unlimited FUP",
        price: "Rp200.000",
        originalPrice: "Rp250.000",
        features: [
          "💪 Stabil buat kerja & belajar dari rumah",
          "📹 Video call HD tanpa lag",
          "🎮 Gaming online smooth",
          "📱 Support 10-15 device",
          "⭐ Priority customer support",
        ],
        popular: true,
        color: "blue",
        character: "👷‍♂️",
      },
      {
        name: "Wiro Sableng",
        icon: "⚔️",
        speed: "35 Mbps",
        quota: "Unlimited FUP",
        price: "Rp250.000",
        originalPrice: "Rp300.000",
        features: [
          "🚀 Ngebut buat streaming & CCTV remote",
          "🎬 4K streaming tanpa buffering",
          "📤 Upload file besar cepat",
          "📱 Support 15-20 device",
          "🎯 Dedicated customer support",
        ],
        popular: false,
        color: "green",
        character: "🥷",
      },
      {
        name: "Sultan",
        icon: "👑",
        speed: "50 Mbps",
        quota: "Unlimited Full",
        price: "Rp300.000",
        originalPrice: "Rp400.000",
        features: [
          "⚡ Prioritas bandwidth, anti lemot 24 jam",
          "♾️ Unlimited tanpa FUP",
          "🎮 Gaming pro & streaming 4K",
          "📱 Support unlimited device",
          "👑 VIP customer support",
        ],
        popular: false,
        color: "purple",
        character: "🤴",
      },
    ],
    bisnis: [
      {
        name: "Startup Warrior",
        icon: "🚀",
        speed: "50 Mbps",
        quota: "Dedicated",
        price: "Rp500.000",
        originalPrice: "Rp650.000",
        features: [
          "🎯 Bandwidth dedicated",
          "🏠 Static IP address",
          "📊 SLA 99.9% uptime",
          "⚡ Priority technical support",
          "🌐 Free domain & email hosting",
        ],
        popular: false,
        color: "orange",
        character: "🦸‍♂️",
      },
      {
        name: "Corporate Beast",
        icon: "🏢",
        speed: "100 Mbps",
        quota: "Dedicated",
        price: "Rp800.000",
        originalPrice: "Rp1.000.000",
        features: [
          "💎 Bandwidth dedicated full",
          "🌐 Multiple static IP",
          "📊 24/7 monitoring",
          "🛠️ On-site technical support",
          "🔄 Backup connection",
        ],
        popular: true,
        color: "blue",
        character: "🦁",
      },
      {
        name: "Enterprise King",
        icon: "👑",
        speed: "200 Mbps",
        quota: "Dedicated",
        price: "Rp1.500.000",
        originalPrice: "Rp2.000.000",
        features: [
          "⚡ Ultra-fast dedicated connection",
          "🌐 Subnet IP allocation",
          "🔄 Redundant connection",
          "👨‍💼 Dedicated account manager",
          "🛠️ Custom network solution",
        ],
        popular: false,
        color: "purple",
        character: "🐉",
      },
    ],
  }

  return (
    <section id="packages" className="py-20 bg-gradient-to-br from-slate-900/50 to-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="🗡️ Paket Internet Pilihan 🗡️"
          subtitle="Pilih paket yang tepat untuk kebutuhan digital Anda"
        />

        {/* Professional Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="professional-card p-2 flex rounded-2xl">
            <Button
              variant={activeCategory === "rumah" ? "default" : "ghost"}
              onClick={() => setActiveCategory("rumah")}
              className={`cartoon-text px-8 py-3 text-lg font-bold rounded-xl transition-all duration-300 ${
                activeCategory === "rumah"
                  ? "professional-button text-white"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              🏠 Paket Rumah
            </Button>
            <Button
              variant={activeCategory === "bisnis" ? "default" : "ghost"}
              onClick={() => setActiveCategory("bisnis")}
              className={`cartoon-text px-8 py-3 text-lg font-bold rounded-xl transition-all duration-300 ${
                activeCategory === "bisnis"
                  ? "professional-button bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              🏢 Paket Bisnis
            </Button>
          </div>
        </div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages[activeCategory as keyof typeof packages].map((pkg, index) => (
            <ProductCard key={index} {...pkg} />
          ))}
        </div>

        {/* Professional Additional Info */}
        <div className="mt-16 professional-card p-8">
          <div className="text-center mb-8">
            <h3 className="cartoon-title text-2xl md:text-3xl font-black text-white mb-4">
              🎁 Bonus Gratis Untuk Semua Paket 🎁
            </h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 professional-glow">
                <span className="text-2xl">🆓</span>
              </div>
              <h4 className="cartoon-text font-bold text-white text-lg mb-2">Gratis Instalasi</h4>
              <p className="cartoon-text text-gray-400">Pemasangan & konfigurasi</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 professional-glow">
                <span className="text-2xl">📶</span>
              </div>
              <h4 className="cartoon-text font-bold text-white text-lg mb-2">WiFi Router</h4>
              <p className="cartoon-text text-gray-400">Router WiFi berkualitas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 professional-glow">
                <span className="text-2xl">🛠️</span>
              </div>
              <h4 className="cartoon-text font-bold text-white text-lg mb-2">Maintenance</h4>
              <p className="cartoon-text text-gray-400">Perawatan rutin gratis</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 professional-glow">
                <span className="text-2xl">📞</span>
              </div>
              <h4 className="cartoon-text font-bold text-white text-lg mb-2">Support 24/7</h4>
              <p className="cartoon-text text-gray-400">Bantuan kapan saja</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
