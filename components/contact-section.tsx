'use client'

import { SectionTitle } from '@/components/section-title'
import { ContactForm } from '@/components/contact-form'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react'
import { contactInfo, quickActions } from '@/data/contact'
import Link from 'next/link'

export function ContactSection() {
  const getColorClasses = (color: string) => {
    const colorMap = {
      green: 'bg-green-500/20 text-green-500',
      blue: 'bg-blue-500/20 text-blue-500',
      orange: 'bg-orange-500/20 text-orange-500',
      purple: 'bg-purple-500/20 text-purple-500',
      yellow: 'bg-yellow-500/20 text-yellow-500',
    }
    return (
      colorMap[color as keyof typeof colorMap] || 'bg-gray-500/20 text-gray-500'
    )
  }

  const getActionButtonClass = (color: string) => {
    const colorMap = {
      green: 'bg-green-500 hover:bg-green-600',
      blue: 'bg-blue-500 hover:bg-blue-600',
    }
    return (
      colorMap[color as keyof typeof colorMap] ||
      'bg-gray-500 hover:bg-gray-600'
    )
  }

  // Show first 3 contact items for preview
  const previewContacts = contactInfo.slice(0, 3)

  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Hubungi Kami"
          subtitle="Siap membantu kamu 24/7! Pilih cara yang paling nyaman buat kamu"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info Preview */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-orange-400">
                  Kontak Langsung 📞
                </h3>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-orange-400 border-orange-400 hover:bg-orange-400 hover:text-white"
                  >
                    Lihat Semua <ExternalLink className="h-3 w-3 ml-1" />
                  </Button>
                </Link>
              </div>

              <div className="space-y-6">
                {previewContacts.map(contact => (
                  <div key={contact.id} className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(contact.color)}`}
                    >
                      <span className="text-xl">{contact.icon}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {contact.title}
                      </h4>
                      {contact.isClickable ? (
                        <a
                          href={contact.href}
                          className="text-gray-300 hover:text-white transition-colors"
                          target={
                            contact.type === 'whatsapp' ? '_blank' : undefined
                          }
                          rel={
                            contact.type === 'whatsapp'
                              ? 'noopener noreferrer'
                              : undefined
                          }
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-gray-300">{contact.value}</p>
                      )}
                      {contact.secondary && (
                        <p className="text-gray-300">{contact.secondary}</p>
                      )}
                      <p className="text-gray-400 text-sm">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 p-6 rounded-xl border border-gray-700">
              <h4 className="text-lg font-bold text-white mb-4">
                Aksi Cepat 🚀
              </h4>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {quickActions.map(action => (
                  <a
                    key={action.id}
                    href={action.href}
                    target={
                      action.id === 'whatsapp-action' ? '_blank' : undefined
                    }
                    rel={
                      action.id === 'whatsapp-action'
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className={`${getActionButtonClass(action.color)} text-white px-4 py-2 rounded-lg text-center font-semibold transition-colors`}
                  >
                    {action.title}
                  </a>
                ))}
              </div>
              <Link href="/contact">
                <Button className="w-full professional-button">
                  Halaman Kontak Lengkap
                  <ExternalLink className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
