"use client";

import { SectionTitle } from "@/components/section-title";
import { TestimonialCard } from "@/components/testimonial-card";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Andi Pratama",
      role: "Content Creator Jagoan",
      location: "Jakarta Selatan",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      comment:
        "Sejak pakai Jawara-Net, channel YouTube gue jadi makin berkuasa! Upload video ngebut kayak kilat, live streaming lancar jaya tanpa drama. Ini sih internet sultan beneran! 🔥👑",
      package: "Wiro Sableng 35 Mbps",
    },
    {
      name: "Sarah Dewi",
      role: "Remote Worker Tangguh",
      location: "Bandung",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      comment:
        "WFH jadi medan perang yang bisa gue taklukkin! Video call meeting sekuat baja, gak pernah putus asa. Tim support sigap membantu setiap saat. Jawara-Net emang andalan! 👍💪",
      package: "Mandor Sakti 25 Mbps",
    },
    {
      name: "Budi Santoso",
      role: "Pemilik Warnet Perkasa",
      location: "Surabaya",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      comment:
        "Warnet gue sekarang jadi arena gladiator internet! Customer puas karena koneksi stabil kayak tembok raksasa. Gaming online tanpa ampun, streaming tanpa batas. Omzet meroket! 💰🚀",
      package: "Corporate Beast 100 Mbps",
    },
    {
      name: "Maya Sari",
      role: "Mahasiswi Cendekiawan",
      location: "Yogyakarta",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      comment:
        "Kuliah online jadi petualangan seru, download materi kuliah secepat ninja. Harganya juga bersahabat buat kantong mahasiswa. Jawara-Net emang pahlawan! 🎓🦸‍♀️",
      package: "Jagoan Neon 10 Mbps",
    },
    {
      name: "Rizki Firmansyah",
      role: "Gamer Pro Legendaris",
      location: "Medan",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      comment:
        "Ping serendah rumput, koneksi sekuat baja, perfect buat competitive gaming! Gak ada lagi lag yang menghalangi kemenangan. Jawara-Net emang juara sejati! ⚡🏆",
      package: "Sultan 50 Mbps",
    },
    {
      name: "Ibu Sinta",
      role: "Ibu Rumah Tangga Super",
      location: "Bekasi",
      image: "/placeholder.svg?height=60&width=60",
      rating: 5,
      comment:
        "Anak-anak sekolah online lancar, suami WFH juga gak ada gangguan. Netflix keluarga juga tanpa hambatan. Satu internet buat semua kebutuhan keluarga! 👨‍👩‍👧‍👦💖",
      package: "Mandor Sakti 25 Mbps",
    },
  ];

  return (
    <section id="testimonials" className="py-20 nusantara-bg relative overflow-hidden">
      {/* EPIC BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 mega-grid opacity-30"></div>
      <div className="absolute top-20 left-10 text-6xl particle-float opacity-20">🏆</div>
      <div className="absolute bottom-20 right-10 text-6xl garuda-soar opacity-20">💬</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="🗣️ KESAKSIAN PARA JAGOAN 🗣️"
          subtitle="Ribuan warrior digital udah merasakan kekuatan internet Jawara-Net!"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="mega-card p-8 mega-hover mega-glow scroll-reveal">
            <div className="text-5xl font-black text-orange-500 mb-4 mega-title">4.9/5</div>
            <div className="mega-text text-gray-400 text-lg">Rating Pelanggan</div>
          </div>
          <div className="mega-card p-8 mega-hover mega-glow scroll-reveal" style={{ animationDelay: "0.1s" }}>
            <div className="text-5xl font-black text-blue-500 mb-4 mega-title">1000+</div>
            <div className="mega-text text-gray-400 text-lg">Pelanggan Aktif</div>
          </div>
          <div className="mega-card p-8 mega-hover mega-glow scroll-reveal" style={{ animationDelay: "0.2s" }}>
            <div className="text-5xl font-black text-green-500 mb-4 mega-title">99.9%</div>
            <div className="mega-text text-gray-400 text-lg">Uptime</div>
          </div>
          <div className="mega-card p-8 mega-hover mega-glow scroll-reveal" style={{ animationDelay: "0.3s" }}>
            <div className="text-5xl font-black text-purple-500 mb-4 mega-title">24/7</div>
            <div className="mega-text text-gray-400 text-lg">Customer Support</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="mega-card p-12 mega-hover mega-glow scroll-reveal">
            <h3 className="mega-title text-4xl mb-6">🚀 Mau Jadi Bagian dari Keluarga Jawara-Net? 🚀</h3>
            <p className="mega-text text-gray-300 mb-8 max-w-3xl mx-auto text-xl leading-relaxed">
              Bergabung dengan ribuan pelanggan yang udah merasakan internet super cepat dan stabil!
            </p>
            <button
              onClick={() => {
                const element = document.getElementById("packages");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="mega-button px-12 py-6 text-2xl font-black text-white mega-text mega-hover"
            >
              🎯 Pilih Paket Sekarang 🎯
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
