"use client"

import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

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
      gradient: "from-orange-500 to-red-500",
      text: "text-orange-400",
      ring: "ring-orange-500/50",
    },
    blue: {
      gradient: "from-blue-500 to-cyan-500",
      text: "text-blue-400",
      ring: "ring-blue-500/50",
    },
    green: {
      gradient: "from-green-500 to-emerald-500",
      text: "text-green-400",
      ring: "ring-green-500/50",
    },
    purple: {
      gradient: "from-purple-500 to-pink-500",
      text: "text-purple-400",
      ring: "ring-purple-500/50",
    },
  }

  const colors = colorClasses[color]

  return (
    <div
      className={`professional-card p-6 transition-all duration-500 hover:scale-105 ${
        popular ? `ring-2 ${colors.ring} professional-glow` : ""
      }`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="professional-bubble bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-6 py-2 text-sm font-black flex items-center space-x-2">
            <Star className="h-4 w-4 fill-current" />
            <span className="cartoon-text">TERPOPULER</span>
            <Star className="h-4 w-4 fill-current" />
          </div>
        </div>
      )}

      {/* Character & Header */}
      <div className="text-center mb-6">
        <div className="text-5xl mb-3 float-gentle">{character}</div>
        <div className="text-4xl mb-3">{icon}</div>
        <h3 className={`cartoon-title text-xl font-black ${colors.text} mb-3`}>{name}</h3>
        <div className="space-y-1">
          <div className="cartoon-text text-3xl font-black text-white">{speed}</div>
          <div className="cartoon-text text-gray-400 font-semibold">{quota}</div>
        </div>
      </div>

      {/* Professional Pricing */}
      <div className="text-center mb-6">
        <div className="professional-card p-4 bg-gradient-to-br from-slate-800/50 to-slate-700/50">
          <div className="flex items-center justify-center space-x-2 mb-1">
            {originalPrice && <span className="cartoon-text text-gray-500 line-through text-lg">{originalPrice}</span>}
            <span className="cartoon-text text-2xl font-black text-white">{price}</span>
          </div>
          <div className="cartoon-text text-gray-400 font-semibold">/bulan</div>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3 text-sm">
            <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
            <span className="cartoon-text text-gray-300 font-medium">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Professional CTA Buttons */}
      <div className="space-y-3">
        <Button
          className={`w-full professional-button bg-gradient-to-r ${colors.gradient} text-white font-bold py-3 cartoon-text`}
          onClick={() => {
            const element = document.getElementById("contact")
            if (element) element.scrollIntoView({ behavior: "smooth" })
          }}
        >
          🚀 Pilih Paket Ini
        </Button>
        <Button
          variant="outline"
          className="w-full cartoon-text border-gray-600 text-gray-300 hover:bg-gray-800 font-semibold py-2 rounded-lg"
        >
          📋 Detail Lengkap
        </Button>
      </div>
    </div>
  )
}
