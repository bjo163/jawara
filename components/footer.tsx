"use client"

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import { Logo } from "@/components/logo"
import { contactInfo, getContactByType } from "@/data/contact"
import Link from "next/link"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-slate-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Logo size="lg" showSubtext={true} />
            <p className="text-gray-300 leading-relaxed font-semibold">
              Internet Service Provider yang <span className="text-red-400 font-bold">menguasai nusantara</span> dengan
              koneksi <span className="text-yellow-400 font-bold">secepat kilat petir</span>! Untuk para jagoan digital
              Indonesia! 🇮🇩
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Menu Utama</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Tentang Kami
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Layanan
                </button>
              </li>
              <li>
                <Link
                  href="/paket"
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Paket Internet
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("coverage")}
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Area Coverage
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("map")}
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Lokasi Kantor
                </button>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Bantuan</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("faq")}
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-orange-400 transition-colors flex items-center space-x-1"
                >
                  <span>📞</span>
                  <span>Hubungi Kami</span>
                </Link>
              </li>
              <li>
                <a 
                  href="/berlangganan" 
                  className="text-gray-400 hover:text-orange-400 transition-colors flex items-center space-x-1"
                >
                  <span>🗡️</span>
                  <span>Berlangganan</span>
                </a>
              </li>
              <li>
                <a 
                  href="/speedtest" 
                  className="text-gray-400 hover:text-orange-400 transition-colors flex items-center space-x-1"
                >
                  <span>⚡</span>
                  <span>Speed Test</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Panduan Instalasi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Troubleshooting
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  Status Jaringan
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Kontak</h4>
            <div className="space-y-3 text-gray-400">
              {/* WhatsApp */}
              <div>
                <p className="font-semibold text-white">Customer Service</p>
                <p>WhatsApp: {getContactByType('whatsapp')?.value}</p>
                <p>Telepon: {getContactByType('phone')?.value}</p>
              </div>
              {/* Email */}
              <div>
                <p className="font-semibold text-white">Email</p>
                <p>{getContactByType('email')?.value}</p>
              </div>
              {/* Address */}
              <div>
                <p className="font-semibold text-white">Alamat</p>
                <p>{getContactByType('address')?.value}</p>
                <p>{getContactByType('address')?.secondary}</p>
              </div>
              {/* Link to Contact Page */}
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center text-orange-400 hover:text-orange-300 transition-colors font-semibold"
                >
                  <span>📍</span>
                  <span className="ml-1">Lihat Kontak Lengkap</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Jawara-Net - Internet Nusantara.
              <span className="text-red-400 font-bold"> Dibuat dengan ❤️ untuk Indonesia Raya! </span>
              <span className="text-yellow-400">🇮🇩</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                Disclaimer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
