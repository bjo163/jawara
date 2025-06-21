"use client"

import { SectionTitle } from "@/components/section-title"
import { MapPin, CheckCircle, Clock } from "lucide-react"

export function CoverageSection() {
  const coverageAreas = [
    {
      city: "Jakarta",
      areas: ["Jakarta Pusat", "Jakarta Selatan", "Jakarta Barat", "Jakarta Utara", "Jakarta Timur"],
      status: "active",
      coverage: "95%",
    },
    {
      city: "Bogor",
      areas: ["Bogor Kota", "Cibinong", "Sentul", "Citeureup", "Gunung Putri"],
      status: "active",
      coverage: "85%",
    },
    {
      city: "Depok",
      areas: ["Margonda", "UI Area", "Cinere", "Sawangan", "Beji"],
      status: "active",
      coverage: "90%",
    },
    {
      city: "Tangerang",
      areas: ["Tangerang Kota", "BSD", "Gading Serpong", "Alam Sutera", "Karawaci"],
      status: "active",
      coverage: "88%",
    },
    {
      city: "Bekasi",
      areas: ["Bekasi Kota", "Harapan Indah", "Galaxy", "Summarecon", "Kemang Pratama"],
      status: "active",
      coverage: "82%",
    },
    {
      city: "Bandung",
      areas: ["Bandung Kota", "Cimahi", "Dago", "Setiabudhi", "Antapani"],
      status: "active",
      coverage: "75%",
    },
    {
      city: "Surabaya",
      areas: ["Surabaya Pusat", "Surabaya Barat", "Sidoarjo", "Gresik"],
      status: "active",
      coverage: "70%",
    },
    {
      city: "Yogyakarta",
      areas: ["Yogya Kota", "Sleman", "Bantul", "UGM Area"],
      status: "active",
      coverage: "65%",
    },
    {
      city: "Medan",
      areas: ["Medan Kota", "Medan Barat", "Deli Serdang"],
      status: "coming-soon",
      coverage: "Coming Soon",
    },
    {
      city: "Semarang",
      areas: ["Semarang Kota", "Tembalang", "Banyumanik"],
      status: "coming-soon",
      coverage: "Coming Soon",
    },
  ]

  return (
    <section id="coverage" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Area Coverage" subtitle="Cek apakah lokasi kamu sudah ter-cover jaringan Jawara-Net" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coverageAreas.map((area, index) => (
            <div
              key={index}
              className={`bg-slate-800/50 p-6 rounded-xl border transition-all duration-300 hover:transform hover:scale-105 ${
                area.status === "active"
                  ? "border-green-500/20 hover:border-green-500/40"
                  : "border-orange-500/20 hover:border-orange-500/40"
              }`}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <MapPin className={`h-6 w-6 ${area.status === "active" ? "text-green-500" : "text-orange-500"}`} />
                  <h3 className="text-xl font-bold text-white">{area.city}</h3>
                </div>
                <div className="flex items-center space-x-2">
                  {area.status === "active" ? (
                    <CheckCircle className="h-5 w-5 text-green-500" />
                  ) : (
                    <Clock className="h-5 w-5 text-orange-500" />
                  )}
                  <span
                    className={`text-sm font-semibold ${
                      area.status === "active" ? "text-green-400" : "text-orange-400"
                    }`}
                  >
                    {area.coverage}
                  </span>
                </div>
              </div>

              {/* Areas */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Area yang dilayani:</h4>
                <div className="flex flex-wrap gap-2">
                  {area.areas.map((subArea, subIndex) => (
                    <span
                      key={subIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        area.status === "active"
                          ? "bg-green-500/20 text-green-300 border border-green-500/30"
                          : "bg-orange-500/20 text-orange-300 border border-orange-500/30"
                      }`}
                    >
                      {subArea}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                {area.status === "active" ? (
                  <div className="text-center">
                    <p className="text-green-400 font-semibold mb-2">✅ Siap Melayani!</p>
                    <button
                      onClick={() => {
                        const element = document.getElementById("contact")
                        if (element) element.scrollIntoView({ behavior: "smooth" })
                      }}
                      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                    >
                      Daftar Sekarang
                    </button>
                  </div>
                ) : (
                  <div className="text-center">
                    <p className="text-orange-400 font-semibold mb-2">🚧 Segera Hadir!</p>
                    <button
                      onClick={() => {
                        const element = document.getElementById("contact")
                        if (element) element.scrollIntoView({ behavior: "smooth" })
                      }}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                    >
                      Notify Me
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Coverage Map Info */}
        <div className="mt-16 bg-gradient-to-r from-slate-800/50 to-slate-700/30 p-8 rounded-2xl border border-gray-700">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
              Lokasi Kamu Belum Ada? 🗺️
            </h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Kami terus memperluas jangkauan! Kalau lokasi kamu belum ter-cover, daftar dulu biar kami prioritaskan
              area kamu untuk ekspansi berikutnya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById("contact")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                Request Coverage Area
              </button>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Tanya via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
