"use client"

import { useState, useEffect } from "react"
import { Menu, X, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  activeSection: string
}

export function Navbar({ activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "hero", label: "Beranda", icon: "🏠" },
    { id: "about", label: "Tentang", icon: "📖" },
    { id: "services", label: "Layanan", icon: "⚔️" },
    { id: "packages", label: "Paket", icon: "💎" },
    { id: "testimonials", label: "Testimoni", icon: "💬" },
    { id: "contact", label: "Kontak", icon: "📞" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/95 backdrop-blur-xl border-b border-orange-500/20 shadow-2xl" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Professional Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center professional-glow">
                <Wifi className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="cartoon-title text-xl md:text-2xl text-red-500">JAWARA</span>
                <span className="cartoon-title text-xl md:text-2xl text-orange-500">NET</span>
              </div>
              <span className="cartoon-text text-xs text-gray-400 font-semibold hidden md:block">
                INTERNET NUSANTARA
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`cartoon-text px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="text-sm">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={() => scrollToSection("contact")}
              className="professional-button px-6 py-2 text-white font-bold cartoon-text"
            >
              🚀 Gabung Sekarang
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="professional-card m-2 p-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-semibold cartoon-text transition-all duration-300 flex items-center space-x-3 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
              <Button
                onClick={() => scrollToSection("contact")}
                className="w-full mt-4 professional-button text-white font-bold cartoon-text"
              >
                🚀 Gabung Sekarang
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
