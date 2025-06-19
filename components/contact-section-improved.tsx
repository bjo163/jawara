"use client";

import { SectionTitle } from "@/components/section-title";
import { ContactFormImproved } from "@/components/contact-form-improved";
import { Phone, Mail, MapPin, Sparkles } from "lucide-react";

export function ContactSectionImproved() {
  return (
    <section id="contact" className="py-20 nusantara-bg relative overflow-hidden">
      <div className="absolute inset-0 mega-grid opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="📞 HUBUNGI KAMI 📞" subtitle="Tim Jagoan siap membantu kamu 24/7!" />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* SIMPLIFIED CONTACT INFO */}
          <div className="space-y-8">
            {/* QUICK CONTACT CARDS */}
            <div className="grid gap-6">
              <div className="mega-card p-8 mega-hover mega-glow">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mega-glow">
                    <Phone className="h-10 w-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mega-text font-black text-white text-2xl mb-2">💬 WhatsApp Jagoan</h3>
                    <p className="mega-text text-green-400 text-xl font-bold mb-2">+62 812-3456-7890</p>
                    <p className="mega-text text-gray-300">Respon secepat kilat, chat langsung!</p>
                    <a
                      href="https://wa.me/6281234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mega-button bg-gradient-to-r from-green-500 to-emerald-500 px-6 py-3 text-white font-bold mega-text mega-hover inline-flex items-center space-x-2 mt-4"
                    >
                      <span>Chat Sekarang</span>
                      <Sparkles className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="mega-card p-8 mega-hover">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mega-glow">
                    <Phone className="h-10 w-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mega-text font-black text-white text-2xl mb-2">📞 Telepon Langsung</h3>
                    <p className="mega-text text-blue-400 text-xl font-bold mb-2">021-1234-5678</p>
                    <p className="mega-text text-gray-300">Layanan telepon 24 jam</p>
                  </div>
                </div>
              </div>

              <div className="mega-card p-8 mega-hover">
                <div className="flex items-center space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mega-glow">
                    <Mail className="h-10 w-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mega-text font-black text-white text-2xl mb-2">📧 Email Support</h3>
                    <p className="mega-text text-orange-400 text-xl font-bold mb-2">info@jawara-net.com</p>
                    <p className="mega-text text-gray-300">Untuk pertanyaan detail</p>
                  </div>
                </div>
              </div>
            </div>

            {/* OFFICE INFO */}
            <div className="mega-card p-8 mega-hover nusantara-glow">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mega-glow">
                  <MapPin className="h-10 w-10 text-white" />
                </div>
                <div>
                  <h3 className="mega-text font-black text-white text-2xl mb-4">🏛️ Kantor Pusat</h3>
                  <div className="space-y-2 mega-text text-gray-300 text-lg">
                    <p>📍 Jl. Teknologi No. 123</p>
                    <p>Jakarta Selatan 12345</p>
                    <p>🕒 Senin-Sabtu: 08:00-17:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SIMPLIFIED CONTACT FORM */}
          <div className="scroll-reveal">
            <ContactFormImproved />
          </div>
        </div>

        {/* SIMPLIFIED STATS */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="mega-card p-8 mega-hover mega-glow">
            <div className="text-4xl font-black text-green-500 mb-4 mega-title">2 Min</div>
            <div className="mega-text text-gray-400 text-lg font-bold">Respon WhatsApp</div>
          </div>
          <div className="mega-card p-8 mega-hover mega-glow">
            <div className="text-4xl font-black text-blue-500 mb-4 mega-title">24/7</div>
            <div className="mega-text text-gray-400 text-lg font-bold">Customer Support</div>
          </div>
          <div className="mega-card p-8 mega-hover mega-glow">
            <div className="text-4xl font-black text-orange-500 mb-4 mega-title">4.9/5</div>
            <div className="mega-text text-gray-400 text-lg font-bold">Rating Kepuasan</div>
          </div>
          <div className="mega-card p-8 mega-hover mega-glow">
            <div className="text-4xl font-black text-purple-500 mb-4 mega-title">1000+</div>
            <div className="mega-text text-gray-400 text-lg font-bold">Pelanggan Puas</div>
          </div>
        </div>
      </div>
    </section>
  );
}
