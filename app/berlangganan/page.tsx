"use client"

import { useState, useEffect } from "react"
import { MapPin, CheckCircle, AlertCircle, Loader2, ArrowLeft, Phone, MessageCircle, Mail, Clock, Wifi, Zap, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Logo } from "@/components/logo"
import { packages, getPackageById, getPackagesByCategory } from "@/data/packages"
import { Breadcrumb, BackButton } from "@/components/breadcrumb"
import { PageHeader } from "@/components/page-header"
import { LiveChatWidget } from "@/components/live-chat-widget"
import { SubscriptionWidget } from "@/components/subscription-widget-fixed"
import Link from "next/link"

interface SubscriptionForm {
  name: string
  phone: string
  email: string
  address: string
  package: string
  notes: string
}

export default function BerlanggananPage() {
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null)
  const [locationStatus, setLocationStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [coverageStatus, setCoverageStatus] = useState<'checking' | 'covered' | 'not-covered' | null>(null)
  const [nearestArea, setNearestArea] = useState<string>('')
  const [distance, setDistance] = useState<number>(0)
  const [showForm, setShowForm] = useState(false)
  const [activeCategory, setActiveCategory] = useState<'rumah' | 'bisnis'>('rumah')
  const [formData, setFormData] = useState<SubscriptionForm>({
    name: '',
    phone: '',
    email: '',
    address: '',
    package: '',
    notes: ''
  })

  // Jawara-Net Office Location
  const jawaraNetOffice = {
    name: "Kantor Jawara-Net",
    lat: -6.1810747,
    lng: 107.0654949,
    address: "R398+H5H Srimukti, Bekasi Regency, West Java",
    coverageRadius: 10 // 10km radius
  }

  // Get packages by category
  const currentPackages = getPackagesByCategory(activeCategory)

  // Calculate distance between two points (Haversine formula)
  const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
    const R = 6371 // Earth's radius in km
    const dLat = (lat2 - lat1) * Math.PI / 180
    const dLng = (lng2 - lng1) * Math.PI / 180
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLng/2) * Math.sin(dLng/2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    return R * c
  }

  // Check coverage
  const checkCoverage = (userLat: number, userLng: number) => {
    setCoverageStatus('checking')
    
    // Calculate distance from Jawara-Net office
    const distance = calculateDistance(userLat, userLng, jawaraNetOffice.lat, jawaraNetOffice.lng)
    setDistance(distance)
    setNearestArea(jawaraNetOffice.name)
    
    setTimeout(() => {
      if (distance <= jawaraNetOffice.coverageRadius) {
        setCoverageStatus('covered')
      } else {
        setCoverageStatus('not-covered')
      }
    }, 2000)
  }

  // Get user location
  const getUserLocation = () => {
    setLocationStatus('loading')
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setUserLocation({ lat: latitude, lng: longitude })
          setLocationStatus('success')
          checkCoverage(latitude, longitude)
        },
        (error) => {
          console.error('Error getting location:', error)
          setLocationStatus('error')
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 300000
        }
      )
    } else {
      setLocationStatus('error')
    }
  }

  // Handle form input changes
  const handleInputChange = (field: keyof SubscriptionForm, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  // Handle package selection
  const selectPackage = (packageId: string) => {
    setFormData(prev => ({
      ...prev,
      package: packageId
    }))
    setShowForm(true)
    
    // Auto-fill location if available
    if (userLocation) {
      setFormData(prev => ({
        ...prev,
        address: `Koordinat: ${userLocation.lat.toFixed(6)}, ${userLocation.lng.toFixed(6)} (Jarak ${distance.toFixed(1)}km dari kantor)`
      }))
    }
  }
  // Submit form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const selectedPackage = getPackageById(formData.package)
    const message = `Halo Jawara-Net! Saya ingin berlangganan internet.

Nama: ${formData.name}
No. HP: ${formData.phone}
Email: ${formData.email}
Alamat: ${formData.address}
Paket: ${selectedPackage?.name} (${selectedPackage?.speed})
Harga: ${selectedPackage?.price}/bulan
Catatan: ${formData.notes}

${userLocation ? `Lokasi GPS: ${userLocation.lat.toFixed(6)}, ${userLocation.lng.toFixed(6)}` : ''}
${coverageStatus === 'covered' ? `Status: Area ter-cover (${distance.toFixed(1)}km dari kantor)` : ''}`

    const whatsappUrl = `https://wa.me/6281295295734?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <PageHeader />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            🗡️ Bergabung dengan Jawara Internet Nusantara!
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Internet super ngebut untuk para jagoan digital Indonesia
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center space-x-2 text-green-400">
              <CheckCircle className="h-5 w-5" />
              <span>Koneksi Stabil 24/7</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-400">
              <Zap className="h-5 w-5" />
              <span>Kecepatan Kilat</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-400">
              <Star className="h-5 w-5" />
              <span>Support Premium</span>
            </div>
          </div>
        </div>

        {/* Location Check Section */}
        <Card className="bg-slate-900 border-gray-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-orange-500" />
              <span>Cek Area Coverage Anda</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              {locationStatus === 'idle' && (
                <div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Cek Lokasi Anda</h4>
                  <p className="text-gray-400 text-sm mb-4">
                    Pastikan area Anda ter-cover oleh jaringan Jawara-Net
                  </p>
                  <Button
                    onClick={getUserLocation}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                  >
                    📍 Deteksi Lokasi Saya
                  </Button>
                </div>
              )}

              {locationStatus === 'loading' && (
                <div className="flex items-center justify-center space-x-2 text-blue-400">
                  <Loader2 className="h-5 w-5 animate-spin" />
                  <span>Mendeteksi lokasi Anda...</span>
                </div>
              )}

              {locationStatus === 'error' && (
                <div className="text-red-400">
                  <AlertCircle className="h-12 w-12 mx-auto mb-3" />
                  <p>Gagal mendeteksi lokasi. Silakan aktifkan GPS atau input alamat manual.</p>
                  <Button
                    onClick={() => setShowForm(true)}
                    className="mt-4 bg-blue-500 hover:bg-blue-600"
                  >
                    Input Alamat Manual
                  </Button>
                </div>
              )}

              {userLocation && (
                <div>
                  <p className="text-green-400 mb-4">
                    📍 Koordinat: {userLocation.lat.toFixed(6)}, {userLocation.lng.toFixed(6)}
                  </p>

                  {coverageStatus === 'checking' && (
                    <div className="flex items-center justify-center space-x-2 text-yellow-400">
                      <Loader2 className="h-5 w-5 animate-spin" />
                      <span>Mengecek coverage area...</span>
                    </div>
                  )}

                  {coverageStatus === 'covered' && (
                    <div className="text-green-400 bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                      <CheckCircle className="h-12 w-12 mx-auto mb-3" />
                      <h5 className="font-bold text-lg mb-2">🎉 Lokasi Anda Ter-cover!</h5>
                      <p className="text-sm mb-4">
                        Anda berada dalam coverage area <strong>{nearestArea}</strong>
                        <br />
                        <span className="text-gray-400">Jarak: {distance.toFixed(1)} km dari kantor kami</span>
                        <br />
                        <span className="text-green-300 text-xs">📍 {jawaraNetOffice.address}</span>
                      </p>
                    </div>
                  )}

                  {coverageStatus === 'not-covered' && (
                    <div className="text-orange-400 bg-orange-900/20 border border-orange-500/30 rounded-lg p-6">
                      <AlertCircle className="h-12 w-12 mx-auto mb-3" />
                      <h5 className="font-bold text-lg mb-2">📍 Belum Ter-cover</h5>
                      <p className="text-sm mb-4">
                        Lokasi Anda belum ter-cover jaringan kami.
                        <br />
                        Jarak dari kantor kami: <strong>{distance.toFixed(1)} km</strong>
                        <br />
                        <span className="text-gray-400">📍 {jawaraNetOffice.address}</span>
                        <br />
                        <span className="text-yellow-300 text-xs">⚠️ Coverage radius: {jawaraNetOffice.coverageRadius} km</span>
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
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </CardContent>
        </Card>        {/* Packages Section */}
        {(coverageStatus === 'covered' || showForm) && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-center mb-8">⚔️ Pilih Paket Internet Anda</h3>
            
            {/* Category Tabs */}
            <div className="flex justify-center mb-8">
              <div className="bg-slate-900 p-1 rounded-2xl border border-gray-700">
                <button
                  onClick={() => setActiveCategory('rumah')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    activeCategory === 'rumah'
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  🏠 Paket Rumah
                </button>
                <button
                  onClick={() => setActiveCategory('bisnis')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    activeCategory === 'bisnis'
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  🏢 Paket Bisnis
                </button>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {currentPackages.map((pkg) => (
                <Card 
                  key={pkg.id}
                  className={`bg-slate-900 border-gray-700 hover:border-orange-500 transition-all cursor-pointer relative ${
                    formData.package === pkg.id ? 'border-orange-500 bg-orange-900/20' : ''
                  }`}
                  onClick={() => selectPackage(pkg.id)}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1 rounded-full text-xs font-bold">
                        🔥 TERPOPULER
                      </div>
                    </div>
                  )}
                  
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">{pkg.character}</div>
                    <CardTitle className="text-white text-lg">{pkg.name}</CardTitle>
                    <div className="text-2xl font-bold text-orange-400">{pkg.speed}</div>
                    <div className="text-xl text-green-400">{pkg.price}/bulan</div>
                    {pkg.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">{pkg.originalPrice}</div>
                    )}
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${
                        formData.package === pkg.id 
                          ? 'bg-orange-500 hover:bg-orange-600' 
                          : `bg-gradient-to-r from-${pkg.color}-500 to-${pkg.color}-600 hover:from-${pkg.color}-600 hover:to-${pkg.color}-700`
                      }`}
                      onClick={() => selectPackage(pkg.id)}
                    >
                      {formData.package === pkg.id ? '✅ Dipilih' : '🗡️ Pilih Paket'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Subscription Form */}
        {showForm && (
          <Card className="bg-slate-900 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center space-x-2">
                <Phone className="h-5 w-5 text-green-500" />
                <span>Formulir Berlangganan</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Nama Lengkap *
                    </label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Nama lengkap Anda"
                      className="bg-slate-800 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Nomor HP/WhatsApp *
                    </label>
                    <Input
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="08xxxxxxxxxx"
                      className="bg-slate-800 border-gray-600 text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="email@domain.com"
                    className="bg-slate-800 border-gray-600 text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Alamat Lengkap *
                  </label>
                  <Textarea
                    required
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Alamat lengkap untuk instalasi"
                    className="bg-slate-800 border-gray-600 text-white"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Catatan Tambahan
                  </label>
                  <Textarea
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Catatan khusus atau pertanyaan"
                    className="bg-slate-800 border-gray-600 text-white"
                    rows={2}
                  />
                </div>                {formData.package && (
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-400 mb-2">Paket yang Dipilih:</h4>
                    {(() => {
                      const selectedPkg = getPackageById(formData.package)
                      return selectedPkg ? (
                        <div className="text-sm text-gray-300">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="text-2xl">{selectedPkg.character}</span>
                            <div>
                              <div className="font-semibold">{selectedPkg.name}</div>
                              <div className="text-orange-400">{selectedPkg.speed}</div>
                            </div>
                          </div>
                          <div className="text-green-400 font-semibold">{selectedPkg.price}/bulan</div>
                          <div className="text-xs text-gray-400 mt-1">{selectedPkg.description}</div>
                        </div>
                      ) : null
                    })()}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Kirim via WhatsApp
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800"
                    onClick={() => setShowForm(false)}
                  >
                    Batal
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Contact Information */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Card className="bg-slate-900 border-gray-700">
            <CardContent className="p-6 text-center">
              <Phone className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">Telepon</h4>
              <p className="text-gray-400">+62 812-9529-5734</p>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-900 border-gray-700">
            <CardContent className="p-6 text-center">
              <MessageCircle className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">WhatsApp</h4>
              <p className="text-gray-400">+62 812-9529-5734</p>
            </CardContent>
          </Card>
          
          <Card className="bg-slate-900 border-gray-700">
            <CardContent className="p-6 text-center">
              <Clock className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">Jam Operasional</h4>
              <p className="text-gray-400">24/7 Support</p>
            </CardContent>
          </Card>        </div>
      </main>

      {/* Widgets */}
      <LiveChatWidget />
      <SubscriptionWidget />
    </div>
  )
}
