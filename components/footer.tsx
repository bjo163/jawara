"use client"

import { Facebook, Instagram, Twitter, Youtube, Crown, Sword, Sparkles } from "lucide-react"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="nusantara-bg relative overflow-hidden border-t-4 border-orange-500/50">
      {/* EPIC BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 mega-grid opacity-20"></div>
      <div className="absolute top-10 left-10 text-6xl garuda-soar opacity-20">🦅</div>
      <div className="absolute bottom-10 right-10 text-6xl indonesian-wave opacity-20">🏛️</div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* EPIC BRAND SECTION */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mega-hover">
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl flex items-center justify-center mega-glow nusantara-glow">
                  <Crown className="h-10 w-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
                <Sparkles className="absolute -bottom-2 -left-2 h-6 w-6 text-yellow-400 animate-spin" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <span className="mega-title text-3xl text-orange-500">JAWARA</span>
                  <span className="mega-title text-3xl text-red-500">NET</span>
                </div>
                <span className="mega-text text-sm text-gray-400 font-bold">INTERNET NUSANTARA</span>
              </div>
            </div>
            <div className="mega-card p-6 mega-hover">
              <p className="mega-text text-gray-300 leading-relaxed font-bold text-lg">
                Internet Service Provider yang <span className="text-orange-400 font-black">menguasai nusantara</span>{" "}
                dengan koneksi <span className="text-red-400 font-black">secepat kilat petir</span>! Untuk para jagoan
                digital Indonesia! 🇮🇩
              </p>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mega-hover mega-glow"
              >
                <Facebook className="h-6 w-6 text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center mega-hover mega-glow"
              >
                <Instagram className="h-6 w-6 text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mega-hover mega-glow"
              >
                <Twitter className="h-6 w-6 text-white" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mega-hover mega-glow"
              >
                <Youtube className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>

          {/* MENU UTAMA */}
          <div className="mega-card p-8 mega-hover">
            <h4 className="mega-title text-2xl text-orange-400 mb-6 flex items-center space-x-2">
              <Sword className="h-6 w-6" />
              <span>Menu Utama</span>
            </h4>
            <ul className="space-y-4">
              {[
                { id: "hero", label: "🏠 Beranda" },
                { id: "about", label: "📖 Tentang Kami" },
                { id: "services", label: "⚔️ Layanan" },
                { id: "packages", label: "💎 Paket Internet" },
                { id: "coverage", label: "🗺️ Area Coverage" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="mega-text text-gray-400 hover:text-orange-400 transition-colors font-bold text-lg mega-hover"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* BANTUAN */}
          <div className="mega-card p-8 mega-hover">
            <h4 className="mega-title text-2xl text-blue-400 mb-6 flex items-center space-x-2">
              <Crown className="h-6 w-6" />
              <span>Bantuan</span>
            </h4>
            <ul className="space-y-4">
              {[
                { id: "faq", label: "❓ FAQ" },
                { id: "contact", label: "📞 Hubungi Kami" },
                { label: "📋 Panduan Instalasi", href: "#" },
                { label: "🔧 Troubleshooting", href: "#" },
                { label: "📊 Status Jaringan", href: "#" },
              ].map((item, index) => (
                <li key={index}>
                  {item.id ? (
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="mega-text text-gray-400 hover:text-blue-400 transition-colors font-bold text-lg mega-hover"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="mega-text text-gray-400 hover:text-blue-400 transition-colors font-bold text-lg mega-hover"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* KONTAK */}
          <div className="mega-card p-8 mega-hover">
            <h4 className="mega-title text-2xl text-green-400 mb-6 flex items-center space-x-2">
              <Sparkles className="h-6 w-6" />
              <span>Kontak</span>
            </h4>
            <div className="space-y-6 mega-text text-gray-400">
              <div>
                <p className="font-black text-white text-lg mb-2">📞 Customer Service</p>
                <p className="font-bold">WhatsApp: +62 812-3456-7890</p>
                <p className="font-bold">Telepon: 021-1234-5678</p>
              </div>
              <div>
                <p className="font-black text-white text-lg mb-2">📧 Email</p>
                <p className="font-bold">info@jawara-net.com</p>
                <p className="font-bold">support@jawara-net.com</p>
              </div>
              <div>
                <p className="font-black text-white text-lg mb-2">📍 Alamat</p>
                <p className="font-bold">Jl. Teknologi No. 123</p>
                <p className="font-bold">Jakarta Selatan 12345</p>
              </div>
            </div>
          </div>
        </div>

        {/* EPIC BOTTOM BAR */}
        <div className="border-t-2 border-orange-500/30 mt-16 pt-8">
          <div className="mega-card p-8 mega-hover mega-glow">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              <div className="mega-text text-gray-400 text-lg text-center md:text-left">
                © {new Date().getFullYear()} Jawara-Net - Internet Nusantara.
                <span className="text-orange-400 font-black"> Dibuat dengan ❤️ untuk Indonesia Raya! </span>
                <span className="text-2xl">🇮🇩</span>
              </div>
              <div className="flex flex-wrap justify-center gap-6 mega-text">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors font-bold">
                  📋 Syarat & Ketentuan
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors font-bold">
                  🔒 Kebijakan Privasi
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors font-bold">
                  ⚠️ Disclaimer
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
