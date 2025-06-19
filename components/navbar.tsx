"use client";

import { useState, useEffect } from "react";
import { Menu, X, Wifi, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigationConfig } from "@/configs/navigation/menu";

interface NavbarProps {
  activeSection: string;
  onNavigate?: (section: string) => void;
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Use navigation config instead of hardcoded data
  const { items: navItems } = navigationConfig.navbar;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (onNavigate) {
      onNavigate(sectionId);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-700 ${
        scrolled
          ? "mega-card backdrop-blur-3xl border-b-4 border-orange-500/50 shadow-2xl mega-glow"
          : "bg-slate-950/90 backdrop-blur-sm border-b border-orange-500/20"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex justify-between items-center h-14 md:h-16">
          {/* EPIC WARRIOR LOGO - Compact */}
          <div className="flex items-center space-x-2 mega-hover flex-shrink-0">
            <div className="relative group">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-xl flex items-center justify-center mega-glow nusantara-glow">
                <Wifi className="h-5 w-5 md:h-6 md:w-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full animate-ping"></div>
              <Sparkles className="absolute -bottom-1 -left-1 h-3 w-3 md:h-4 md:w-4 text-yellow-400 animate-spin" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="mega-title text-sm md:text-lg lg:text-xl text-orange-500">JAWARA</span>
                <span className="mega-title text-sm md:text-lg lg:text-xl text-red-500">NET</span>
              </div>
              <span className="mega-text text-xs text-gray-400 font-bold hidden sm:block">🏝️ NUSANTARA 🏝️</span>
            </div>
          </div>

          {/* EPIC WARRIOR DESKTOP NAVIGATION - Compact */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`mega-text px-2 xl:px-3 py-2 rounded-xl font-bold transition-all duration-500 flex items-center space-x-1 mega-hover relative overflow-hidden text-xs xl:text-sm ${
                  activeSection === item.id
                    ? "mega-button text-white shadow-2xl mega-glow"
                    : "text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-xl"
                }`}
              >
                <span>{item.label}</span>
                <span className="text-sm indonesian-wave">{item.icon}</span>
              </button>
            ))}
          </div>

          {/* EPIC WARRIOR CTA BUTTONS - Compact */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 flex-shrink-0">
            <Button
              onClick={() => scrollToSection("coverage")}
              className="mega-button bg-gradient-to-r from-orange-500 to-red-500 px-2 lg:px-3 py-1 text-white font-bold mega-text mega-hover flex items-center space-x-1 text-xs"
            >
              <span>📍 Coverage</span>
            </Button>
            <Button
              onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
              className="mega-button bg-gradient-to-r from-green-500 to-emerald-500 px-2 lg:px-3 py-1 text-white font-bold mega-text mega-hover flex items-center space-x-1 text-xs"
            >
              <span>💬 WA</span>
            </Button>
          </div>

          {/* EPIC WARRIOR MOBILE MENU BUTTON */}
          <div className="lg:hidden flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10 mega-hover p-2 rounded-xl"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* EPIC WARRIOR MOBILE NAVIGATION - Enhanced */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="mega-card m-3 p-4 space-y-3 mega-glow">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-bold mega-text transition-all duration-500 flex items-center space-x-3 mega-hover text-sm ${
                    activeSection === item.id
                      ? "mega-button text-white"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="flex-1">{item.label}</span>
                  <span className="text-lg indonesian-wave">{item.icon}</span>
                </button>
              ))}
              <div className="pt-3 space-y-2">
                <Button
                  onClick={() => scrollToSection("coverage")}
                  className="w-full mega-button bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold mega-text py-2 text-sm"
                >
                  📍 Request Coverage Area
                </Button>
                <Button
                  onClick={() => window.open("https://wa.me/6281234567890", "_blank")}
                  className="w-full mega-button bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold mega-text py-2 text-sm"
                >
                  💬 Tanya via WhatsApp
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
