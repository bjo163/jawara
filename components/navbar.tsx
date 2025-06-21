"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

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
    { id: "hero", label: "Beranda", icon: "🏠", type: "scroll" },
    { id: "about", label: "Tentang", icon: "📖", type: "scroll" },
    { id: "services", label: "Layanan", icon: "⚔️", type: "scroll" },
    { id: "paket", label: "Paket", icon: "💎", type: "link", href: "/paket" },
    { id: "testimonials", label: "Testimoni", icon: "💬", type: "scroll" },
    { id: "berlangganan", label: "Berlangganan", icon: "🗡️", type: "link", href: "/berlangganan" },
    { id: "speedtest", label: "Speed Test", icon: "⚡", type: "link", href: "/speedtest" },
    { id: "contact-page", label: "Kontak", icon: "📞", type: "link", href: "/contact" },
  ]

  const handleNavClick = (item: any) => {
    if (item.type === "link") {
      window.location.href = item.href
    } else {
      scrollToSection(item.id)
    }
  }

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
          {/* Logo */}
          <Logo size="md" showSubtext={true} />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
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
              onClick={() => window.location.href = '/login'}
              className="professional-button px-6 py-2 text-white font-bold cartoon-text"
            >
              � Login
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
                  onClick={() => handleNavClick(item)}
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
                onClick={() => window.location.href = '/login'}
                className="w-full mt-4 professional-button text-white font-bold cartoon-text"
              >
                � Login
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
