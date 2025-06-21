"use client"

import { SectionTitle } from "@/components/section-title"
import { AccordionItem } from "@/components/accordion-item"

export function FaqSection() {
  const faqs = [
    {
      question: "Apakah Jawara-Net tersedia di daerah saya?",
      answer:
        "Kami terus memperluas coverage area! Saat ini sudah melayani Jakarta, Bogor, Depok, Tangerang, Bekasi, Bandung, Surabaya, Yogyakarta, dan Medan. Untuk cek ketersediaan di lokasi kamu, bisa hubungi customer service kami atau isi form di bagian kontak.",
    },
    {
      question: "Berapa lama proses aktivasi internet?",
      answer:
        "Proses aktivasi biasanya 1-3 hari kerja setelah survey lokasi. Tahapannya: (1) Daftar online, (2) Survey lokasi (gratis), (3) Instalasi perangkat, (4) Internet aktif dan siap dipakai! Tim teknisi kami akan koordinasi jadwal yang sesuai dengan kamu.",
    },
    {
      question: "Bagaimana sistem pembayarannya?",
      answer:
        "Pembayaran bisa dilakukan bulanan via transfer bank, e-wallet (OVO, GoPay, DANA), atau datang langsung ke kantor. Kami juga menyediakan sistem auto-debit untuk kemudahan. Tagihan akan dikirim via WhatsApp setiap bulannya.",
    },
    {
      question: "Apakah ada biaya instalasi?",
      answer:
        "Untuk semua paket rumahan, instalasi 100% GRATIS! Termasuk pemasangan kabel fiber, konfigurasi router WiFi, dan testing koneksi. Untuk paket bisnis, ada biaya instalasi khusus tergantung kompleksitas jaringan yang dibutuhkan.",
    },
    {
      question: "Bagaimana jika internet bermasalah?",
      answer:
        "Tim technical support kami siap membantu 24/7! Bisa hubungi via WhatsApp, telepon, atau aplikasi customer service. Untuk masalah ringan, kami bisa remote troubleshooting. Kalau perlu teknisi datang, biasanya dalam 2-4 jam sudah ditangani.",
    },
    {
      question: "Apakah ada kontrak minimal?",
      answer:
        "Tidak ada kontrak minimal! Kamu bisa berlangganan bulanan tanpa terikat kontrak jangka panjang. Tapi kalau mau berlangganan tahunan, ada diskon khusus lho. Fleksibel sesuai kebutuhan kamu.",
    },
    {
      question: "Apa itu FUP dan bagaimana pengaruhnya?",
      answer:
        "FUP (Fair Usage Policy) adalah batas wajar penggunaan data. Setelah mencapai batas FUP, kecepatan akan dikurangi tapi tetap bisa internetan. Paket Sultan unlimited full tanpa FUP sama sekali. FUP direset setiap bulan.",
    },
    {
      question: "Bisakah upgrade atau downgrade paket?",
      answer:
        "Tentu bisa! Upgrade paket bisa langsung efektif, tinggal bayar selisih harganya. Untuk downgrade, berlaku mulai periode billing berikutnya. Gak ada biaya admin untuk perubahan paket.",
    },
  ]

  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Pertanyaan yang sering ditanyakan sama calon pelanggan"
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} question={faq.question} answer={faq.answer} />
          ))}
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
            <button
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              Tanya Customer Service
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
