"use client";

import { SectionTitle } from "@/components/section-title";
import { Target, Eye, Award, Users } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20 nusantara-bg relative overflow-hidden">
      {/* EPIC BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 mega-grid opacity-30"></div>
      <div className="absolute top-20 left-10 text-4xl md:text-6xl indonesian-wave opacity-20">🦅</div>
      <div className="absolute bottom-20 right-10 text-4xl md:text-6xl garuda-soar opacity-20">🛡️</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="🛡️ KISAH JAWARA-NET 🛡️"
          subtitle="Penyedia internet yang memahami jiwa pejuang digital Nusantara"
        />

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="mega-card p-6 md:p-10 mega-hover scroll-reveal">
              <h3 className="mega-title text-2xl md:text-3xl mb-4 md:mb-6">⚔️ Siapa Jawara-Net? ⚔️</h3>
              <p className="mega-text text-gray-300 text-lg md:text-xl leading-relaxed mb-4 md:mb-6">
                Kami adalah <span className="text-orange-400 font-black">Penyedia Internet Nusantara</span> yang{" "}
                <span className="text-blue-400 font-black">memahami jiwa pejuang digital Indonesia</span>. Dari yang
                gemar menonton drama Korea di Netflix sampai yang butuh koneksi stabil untuk membangun startup unicorn,
                <span className="text-green-400 font-black"> semua mimpi digital kalian adalah misi kami!</span>
              </p>
              <p className="mega-text text-gray-300 text-lg md:text-xl leading-relaxed">
                Dengan teknologi fiber optic terdepan dan tim support yang siap siaga seperti{" "}
                <span className="text-red-400 font-black">Penjaga Istana Merdeka</span>, kami berkomitmen memberikan
                pengalaman internet yang <span className="text-purple-400 font-black">lancar jaya tanpa hambatan</span>.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="mega-card p-6 md:p-8 mega-hover scroll-reveal" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-full flex items-center justify-center mega-glow">
                    <Target className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <h4 className="mega-title text-xl md:text-2xl">🎯 Misi Kami</h4>
                </div>
                <p className="mega-text text-gray-300 leading-relaxed text-base md:text-lg">
                  Menghubungkan setiap sudut Nusantara dengan internet berkualitas tinggi yang terjangkau, dari Sabang
                  sampai Merauke, dari desa hingga kota metropolitan.
                </p>
              </div>

              <div className="mega-card p-6 md:p-8 mega-hover scroll-reveal" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-full flex items-center justify-center mega-glow">
                    <Eye className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                  <h4 className="mega-title text-xl md:text-2xl">👁️ Visi Kami</h4>
                </div>
                <p className="mega-text text-gray-300 leading-relaxed text-base md:text-lg">
                  Menjadi provider internet terdepan yang menghubungkan setiap rumah, warung, dan UMKM dengan koneksi
                  internet stabil seperti Jembatan Suramadu.
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6">
            <div
              className="mega-card p-6 md:p-10 mega-hover mega-glow scroll-reveal"
              style={{ animationDelay: "0.6s" }}
            >
              <h4 className="mega-title text-2xl md:text-3xl text-center mb-6 md:mb-8">
                🏆 Kenapa Pilih Jawara-Net? 🏆
              </h4>

              <div className="space-y-6 md:space-y-8">
                <div className="flex items-center space-x-4 md:space-x-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-2xl flex items-center justify-center mega-glow nusantara-glow">
                    <Award className="h-8 w-8 md:h-10 md:w-10 text-white" />
                  </div>
                  <div>
                    <h5 className="mega-text font-black text-white mb-2 text-lg md:text-xl">⚡ Teknologi Garuda</h5>
                    <p className="mega-text text-gray-400 text-base md:text-lg">
                      Fiber optic dengan kecepatan hingga 1 Gbps, secepat terbang Garuda
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 md:space-x-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center mega-glow nusantara-glow">
                    <Users className="h-8 w-8 md:h-10 md:w-10 text-white" />
                  </div>
                  <div>
                    <h5 className="mega-text font-black text-white mb-2 text-lg md:text-xl">👥 Tim Ramah Nusantara</h5>
                    <p className="mega-text text-gray-400 text-base md:text-lg">
                      Customer service yang paham bahasa gaul anak muda dan sopan santun Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 md:space-x-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-green-500 via-emerald-500 to-lime-500 rounded-2xl flex items-center justify-center mega-glow nusantara-glow">
                    <Target className="h-8 w-8 md:h-10 md:w-10 text-white" />
                  </div>
                  <div>
                    <h5 className="mega-text font-black text-white mb-2 text-lg md:text-xl">💰 Harga Rakyat</h5>
                    <p className="mega-text text-gray-400 text-base md:text-lg">
                      Paket internet dengan harga yang ramah di kantong, dari pelajar sampai pengusaha
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fun Fact */}
            <div
              className="mega-card p-6 md:p-8 mega-hover nusantara-glow scroll-reveal"
              style={{ animationDelay: "0.8s" }}
            >
              <h5 className="mega-title text-xl md:text-2xl mb-4">🎉 Fakta Menarik! 🎉</h5>
              <p className="mega-text text-gray-300 leading-relaxed text-base md:text-lg">
                Tim Jawara-Net terdiri dari anak-anak muda Indonesia berusia 20-35 tahun yang paham betul kebutuhan
                internet generasi digital natives dan tetap menjunjung tinggi nilai-nilai gotong royong!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
