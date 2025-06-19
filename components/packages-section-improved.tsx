"use client"

import { useState } from "react"
import { SectionTitle } from "@/components/section-title"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Sparkles, Crown, Sword, Check } from "lucide-react"

export function PackagesSectionImproved() {
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
          "Gratis instalasi & router WiFi",
          "Cocok untuk 3-5 device",
          "Streaming HD lancar",
          "Customer support 24/7",
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
          "Perfect untuk WFH & gaming",
          "Video call HD tanpa lag",
          "Support 8-12 device",
          "Priority customer support",
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
          "4K streaming tanpa buffering",
          "Upload file besar cepat",
          "Support 15-20 device",
          "Dedicated customer support",
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
          "Unlimited tanpa FUP",
          "Gaming pro & streaming 4K",
          "Support unlimited device",
          "VIP customer support",
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
        features: ["Bandwidth dedicated", "Static IP address", "SLA 99.9% uptime", "Priority technical support"],
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
        features: ["Bandwidth dedicated full", "Multiple static IP", "24/7 monitoring", "On-site technical support"],
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
          "Ultra-fast dedicated connection",
          "Subnet IP allocation",
          "Redundant connection",
          "Dedicated account manager",
        ],
        popular: false,
        color: "purple",
        character: "🐉",
      },
    ],
  }

  return (
    <section id="packages" className="py-24 nusantara-bg relative overflow-hidden">
      <div className="absolute inset-0 mega-grid opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="💎 PAKET INTERNET JAGOAN 💎"
          subtitle="Pilih paket yang sesuai dengan kebutuhan digital kamu!"
        />

        {/* SIMPLIFIED CATEGORY TABS */}
        <div className="flex justify-center mb-16">
          <div className="mega-card p-2 flex rounded-2xl">
            <Button
              variant={activeCategory === "rumah" ? "default" : "ghost"}
              onClick={() => setActiveCategory("rumah")}
              className={`mega-text px-8 py-4 text-lg font-black rounded-xl transition-all duration-300 flex items-center space-x-3 ${
                activeCategory === "rumah"
                  ? "mega-button text-white"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              <Crown className="h-5 w-5" />
              <span>🏠 Rumahan</span>
            </Button>
            <Button
              variant={activeCategory === "bisnis" ? "default" : "ghost"}
              onClick={() => setActiveCategory("bisnis")}
              className={`mega-text px-8 py-4 text-lg font-black rounded-xl transition-all duration-300 flex items-center space-x-3 ${
                activeCategory === "bisnis"
                  ? "mega-button bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              <Sword className="h-5 w-5" />
              <span>🏢 Bisnis</span>
            </Button>
          </div>
        </div>

        {/* PACKAGE CARDS - IMPROVED LAYOUT */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {packages[activeCategory as keyof typeof packages].map((pkg, index) => (
            <div key={index} className="scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard {...pkg} />
            </div>
          ))}
        </div>

        {/* SIMPLIFIED BONUS SECTION */}
        <div className="mega-card p-12 nusantara-glow mega-hover text-center">
          <div className="mb-8">
            <h3 className="mega-title text-4xl mb-6">🎁 BONUS UNTUK SEMUA PAKET 🎁</h3>
            <p className="mega-text text-gray-300 text-xl max-w-3xl mx-auto">
              Setiap paket sudah termasuk bonus yang bikin kamu makin untung!
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-10">
            <div className="mega-card p-6 mega-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4 mega-glow">
                <Check className="h-8 w-8 text-white" />
              </div>
              <h4 className="mega-text font-black text-white text-lg mb-2">Gratis Instalasi</h4>
              <p className="mega-text text-gray-400">Pemasangan profesional</p>
            </div>
            <div className="mega-card p-6 mega-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4 mega-glow">
                <span className="text-2xl">📶</span>
              </div>
              <h4 className="mega-text font-black text-white text-lg mb-2">WiFi Router Premium</h4>
              <p className="mega-text text-gray-400">Router berkualitas tinggi</p>
            </div>
            <div className="mega-card p-6 mega-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 mega-glow">
                <span className="text-2xl">🛠️</span>
              </div>
              <h4 className="mega-text font-black text-white text-lg mb-2">Maintenance Rutin</h4>
              <p className="mega-text text-gray-400">Perawatan berkala gratis</p>
            </div>
            <div className="mega-card p-6 mega-hover">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4 mega-glow">
                <span className="text-2xl">📞</span>
              </div>
              <h4 className="mega-text font-black text-white text-lg mb-2">Support 24/7</h4>
              <p className="mega-text text-gray-400">Bantuan kapan saja</p>
            </div>
          </div>

          <button
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            className="mega-button px-12 py-6 text-2xl font-black text-white mega-text mega-hover flex items-center space-x-4 mx-auto"
          >
            <Sparkles className="h-8 w-8" />
            <span>🚀 Pilih Paket Sekarang 🚀</span>
            <Sparkles className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  )
}
