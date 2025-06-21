"use client"

import { SectionTitle } from "@/components/section-title"
import { ContactForm } from "@/components/contact-form"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Hubungi Kami"
          subtitle="Siap membantu kamu 24/7! Pilih cara yang paling nyaman buat kamu"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-orange-400 mb-6">Kontak Langsung 📞</h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">WhatsApp Customer Service</h4>
                    <p className="text-gray-300">+62 812-9529-5734</p>
                    <p className="text-gray-400 text-sm">Respon cepat, chat langsung dengan CS</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Telepon</h4>
                    <p className="text-gray-300">+62 812-9529-5734</p>
                    <p className="text-gray-400 text-sm">Layanan telepon 24 jam</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">info@jawara-net.com</p>
                    <p className="text-gray-400 text-sm">Untuk pertanyaan detail & komplain</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Kantor Pusat</h4>
                    <p className="text-gray-300">R398+H5H Srimukti</p>
                    <p className="text-gray-300">Bekasi Regency, West Java</p>
                    <p className="text-gray-400 text-sm">Buka Senin-Sabtu, 08:00-17:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Jam Operasional</h4>
                    <p className="text-gray-300">Customer Service: 24/7</p>
                    <p className="text-gray-300">Technical Support: 24/7</p>
                    <p className="text-gray-300">Kantor: Senin-Sabtu 08:00-17:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 p-6 rounded-xl border border-gray-700">
              <h4 className="text-lg font-bold text-white mb-4">Aksi Cepat 🚀</h4>
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://wa.me/6281295295734"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center font-semibold transition-colors"
                >
                  Chat WhatsApp
                </a>
                <a
                  href="tel:+6281295295734"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-semibold transition-colors"
                >
                  Telepon Sekarang
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
