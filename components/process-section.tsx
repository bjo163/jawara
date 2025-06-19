"use client"

import { SectionTitle } from "@/components/section-title"
import { TechTimeline } from "@/components/tech-timeline"
import { FileText, MapPin, Wrench, Wifi, Crown, Sparkles, Sword } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: FileText,
      title: "Isi Form Pendaftaran",
      description: "Daftar online atau via WhatsApp. Cuma butuh 2 menit, gampang banget!",
      details: ["Data diri lengkap", "Pilih paket internet", "Tentukan jadwal survey"],
      color: "orange",
      character: "📝",
      epicTitle: "🗡️ DAFTAR SEBAGAI JAGOAN 🗡️",
    },
    {
      icon: MapPin,
      title: "Survey Lokasi",
      description: "Tim teknisi datang ke lokasi untuk cek kelayakan dan jarak dari tower terdekat.",
      details: ["Cek sinyal coverage", "Ukur jarak kabel", "Tentukan titik instalasi"],
      color: "blue",
      character: "🗺️",
      epicTitle: "🏛️ PEMETAAN WILAYAH 🏛️",
    },
    {
      icon: Wrench,
      title: "Instalasi Perangkat",
      description: "Pemasangan kabel fiber optic dan konfigurasi router. Dikerjain sama teknisi berpengalaman!",
      details: ["Pasang kabel fiber", "Setup router WiFi", "Testing koneksi"],
      color: "green",
      character: "🔧",
      epicTitle: "⚔️ PEMASANGAN SENJATA ⚔️",
    },
    {
      icon: Wifi,
      title: "Aktif & Terhubung",
      description: "Internet siap dipakai! Selamat menikmati koneksi super cepat tanpa buffering.",
      details: ["Aktivasi akun", "Serah terima password", "Panduan penggunaan"],
      color: "purple",
      character: "🚀",
      epicTitle: "👑 TAKLUKKAN DUNIA MAYA 👑",
    },
  ]

  return (
    <section id="process" className="py-24 nusantara-bg relative overflow-hidden">
      {/* EPIC BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 mega-grid opacity-30"></div>
      <div className="absolute top-20 left-10 text-6xl indonesian-wave opacity-20">⚔️</div>
      <div className="absolute bottom-20 right-10 text-6xl garuda-soar opacity-20">🏛️</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="⚔️ PROSES AKTIVASI JAGOAN ⚔️"
          subtitle="Dari daftar sampai menaklukkan dunia maya, cuma 4 langkah mudah!"
        />

        <TechTimeline steps={steps} />

        {/* EPIC ADDITIONAL INFO */}
        <div className="mt-20 grid md:grid-cols-3 gap-10">
          <div className="mega-card p-10 text-center mega-hover mega-glow scroll-reveal">
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mega-glow nusantara-glow">
                <span className="text-4xl">⚡</span>
              </div>
              <Sparkles className="absolute -top-2 -right-2 h-8 w-8 text-yellow-400 animate-spin" />
            </div>
            <div className="mega-title text-4xl font-black text-orange-400 mb-4">1-3 Hari</div>
            <h4 className="mega-text text-xl font-black text-white mb-4">🚀 Proses Instalasi</h4>
            <p className="mega-text text-gray-300 font-bold leading-relaxed">
              Dari survey sampai internet aktif, maksimal 3 hari kerja. Secepat kilat Garuda!
            </p>
          </div>

          <div
            className="mega-card p-10 text-center mega-hover mega-glow scroll-reveal"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mega-glow nusantara-glow">
                <span className="text-4xl">🆓</span>
              </div>
              <Crown className="absolute -top-2 -right-2 h-8 w-8 text-yellow-500 indonesian-wave" />
            </div>
            <div className="mega-title text-4xl font-black text-blue-400 mb-4">Gratis</div>
            <h4 className="mega-text text-xl font-black text-white mb-4">🛡️ Biaya Survey</h4>
            <p className="mega-text text-gray-300 font-bold leading-relaxed">
              Survey lokasi dan konsultasi 100% gratis, no hidden cost. Seperti kebaikan raja!
            </p>
          </div>

          <div
            className="mega-card p-10 text-center mega-hover mega-glow scroll-reveal"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 via-emerald-500 to-lime-500 rounded-2xl flex items-center justify-center mx-auto mega-glow nusantara-glow">
                <span className="text-4xl">📞</span>
              </div>
              <Sword className="absolute -top-2 -right-2 h-8 w-8 text-red-500 particle-float" />
            </div>
            <div className="mega-title text-4xl font-black text-green-400 mb-4">24/7</div>
            <h4 className="mega-text text-xl font-black text-white mb-4">🏆 Customer Support</h4>
            <p className="mega-text text-gray-300 font-bold leading-relaxed">
              Tim support siap membantu kapan aja kamu butuh. Penjaga setia kerajaan digital!
            </p>
          </div>
        </div>

        {/* EPIC CTA */}
        <div className="mt-16 text-center">
          <div className="mega-card p-12 mega-hover mega-glow nusantara-glow scroll-reveal">
            <div className="relative mb-8">
              <h3 className="mega-title text-4xl md:text-5xl font-black text-white mb-6">
                🚀 SIAP MEMULAI PETUALANGAN DIGITAL? 🚀
              </h3>
              <div className="flex justify-center space-x-8 mb-8">
                <span className="text-6xl garuda-soar">🦅</span>
                <span className="text-6xl indonesian-wave">⚔️</span>
                <span className="text-6xl particle-float">🏛️</span>
              </div>
            </div>
            <p className="mega-text text-gray-300 mb-10 max-w-4xl mx-auto text-2xl leading-relaxed font-bold">
              Bergabunglah dengan ribuan jagoan digital yang sudah merasakan kekuatan internet{" "}
              <span className="text-orange-400 font-black">super ngebut</span> Jawara-Net!
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="mega-button px-16 py-8 text-3xl font-black text-white mega-text mega-hover flex items-center space-x-6 mx-auto"
            >
              <Crown className="h-10 w-10" />
              <span>👑 MULAI PROSES PENDAFTARAN 👑</span>
              <Sparkles className="h-10 w-10" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
