// Custom 404 Not Found Page
// Next.js custom 404 page

import Link from 'next/link'
import { Home, Search, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
      <div className="max-w-lg mx-auto text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-8xl font-bold text-transparent bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text mb-4">
            404
          </div>
          <div className="mx-auto w-20 h-20 bg-orange-500/20 rounded-full flex items-center justify-center">
            <Search className="w-10 h-10 text-orange-400" />
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-white mb-4">
          Halaman Tidak Ditemukan
        </h1>
        <p className="text-gray-400 mb-8 leading-relaxed">
          Sepertinya halaman yang Anda cari sudah dipindahkan, dihapus, atau tidak pernah ada. 
          Mari kembali ke jalur yang benar!
        </p>

        {/* Action Buttons */}
        <div className="space-y-4">
          <Link href="/">
            <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold">
              <Home className="w-5 h-5 mr-2" />
              Kembali ke Beranda
            </Button>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="w-full bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Halaman Sebelumnya</span>
          </button>
        </div>

        {/* Popular Pages */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-4">
            Halaman Populer
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <Link 
              href="/paket"
              className="bg-slate-900 hover:bg-slate-800 border border-gray-700 rounded-lg p-3 transition-colors"
            >
              <div className="text-blue-400 font-semibold">💎 Paket Internet</div>
              <div className="text-xs text-gray-400 mt-1">Pilih paket terbaik</div>
            </Link>
            
            <Link 
              href="/berlangganan"
              className="bg-slate-900 hover:bg-slate-800 border border-gray-700 rounded-lg p-3 transition-colors"
            >
              <div className="text-green-400 font-semibold">🗡️ Berlangganan</div>
              <div className="text-xs text-gray-400 mt-1">Daftar sekarang</div>
            </Link>
            
            <Link 
              href="/contact"
              className="bg-slate-900 hover:bg-slate-800 border border-gray-700 rounded-lg p-3 transition-colors"
            >
              <div className="text-orange-400 font-semibold">📞 Kontak</div>
              <div className="text-xs text-gray-400 mt-1">Hubungi kami</div>
            </Link>
            
            <Link 
              href="/speedtest"
              className="bg-slate-900 hover:bg-slate-800 border border-gray-700 rounded-lg p-3 transition-colors"
            >
              <div className="text-purple-400 font-semibold">⚡ Speed Test</div>
              <div className="text-xs text-gray-400 mt-1">Tes kecepatan</div>
            </Link>
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-8">
          <p className="text-gray-500 text-sm mb-4">
            Butuh bantuan? Hubungi customer service kami:
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/6281295295734?text=Halo%20Jawara-Net!%20Saya%20tidak%20dapat%20menemukan%20halaman%20yang%20saya%20cari"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              <span>📱</span>
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+6281295295734"
              className="inline-flex items-center justify-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              <span>📞</span>
              <span>Telepon</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
