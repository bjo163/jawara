"use client"

import { SectionTitle } from "@/components/section-title"
import { MapPin, CheckCircle, Clock, Crown, Sparkles, Sword } from "lucide-react"

export function CoverageSection() {
  const coverageAreas = [
    {
      city: "Jakarta",
      areas: ["Jakarta Pusat", "Jakarta Selatan", "Jakarta Barat", "Jakarta Utara", "Jakarta Timur"],
      status: "active",
      coverage: "95%",
      icon: "🏛️",
      color: "orange",
    },
    {
      city: "Bogor",
      areas: ["Bogor Kota", "Cibinong", "Sentul", "Citeureup", "Gunung Putri"],
      status: "active",
      coverage: "85%",
      icon: "🌋",
      color: "blue",
    },
    {
      city: "Depok",
      areas: ["Margonda", "UI Area", "Cinere", "Sawangan", "Beji"],
      status: "active",
      coverage: "90%",
      icon: "🎓",
      color: "green",
    },
    {
      city: "Tangerang",
      areas: ["Tangerang Kota", "BSD", "Gading Serpong", "Alam Sutera", "Karawaci"],
      status: "active",
      coverage: "88%",
      icon: "🏢",
      color: "purple",
    },
    {
      city: "Bekasi",
      areas: ["Bekasi Kota", "Harapan Indah", "Galaxy", "Summarecon", "Kemang Pratama"],
      status: "active",
      coverage: "82%",
      icon: "🏭",
      color: "pink",
    },
    {
      city: "Bandung",
      areas: ["Bandung Kota", "Cimahi", "Dago", "Setiabudhi", "Antapani"],
      status: "active",
      coverage: "75%",
      icon: "🏔️",
      color: "cyan",
    },
    {
      city: "Surabaya",
      areas: ["Surabaya Pusat", "Surabaya Barat", "Sidoarjo", "Gresik"],
      status: "active",
      coverage: "70%",
      icon: "🚢",
      color: "emerald",
    },
    {
      city: "Yogyakarta",
      areas: ["Yogya Kota", "Sleman", "Bantul", "UGM Area"],
      status: "active",
      coverage: "65%",
      icon: "🏯",
      color: "amber",
    },
    {
      city: "Medan",
      areas: ["Medan Kota", "Medan Barat", "Deli Serdang"],
      status: "coming-soon",
      coverage: "Coming Soon",
      icon: "🌴",
      color: "orange",
    },
    {
      city: "Semarang",
      areas: ["Semarang Kota", "Tembalang", "Banyumanik"],
      status: "coming-soon",
      coverage: "Coming Soon",
      icon: "⛵",
      color: "blue",
    },
  ]

  const colorClasses = {
    orange: {
      gradient: "from-orange-500 via-red-500 to-pink-500",
      text: "text-orange-400",
      border: "border-orange-500/30",
      bg: "bg-orange-500/20",
    },
    blue: {
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      text: "text-blue-400",
      border: "border-blue-500/30",
      bg: "bg-blue-500/20",
    },
    green: {
      gradient: "from-green-500 via-emerald-500 to-lime-500",
      text: "text-green-400",
      border: "border-green-500/30",
      bg: "bg-green-500/20",
    },
    purple: {
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      text: "text-purple-400",
      border: "border-purple-500/30",
      bg: "bg-purple-500/20",
    },
    pink: {
      gradient: "from-pink-500 via-rose-500 to-red-500",
      text: "text-pink-400",
      border: "border-pink-500/30",
      bg: "bg-pink-500/20",
    },
    cyan: {
      gradient: "from-cyan-500 via-blue-500 to-indigo-500",
      text: "text-cyan-400",
      border: "border-cyan-500/30",
      bg: "bg-cyan-500/20",
    },
    emerald: {
      gradient: "from-emerald-500 via-green-500 to-teal-500",
      text: "text-emerald-400",
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/20",
    },
    amber: {
      gradient: "from-amber-500 via-yellow-500 to-orange-500",
      text: "text-amber-400",
      border: "border-amber-500/30",
      bg: "bg-amber-500/20",
    },
  }

  return (
    <section id="coverage" className="py-24 nusantara-bg relative overflow-hidden">
      {/* EPIC BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 mega-grid opacity-30"></div>
      <div className="absolute top-20 left-10 text-6xl indonesian-wave opacity-20">🗺️</div>
      <div className="absolute bottom-20 right-10 text-6xl garuda-soar opacity-20">🏝️</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="🗺️ PETA KEKUASAAN NUSANTARA 🗺️"
          subtitle="Cek apakah wilayah kamu sudah dikuasai oleh jaringan Jawara-Net!"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {coverageAreas.map((area, index) => {
            const colors = colorClasses[area.color as keyof typeof colorClasses]

            return (
              <div
                key={index}
                className="mega-card p-8 mega-hover mega-glow scroll-reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* EPIC HEADER */}
                <div className="text-center mb-8">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 mega-glow nusantara-glow relative`}
                  >
                    <span className="text-4xl">{area.icon}</span>
                    {area.status === "active" ? (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    ) : (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
                        <Clock className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>

                  <h3 className={`mega-title text-2xl mb-4 ${colors.text} flex items-center justify-center space-x-2`}>
                    <MapPin className="h-6 w-6" />
                    <span>{area.city}</span>
                  </h3>

                  <div className="mega-card p-4 mb-6">
                    <div
                      className={`text-3xl font-black mb-2 mega-title ${area.status === "active" ? "text-green-400" : "text-orange-400"}`}
                    >
                      {area.coverage}
                    </div>
                    <div className="mega-text text-gray-400 font-bold">
                      {area.status === "active" ? "🏆 Sudah Dikuasai!" : "🚧 Segera Hadir!"}
                    </div>
                  </div>
                </div>

                {/* EPIC AREAS */}
                <div className="space-y-4 mb-8">
                  <h4 className="mega-text font-black text-white text-lg mb-4 flex items-center space-x-2">
                    <Sword className="h-5 w-5" />
                    <span>Wilayah Kekuasaan:</span>
                  </h4>
                  <div className="space-y-3">
                    {area.areas.map((subArea, subIndex) => (
                      <div key={subIndex} className={`mega-card p-3 ${colors.bg} ${colors.border} border-2 mega-hover`}>
                        <div className="flex items-center space-x-3">
                          {area.status === "active" ? (
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          ) : (
                            <Clock className="h-5 w-5 text-orange-500 flex-shrink-0" />
                          )}
                          <span className={`mega-text font-bold ${colors.text}`}>{subArea}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* EPIC CTA */}
                <div className="text-center">
                  {area.status === "active" ? (
                    <div className="space-y-4">
                      <div className="mega-card p-4 bg-green-500/20 border-2 border-green-500/30">
                        <p className="mega-text text-green-400 font-black text-lg mb-2">✅ Siap Bertempur!</p>
                        <p className="mega-text text-gray-300 text-sm">Koneksi super ngebut sudah tersedia</p>
                      </div>
                      <button
                        onClick={() => {
                          const element = document.getElementById("contact")
                          if (element) element.scrollIntoView({ behavior: "smooth" })
                        }}
                        className={`w-full mega-button bg-gradient-to-r ${colors.gradient} text-white font-bold mega-text py-3 mega-hover flex items-center justify-center space-x-2`}
                      >
                        <Crown className="h-5 w-5" />
                        <span>🚀 Taklukkan Sekarang!</span>
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="mega-card p-4 bg-orange-500/20 border-2 border-orange-500/30">
                        <p className="mega-text text-orange-400 font-black text-lg mb-2">🚧 Ekspansi Dimulai!</p>
                        <p className="mega-text text-gray-300 text-sm">Daftar dulu untuk prioritas</p>
                      </div>
                      <button
                        onClick={() => {
                          const element = document.getElementById("contact")
                          if (element) element.scrollIntoView({ behavior: "smooth" })
                        }}
                        className="w-full mega-button bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold mega-text py-3 mega-hover flex items-center justify-center space-x-2"
                      >
                        <Sparkles className="h-5 w-5" />
                        <span>📢 Notify Me!</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* EPIC REQUEST SECTION */}
        <div className="mt-20">
          <div className="mega-card p-16 mega-hover mega-glow nusantara-glow">
            <div className="text-center">
              <div className="relative mb-12">
                <div className="w-32 h-32 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mega-glow nusantara-glow">
                  <span className="text-6xl">🗺️</span>
                </div>
                <Sparkles className="absolute -top-4 -right-4 h-12 w-12 text-yellow-400 animate-spin" />
                <Crown className="absolute -bottom-4 -left-4 h-10 w-10 text-yellow-500 indonesian-wave" />
                <Sword className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 text-red-500 opacity-30 particle-float" />
              </div>

              <h3 className="mega-title text-4xl md:text-5xl font-black text-white mb-8">
                🏝️ Wilayah Kamu Belum Dikuasai? 🏝️
              </h3>

              <div className="mega-card p-10 mb-12 max-w-4xl mx-auto">
                <p className="mega-text text-gray-300 mb-8 text-2xl leading-relaxed font-bold">
                  Kami terus memperluas <span className="text-orange-400 font-black">kekuasaan digital</span> ke seluruh
                  Nusantara! Kalau wilayah kamu belum ter-cover, daftar dulu biar kami prioritaskan area kamu untuk
                  <span className="text-red-400 font-black"> ekspansi berikutnya</span>!
                </p>

                <div className="grid md:grid-cols-3 gap-8 mb-10">
                  <div className="mega-card p-6 mega-hover">
                    <div className="text-5xl mb-4 garuda-soar">🎯</div>
                    <h4 className="mega-text font-black text-orange-400 text-xl mb-2">Prioritas Ekspansi</h4>
                    <p className="mega-text text-gray-400">Area dengan banyak request akan diprioritaskan</p>
                  </div>
                  <div className="mega-card p-6 mega-hover" style={{ animationDelay: "0.1s" }}>
                    <div className="text-5xl mb-4 indonesian-wave">📞</div>
                    <h4 className="mega-text font-black text-blue-400 text-xl mb-2">Update Berkala</h4>
                    <p className="mega-text text-gray-400">Kami akan kabari progress ekspansi via WhatsApp</p>
                  </div>
                  <div className="mega-card p-6 mega-hover" style={{ animationDelay: "0.2s" }}>
                    <div className="text-5xl mb-4 particle-float">🎁</div>
                    <h4 className="mega-text font-black text-green-400 text-xl mb-2">Early Bird Promo</h4>
                    <p className="mega-text text-gray-400">Diskon khusus untuk pendaftar pertama di area baru</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <button
                  onClick={() => {
                    const element = document.getElementById("contact")
                    if (element) element.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="mega-button px-12 py-6 text-2xl font-black text-white mega-text mega-hover flex items-center space-x-4"
                >
                  <Crown className="h-8 w-8" />
                  <span>🗺️ Request Coverage Area</span>
                  <Sword className="h-8 w-8" />
                </button>
                <button
                  onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
                  className="mega-button bg-gradient-to-r from-green-500 to-emerald-500 px-12 py-6 text-2xl font-black text-white mega-text mega-hover flex items-center space-x-4"
                >
                  <Sparkles className="h-8 w-8" />
                  <span>💬 Tanya via WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
