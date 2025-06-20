export interface FAQ {
  question: string;
  answer: string;
}

export interface FaqSectionConfig {
  sectionId: string;
  title: string;
  subtitle: string;
  faqs: FAQ[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
    targetSection: string;
  };
  backgroundElements: {
    topLeft: string;
    bottomRight: string;
  };
}

export const faqConfig: FaqSectionConfig = {
  sectionId: "faq",
  title: "❓ FREQUENTLY ASKED QUESTIONS ❓",
  subtitle: "Pertanyaan yang sering ditanyakan sama calon pelanggan",
  faqs: [
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
  ],
  cta: {
    title: "🤔 Masih Ada Pertanyaan Lain? 🤔",
    description:
      "Tim customer service kami siap bantu kamu 24/7! Jangan ragu buat tanya apa aja tentang layanan internet kami.",
    buttonText: "💬 Tanya Customer Service 💬",
    targetSection: "contact",
  },
  backgroundElements: {
    topLeft: "❓",
    bottomRight: "💡",
  },
};
