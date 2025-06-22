'use client'

import { SectionTitle } from '@/components/section-title'
import { TestimonialCard } from '@/components/testimonial-card'

export function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Andi Pratama',
      role: 'Content Creator Jagoan',
      location: 'Jakarta Selatan',
      image: '/placeholder.svg?height=60&width=60',
      rating: 5,
      comment:
        'Sejak pakai Jawara-Net, channel YouTube gue jadi makin berkuasa! Upload video ngebut kayak kilat, live streaming lancar jaya tanpa drama. Ini sih internet sultan beneran! 🔥👑',
      package: 'Wiro Sableng 35 Mbps',
    },
    {
      name: 'Sarah Dewi',
      role: 'Remote Worker Tangguh',
      location: 'Bandung',
      image: '/placeholder.svg?height=60&width=60',
      rating: 5,
      comment:
        'WFH jadi medan perang yang bisa gue taklukkin! Video call meeting sekuat baja, gak pernah putus asa. Tim support sigap membantu setiap saat. Jawara-Net emang andalan! 👍💪',
      package: 'Mandor Sakti 25 Mbps',
    },
    {
      name: 'Budi Santoso',
      role: 'Pemilik Warnet Perkasa',
      location: 'Surabaya',
      image: '/placeholder.svg?height=60&width=60',
      rating: 5,
      comment:
        'Warnet gue sekarang jadi arena gladiator internet! Customer puas karena koneksi stabil kayak tembok raksasa. Gaming online tanpa ampun, streaming tanpa batas. Omzet meroket! 💰🚀',
      package: 'Corporate Beast 100 Mbps',
    },
    {
      name: 'Maya Sari',
      role: 'Mahasiswi Cendekiawan',
      location: 'Yogyakarta',
      image: '/placeholder.svg?height=60&width=60',
      rating: 5,
      comment:
        'Kuliah online jadi petualangan seru, download materi kuliah secepat ninja. Harganya juga bersahabat buat kantong mahasiswa. Jawara-Net emang pahlawan! 🎓🦸‍♀️',
      package: 'Jagoan Neon 10 Mbps',
    },
    {
      name: 'Rizki Firmansyah',
      role: 'Gamer Pro Legendaris',
      location: 'Medan',
      image: '/placeholder.svg?height=60&width=60',
      rating: 5,
      comment:
        'Ping serendah rumput, koneksi sekuat baja, perfect buat competitive gaming! Gak ada lagi lag yang menghalangi kemenangan. Jawara-Net emang juara sejati! ⚡🏆',
      package: 'Sultan 50 Mbps',
    },
    {
      name: 'Ibu Sinta',
      role: 'Ibu Rumah Tangga Super',
      location: 'Bekasi',
      image: '/placeholder.svg?height=60&width=60',
      rating: 5,
      comment:
        'Anak-anak sekolah online lancar, suami WFH juga gak ada gangguan. Netflix keluarga juga tanpa hambatan. Satu internet buat semua kebutuhan keluarga! 👨‍👩‍👧‍👦💖',
      package: 'Mandor Sakti 25 Mbps',
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="🗣️ KESAKSIAN PARA JAGOAN 🗣️"
          subtitle="Ribuan warrior digital udah merasakan kekuatan internet Jawara-Net!"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-orange-500 mb-2">4.9/5</div>
            <div className="text-gray-400">Rating Pelanggan</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-500 mb-2">1000+</div>
            <div className="text-gray-400">Pelanggan Aktif</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-green-500 mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-purple-500 mb-2">24/7</div>
            <div className="text-gray-400">Customer Support</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
              Mau Jadi Bagian dari Keluarga Jawara-Net? 🚀
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Bergabung dengan ribuan pelanggan yang udah merasakan internet
              super cepat dan stabil!
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('packages')
                if (element) element.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Pilih Paket Sekarang
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
