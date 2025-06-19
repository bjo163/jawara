"use client";

import { SectionTitle } from "@/components/section-title";
import { ContactForm } from "@/components/contact-form";
import { Phone, Mail, MapPin, Clock, Crown, Sparkles, Sword, Shield } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 nusantara-bg relative overflow-hidden">
      {/* EPIC BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 mega-grid opacity-30"></div>
      <div className="absolute top-20 left-10 text-6xl indonesian-wave opacity-20">📞</div>
      <div className="absolute bottom-20 right-10 text-6xl garuda-soar opacity-20">💬</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          title="📞 HUBUNGI PARA JAGOAN 📞"
          subtitle="Siap membantu kamu 24/7! Pilih cara yang paling nyaman buat kamu, Jagoan Digital!"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* EPIC CONTACT INFO */}
          <div className="space-y-8">
            {/* EPIC HEADER */}
            <div className="mega-card p-10 mega-hover mega-glow scroll-reveal">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 mega-glow nusantara-glow">
                  <Phone className="h-12 w-12 text-white" />
                </div>
                <div className="relative inline-block mb-6">
                  <div className="bg-gradient-to-br from-orange-400 via-yellow-500 to-orange-600 p-8 rounded-2xl shadow-2xl nusantara-glow border-4 border-orange-300">
                    <h3 className="text-3xl font-black text-slate-900 drop-shadow-lg">📞 KONTAK LANGSUNG 📞</h3>
                  </div>
                  <Sparkles className="absolute -top-4 -right-4 h-8 w-8 text-yellow-400 animate-spin" />
                  <Crown className="absolute -top-2 -left-2 h-6 w-6 text-yellow-500 indonesian-wave" />
                </div>
                <p className="mega-text text-gray-300 text-lg leading-relaxed">
                  Tim <span className="text-orange-400 font-black">Penjaga Kerajaan Digital</span> siap melayani seperti{" "}
                  <span className="text-green-400 font-black">Pengawal Istana Merdeka</span>! 🏛️
                </p>
              </div>

              <div className="space-y-6">
                <div className="mega-card p-6 mega-hover bg-green-500/20 border-2 border-green-500/30">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mega-glow nusantara-glow">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mega-text font-black text-white mb-2 text-xl">🟢 WhatsApp Jagoan</h4>
                      <p className="mega-text text-green-400 text-lg font-bold">+62 812-3456-7890</p>
                      <p className="mega-text text-gray-300 text-sm font-bold">
                        Respon <span className="text-yellow-400">secepat kilat Garuda</span>, chat langsung dengan CS!
                        🦅
                      </p>
                      <div className="mt-3">
                        <a
                          href="https://wa.me/6281234567890"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mega-button bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 text-white font-bold mega-text mega-hover inline-flex items-center space-x-2"
                        >
                          <span>💬 Chat Sekarang</span>
                          <Sparkles className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mega-card p-6 mega-hover bg-blue-500/20 border-2 border-blue-500/30">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mega-glow nusantara-glow">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mega-text font-black text-white mb-2 text-xl">📞 Telepon Kerajaan</h4>
                      <p className="mega-text text-blue-400 text-lg font-bold">021-1234-5678</p>
                      <p className="mega-text text-gray-300 text-sm font-bold">
                        Layanan telepon <span className="text-purple-400">24 jam seperti penjaga istana</span>! 🏰
                      </p>
                      <div className="mt-3">
                        <a
                          href="tel:+622112345678"
                          className="mega-button bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 text-white font-bold mega-text mega-hover inline-flex items-center space-x-2"
                        >
                          <span>📞 Telepon Sekarang</span>
                          <Crown className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mega-card p-6 mega-hover bg-orange-500/20 border-2 border-orange-500/30">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mega-glow nusantara-glow">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mega-text font-black text-white mb-2 text-xl">📧 Surat Digital</h4>
                      <p className="mega-text text-orange-400 text-lg font-bold">info@jawara-net.com</p>
                      <p className="mega-text text-gray-300 text-sm font-bold">
                        Untuk pertanyaan detail & komplain <span className="text-red-400">seperti surat raja</span>! 📜
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mega-card p-6 mega-hover bg-purple-500/20 border-2 border-purple-500/30">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mega-glow nusantara-glow">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mega-text font-black text-white mb-2 text-xl">🏛️ Istana Pusat</h4>
                      <p className="mega-text text-purple-400 text-lg font-bold">Jl. Teknologi No. 123</p>
                      <p className="mega-text text-purple-400 text-lg font-bold">Jakarta Selatan 12345</p>
                      <p className="mega-text text-gray-300 text-sm font-bold">
                        Buka Senin-Sabtu, 08:00-17:00 <span className="text-yellow-400">seperti istana kerajaan</span>!
                        🏰
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mega-card p-6 mega-hover bg-yellow-500/20 border-2 border-yellow-500/30">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mega-glow nusantara-glow">
                      <Clock className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mega-text font-black text-white mb-2 text-xl">⏰ Jam Penjagaan</h4>
                      <div className="space-y-2">
                        <p className="mega-text text-yellow-400 text-lg font-bold">Customer Service: 24/7 🛡️</p>
                        <p className="mega-text text-yellow-400 text-lg font-bold">Technical Support: 24/7 ⚔️</p>
                        <p className="mega-text text-yellow-400 text-lg font-bold">
                          Kantor: Senin-Sabtu 08:00-17:00 🏛️
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* EPIC QUICK ACTIONS */}
            <div className="mega-card p-8 mega-hover mega-glow nusantara-glow scroll-reveal">
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <h4 className="mega-title text-3xl mb-4">🚀 AKSI CEPAT JAGOAN 🚀</h4>
                  <Sword className="absolute -top-2 -right-2 h-8 w-8 text-red-500 particle-float" />
                  <Shield className="absolute -top-2 -left-2 h-8 w-8 text-blue-500 garuda-soar" />
                </div>
                <p className="mega-text text-gray-300 text-lg">
                  Pilih senjata komunikasi yang paling <span className="text-orange-400 font-black">ampuh</span>! ⚔️
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mega-button bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-6 text-white font-black mega-text mega-hover flex items-center justify-center space-x-3 text-xl"
                >
                  <span className="text-2xl">💬</span>
                  <span>Chat WhatsApp Jagoan</span>
                  <Sparkles className="h-6 w-6" />
                </a>
                <a
                  href="tel:+622112345678"
                  className="mega-button bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-6 text-white font-black mega-text mega-hover flex items-center justify-center space-x-3 text-xl"
                >
                  <span className="text-2xl">📞</span>
                  <span>Telepon Kerajaan</span>
                  <Crown className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* EPIC CONTACT FORM */}
          <div className="scroll-reveal" style={{ animationDelay: "0.3s" }}>
            <ContactForm />
          </div>
        </div>

        {/* EPIC SUPPORT STATS */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="mega-card p-8 mega-hover mega-glow scroll-reveal">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 mega-glow nusantara-glow">
              <span className="text-3xl">⚡</span>
            </div>
            <div className="text-4xl font-black text-green-500 mb-4 mega-title">2 Min</div>
            <div className="mega-text text-gray-400 text-lg font-bold">Respon WhatsApp</div>
          </div>
          <div className="mega-card p-8 mega-hover mega-glow scroll-reveal" style={{ animationDelay: "0.1s" }}>
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6 mega-glow nusantara-glow">
              <span className="text-3xl">🛡️</span>
            </div>
            <div className="text-4xl font-black text-blue-500 mb-4 mega-title">24/7</div>
            <div className="mega-text text-gray-400 text-lg font-bold">Penjagaan Aktif</div>
          </div>
          <div className="mega-card p-8 mega-hover mega-glow scroll-reveal" style={{ animationDelay: "0.2s" }}>
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 mega-glow nusantara-glow">
              <span className="text-3xl">🏆</span>
            </div>
            <div className="text-4xl font-black text-orange-500 mb-4 mega-title">4.9/5</div>
            <div className="mega-text text-gray-400 text-lg font-bold">Rating Kepuasan</div>
          </div>
          <div className="mega-card p-8 mega-hover mega-glow scroll-reveal" style={{ animationDelay: "0.3s" }}>
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 mega-glow nusantara-glow">
              <span className="text-3xl">👑</span>
            </div>
            <div className="text-4xl font-black text-purple-500 mb-4 mega-title">1000+</div>
            <div className="mega-text text-gray-400 text-lg font-bold">Jagoan Terlayani</div>
          </div>
        </div>
      </div>
    </section>
  );
}
