"use client"

import { SectionTitle } from "@/components/section-title"
import { MapPin, Navigation, Phone, Clock } from "lucide-react"

export function MapSection() {  const officeLocation = {
    lat: -6.1810747,
    lng: 107.0654949,
    address: "R398+H5H Srimukti, Bekasi Regency, West Java",
    phone: "+62 812-9529-5734",
    hours: "Senin-Sabtu, 08:00-17:00"
  }

  const openGoogleMaps = () => {
    const url = `https://www.google.com/maps?q=${officeLocation.lat},${officeLocation.lng}`
    window.open(url, '_blank')
  }

  const openDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${officeLocation.lat},${officeLocation.lng}`
    window.open(url, '_blank')
  }

  return (
    <section className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        <SectionTitle
          title="Lokasi Kantor Kami"
          subtitle="Datang langsung ke kantor pusat kami di Bekasi untuk konsultasi dan support langsung!"
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Container */}
          <div className="relative">
            <div className="bg-slate-800/50 rounded-2xl border border-gray-700 overflow-hidden h-96">
              {/* Embedded Google Maps */}
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0000000000005!2d${officeLocation.lng}!3d${officeLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTAnNTEuOSJTIDEwN8KwMDMnNTUuOCJF!5e0!3m2!1sen!2sid!4v1640000000000!5m2!1sen!2sid`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              />
            </div>

            {/* Map Actions */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={openGoogleMaps}
                className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <MapPin className="h-5 w-5" />
                <span>Lihat di Maps</span>
              </button>
              <button
                onClick={openDirections}
                className="flex items-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Navigation className="h-5 w-5" />
                <span>Petunjuk Arah</span>
              </button>
            </div>
          </div>

          {/* Office Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-orange-400 mb-6">Informasi Kantor 🏢</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Alamat Lengkap</h4>
                    <p className="text-gray-300">{officeLocation.address}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
                        📍 Koordinat: {officeLocation.lat}, {officeLocation.lng}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Kontak Kantor</h4>
                    <p className="text-gray-300">{officeLocation.phone}</p>
                    <p className="text-gray-400 text-sm">WhatsApp & Telepon tersedia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Jam Operasional</h4>
                    <p className="text-gray-300">{officeLocation.hours}</p>
                    <p className="text-gray-400 text-sm">Customer Service online 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 p-6 rounded-xl border border-gray-700">
              <h4 className="text-lg font-bold text-white mb-4">Kontak Cepat 📞</h4>
              <div className="space-y-4">
                <a
                  href={`https://wa.me/6281295295734`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <span>💬</span>
                  <span>Chat WhatsApp</span>
                </a>
                <a
                  href={`tel:${officeLocation.phone}`}
                  className="flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>Telepon Sekarang</span>
                </a>
              </div>
            </div>            {/* Transportation Info */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl border border-blue-500/20">
              <h4 className="text-lg font-bold text-white mb-4">Akses Transportasi 🚗</h4>
              <div className="space-y-2 text-gray-300">
                <p>🚗 <strong>Mobil:</strong> Parkir tersedia di area kantor</p>
                <p>🏍️ <strong>Motor:</strong> Area parkir motor yang luas</p>
                <p>🚌 <strong>Angkot:</strong> Jalur angkot Bekasi - Srimukti</p>
                <p>🚖 <strong>Online:</strong> Gojek, Grab tersedia</p>
                <p>🚆 <strong>KRL:</strong> Stasiun Bekasi (15 menit berkendara)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
