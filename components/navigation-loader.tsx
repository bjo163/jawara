"use client";

import { useEffect, useState } from "react";
import { Sparkles, Crown, Sword } from "lucide-react";

interface NavigationLoaderProps {
  isVisible: boolean;
  targetSection: string;
}

export function NavigationLoader({ isVisible, targetSection }: NavigationLoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + Math.random() * 25;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const sectionIcons: { [key: string]: string } = {
    hero: "🏠",
    about: "📖",
    services: "⚔️",
    packages: "💎",
    testimonials: "💬",
    contact: "📞",
    coverage: "🗺️",
    faq: "❓",
  };

  const sectionNames: { [key: string]: string } = {
    hero: "Beranda",
    about: "Tentang Kami",
    services: "Layanan",
    packages: "Paket Internet",
    testimonials: "Testimoni",
    contact: "Kontak",
    coverage: "Area Coverage",
    faq: "FAQ",
  };

  return (
    <div className="navigation-loader nusantara-bg flex items-center justify-center">
      {/* EPIC BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 mega-grid opacity-20"></div>
      <div className="absolute top-20 left-20 text-8xl garuda-soar opacity-30">🦅</div>
      <div className="absolute bottom-20 right-20 text-8xl indonesian-wave opacity-30">⚔️</div>

      <div className="text-center relative z-10">
        {/* NAVIGATION ICON */}
        <div className="relative mb-12">
          <div className="w-32 h-32 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mega-glow nusantara-glow animate-pulse">
            <span className="text-6xl">{sectionIcons[targetSection] || "🎯"}</span>
          </div>
          <Sparkles className="absolute -top-4 -right-4 h-12 w-12 text-yellow-400 animate-spin" />
          <Crown className="absolute -bottom-4 -left-4 h-10 w-10 text-yellow-500 indonesian-wave" />
          <Sword className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 text-red-500 opacity-30 particle-float" />
        </div>

        {/* NAVIGATION INFO */}
        <div className="mega-card p-12 mega-hover mega-glow mb-8">
          <h2 className="mega-title text-4xl mb-4">🚀 Navigasi ke {sectionNames[targetSection]} 🚀</h2>
          <p className="mega-text text-gray-400 text-xl">Memuat konten terbaik untuk kamu...</p>
        </div>

        {/* PROGRESS BAR */}
        <div className="max-w-md mx-auto mb-8">
          <div className="mega-card p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="mega-text text-white font-bold">Loading Progress</span>
              <span className="mega-text text-orange-400 font-bold">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-full transition-all duration-300 ease-out mega-glow"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* LOADING DOTS */}
        <div className="flex justify-center space-x-3">
          <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full animate-bounce"></div>
          <div
            className="w-4 h-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.1s" }}
          ></div>
          <div
            className="w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
