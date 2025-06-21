"use client"
import { ArrowRight, Zap, Shield, Globe } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/30 to-purple-950/20"></div>
      <div className="absolute inset-0 batik-professional"></div>
      <div className="absolute inset-0 grid-pattern"></div>

      {/* Floating Indonesian Elements - More Subtle */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 text-4xl float-gentle">🛺</div>
        <div className="absolute top-32 right-20 text-3xl float-gentle" style={{ animationDelay: "1s" }}>
          👒
        </div>
        <div className="absolute bottom-40 left-16 text-3xl float-gentle" style={{ animationDelay: "2s" }}>
          🍚
        </div>
        <div className="absolute top-1/3 right-10 text-4xl float-gentle" style={{ animationDelay: "0.5s" }}>
          🎭
        </div>
        <div className="absolute bottom-20 right-32 text-3xl float-gentle" style={{ animationDelay: "1.5s" }}>
          🍛
        </div>
      </div>

      {/* Professional Glow Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pulse-glow"></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pulse-glow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12 slide-in-up">
          {/* Professional Hero Title */}
          <div className="space-y-8">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="text-6xl md:text-8xl mb-4">🇮🇩</div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
              </div>
            </div>

            <div className="professional-bubble inline-block mb-8">
              <h1 className="cartoon-title text-4xl md:text-6xl lg:text-7xl text-slate-900 leading-tight">
                <span className="block indonesia-gradient">JAWARA INTERNET</span>
                <span className="block text-2xl md:text-4xl lg:text-5xl mt-2 text-slate-800">NUSANTARA RAYA 🏝️</span>
              </h1>
            </div>

            <div className="max-w-4xl mx-auto">
              <p className="cartoon-text text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
                Internet <span className="text-orange-400 font-black">super ngebut</span> untuk para{" "}
                <span className="text-blue-400 font-black">jagoan digital</span> Indonesia! 🦸‍♂️
              </p>
              <p className="cartoon-text text-lg md:text-xl text-gray-300 leading-relaxed">
                Koneksi <span className="text-yellow-400 font-bold">secepat kilat</span>, stabil{" "}
                <span className="text-green-400 font-bold">24/7</span>, harga bersahabat!
              </p>
            </div>
          </div>

          {/* Professional Features */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="professional-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 professional-glow">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="cartoon-text text-lg font-bold text-white mb-2">Kecepatan Kilat</h3>
              <p className="text-gray-400 text-sm">Fiber optic hingga 1 Gbps</p>
            </div>

            <div className="professional-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 professional-glow">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="cartoon-text text-lg font-bold text-white mb-2">Koneksi Stabil</h3>
              <p className="text-gray-400 text-sm">Uptime 99.9% terjamin</p>
            </div>

            <div className="professional-card p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4 professional-glow">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="cartoon-text text-lg font-bold text-white mb-2">Coverage Luas</h3>
              <p className="text-gray-400 text-sm">50+ kota di Indonesia</p>
            </div>
          </div>

          {/* Professional CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection("packages")}
              className="professional-button px-8 py-4 text-lg font-bold text-white cartoon-text flex items-center space-x-3"
            >
              <span>🗡️ Pilih Paket Internet</span>
              <ArrowRight className="h-5 w-5" />
            </button>

            <button
              onClick={() => window.location.href = '/berlangganan'}
              className="professional-button bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 text-lg font-bold text-white cartoon-text flex items-center space-x-3"
            >
              <span>👑 Berlangganan Sekarang</span>
            </button>

            <button
              onClick={() => window.location.href = '/speedtest'}
              className="professional-button bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-4 text-lg font-bold text-white cartoon-text flex items-center space-x-3"
            >
              <span>⚡ Speed Test</span>
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="professional-button bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-bold text-white cartoon-text"
            >
              <span>� Konsultasi Gratis</span>
            </button>
          </div>

          {/* Professional Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
            <div className="professional-card p-6 text-center">
              <div className="text-3xl md:text-4xl font-black text-orange-500 mb-2">1000+</div>
              <div className="text-gray-300 font-semibold">Pelanggan Setia</div>
            </div>
            <div className="professional-card p-6 text-center">
              <div className="text-3xl md:text-4xl font-black text-blue-500 mb-2">50+</div>
              <div className="text-gray-300 font-semibold">Kota Coverage</div>
            </div>
            <div className="professional-card p-6 text-center">
              <div className="text-3xl md:text-4xl font-black text-green-500 mb-2">99.9%</div>
              <div className="text-gray-300 font-semibold">Uptime</div>
            </div>
            <div className="professional-card p-6 text-center">
              <div className="text-3xl md:text-4xl font-black text-purple-500 mb-2">24/7</div>
              <div className="text-gray-300 font-semibold">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
