"use client"

import { SectionTitle } from "@/components/section-title"
import { ServiceCard } from "@/components/service-card"
import { Home, Building, Network, Wrench, Headphones } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: "🏠 Benteng Digital Rumah",
      description: "Koneksi super ngebut buat streaming, gaming, dan WFH tanpa lag. Bikin rumah jadi istana digital!",
      features: ["Unlimited seperti lautan", "Kecepatan stabil kayak gunung", "Gratis instalasi", "Penjaga 24/7"],
      color: "orange",
    },
    {
      icon: Building,
      title: "🏢 Kerajaan Bisnis Digital",
      description: "Solusi internet enterprise dengan bandwidth dedicated. Bikin bisnis makin jaya dan berkuasa!",
      features: [
        "Bandwidth khusus raja",
        "SLA 99.9% seperti janji ksatria",
        "Support prioritas",
        "IP tetap seperti tahta",
      ],
      color: "blue",
    },
    {
      icon: Network,
      title: "🤝 Jaringan Desa Digital",
      description: "Paket khusus untuk komunitas. Satu koneksi untuk semua, gotong royong internet!",
      features: ["Harga bersahabat", "Sistem управленческий keren", "Pembayaran otomatis", "Awasi terus 24/7"],
      color: "green",
    },
    {
      icon: Wrench,
      title: "🛠️ Bangun Jaringan Impian",
      description: "Jasa instalasi jaringan komputer dan WiFi. Dari gubuk sampai istana, kami siap membangun!",
      features: ["Survey gratis", "Pemasangan rapi jali", "Testing sakti", "Garansi setahun"],
      color: "purple",
    },
    {
      icon: Headphones,
      title: "📞 Garda Depan Support",
      description: "Tim teknis siap membantu 24/7. Ada masalah? Kami datang secepat kilat!",
      features: ["Respon kilat", "Bantuan jarak jauh", "Servis di tempat", "Jaga-jaga terus"],
      color: "pink",
    },
  ]

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="🛡️ KEAHLIAN JAWARA 🛡️"
          subtitle="Layanan lengkap untuk menaklukkan semua tantangan digital!"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
              Butuh Konsultasi Gratis? 💬
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Gak yakin paket mana yang cocok? Tim ahli kami siap bantu kamu pilih solusi internet terbaik sesuai
              kebutuhan dan budget!
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Konsultasi Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
