"use client"

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

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
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="text-4xl">👑</div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="text-2xl font-black text-red-500">JAWARA</span>
                  <span className="text-2xl font-black text-yellow-500">NET</span>
                </div>
                <span className="text-sm text-gray-400 font-bold">INTERNET NUSANTARA</span>
              </div>
            </div>
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
                <button
                  onClick={() => scrollToSection("packages")}
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Paket Internet
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("coverage")}
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Area Coverage
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
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-400 hover:text-orange-400 transition-colors"
                >
                  Hubungi Kami
                </button>
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
              <div>
                <p className="font-semibold text-white">Customer Service</p>
                <p>WhatsApp: +62 812-3456-7890</p>
                <p>Telepon: 021-1234-5678</p>
              </div>
              <div>
                <p className="font-semibold text-white">Email</p>
                <p>info@jawara-net.com</p>
                <p>support@jawara-net.com</p>
              </div>
              <div>
                <p className="font-semibold text-white">Alamat</p>
                <p>Jl. Teknologi No. 123</p>
                <p>Jakarta Selatan 12345</p>
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
