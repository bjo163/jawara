'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/logo'

interface NavbarProps {
  activeSection: string
  onNavigate?: (section: string) => void
}

export function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const navItems = [
    { id: 'hero', label: 'Beranda', icon: '🏛️', type: 'scroll' },
    { id: 'about', label: 'Tentang', icon: '🛡️', type: 'scroll' },
    { id: 'services', label: 'Layanan', icon: '⚔️', type: 'scroll' },
    { id: 'paket', label: 'Paket', icon: '👑', type: 'link', href: '/paket' },
    {
      id: 'speedtest',
      label: 'Speed Test',
      icon: '⚡',
      type: 'link',
      href: '/speedtest',
    },
    { id: 'faq', label: 'FAQ', icon: '❓', type: 'link', href: '/faq' },
    {
      id: 'contact',
      label: 'Kontak',
      icon: '📞',
      type: 'link',
      href: '/contact',
    },
  ]

  const handleNavigation = (item: (typeof navItems)[0]) => {
    if (item.type === 'link' && item.href) {
      window.location.href = item.href
    } else if (item.type === 'scroll') {
      scrollToSection(item.id)
    } else if (onNavigate) {
      onNavigate(item.id)
    }
    setIsOpen(false)
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {' '}
          {/* Logo */}
          <div className="flex items-center">
            <Logo size="md" showSubtext={false} />
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center space-x-2 ${
                  activeSection === item.id
                    ? 'bg-orange-500/20 text-orange-400'
                    : 'text-gray-300 hover:text-orange-400 hover:bg-orange-500/10'
                }`}
              >
                <span className="text-sm">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            ))}
          </div>
          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative group">
              <Button className="professional-button px-6 py-2 text-white font-bold cartoon-text">
                🔐 Login
              </Button>
              {/* Dropdown Menu */}{' '}
              <div className="absolute right-0 mt-2 w-48 bg-slate-950 border border-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <button
                    onClick={() => (window.location.href = '/login/pelanggan')}
                    className="w-full text-left px-4 py-2 text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 transition-colors"
                  >
                    👤 Login Pelanggan
                  </button>
                  <button
                    onClick={() => (window.location.href = '/login/admin')}
                    className="w-full text-left px-4 py-2 text-gray-300 hover:text-orange-400 hover:bg-orange-500/10 transition-colors"
                  >
                    ⚙️ Login Admin
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-950/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-3 ${
                    activeSection === item.id
                      ? 'bg-orange-500/20 text-orange-400'
                      : 'text-gray-300 hover:text-orange-400 hover:bg-orange-500/10'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
              {/* Mobile Login Buttons */}{' '}
              <div className="pt-4 border-t border-gray-800">
                <button
                  onClick={() => (window.location.href = '/login/pelanggan')}
                  className="w-full mb-2 px-4 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <span>👤</span>
                  <span>Login Pelanggan</span>
                </button>
                <button
                  onClick={() => (window.location.href = '/login/admin')}
                  className="w-full px-4 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <span>⚙️</span>
                  <span>Login Admin</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
