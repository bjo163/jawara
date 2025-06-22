'use client'

import { useState } from 'react'
import { MapPin, CheckCircle, AlertCircle, Loader2, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function SubscriptionWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [userLocation, setUserLocation] = useState<{
    lat: number
    lng: number
  } | null>(null)
  const [locationStatus, setLocationStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [coverageStatus, setCoverageStatus] = useState<
    'checking' | 'covered' | 'not-covered' | null
  >(null)
  const [nearestArea, setNearestArea] = useState<string>('')
  const [distance, setDistance] = useState<number>(0)

  // Jawara-Net Office Location (dari koordinat yang sudah diset sebelumnya)
  const jawaraNetOffice = {
    name: 'Kantor Jawara-Net',
    lat: -6.1810747,
    lng: 107.0654949,
    address: 'R398+H5H Srimukti, Bekasi Regency, West Java',
    coverageRadius: 10, // 10km radius
  }

  // Function to scroll to contact section
  const scrollToContact = () => {
    console.log('Scrolling to contact section...')
    setIsOpen(false)

    setTimeout(() => {
      const element = document.getElementById('contact')
      console.log('Contact element:', element)
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        })

        // Auto-fill form after scroll
        setTimeout(() => {
          const addressInput = document.querySelector(
            'input[placeholder*="alamat"], textarea[placeholder*="alamat"], input[name*="address"], textarea[name*="address"]'
          ) as HTMLInputElement | HTMLTextAreaElement
          if (addressInput && userLocation) {
            addressInput.value = `Koordinat: ${userLocation.lat.toFixed(6)}, ${userLocation.lng.toFixed(6)} (Jarak ${distance.toFixed(1)}km dari kantor)`
            addressInput.focus()
          }
        }, 1000)
      } else {
        console.error('Contact section not found!')
        // Fallback: try to find contact form directly
        const contactForm = document.querySelector(
          'form, [id*="contact"], [class*="contact"]'
        )
        console.log('Contact form fallback:', contactForm)
        if (contactForm) {
          contactForm.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }, 200)
  }

  // Calculate distance between two points (Haversine formula)
  const calculateDistance = (
    lat1: number,
    lng1: number,
    lat2: number,
    lng2: number
  ): number => {
    const R = 6371 // Earth's radius in km
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

  // Check coverage
  const checkCoverage = (userLat: number, userLng: number) => {
    setCoverageStatus('checking')

    // Hitung jarak dari kantor Jawara-Net
    const distance = calculateDistance(
      userLat,
      userLng,
      jawaraNetOffice.lat,
      jawaraNetOffice.lng
    )
    setDistance(distance)
    setNearestArea(jawaraNetOffice.name)

    setTimeout(() => {
      setCoverageStatus(
        distance <= jawaraNetOffice.coverageRadius ? 'covered' : 'not-covered'
      )
    }, 1500)
  }

  // Get user location
  const getUserLocation = () => {
    setLocationStatus('loading')
    setCoverageStatus(null)

    if (!navigator.geolocation) {
      setLocationStatus('error')
      return
    }

    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords
        setUserLocation({ lat: latitude, lng: longitude })
        setLocationStatus('success')
        checkCoverage(latitude, longitude)
      },
      error => {
        console.error('Error getting location:', error)
        setLocationStatus('error')
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000,
      }
    )
  }
  return (
    <>
      {/* Subscription Widget Button */}
      <div className="fixed bottom-20 left-4 md:bottom-6 md:left-6 z-50">
        {!isOpen && (
          <button
            onClick={() => (window.location.href = '/berlangganan')}
            className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center space-x-2 text-sm md:text-base"
          >
            <span className="text-lg md:text-xl">👑</span>
            <span className="font-bold">Berlangganan</span>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
          </button>
        )}{' '}
        {/* Subscription Window */}
        {isOpen && (
          <div className="bg-slate-900 border border-gray-700 rounded-2xl shadow-2xl w-80 md:w-96 max-h-[400px] md:max-h-[500px] flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 md:p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-lg md:text-xl">👑</span>
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm md:text-base">
                    Gabung Jawara-Net
                  </h3>
                  <p className="text-xs text-orange-100">
                    Cek coverage area Anda
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-1 rounded-full transition-colors"
              >
                <X className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            </div>{' '}
            {/* Content */}
            <div className="flex-1 p-4 md:p-6 space-y-4">
              {/* Location Check */}
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                <h4 className="text-base md:text-lg font-bold text-white mb-2">
                  Cek Lokasi Anda
                </h4>
                <p className="text-gray-400 text-xs md:text-sm mb-4">
                  Kami akan mengecek apakah lokasi Anda sudah ter-cover jaringan
                  Jawara-Net dalam radius 10km
                </p>

                {locationStatus === 'idle' && (
                  <Button
                    onClick={getUserLocation}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-2 rounded-lg font-semibold"
                  >
                    <MapPin className="h-4 w-4 mr-2" />
                    Deteksi Lokasi Saya
                  </Button>
                )}

                {locationStatus === 'loading' && (
                  <div className="flex items-center justify-center space-x-2 text-blue-400">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Mendeteksi lokasi...</span>
                  </div>
                )}

                {locationStatus === 'error' && (
                  <div className="text-red-400 text-sm">
                    <AlertCircle className="h-5 w-5 mx-auto mb-2" />
                    <p>
                      Tidak dapat mengakses lokasi. Pastikan Anda mengizinkan
                      akses lokasi di browser.
                    </p>
                    <Button
                      onClick={getUserLocation}
                      className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded text-xs"
                    >
                      Coba Lagi
                    </Button>
                  </div>
                )}
              </div>

              {/* Coverage Status */}
              {userLocation && (
                <div className="border-t border-gray-700 pt-4">
                  <div className="text-center">
                    <p className="text-gray-400 text-xs mb-3">
                      📍 Koordinat: {userLocation.lat.toFixed(6)},{' '}
                      {userLocation.lng.toFixed(6)}
                    </p>

                    {coverageStatus === 'checking' && (
                      <div className="flex items-center justify-center space-x-2 text-yellow-400">
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Mengecek coverage area...</span>
                      </div>
                    )}

                    {coverageStatus === 'covered' && (
                      <div className="text-green-400">
                        <CheckCircle className="h-12 w-12 mx-auto mb-3" />
                        <h5 className="font-bold text-lg mb-2">
                          🎉 Lokasi Anda Ter-cover!
                        </h5>
                        <p className="text-sm mb-4">
                          Anda berada dalam coverage area{' '}
                          <strong>{nearestArea}</strong>
                          <br />
                          <span className="text-gray-400">
                            Jarak: {distance.toFixed(1)} km dari kantor kami
                          </span>
                          <br />
                          <span className="text-green-300 text-xs">
                            📍 {jawaraNetOffice.address}
                          </span>
                        </p>
                        <div className="space-y-2">
                          <button
                            onClick={scrollToContact}
                            className="block w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                          >
                            📞 Lanjut ke Formulir Kontak
                          </button>
                          <a
                            href={`https://wa.me/6281295295734?text=Halo%20Jawara-Net!%20Saya%20ingin%20berlangganan%20internet.%20Lokasi%20saya:%20${userLocation?.lat.toFixed(6)},%20${userLocation?.lng.toFixed(6)}%20(Jarak%20${distance.toFixed(1)}km%20dari%20kantor)`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors text-center"
                          >
                            � Hubungi Kami Langsung
                          </a>
                        </div>
                      </div>
                    )}

                    {coverageStatus === 'not-covered' && (
                      <div className="text-orange-400">
                        <AlertCircle className="h-12 w-12 mx-auto mb-3" />
                        <h5 className="font-bold text-lg mb-2">
                          📍 Belum Ter-cover
                        </h5>
                        <p className="text-sm mb-4">
                          Lokasi Anda belum ter-cover jaringan kami.
                          <br />
                          Jarak dari kantor kami:{' '}
                          <strong>{distance.toFixed(1)} km</strong>
                          <br />
                          <span className="text-gray-400">
                            📍 {jawaraNetOffice.address}
                          </span>
                          <br />
                          <span className="text-yellow-300 text-xs">
                            ⚠️ Coverage radius: {jawaraNetOffice.coverageRadius}{' '}
                            km
                          </span>
                        </p>
                        <div className="space-y-2">
                          <a
                            href={`https://wa.me/6281295295734?text=Halo%20Jawara-Net!%20Saya%20tertarik%20berlangganan%20tapi%20lokasi%20saya%20belum%20ter-cover.%20Lokasi:%20${userLocation?.lat.toFixed(6)},%20${userLocation?.lng.toFixed(6)}%20(Jarak%20${distance.toFixed(1)}km%20dari%20kantor).%20Kapan%20bisa%20dilayani?`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                          >
                            💬 Request Coverage Area
                          </a>
                          <button
                            onClick={scrollToContact}
                            className="block w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
                          >
                            📞 Hubungi Customer Service
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
