"use client"

import { SectionTitle } from "@/components/section-title"
import { TechTimeline } from "@/components/tech-timeline"
import { FileText, MapPin, Wrench, Wifi } from "lucide-react"

export function ProcessSection() {
  const steps = [
    {
      icon: FileText,
      title: "Isi Form Pendaftaran",
      description: "Daftar online atau via WhatsApp. Cuma butuh 2 menit, gampang banget!",
      details: ["Data diri lengkap", "Pilih paket internet", "Tentukan jadwal survey"],
      color: "orange",
    },
    {
      icon: MapPin,
      title: "Survey Lokasi",
      description: "Tim teknisi datang ke lokasi untuk cek kelayakan dan jarak dari tower terdekat.",
      details: ["Cek sinyal coverage", "Ukur jarak kabel", "Tentukan titik instalasi"],
      color: "blue",
    },
    {
      icon: Wrench,
      title: "Instalasi Perangkat",
      description: "Pemasangan kabel fiber optic dan konfigurasi router. Dikerjain sama teknisi berpengalaman!",
      details: ["Pasang kabel fiber", "Setup router WiFi", "Testing koneksi"],
      color: "green",
    },
    {
      icon: Wifi,
      title: "Aktif & Terhubung",
      description: "Internet siap dipakai! Selamat menikmati koneksi super cepat tanpa buffering.",
      details: ["Aktivasi akun", "Serah terima password", "Panduan penggunaan"],
      color: "purple",
    },
  ]

  return (
    <section id="process" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Proses Aktivasi" subtitle="Dari daftar sampai internetan, cuma 4 langkah mudah!" />

        <TechTimeline steps={steps} />

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-500 mb-2">⚡ 1-3 Hari</div>
            <h4 className="text-lg font-semibold text-white mb-2">Proses Instalasi</h4>
            <p className="text-gray-400">Dari survey sampai internet aktif, maksimal 3 hari kerja</p>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-blue-500 mb-2">🆓 Gratis</div>
            <h4 className="text-lg font-semibold text-white mb-2">Biaya Survey</h4>
            <p className="text-gray-400">Survey lokasi dan konsultasi 100% gratis, no hidden cost</p>
          </div>

          <div className="text-center">
            <div className="text-4xl font-bold text-green-500 mb-2">📞 24/7</div>
            <h4 className="text-lg font-semibold text-white mb-2">Customer Support</h4>
            <p className="text-gray-400">Tim support siap membantu kapan aja kamu butuh</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) element.scrollIntoView({ behavior: "smooth" })
            }}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Mulai Proses Pendaftaran
          </button>
        </div>
      </div>
    </section>
  )
}
