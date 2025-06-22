'use client'

import type { LucideIcon } from 'lucide-react'
import { Check } from 'lucide-react'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  color: 'orange' | 'blue' | 'green' | 'purple' | 'pink'
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  color,
}: ServiceCardProps) {
  const colorClasses = {
    orange: {
      border: 'border-orange-500/20 hover:border-orange-500/40',
      iconBg: 'bg-orange-500/20',
      iconColor: 'text-orange-500',
      titleColor: 'text-orange-400',
    },
    blue: {
      border: 'border-blue-500/20 hover:border-blue-500/40',
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-500',
      titleColor: 'text-blue-400',
    },
    green: {
      border: 'border-green-500/20 hover:border-green-500/40',
      iconBg: 'bg-green-500/20',
      iconColor: 'text-green-500',
      titleColor: 'text-green-400',
    },
    purple: {
      border: 'border-purple-500/20 hover:border-purple-500/40',
      iconBg: 'bg-purple-500/20',
      iconColor: 'text-purple-500',
      titleColor: 'text-purple-400',
    },
    pink: {
      border: 'border-pink-500/20 hover:border-pink-500/40',
      iconBg: 'bg-pink-500/20',
      iconColor: 'text-pink-500',
      titleColor: 'text-pink-400',
    },
  }

  const colors = colorClasses[color]

  return (
    <div
      className={`bg-slate-800/50 p-6 rounded-xl border ${colors.border} transition-all duration-300 hover:transform hover:scale-105 hover:bg-slate-800/70`}
    >
      <div
        className={`w-12 h-12 ${colors.iconBg} rounded-lg flex items-center justify-center mb-4`}
      >
        <Icon className={`h-6 w-6 ${colors.iconColor}`} />
      </div>

      <h3 className={`text-xl font-bold mb-3 ${colors.titleColor}`}>{title}</h3>

      <p className="text-gray-300 mb-4 leading-relaxed">{description}</p>

      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-center space-x-2 text-sm text-gray-400"
          >
            <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
