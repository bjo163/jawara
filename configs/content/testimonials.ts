/**
 * TESTIMONIALS CONFIGURATION
 * ==========================
 *
 * Centralized testimonials data untuk aplikasi Jawara-Net.
 * Includes customer testimonials, stats, dan CTA section.
 */

// Section header
export const testimonialsHeader = {
  title: "🗣️ KESAKSIAN PARA JAGOAN 🗣️",
  subtitle: "Ribuan warrior digital udah merasakan kekuatan internet Jawara-Net!",
};

// Customer testimonials data
export const customerTestimonials = [
  {
    id: "andi-pratama",
    name: "Andi Pratama",
    role: "Content Creator Jagoan",
    location: "Jakarta Selatan",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    comment:
      "Sejak pakai Jawara-Net, channel YouTube gue jadi makin berkuasa! Upload video ngebut kayak kilat, live streaming lancar jaya tanpa drama. Ini sih internet sultan beneran! 🔥👑",
    packageName: "Wiro Sableng 35 Mbps",
  },
  {
    id: "sarah-dewi",
    name: "Sarah Dewi",
    role: "Remote Worker Tangguh",
    location: "Bandung",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    comment:
      "WFH jadi medan perang yang bisa gue taklukkin! Video call meeting sekuat baja, gak pernah putus asa. Tim support sigap membantu setiap saat. Jawara-Net emang andalan! 👍💪",
    packageName: "Mandor Sakti 25 Mbps",
  },
  {
    id: "budi-santoso",
    name: "Budi Santoso",
    role: "Pemilik Warnet Perkasa",
    location: "Surabaya",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    comment:
      "Warnet gue sekarang jadi arena gladiator internet! Customer puas karena koneksi stabil kayak tembok raksasa. Gaming online tanpa ampun, streaming tanpa batas. Omzet meroket! 💰🚀",
    packageName: "Corporate Beast 100 Mbps",
  },
  {
    id: "maya-sari",
    name: "Maya Sari",
    role: "Mahasiswi Cendekiawan",
    location: "Yogyakarta",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    comment:
      "Kuliah online jadi petualangan seru, download materi kuliah secepat ninja. Harganya juga bersahabat buat kantong mahasiswa. Jawara-Net emang pahlawan! 🎓🦸‍♀️",
    packageName: "Jagoan Neon 10 Mbps",
  },
  {
    id: "rizki-firmansyah",
    name: "Rizki Firmansyah",
    role: "Gamer Pro Legendaris",
    location: "Medan",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    comment:
      "Ping serendah rumput, koneksi sekuat baja, perfect buat competitive gaming! Gak ada lagi lag yang menghalangi kemenangan. Jawara-Net emang juara sejati! ⚡🏆",
    packageName: "Sultan 50 Mbps",
  },
  {
    id: "ibu-sinta",
    name: "Ibu Sinta",
    role: "Ibu Rumah Tangga Super",
    location: "Bekasi",
    image: "/placeholder.svg?height=60&width=60",
    rating: 5,
    comment:
      "Anak-anak sekolah online lancar, suami WFH juga gak ada gangguan. Netflix keluarga juga tanpa hambatan. Satu internet buat semua kebutuhan keluarga! 👨‍👩‍👧‍👦💖",
    packageName: "Mandor Sakti 25 Mbps",
  },
];

// Statistics section
export const testimonialsStats = [
  {
    id: "rating",
    value: "4.9/5",
    label: "Rating Pelanggan",
    color: "text-orange-500",
    animationDelay: "0s",
  },
  {
    id: "customers",
    value: "1000+",
    label: "Pelanggan Aktif",
    color: "text-blue-500",
    animationDelay: "0.1s",
  },
  {
    id: "uptime",
    value: "99.9%",
    label: "Uptime",
    color: "text-green-500",
    animationDelay: "0.2s",
  },
  {
    id: "support",
    value: "24/7",
    label: "Customer Support",
    color: "text-purple-500",
    animationDelay: "0.3s",
  },
];

// Call-to-action section
export const testimonialsCTA = {
  title: "🚀 Mau Jadi Bagian dari Keluarga Jawara-Net? 🚀",
  description: "Bergabung dengan ribuan pelanggan yang udah merasakan internet super cepat dan stabil!",
  buttonText: "🎯 Pilih Paket Sekarang 🎯",
  targetSection: "packages",
};

// Background decorative elements
export const testimonialsBackground = {
  topLeft: {
    icon: "🏆",
    animation: "particle-float",
    position: "top-20 left-10",
    size: "text-6xl",
    opacity: "opacity-20",
  },
  bottomRight: {
    icon: "💬",
    animation: "garuda-soar",
    position: "bottom-20 right-10",
    size: "text-6xl",
    opacity: "opacity-20",
  },
};

// Complete testimonials configuration export
export const testimonialsConfig = {
  header: testimonialsHeader,
  testimonials: customerTestimonials,
  stats: testimonialsStats,
  cta: testimonialsCTA,
  background: testimonialsBackground,
};

// Default export untuk kemudahan import
export default testimonialsConfig;
