'use client'

import { SectionTitle } from '@/components/section-title'
import { Target, Eye, Award, Users } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Tentang Jawara-Net"
          subtitle="Provider internet yang paham kebutuhan digital masa kini"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-orange-400">
                Siapa Sih Jawara-Net Itu? 🤔
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Kami adalah Internet Service Provider yang{' '}
                <span className="text-orange-400 font-semibold">
                  ngerti banget
                </span>{' '}
                sama kebutuhan internet generasi sekarang. Dari yang suka
                streaming Netflix sampai yang butuh koneksi stabil buat kerja
                remote,
                <span className="text-blue-400 font-semibold">
                  {' '}
                  semua kebutuhan digital kamu adalah prioritas kami!
                </span>
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Dengan teknologi fiber optic terdepan dan tim support yang siap
                siaga 24/7, kami berkomitmen memberikan pengalaman internet yang{' '}
                <span className="text-green-400 font-semibold">
                  smooth tanpa drama
                </span>
                .
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-slate-800/50 p-6 rounded-xl border border-orange-500/20">
                <div className="flex items-center space-x-3 mb-3">
                  <Target className="h-6 w-6 text-orange-500" />
                  <h4 className="text-xl font-bold text-orange-400">
                    Misi Kami
                  </h4>
                </div>
                <p className="text-gray-300">
                  Digitalisasi konektivitas Indonesia dengan layanan internet
                  berkualitas tinggi yang terjangkau untuk semua kalangan.
                </p>
              </div>

              <div className="bg-slate-800/50 p-6 rounded-xl border border-blue-500/20">
                <div className="flex items-center space-x-3 mb-3">
                  <Eye className="h-6 w-6 text-blue-500" />
                  <h4 className="text-xl font-bold text-blue-400">Visi Kami</h4>
                </div>
                <p className="text-gray-300">
                  Menjadi provider internet terdepan yang menghubungkan setiap
                  rumah dan UMKM dengan koneksi internet stabil.
                </p>
              </div>
            </div>
          </div>

          {/* Stats & Features */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 p-8 rounded-2xl border border-gray-700">
              <h4 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                Kenapa Pilih Jawara-Net?
              </h4>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">
                      Teknologi Terdepan
                    </h5>
                    <p className="text-gray-400 text-sm">
                      Fiber optic dengan kecepatan hingga 1 Gbps
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">
                      Customer Service Ramah
                    </h5>
                    <p className="text-gray-400 text-sm">
                      Tim support yang paham bahasa Gen Z
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Target className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white">
                      Harga Bersahabat
                    </h5>
                    <p className="text-gray-400 text-sm">
                      Paket internet dengan harga yang gak bikin kantong jebol
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fun Fact */}
            <div className="bg-gradient-to-r from-orange-500/10 to-blue-500/10 p-6 rounded-xl border border-orange-500/20">
              <h5 className="text-lg font-bold text-orange-400 mb-2">
                Fun Fact! 🎉
              </h5>
              <p className="text-gray-300">
                Tim Jawara-Net rata-rata berusia 20-30 tahun, jadi kami
                bener-bener ngerti kebutuhan internet generasi digital natives!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
