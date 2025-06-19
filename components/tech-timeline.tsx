"use client";

import type { LucideIcon } from "lucide-react";
import { Check, Sparkles, Sword } from "lucide-react";

interface TimelineStep {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  color: "orange" | "blue" | "green" | "purple";
  character: string;
  epicTitle: string;
}

interface TechTimelineProps {
  steps: TimelineStep[];
}

export function TechTimeline({ steps }: TechTimelineProps) {
  const colorClasses = {
    orange: {
      gradient: "from-orange-500 via-red-500 to-pink-500",
      text: "text-orange-400",
      bg: "bg-orange-500/20",
      border: "border-orange-500/30",
    },
    blue: {
      gradient: "from-blue-500 via-cyan-500 to-teal-500",
      text: "text-blue-400",
      bg: "bg-blue-500/20",
      border: "border-blue-500/30",
    },
    green: {
      gradient: "from-green-500 via-emerald-500 to-lime-500",
      text: "text-green-400",
      bg: "bg-green-500/20",
      border: "border-green-500/30",
    },
    purple: {
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      text: "text-purple-400",
      bg: "bg-purple-500/20",
      border: "border-purple-500/30",
    },
  };

  return (
    <div className="relative">
      {/* EPIC TIMELINE LINE */}
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-orange-500 via-blue-500 via-green-500 to-purple-500 opacity-50 rounded-full mega-glow"></div>

      <div className="space-y-16">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const colors = colorClasses[step.color];
          const isEven = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative flex items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"} scroll-reveal`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* EPIC CONTENT */}
              <div className={`w-full md:w-5/12 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                <div className="mega-card p-10 mega-hover mega-glow">
                  {/* EPIC HEADER */}
                  <div className="text-center mb-8">
                    <div className="text-6xl mb-6 garuda-soar">{step.character}</div>
                    <div className="mega-card p-4 mb-6 bg-gradient-to-r from-orange-400 via-yellow-500 to-orange-600 border-4 border-orange-300">
                      <h3 className="mega-title text-2xl font-black text-slate-900">{step.epicTitle}</h3>
                    </div>
                    <div className="flex items-center justify-center space-x-4 mb-6">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center mega-glow nusantara-glow`}
                      >
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <span className="mega-text text-sm text-gray-400 font-bold">Langkah {index + 1}</span>
                        <h4 className={`mega-text text-xl font-black ${colors.text}`}>{step.title}</h4>
                      </div>
                    </div>
                  </div>

                  {/* EPIC DESCRIPTION */}
                  <div className="mega-card p-6 mb-8 bg-slate-800/50">
                    <p className="mega-text text-gray-300 text-lg leading-relaxed font-bold">{step.description}</p>
                  </div>

                  {/* EPIC DETAILS */}
                  <div className="space-y-4">
                    <h5 className="mega-text font-black text-white text-lg mb-4 flex items-center space-x-2">
                      <Sword className="h-5 w-5" />
                      <span>Detail Proses:</span>
                    </h5>
                    {step.details.map((detail, detailIndex) => (
                      <div
                        key={detailIndex}
                        className={`mega-card p-4 ${colors.bg} ${colors.border} border-2 mega-hover flex items-center space-x-4`}
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mega-glow">
                          <Check className="h-5 w-5 text-white font-bold" />
                        </div>
                        <span className="mega-text text-gray-300 font-bold text-lg">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* EPIC TIMELINE NODE */}
              <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-20 h-20 items-center justify-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-full flex items-center justify-center border-4 border-slate-950 shadow-2xl mega-glow nusantara-glow relative`}
                >
                  <Icon className="h-8 w-8 text-white" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-white text-xs font-bold">{index + 1}</span>
                  </div>
                  <Sparkles className="absolute -bottom-2 -left-2 h-6 w-6 text-yellow-400 animate-spin" />
                </div>
              </div>

              {/* SPACER FOR OPPOSITE SIDE */}
              <div className="hidden md:block w-5/12"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
