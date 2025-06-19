"use client"

import { Sparkles, Crown, Sword } from "lucide-react"

interface SectionTitleProps {
  title: string
  subtitle: string
  centered?: boolean
}

export function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={`mb-24 ${centered ? "text-center" : ""} scroll-reveal`}>
      <div className="relative inline-block mb-12">
        <div className="bg-gradient-to-br from-orange-400 via-yellow-500 to-orange-600 p-12 rounded-3xl shadow-2xl nusantara-glow border-4 border-orange-300 mega-hover">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 drop-shadow-lg">{title}</h2>
        </div>
        <Sparkles className="absolute -top-6 -right-6 h-12 w-12 text-yellow-400 animate-spin" />
        <Crown className="absolute -top-4 -left-4 h-10 w-10 text-yellow-500 indonesian-wave" />
        <Sword className="absolute -bottom-4 -right-4 h-10 w-10 text-red-500 garuda-soar" />
        <div className="absolute -bottom-3 -left-3 w-8 h-8 bg-orange-500 rounded-full animate-pulse"></div>
      </div>
      <div className="mega-card p-10 max-w-5xl mx-auto mega-hover">
        <p className="mega-text text-2xl md:text-3xl text-gray-300 leading-relaxed font-bold">{subtitle}</p>
        <div className="flex justify-center space-x-8 mt-8">
          <span className="text-4xl garuda-soar">🦅</span>
          <span className="text-4xl indonesian-wave">⚔️</span>
          <span className="text-4xl particle-float">🏛️</span>
          <span className="text-4xl garuda-soar">🎭</span>
          <span className="text-4xl indonesian-wave">🐉</span>
        </div>
      </div>
    </div>
  )
}
