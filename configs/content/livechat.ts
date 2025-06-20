/**
 * LIVE CHAT WIDGET CONFIGURATION
 * ===============================
 *
 * Centralized live chat configuration untuk aplikasi Jawara-Net.
 * Includes chat messages, responses, assistant profile, dan UI settings.
 */

import { TAILWIND_ANIMATIONS } from "../animations/index.js";

// Assistant profile configuration
export const chatAssistant = {
  name: "Sari",
  title: "Asisten Jawara",
  role: "asisten virtual Jawara-Net",
  avatar: "👩‍💼",
  status: {
    online: true,
    statusText: "Online - Siap Membantu!",
    responseTime: "< 2 menit",
  },
  rating: {
    score: 4.9,
    maxScore: 5,
    totalStars: 5,
  },
  availability: "Tim kami online 24/7! 🚀",
};

// Initial welcome message
export const welcomeMessage = {
  id: 1,
  text: "Halo Jagoan Digital! 👋 Selamat datang di kerajaan internet Nusantara! Saya Sari, asisten virtual Jawara-Net. Ada yang bisa saya bantu hari ini?",
  sender: "support",
  time: "Baru saja",
  avatar: "👩‍💼",
};

// Quick reply options
export const quickReplies = [
  "🏠 Info paket rumahan",
  "🏢 Paket bisnis",
  "📍 Cek coverage area",
  "💰 Harga berlangganan",
  "🔧 Bantuan teknis",
  "📞 Hubungi teknisi",
];

// Auto responses for general messages
export const autoResponses = [
  "Terima kasih sudah menghubungi kami! Tim ahli Jawara-Net akan segera membantu. Untuk respon kilat seperti Garuda, langsung chat WhatsApp ya! 🦅",
  "Wah, pertanyaan yang bagus! Biar lebih mantap, saya hubungkan dengan specialist kami. Atau mau langsung video call via WhatsApp? 📞",
  "Siap jagoan! Saya catat dulu kebutuhannya. Tim teknisi kita yang berpengalaman akan follow up dalam 5 menit! ⚡",
  "Mantap sekali! Saya akan koordinasi dengan tim terbaik kami. Sambil menunggu, mau coba lihat paket unggulan kami dulu? 🏆",
  "Terima kasih pertanyaannya! Untuk informasi lebih detail, tim specialist Jawara-Net akan contact langsung dalam hitungan menit! 🚀",
];

// Contextual responses for quick replies
export const contextualResponses: { [key: string]: string } = {
  "🏠 Info paket rumahan":
    "Paket rumahan kami ada 4 pilihan jagoan: Jagoan Neon (10Mbps), Mandor Sakti (25Mbps), Wiro Sableng (35Mbps), dan Sultan (50Mbps). Mau yang mana nih? 🏠",
  "🏢 Paket bisnis":
    "Untuk kerajaan bisnis, ada Startup Warrior (50Mbps), Corporate Beast (100Mbps), dan Enterprise King (200Mbps). Semua dedicated bandwidth! 🏢",
  "📍 Cek coverage area":
    "Kami sudah menguasai Jakarta, Bogor, Depok, Tangerang, Bekasi, Bandung, Surabaya, Yogya! Area mana yang mau dicek? 🗺️",
  "💰 Harga berlangganan":
    "Harga mulai dari Rp150rb/bulan untuk Jagoan Neon. Semua sudah termasuk instalasi gratis dan router WiFi premium! 💎",
  "🔧 Bantuan teknis":
    "Tim teknisi Jawara-Net siap membantu 24/7! Mau troubleshooting sekarang atau jadwalkan kunjungan teknisi? 🛠️",
  "📞 Hubungi teknisi":
    "Langsung hubungi teknisi senior kami di WhatsApp +62 812-3456-7890 atau mau saya buatkan tiket support? 📱",
};

// Quick action buttons configuration
export const quickActions = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    icon: "Phone",
    action: "whatsapp",
    url: "https://wa.me/6281234567890",
    className: "bg-green-500/20 border-green-500/30",
    iconColor: "text-green-400",
    hoverEffect: "group-hover:scale-110",
  },
  {
    id: "email",
    label: "Email",
    icon: "Mail",
    action: "email",
    url: "mailto:info@jawara-net.com",
    className: "bg-blue-500/20 border-blue-500/30",
    iconColor: "text-blue-400",
    hoverEffect: "group-hover:scale-110",
  },
  {
    id: "faq",
    label: "FAQ",
    icon: "Clock",
    action: "scroll",
    target: "faq",
    className: "bg-purple-500/20 border-purple-500/30",
    iconColor: "text-purple-400",
    hoverEffect: "group-hover:scale-110",
  },
];

// Chat widget UI configuration
export const chatWidgetUI = {
  button: {
    size: {
      mobile: "w-16 h-16",
      desktop: "md:w-20 md:h-20",
    },
    position: "fixed bottom-6 right-6 z-50",
    animations: {
      hover: "mega-hover mega-glow nusantara-glow",
      notification: TAILWIND_ANIMATIONS.pulse,
      sparkles: TAILWIND_ANIMATIONS.spin,
      crown: TAILWIND_ANIMATIONS.indonesianWave,
    },
    decorativeElements: {
      notification: {
        show: true,
        text: "!",
        className: "absolute -top-2 -right-2 w-6 h-6 md:w-8 md:h-8 bg-red-500 rounded-full",
      },
      sparkles: {
        show: true,
        className: "absolute -bottom-2 -left-2 h-5 w-5 md:h-6 md:w-6 text-yellow-400",
      },
      crown: {
        show: true,
        className: "absolute -top-1 -left-1 h-4 w-4 md:h-5 md:w-5 text-yellow-500",
      },
    },
  },
  window: {
    size: "w-80 md:w-96 max-w-[calc(100vw-3rem)]",
    position: "fixed bottom-24 right-6",
    className: "mega-card overflow-hidden mega-glow nusantara-glow shadow-2xl",
    maxHeight: "h-64 md:h-80",
  },
  header: {
    background: "bg-gradient-to-r from-orange-500 via-red-500 to-pink-500",
    decorativeElements: {
      topRight: "🦅",
      bottomLeft: "⚔️",
    },
  },
  messages: {
    scrollBehavior: "smooth",
    typingDelay: {
      general: 2000,
      contextual: 1500,
    },
    userAvatar: "🧑‍💻",
    supportAvatar: "👩‍💼",
  },
  floatingText: {
    show: true,
    text: "💬 Ada yang bisa dibantu?",
    className: `absolute bottom-full right-0 mb-4 mega-card p-3 whitespace-nowrap ${TAILWIND_ANIMATIONS.bounce}`,
  },
};

// Chat behavior settings
export const chatBehavior = {
  autoScroll: true,
  typingIndicator: true,
  responseDelay: {
    min: 1500,
    max: 2000,
  },
  fallbackResponse: "Tim specialist kami akan segera membantu dengan pertanyaan ini! 🚀",
  maxMessages: 50, // Limit chat history
  persistChat: false, // Don't persist across sessions
};

// Contact information for chat responses
export const chatContacts = {
  whatsapp: "+62 812-3456-7890",
  email: "info@jawara-net.com",
  phone: "021-1234-5678",
  techSupport: "+62 812-3456-7890",
};

// Export complete chat configuration
export const liveChatConfig = {
  assistant: chatAssistant,
  welcome: welcomeMessage,
  quickReplies,
  autoResponses,
  contextualResponses,
  quickActions,
  ui: chatWidgetUI,
  behavior: chatBehavior,
  contacts: chatContacts,
};
