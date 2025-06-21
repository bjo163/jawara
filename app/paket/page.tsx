"use client"

import { PackagesSection } from "@/components/packages-section"
import { SectionTitle } from "@/components/section-title"
import { PageHeader } from "@/components/page-header"
import { LiveChatWidget } from "@/components/live-chat-widget"
import { SubscriptionWidget } from "@/components/subscription-widget-fixed"

export default function PaketPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <PageHeader />

      <main>
        {/* Header Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="professional-bubble inline-block mb-6">
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Paket Internet</span>
            </div>
            <SectionTitle
              title="Pilih Paket Terbaik untuk Kebutuhan Anda"
              subtitle="Dari paket rumahan hingga bisnis, kami memiliki solusi internet yang tepat dengan harga terjangkau dan kualitas terbaik"
            />
          </div>
        </section>

        {/* Packages Section */}
        <PackagesSection />

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange-500/10 to-red-500/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Masih Bingung Pilih Paket?
            </h2>
            <p className="text-gray-400 mb-8">
              Tim customer service kami siap membantu Anda memilih paket yang sesuai dengan kebutuhan dan budget
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281295295734?text=Halo%20Jawara-Net!%20Saya%20ingin%20konsultasi%20paket%20internet%20yang%20cocok%20untuk%20saya"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                💬 Konsultasi via WhatsApp
              </a>
              <a
                href="/berlangganan"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                📋 Langsung Berlangganan
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Widgets */}
      <LiveChatWidget />
      <SubscriptionWidget />
    </div>
  )
}
