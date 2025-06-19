"use client";

import { useState } from "react";
import { SectionTitle } from "@/components/section-title";
import { ProductCard } from "@/components/product-card";
import { Button } from "@/components/ui/button";
import { Sparkles, Crown, Sword } from "lucide-react";
import { InternetCalculator } from "@/components/internet-calculator";

export function PackagesSection() {
  const [activeCategory, setActiveCategory] = useState("rumah");

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
  };

  return (
    <section id="packages" className="py-24 nusantara-bg relative overflow-hidden">
      {/* SPECTACULAR BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 mega-grid opacity-30"></div>
      <div className="absolute top-20 left-10 text-6xl indonesian-wave opacity-20">⚔️</div>
      <div className="absolute bottom-20 right-10 text-6xl garuda-soar opacity-20">👑</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="🗡️ ARSENAL SENJATA INTERNET 🗡️"
          subtitle="Pilih senjata digital terbaik untuk menaklukkan dunia maya Nusantara!"
        />

        {/* SPECTACULAR CATEGORY TABS */}
        <div className="flex justify-center mb-16">
          <div className="mega-card p-3 flex rounded-3xl nusantara-glow">
            <Button
              variant={activeCategory === "rumah" ? "default" : "ghost"}
              onClick={() => setActiveCategory("rumah")}
              className={`mega-text px-12 py-6 text-xl font-black rounded-2xl transition-all duration-500 flex items-center space-x-4 mega-hover ${
                activeCategory === "rumah"
                  ? "mega-button text-white nusantara-glow"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              <Crown className="h-6 w-6" />
              <span>🏠 ISTANA DIGITAL</span>
            </Button>
            <Button
              variant={activeCategory === "bisnis" ? "default" : "ghost"}
              onClick={() => setActiveCategory("bisnis")}
              className={`mega-text px-12 py-6 text-xl font-black rounded-2xl transition-all duration-500 flex items-center space-x-4 mega-hover ${
                activeCategory === "bisnis"
                  ? "mega-button bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white nusantara-glow"
                  : "text-gray-300 hover:text-white hover:bg-white/10"
              }`}
            >
              <Sword className="h-6 w-6" />
              <span>🏢 KERAJAAN BISNIS</span>
            </Button>
          </div>
        </div>

        {/* SPECTACULAR PACKAGE CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {packages[activeCategory as keyof typeof packages].map((pkg, index) => (
            <div key={index} className="scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard {...pkg} />
            </div>
          ))}
        </div>

        {/* INTERNET CALCULATOR SECTION */}
        <div className="mt-20">
          <div className="text-center mb-16">
            <h3 className="mega-title text-4xl md:text-5xl font-black text-white mb-6">
              🧮 KALKULATOR KEBUTUHAN INTERNET 🧮
            </h3>
            <p className="mega-text text-2xl text-gray-300 leading-relaxed font-bold max-w-4xl mx-auto">
              Tidak yakin paket mana yang cocok? Gunakan kalkulator pintar kami untuk menentukan kebutuhan internet yang
              tepat!
            </p>
          </div>

          <InternetCalculator />
        </div>

        {/* SPECTACULAR BONUS SECTION */}
        <div className="mt-20">
          <div className="mega-card p-12 nusantara-glow mega-hover">
            <div className="text-center mb-12">
              <div className="relative inline-block">
                <h3 className="mega-title text-4xl md:text-5xl font-black text-white mb-6">
                  🎁 HARTA KARUN GRATIS UNTUK SEMUA JAGOAN! 🎁
                </h3>
                <Sparkles className="absolute -top-4 -right-4 h-10 w-10 text-yellow-400 animate-spin" />
                <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center mega-hover">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 mega-glow nusantara-glow">
                  <span className="text-4xl">🆓</span>
                </div>
                <h4 className="mega-text font-black text-white text-xl mb-3">Gratis Instalasi</h4>
                <p className="mega-text text-gray-400 font-semibold">Pemasangan & konfigurasi profesional</p>
              </div>
              <div className="text-center mega-hover" style={{ animationDelay: "0.1s" }}>
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-cyan-500 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-6 mega-glow nusantara-glow">
                  <span className="text-4xl">📶</span>
                </div>
                <h4 className="mega-text font-black text-white text-xl mb-3">WiFi Router Premium</h4>
                <p className="mega-text text-gray-400 font-semibold">Router WiFi berkualitas tinggi</p>
              </div>
              <div className="text-center mega-hover" style={{ animationDelay: "0.2s" }}>
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6 mega-glow nusantara-glow">
                  <span className="text-4xl">🛠️</span>
                </div>
                <h4 className="mega-text font-black text-white text-xl mb-3">Maintenance Rutin</h4>
                <p className="mega-text text-gray-400 font-semibold">Perawatan berkala tanpa biaya</p>
              </div>
              <div className="text-center mega-hover" style={{ animationDelay: "0.3s" }}>
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 mega-glow nusantara-glow">
                  <span className="text-4xl">📞</span>
                </div>
                <h4 className="mega-text font-black text-white text-xl mb-3">Support 24/7</h4>
                <p className="mega-text text-gray-400 font-semibold">Bantuan kapan saja dibutuhkan</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="mega-button px-12 py-6 text-2xl font-black text-white mega-text mega-hover flex items-center space-x-4 mx-auto"
              >
                <Sparkles className="h-8 w-8" />
                <span>🚀 KLAIM HARTA KARUN SEKARANG! 🚀</span>
                <Sparkles className="h-8 w-8" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
