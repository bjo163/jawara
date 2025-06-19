"use client"

import { Button } from "@/components/ui/button"
import { Check, Sparkles, Crown } from "lucide-react"

interface ProductCardProps {
  name: string
  icon: string
  speed: string
  quota: string
  price: string
  originalPrice?: string
  features: string[]
  popular?: boolean
  color: "orange" | "blue" | "green" | "purple"
  character?: string
}

export function ProductCard({
  name,
  icon,
  speed,
  quota,
  price,
  originalPrice,
  features,
  popular = false,
  color,
  character = "🦸‍♂️",
}: ProductCardProps) {
  const colorClasses = {
    orange: {
      gradient: "from-orange-500 via-red-500 to-pink-500",
      text: "text-orange-400",
      glow: "shadow-orange-500/50",
    },
    blue: {
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      text: "text-blue-400",
      glow: "shadow-blue-500/50",
    },
    green: {
      gradient: "from-green-500 via-emerald-500 to-lime-500",
      text: "text-green-400",
      glow: "shadow-green-500/50",
    },
    purple: {
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      text: "text-purple-400",
      glow: "shadow-purple-500/50",
    },
  }

  const colors = colorClasses[color]

  return (
    <div
      className={`mega-card p-8 transition-all duration-700 mega-hover relative overflow-hidden ${
        popular ? `nusantara-glow ring-4 ring-yellow-500/50` : ""
      }`}
    >
      {/* SPECTACULAR POPULAR BADGE */}
      {popular && (
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
          <div className="mega-bubble bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 text-slate-900 px-8 py-3 text-lg font-black flex items-center space-x-3 nusantara-glow">
            <Crown className="h-6 w-6 fill-current" />
            <span className="mega-text">PILIHAN SULTAN!</span>
            <Crown className="h-6 w-6 fill-current" />
          </div>
        </div>
      )}

      {/* SPECTACULAR BACKGROUND EFFECT */}
      <div className="absolute inset-0 opacity-10">
        <div className={`w-full h-full bg-gradient-to-br ${colors.gradient} rounded-3xl`}></div>
      </div>

      {/* CHARACTER & HEADER */}
      <div className="text-center mb-8 relative z-10">
        <div className="text-7xl mb-4 indonesian-wave">{character}</div>
        <div className="text-5xl mb-4 garuda-soar">{icon}</div>
        <h3 className={`mega-title text-2xl font-black ${colors.text} mb-4 drop-shadow-lg`}>{name}</h3>
        <div className="space-y-2">
          <div className="mega-text text-4xl font-black text-white drop-shadow-lg">{speed}</div>
          <div className="mega-text text-gray-400 font-bold text-lg">{quota}</div>
        </div>
      </div>

      {/* SPECTACULAR PRICING */}
      <div className="text-center mb-8 relative z-10">
        <div className="mega-card p-6 bg-gradient-to-br from-slate-800/80 to-slate-700/80 nusantara-glow">
          <div className="flex items-center justify-center space-x-3 mb-2">
            {originalPrice && (
              <span className="mega-text text-gray-500 line-through text-xl font-bold">{originalPrice}</span>
            )}
            <span className="mega-text text-3xl font-black text-white drop-shadow-lg">{price}</span>
          </div>
          <div className="mega-text text-gray-400 font-bold text-lg">/bulan</div>
          <div className="text-sm text-orange-400 font-bold mt-2">💰 Hemat sampai 25%!</div>
        </div>
      </div>

      {/* SPECTACULAR FEATURES */}
      <ul className="space-y-4 mb-10 relative z-10">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-4 text-base">
            <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mega-glow">
              <Check className="h-4 w-4 text-white font-bold" />
            </div>
            <span className="mega-text text-gray-300 font-semibold leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      {/* SPECTACULAR CTA BUTTONS */}
      <div className="space-y-4 relative z-10">
        <Button
          className={`w-full mega-button bg-gradient-to-r ${colors.gradient} text-white font-black py-4 text-lg mega-text mega-hover flex items-center justify-center space-x-3`}
          onClick={() => {
            const element = document.getElementById("contact")
            if (element) element.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <Sparkles className="h-5 w-5" />
          <span>🚀 TAKLUKKAN SEKARANG!</span>
          <Sparkles className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          className="w-full mega-text border-2 border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-gray-500 font-bold py-3 rounded-xl mega-hover transition-all duration-300"
        >
          🛡️ Detail Senjata Lengkap
        </Button>
      </div>

      {/* SPECTACULAR FLOATING ELEMENTS */}
      <div className="absolute top-4 right-4 text-2xl particle-float opacity-60">✨</div>
      <div className="absolute bottom-4 left-4 text-xl indonesian-wave opacity-60">⚡</div>
    </div>
  )
}
