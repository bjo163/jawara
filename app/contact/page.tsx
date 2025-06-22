'use client'

import { useState, useEffect, useCallback } from 'react'
import {
  ArrowLeft,
  MapPin,
  CheckCircle,
  AlertCircle,
  Loader2,
  ExternalLink,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ContactForm } from '@/components/contact-form'
import { contactInfo, officeLocation, quickActions } from '@/data/contact'
import { ContactPageHeader } from '@/components/page-header'
import { LiveChatWidget } from '@/components/live-chat-widget'
import { SubscriptionWidget } from '@/components/subscription-widget-fixed'
import Link from 'next/link'
import type { ContactPageState } from '@/types'

export default function ContactPage() {
  const [state, setState] = useState<ContactPageState>({
    userLocation: null,
    locationStatus: 'idle',
    distance: 0,
    nearestArea: '',
    coverageStatus: null,
  })

  // Calculate distance between two coordinates
  const calculateDistance = (
    lat1: number,
    lng1: number,
    lat2: number,
    lng2: number
  ): number => {
    const R = 6371 // Earth's radius in kilometers
    const dLat = ((lat2 - lat1) * Math.PI) / 180
    const dLng = ((lng2 - lng1) * Math.PI) / 180
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
  }
  // Get user location
  const getUserLocation = useCallback(() => {
    setState(prev => ({
      ...prev,
      locationStatus: 'loading',
      coverageStatus: 'checking',
    }))

    if (!navigator.geolocation) {
      setState(prev => ({
        ...prev,
        locationStatus: 'error',
        coverageStatus: null,
      }))
      return
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        const userLat = position.coords.latitude
        const userLng = position.coords.longitude
        const distance = calculateDistance(
          userLat,
          userLng,
          officeLocation.lat,
          officeLocation.lng
        )

        const isCovered = distance <= officeLocation.coverageRadius

        setState(prev => ({
          ...prev,
          userLocation: { lat: userLat, lng: userLng },
          locationStatus: 'success',
          distance: Math.round(distance * 10) / 10,
          nearestArea: distance < 5 ? 'Srimukti' : 'Bekasi',
          coverageStatus: isCovered ? 'covered' : 'not-covered',
        }))
      },
      error => {
        console.error('Location error:', error)
        setState(prev => ({
          ...prev,
          locationStatus: 'error',
          coverageStatus: null,
        }))
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 300000,
      }
    )
  }, [])
  // Auto-detect location on page load
  useEffect(() => {
    getUserLocation()
  }, [getUserLocation])

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
      orange: 'bg-orange-500 hover:bg-orange-600',
      purple: 'bg-purple-500 hover:bg-purple-600',
    }
    return (
      colorMap[color as keyof typeof colorMap] ||
      'bg-gray-500 hover:bg-gray-600'
    )
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Header */}
      <ContactPageHeader />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full mb-6 professional-glow">
            <span className="text-2xl">📞</span>
          </div>
          <h1 className="cartoon-title text-4xl md:text-5xl font-black text-white mb-4">
            Hubungi Kami
          </h1>
          <p className="cartoon-text text-xl text-gray-300 max-w-2xl mx-auto">
            Siap membantu kamu 24/7! Pilih cara yang paling nyaman buat kamu
          </p>
        </div>

        {/* Location Detection */}
        <Card className="professional-card mb-12">
          <CardHeader>
            <CardTitle className="cartoon-text text-white flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Deteksi Lokasi Otomatis
            </CardTitle>
          </CardHeader>
          <CardContent>
            {state.locationStatus === 'loading' && (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-orange-500 mr-3" />
                <span className="cartoon-text text-gray-300">
                  Mendeteksi lokasi Anda...
                </span>
              </div>
            )}

            {state.locationStatus === 'success' && state.coverageStatus && (
              <div className="space-y-4">
                <div
                  className={`p-4 rounded-lg ${
                    state.coverageStatus === 'covered'
                      ? 'bg-green-500/20 border border-green-500/30'
                      : 'bg-red-500/20 border border-red-500/30'
                  }`}
                >
                  <div className="flex items-center mb-2">
                    {state.coverageStatus === 'covered' ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    ) : (
                      <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                    )}
                    <span className="cartoon-text font-bold text-white">
                      {state.coverageStatus === 'covered'
                        ? '✅ Anda berada dalam coverage area Kantor Jawara-Net'
                        : '❌ Anda berada di luar coverage area'}
                    </span>
                  </div>
                  <p className="cartoon-text text-gray-300">
                    📍 Jarak: {state.distance} km dari kantor kami
                  </p>
                  <p className="cartoon-text text-gray-300">
                    🏢 {officeLocation.address}
                  </p>
                </div>

                {state.coverageStatus === 'covered' && (
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-4 rounded-lg border border-green-500/30">
                    <p className="cartoon-text text-green-300 font-semibold">
                      🎉 Bagus! Lokasi Anda terjangkau layanan kami. Silakan
                      hubungi kami untuk instalasi.
                    </p>
                  </div>
                )}
              </div>
            )}

            {state.locationStatus === 'error' && (
              <div className="bg-yellow-500/20 border border-yellow-500/30 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="cartoon-text font-bold text-white">
                    Tidak dapat mendeteksi lokasi
                  </span>
                </div>
                <p className="cartoon-text text-gray-300 mb-3">
                  Silakan aktifkan GPS atau berikan izin lokasi untuk pengecekan
                  coverage area.
                </p>
                <Button
                  onClick={getUserLocation}
                  className="professional-button"
                >
                  Coba Lagi
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="professional-card">
              <CardHeader>
                <CardTitle className="cartoon-text text-orange-400">
                  Kontak Langsung 📞
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map(contact => (
                  <div key={contact.id} className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(contact.color)}`}
                    >
                      <span className="text-xl">{contact.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="cartoon-text font-semibold text-white mb-1">
                        {contact.title}
                      </h4>{' '}
                      {contact.isClickable ? (
                        <a
                          href={contact.href}
                          className="cartoon-text text-gray-300 hover:text-white transition-colors inline-flex items-center"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {contact.value}
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      ) : (
                        <p className="cartoon-text text-gray-300">
                          {contact.value}
                        </p>
                      )}
                      {contact.secondary && (
                        <p className="cartoon-text text-gray-300">
                          {contact.secondary}
                        </p>
                      )}
                      <p className="cartoon-text text-gray-400 text-sm">
                        {contact.description}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="professional-card">
              <CardHeader>
                <CardTitle className="cartoon-text text-white">
                  Aksi Cepat 🚀
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                      className={`${getActionButtonClass(action.color)} text-white px-4 py-3 rounded-lg text-center font-semibold transition-colors flex items-center justify-center space-x-2`}
                    >
                      <span>{action.icon}</span>
                      <span>{action.title}</span>
                    </a>
                  ))}
                </div>{' '}
                <div className="mt-4">
                  <a
                    href="https://wa.me/6285777300000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-4 py-3 rounded-lg text-center font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>💬</span>
                    <span>Chat dengan Template</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="professional-card">
              <CardHeader>
                <CardTitle className="cartoon-text text-white">
                  Kirim Pesan 💌
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link href="/">
            {' '}
            <Button className="professional-button px-8 py-3">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </div>

      {/* Widgets */}
      <LiveChatWidget />
      <SubscriptionWidget />
    </div>
  )
}
