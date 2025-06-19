"use client"

import type { LucideIcon } from "lucide-react"
import { Check } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  color: "orange" | "blue" | "green" | "purple" | "pink"
}

export function ServiceCard({ icon: Icon, title, description, features, color }: ServiceCardProps) {
  const colorClasses = {
    orange: {
      gradient: "from-orange-500 via-red-500 to-pink-500",
      text: "text-orange-400",
    },
    blue: {
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      text: "text-blue-400",
    },
    green: {
      gradient: "from-green-500 via-emerald-500 to-lime-500",
      text: "text-green-400",
    },
    purple: {
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      text: "text-purple-400",
    },
    pink: {
      gradient: "from-pink-500 via-rose-500 to-red-500",
      text: "text-pink-400",
    },
  }

  const colors = colorClasses[color]

  return (
    <div className="mega-card p-8 mega-hover mega-glow">
      <div
        className={`w-20 h-20 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center mb-6 mega-glow nusantara-glow`}
      >
        <Icon className="h-10 w-10 text-white" />
      </div>

      <h3 className={`mega-title text-2xl mb-4 ${colors.text}`}>{title}</h3>

      <p className="mega-text text-gray-300 mb-6 leading-relaxed text-lg">{description}</p>

      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3 mega-text text-gray-400">
            <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mega-glow">
              <Check className="h-4 w-4 text-white font-bold" />
            </div>
            <span className="text-base">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
