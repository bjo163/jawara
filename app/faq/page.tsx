"use client"

import { useState } from "react"
import { Search, HelpCircle, MessageCircle, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { AccordionItem } from "@/components/accordion-item"
import { PageHeader } from "@/components/page-header"
import { LiveChatWidget } from "@/components/live-chat-widget"
import { SubscriptionWidget } from "@/components/subscription-widget-fixed"
import { SectionTitle } from "@/components/section-title"
import { faqData, getFAQsByCategory, searchFAQs, getFAQCategories, type FAQItem } from "@/data/faq"
import { contactInfo, getContactByType } from "@/data/contact"
import Link from "next/link"

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [filteredFAQs, setFilteredFAQs] = useState<FAQItem[]>(faqData)

  const categories = getFAQCategories()

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim() === "") {
      setFilteredFAQs(selectedCategory ? getFAQsByCategory(selectedCategory) : faqData)
    } else {
      setFilteredFAQs(searchFAQs(query))
    }
  }

  // Handle category filter
  const handleCategoryFilter = (category: string | null) => {
    setSelectedCategory(category)
    if (category === null) {
      setFilteredFAQs(searchQuery ? searchFAQs(searchQuery) : faqData)
    } else {
      const categoryFAQs = getFAQsByCategory(category)
      setFilteredFAQs(searchQuery ? categoryFAQs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ) : categoryFAQs)
    }
  }

  const getCategoryIcon = (category: string) => {
    const icons = {
      'umum': '📋',
      'teknis': '⚙️',
      'pembayaran': '💳',
      'layanan': '🛠️'
    }
    return icons[category as keyof typeof icons] || '❓'
  }

  const getCategoryName = (category: string) => {
    const names = {
      'umum': 'Umum',
      'teknis': 'Teknis',
      'pembayaran': 'Pembayaran',
      'layanan': 'Layanan'
    }
    return names[category as keyof typeof names] || category
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <PageHeader />

      <main>
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-6">
              <HelpCircle className="h-8 w-8 text-white" />
            </div>
            <SectionTitle
              title="Frequently Asked Questions"
              subtitle="Pertanyaan yang sering ditanyakan sama calon pelanggan. Cari jawaban yang kamu butuhkan!"
            />
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Cari pertanyaan atau kata kunci..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 bg-slate-900 border-gray-700 text-white placeholder-gray-400 h-12"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-8">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                onClick={() => handleCategoryFilter(null)}
                className="rounded-full"
              >
                🔍 Semua
              </Button>
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => handleCategoryFilter(category)}
                  className="rounded-full"
                >
                  {getCategoryIcon(category)} {getCategoryName(category)}
                </Button>
              ))}
            </div>

            {/* Results Info */}
            <div className="mb-6 text-gray-400 text-sm">
              Menampilkan {filteredFAQs.length} dari {faqData.length} pertanyaan
              {selectedCategory && ` dalam kategori "${getCategoryName(selectedCategory)}"`}
              {searchQuery && ` untuk pencarian "${searchQuery}"`}
            </div>
          </div>
        </section>

        {/* FAQ List */}
        <section className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length > 0 ? (
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">Tidak ada hasil ditemukan</h3>
                <p className="text-gray-400 mb-6">
                  Coba gunakan kata kunci lain atau pilih kategori yang berbeda
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory(null)
                    setFilteredFAQs(faqData)
                  }}
                  variant="outline"
                >
                  Reset Pencarian
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 border-gray-700">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
                  Masih Ada Pertanyaan Lain? 🤔
                </CardTitle>
                <p className="text-gray-300">
                  Tim customer service kami siap bantu kamu 24/7! Jangan ragu buat tanya apa aja tentang layanan internet kami.
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">                  {/* WhatsApp */}
                  <a
                    href={`https://wa.me/${getContactByType('whatsapp')?.value.replace(/\D/g, '')}?text=Halo%20Jawara-Net!%20Saya%20punya%20pertanyaan%20tentang%20layanan%20internet`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg hover:bg-green-500/20 transition-colors"
                  >
                    <MessageCircle className="h-6 w-6 text-green-400" />
                    <div>
                      <div className="font-semibold text-green-400">WhatsApp</div>
                      <div className="text-sm text-gray-300">Chat langsung</div>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${getContactByType('phone')?.value}`}
                    className="flex items-center space-x-3 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg hover:bg-blue-500/20 transition-colors"
                  >
                    <Phone className="h-6 w-6 text-blue-400" />
                    <div>
                      <div className="font-semibold text-blue-400">Telepon</div>
                      <div className="text-sm text-gray-300">Hubungi langsung</div>
                    </div>
                  </a>

                  {/* Contact Page */}
                  <Link
                    href="/contact"
                    className="flex items-center space-x-3 p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg hover:bg-orange-500/20 transition-colors"
                  >
                    <Mail className="h-6 w-6 text-orange-400" />
                    <div>
                      <div className="font-semibold text-orange-400">Form Kontak</div>
                      <div className="text-sm text-gray-300">Kirim pesan</div>
                    </div>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Widgets */}
      <LiveChatWidget />
      <SubscriptionWidget />
    </div>
  )
}
