"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Sparkles, Sword, Crown, Play, Pause } from "lucide-react"

export function HeroSectionImproved() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // SIMPLIFIED: Hanya 2 slides utama
  const slides = [
    {
      id: 1,
      title: "JAWARA INTERNET NUSANTARA",
      subtitle: "Koneksi Secepat Garuda, Stabil Seperti Candi Borobudur",
      highlight: "Fiber Optic hingga 1 Gbps",
      character: "🦅",
      bgGradient: "from-orange-500 via-red-500 to-pink-500",
    },
    {
      id: 2,
      title: "BENTENG DIGITAL INDONESIA",
      subtitle: "Uptime 99.9%, Support 24/7 untuk Para Jagoan Digital",
      highlight: "50+ Kota di Seluruh Nusantara",
      character: "🏛️",
      bgGradient: "from-blue-500 via-cyan-500 to-teal-500",
    },
  ]

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 6000) // Slower transition
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, slides.length])

  const currentSlideData = slides[currentSlide]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden nusantara-bg pt-20"
    >
      {/* SIMPLIFIED MOUSE FOLLOWER */}
      <div
        className="fixed w-64 h-64 pointer-events-none z-10 opacity-20"
        style={{
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
          background: `radial-gradient(circle, ${currentSlideData.bgGradient.includes("orange") ? "rgba(249, 115, 22, 0.3)" : "rgba(59, 130, 246, 0.3)"} 0%, transparent 70%)`,
          borderRadius: "50%",
          filter: "blur(40px)",
          transition: "all 0.3s ease",
        }}
      />

      {/* REDUCED FLOATING ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-4xl garuda-soar opacity-30">🦅</div>
        <div className="absolute bottom-20 right-10 text-4xl indonesian-wave opacity-30">🏛️</div>
        <div className="absolute top-1/3 right-10 text-3xl particle-float opacity-25">⚔️</div>
        <div className="absolute bottom-1/3 left-10 text-3xl garuda-soar opacity-25">🛡️</div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* MAIN HERO CONTENT */}
        <div className="space-y-12">
          {/* HERO TITLE CARD - SIMPLIFIED */}
          <div className="relative inline-block mega-hover">
            <div
              className={`bg-gradient-to-br ${currentSlideData.bgGradient} p-12 md:p-20 rounded-3xl shadow-2xl nusantara-glow border-4 border-white/20`}
            >
              <div className="text-6xl md:text-8xl mb-4 garuda-soar">{currentSlideData.character}</div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight text-white drop-shadow-lg mb-6">
                {currentSlideData.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-bold max-w-4xl mx-auto leading-relaxed">
                {currentSlideData.subtitle}
              </p>
            </div>
            <Sparkles className="absolute -top-4 -right-4 h-12 w-12 text-yellow-400 animate-spin" />
            <Crown className="absolute -top-2 -left-2 h-10 w-10 text-yellow-500 indonesian-wave" />
          </div>

          {/* HIGHLIGHT FEATURE */}
          <div className="mega-card p-8 md:p-12 mega-hover max-w-4xl mx-auto">
            <div className="text-5xl mb-6 particle-float">⚡</div>
            <h2 className="mega-title text-3xl md:text-4xl mb-4">{currentSlideData.highlight}</h2>
            <p className="mega-text text-gray-300 text-xl leading-relaxed">
              Bergabunglah dengan ribuan Jagoan Digital yang sudah merasakan kekuatan internet Nusantara!
            </p>
          </div>

          {/* SIMPLIFIED CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
            <button
              onClick={() => scrollToSection("packages")}
              className="mega-button px-12 py-6 text-2xl font-black text-white mega-text flex items-center space-x-4 mega-hover"
            >
              <Sword className="h-8 w-8" />
              <span>Pilih Paket Internet</span>
              <ArrowRight className="h-8 w-8" />
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="mega-button bg-gradient-to-r from-blue-600 to-cyan-600 px-12 py-6 text-2xl font-black text-white mega-text mega-hover"
            >
              <Crown className="h-8 w-8" />
              <span>Hubungi Kami</span>
            </button>
          </div>

          {/* SLIDE CONTROLS */}
          <div className="flex justify-center items-center space-x-6">
            <div className="flex space-x-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-orange-500 scale-125 mega-glow" : "bg-white/50 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="mega-card px-4 py-2 text-sm font-bold transition-all flex items-center space-x-2"
            >
              {isAutoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              <span>{isAutoPlaying ? "Pause" : "Play"}</span>
            </button>
          </div>

          {/* SIMPLIFIED STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="mega-card p-6 text-center mega-hover">
              <div className="text-4xl font-black text-orange-500 mb-2 mega-title">1000+</div>
              <div className="text-gray-300 font-bold">Pelanggan Setia</div>
            </div>
            <div className="mega-card p-6 text-center mega-hover">
              <div className="text-4xl font-black text-blue-500 mb-2 mega-title">50+</div>
              <div className="text-gray-300 font-bold">Kota Indonesia</div>
            </div>
            <div className="mega-card p-6 text-center mega-hover">
              <div className="text-4xl font-black text-green-500 mb-2 mega-title">99.9%</div>
              <div className="text-gray-300 font-bold">Uptime</div>
            </div>
            <div className="mega-card p-6 text-center mega-hover">
              <div className="text-4xl font-black text-purple-500 mb-2 mega-title">24/7</div>
              <div className="text-gray-300 font-bold">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
