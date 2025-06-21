"use client"

import type { LucideIcon } from "lucide-react"
import { Check } from "lucide-react"

interface TimelineStep {
  icon: LucideIcon
  title: string
  description: string
  details: string[]
  color: "orange" | "blue" | "green" | "purple"
}

interface TechTimelineProps {
  steps: TimelineStep[]
}

export function TechTimeline({ steps }: TechTimelineProps) {
  const colorClasses = {
    orange: {
      bg: "bg-orange-500",
      border: "border-orange-500",
      text: "text-orange-400",
    },
    blue: {
      bg: "bg-blue-500",
      border: "border-blue-500",
      text: "text-blue-400",
    },
    green: {
      bg: "bg-green-500",
      border: "border-green-500",
      text: "text-green-400",
    },
    purple: {
      bg: "bg-purple-500",
      border: "border-purple-500",
      text: "text-purple-400",
    },
  }

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-orange-500 via-blue-500 via-green-500 to-purple-500 opacity-30"></div>

      <div className="space-y-12">
        {steps.map((step, index) => {
          const Icon = step.icon
          const colors = colorClasses[step.color]
          const isEven = index % 2 === 0

          return (
            <div key={index} className={`relative flex items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
              {/* Content */}
              <div className={`w-full md:w-5/12 ${isEven ? "md:pr-8" : "md:pl-8"}`}>
                <div className="bg-slate-800/50 p-6 rounded-xl border border-gray-700 hover:border-gray-600 transition-colors">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`w-10 h-10 ${colors.bg} rounded-full flex items-center justify-center`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-gray-400">Langkah {index + 1}</span>
                      <h3 className={`text-xl font-bold ${colors.text}`}>{step.title}</h3>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4">{step.description}</p>

                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center space-x-2 text-sm text-gray-400">
                        <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline Node */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 items-center justify-center">
                <div
                  className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center border-4 border-slate-950 shadow-lg`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Spacer for opposite side */}
              <div className="hidden md:block w-5/12"></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
