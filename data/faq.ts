// Centralized FAQ Data
// Data FAQ tersentralisasi untuk digunakan di seluruh aplikasi

export interface FAQItem {
  question: string
  answer: string
  category?: 'umum' | 'teknis' | 'pembayaran' | 'layanan'
}

export const faqData: FAQItem[] = [
  {
    question: "Apakah Jawara-Net tersedia di daerah saya?",
    answer: "Kami terus memperluas coverage area! Saat ini sudah melayani Jakarta, Bogor, Depok, Tangerang, Bekasi, Bandung, Surabaya, Yogyakarta, dan Medan. Untuk cek ketersediaan di lokasi kamu, bisa hubungi customer service kami atau isi form di bagian kontak.",
    category: 'umum'
  },
  {
    question: "Berapa lama proses aktivasi internet?",
    answer: "Proses aktivasi biasanya 1-3 hari kerja setelah survey lokasi. Tahapannya: (1) Daftar online, (2) Survey lokasi (gratis), (3) Instalasi perangkat, (4) Internet aktif dan siap dipakai! Tim teknisi kami akan koordinasi jadwal yang sesuai dengan kamu.",
    category: 'layanan'
  },
  {
    question: "Bagaimana sistem pembayarannya?",
    answer: "Pembayaran bisa dilakukan bulanan via transfer bank, e-wallet (OVO, GoPay, DANA), atau datang langsung ke kantor. Kami juga menyediakan sistem auto-debit untuk kemudahan. Tagihan akan dikirim via WhatsApp setiap bulannya.",
    category: 'pembayaran'
  },
  {
    question: "Apakah ada biaya instalasi?",
    answer: "Untuk semua paket rumahan, instalasi 100% GRATIS! Termasuk pemasangan kabel fiber, konfigurasi router WiFi, dan testing koneksi. Untuk paket bisnis, ada biaya instalasi khusus tergantung kompleksitas jaringan yang dibutuhkan.",
    category: 'pembayaran'
  },
  {
    question: "Bagaimana jika internet bermasalah?",
    answer: "Tim technical support kami siap membantu 24/7! Bisa hubungi via WhatsApp, telepon, atau aplikasi customer service. Untuk masalah ringan, kami bisa remote troubleshooting. Kalau perlu teknisi datang, biasanya dalam 2-4 jam sudah ditangani.",
    category: 'teknis'
  },
  {
    question: "Apakah ada kontrak minimal?",
    answer: "Tidak ada kontrak minimal! Kamu bisa berlangganan bulanan tanpa terikat kontrak jangka panjang. Tapi kalau mau berlangganan tahunan, ada diskon khusus lho. Fleksibel sesuai kebutuhan kamu.",
    category: 'umum'
  },
  {
    question: "Apa itu FUP dan bagaimana pengaruhnya?",
    answer: "FUP (Fair Usage Policy) adalah batas wajar penggunaan data. Setelah mencapai batas FUP, kecepatan akan dikurangi tapi tetap bisa internetan. Paket Sultan unlimited full tanpa FUP sama sekali. FUP direset setiap bulan.",
    category: 'teknis'
  },
  {
    question: "Bisakah upgrade atau downgrade paket?",
    answer: "Tentu bisa! Upgrade paket bisa langsung efektif, tinggal bayar selisih harganya. Untuk downgrade, berlaku mulai periode billing berikutnya. Gak ada biaya admin untuk perubahan paket.",
    category: 'layanan'
  },
  {
    question: "Apakah modem/router disediakan?",
    answer: "Ya! Setiap instalasi disertai dengan router WiFi berkualitas tinggi yang sudah dikonfigurasi siap pakai. Untuk paket bisnis, kami menyediakan perangkat enterprise grade sesuai kebutuhan jaringan kamu.",
    category: 'teknis'
  },
  {
    question: "Berapa kecepatan internet yang sebenarnya?",
    answer: "Kecepatan yang kami berikan adalah kecepatan real, bukan 'up to'. Jadi paket 100 Mbps benar-benar dapat 100 Mbps! Kami menggunakan teknologi fiber optic murni untuk memastikan konsistensi kecepatan.",
    category: 'teknis'
  },
  {
    question: "Bagaimana cara membatalkan langganan?",
    answer: "Pembatalan bisa dilakukan dengan memberitahu customer service minimal 7 hari sebelum tanggal billing. Tidak ada denda pembatalan. Perangkat yang dipinjamkan harus dikembalikan dalam kondisi baik.",
    category: 'umum'
  },
  {
    question: "Apakah ada layanan static IP?",
    answer: "Ya, tersedia layanan static IP untuk kebutuhan bisnis seperti server, CCTV remote, atau aplikasi khusus. Ada biaya tambahan per bulan untuk layanan static IP ini.",
    category: 'teknis'
  }
]

// Helper functions
export function getFAQsByCategory(category: string): FAQItem[] {
  return faqData.filter(faq => faq.category === category)
}

export function getAllFAQs(): FAQItem[] {
  return faqData
}

export function searchFAQs(query: string): FAQItem[] {
  const lowercaseQuery = query.toLowerCase()
  return faqData.filter(faq => 
    faq.question.toLowerCase().includes(lowercaseQuery) ||
    faq.answer.toLowerCase().includes(lowercaseQuery)
  )
}

export function getFAQCategories(): string[] {
  const categories = faqData.map(faq => faq.category).filter(Boolean)
  return [...new Set(categories)] as string[]
}
