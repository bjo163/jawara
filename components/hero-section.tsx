"use client"
import { useEffect, useState } from "react"
import { HeroSlideshow } from "@/components/hero-slideshow"
import { Zap, Shield, Globe } from "lucide-react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden nusantara-bg pt-16 md:pt-20"
    >
      {/* EPIC INTERACTIVE MOUSE FOLLOWER */}
      <div
        className="fixed w-96 h-96 pointer-events-none z-10 opacity-30"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background:
            "radial-gradient(circle, rgba(220, 38, 38, 0.4) 0%, rgba(249, 115, 22, 0.3) 50%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(50px)",
          transition: "all 0.3s ease",
        }}
      />

      {/* EPIC FLOATING INDONESIAN WARRIOR ELEMENTS */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Elements */}
        <div className="absolute top-16 left-8 text-4xl md:text-6xl garuda-soar opacity-40">🦅</div>
        <div className="absolute top-28 right-16 text-3xl md:text-5xl indonesian-wave opacity-35">⚔️</div>
        <div className="absolute bottom-36 left-12 text-3xl md:text-5xl particle-float opacity-40">🏛️</div>
        <div
          className="absolute top-1/3 right-8 text-4xl md:text-6xl garuda-soar opacity-30"
          style={{ animationDelay: "2s" }}
        >
          🎭
        </div>
        <div className="absolute bottom-16 right-28 text-3xl md:text-4xl indonesian-wave opacity-35">🐉</div>
        <div
          className="absolute top-1/2 left-6 text-3xl md:text-5xl particle-float opacity-30"
          style={{ animationDelay: "3s" }}
        >
          🛡️
        </div>
        <div
          className="absolute bottom-28 left-1/3 text-3xl md:text-4xl garuda-soar opacity-35"
          style={{ animationDelay: "1s" }}
        >
          🥁
        </div>
        <div
          className="absolute top-36 left-1/3 text-3xl md:text-4xl indonesian-wave opacity-30"
          style={{ animationDelay: "4s" }}
        >
          👑
        </div>
        <div
          className="absolute bottom-40 right-1/4 text-3xl md:text-5xl particle-float opacity-25"
          style={{ animationDelay: "2.5s" }}
        >
          🌋
        </div>
        <div
          className="absolute top-2/3 right-12 text-3xl md:text-4xl garuda-soar opacity-30"
          style={{ animationDelay: "1.5s" }}
        >
          ⛵
        </div>
      </div>

      {/* EPIC WARRIOR PARTICLE SYSTEM */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute particle-float opacity-70"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${12 + Math.random() * 6}s`,
            }}
          >
            {i % 4 === 0 && <span className="text-sm md:text-lg">⚔️</span>}
            {i % 4 === 1 && <span className="text-sm md:text-base">🛡️</span>}
            {i % 4 === 2 && <span className="text-xs md:text-sm">👑</span>}
            {i % 4 === 3 && <span className="text-sm md:text-base">🔥</span>}
          </div>
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12 md:space-y-20 scroll-reveal">
          {/* HERO SLIDESHOW */}
          <HeroSlideshow />

          {/* EPIC WARRIOR FEATURES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12 max-w-7xl mx-auto">
            <div className="mega-card p-6 md:p-10 text-center mega-hover mega-glow">
              <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 mega-glow nusantara-glow">
                <Zap className="h-10 w-10 md:h-14 md:w-14 text-white" />
              </div>
              <h3 className="mega-text text-xl md:text-2xl font-black text-white mb-4 md:mb-6">
                ⚡ KECEPATAN GARUDA ⚡
              </h3>
              <p className="text-gray-300 text-lg md:text-xl font-bold mb-2 md:mb-4">Fiber optic hingga 1 Gbps</p>
              <p className="text-orange-400 text-base md:text-lg font-black">Secepat Garuda menyambar mangsa!</p>
              <div className="mt-4 md:mt-6 text-4xl md:text-6xl garuda-soar">🦅</div>
            </div>

            <div className="mega-card p-6 md:p-10 text-center mega-hover mega-glow" style={{ animationDelay: "0.2s" }}>
              <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-blue-500 via-cyan-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 mega-glow nusantara-glow">
                <Shield className="h-10 w-10 md:h-14 md:w-14 text-white" />
              </div>
              <h3 className="mega-text text-xl md:text-2xl font-black text-white mb-4 md:mb-6">
                🛡️ BENTENG MAJAPAHIT 🛡️
              </h3>
              <p className="text-gray-300 text-lg md:text-xl font-bold mb-2 md:mb-4">Uptime 99.9% terjamin</p>
              <p className="text-blue-400 text-base md:text-lg font-black">Sekuat benteng Kerajaan Majapahit!</p>
              <div className="mt-4 md:mt-6 text-4xl md:text-6xl particle-float">🏛️</div>
            </div>

            <div className="mega-card p-6 md:p-10 text-center mega-hover mega-glow" style={{ animationDelay: "0.4s" }}>
              <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-green-500 via-emerald-500 to-lime-500 rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 mega-glow nusantara-glow">
                <Globe className="h-10 w-10 md:h-14 md:w-14 text-white" />
              </div>
              <h3 className="mega-text text-xl md:text-2xl font-black text-white mb-4 md:mb-6">
                🗺️ TAKLUKKAN NUSANTARA 🗺️
              </h3>
              <p className="text-gray-300 text-lg md:text-xl font-bold mb-2 md:mb-4">50+ kota di Indonesia</p>
              <p className="text-green-400 text-base md:text-lg font-black">Dari Sabang sampai Merauke!</p>
              <div className="mt-4 md:mt-6 text-4xl md:text-6xl indonesian-wave">🐉</div>
            </div>
          </div>

          {/* EPIC WARRIOR STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 max-w-7xl mx-auto">
            <div className="mega-card p-6 md:p-10 text-center mega-hover mega-glow">
              <div className="text-4xl md:text-6xl lg:text-7xl font-black text-orange-500 mb-3 md:mb-6 mega-title">
                1000+
              </div>
              <div className="text-gray-300 font-bold text-base md:text-xl mb-2 md:mb-4">🏆 Jagoan Setia</div>
              <div className="text-3xl md:text-5xl indonesian-wave">⚔️</div>
            </div>
            <div className="mega-card p-6 md:p-10 text-center mega-hover mega-glow" style={{ animationDelay: "0.1s" }}>
              <div className="text-4xl md:text-6xl lg:text-7xl font-black text-blue-500 mb-3 md:mb-6 mega-title">
                50+
              </div>
              <div className="text-gray-300 font-bold text-base md:text-xl mb-2 md:mb-4">🏝️ Pulau Taklukan</div>
              <div className="text-3xl md:text-5xl garuda-soar">🦅</div>
            </div>
            <div className="mega-card p-6 md:p-10 text-center mega-hover mega-glow" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl md:text-6xl lg:text-7xl font-black text-green-500 mb-3 md:mb-6 mega-title">
                99.9%
              </div>
              <div className="text-gray-300 font-bold text-base md:text-xl mb-2 md:mb-4">⚡ Kekuatan Stabil</div>
              <div className="text-3xl md:text-5xl particle-float">🏛️</div>
            </div>
            <div className="mega-card p-6 md:p-10 text-center mega-hover mega-glow" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl md:text-6xl lg:text-7xl font-black text-purple-500 mb-3 md:mb-6 mega-title">
                24/7
              </div>
              <div className="text-gray-300 font-bold text-base md:text-xl mb-2 md:mb-4">🛡️ Penjaga Setia</div>
              <div className="text-3xl md:text-5xl garuda-soar">🎭</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
