"use client";

import { SectionTitle } from "@/components/section-title";
import { ServiceCard } from "@/components/service-card";
import { Home, Building, Network, Wrench, Headphones } from "lucide-react";

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
      features: ["Harga bersahabat", "Sistem manajemen keren", "Pembayaran otomatis", "Awasi terus 24/7"],
      color: "green",
    },
    {
      icon: Wrench,
      title: "🛠️ Bangun Jaringan Impian",
      description: "Jasa instalasi jaringan komputer dan WiFi. Dari gubuk sampai istana, kami siap membangun!",
      features: ["Survey gratis", "Pemasangan rapi", "Testing sakti", "Garansi setahun"],
      color: "purple",
    },
    {
      icon: Headphones,
      title: "📞 Garda Depan Support",
      description: "Tim teknis siap membantu 24/7. Ada masalah? Kami datang secepat kilat!",
      features: ["Respon kilat", "Bantuan jarak jauh", "Servis di tempat", "Jaga-jaga terus"],
      color: "pink",
    },
  ];

  return (
    <section id="services" className="py-20 nusantara-bg relative overflow-hidden">
      {/* EPIC BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 mega-grid opacity-30"></div>
      <div className="absolute top-20 left-10 text-6xl garuda-soar opacity-20">⚔️</div>
      <div className="absolute bottom-20 right-10 text-6xl indonesian-wave opacity-20">🏛️</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="🛡️ KEAHLIAN JAWARA 🛡️"
          subtitle="Layanan lengkap untuk menaklukkan semua tantangan digital!"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="mega-card p-12 mega-hover mega-glow scroll-reveal">
            <h3 className="mega-title text-4xl mb-6">💬 Butuh Konsultasi Gratis? 💬</h3>
            <p className="mega-text text-gray-300 mb-8 max-w-3xl mx-auto text-xl leading-relaxed">
              Gak yakin paket mana yang cocok? Tim ahli kami siap bantu kamu pilih solusi internet terbaik sesuai
              kebutuhan dan budget!
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="mega-button px-12 py-6 text-2xl font-black text-white mega-text mega-hover"
            >
              🚀 Konsultasi Sekarang 🚀
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
