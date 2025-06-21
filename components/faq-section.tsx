"use client"

import { SectionTitle } from "@/components/section-title"
import { AccordionItem } from "@/components/accordion-item"
import { faqData } from "@/data/faq"
import Link from "next/link"

export function FaqSection() {
  // Show only first 5 FAQs as preview
  const previewFAQs = faqData.slice(0, 5)

  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Pertanyaan yang sering ditanyakan sama calon pelanggan"
        />

        <div className="space-y-4 mb-8">
          {previewFAQs.map((faq, index) => (
            <AccordionItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        {/* Show more button */}
        <div className="text-center">
          <Link
            href="/faq"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            <span>🔍</span>
            <span>Lihat Semua FAQ ({faqData.length} pertanyaan)</span>
          </Link>
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/30 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">
              Masih Ada Pertanyaan Lain? 🤔
            </h3>
            <p className="text-gray-300 mb-6">
              Tim customer service kami siap bantu kamu 24/7! Jangan ragu buat tanya apa aja tentang layanan internet
              kami.
            </p>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Tanya Customer Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
