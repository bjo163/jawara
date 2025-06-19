/**
 * PACKAGES CONFIGURATION
 * ======================
 *
 * Centralized packages & pricing data untuk aplikasi Jawara-Net.
 * Includes residential & business packages, features, pricing, dan promotional content.
 */

import { Crown, Sword, Sparkles } from "lucide-react";

// Section header
export const packagesHeader = {
  title: "🗡️ ARSENAL SENJATA INTERNET 🗡️",
  subtitle: "Pilih senjata digital terbaik untuk menaklukkan dunia maya Nusantara!",
};

// Package categories
export const packageCategories = [
  {
    id: "rumah",
    label: "🏠 ISTANA DIGITAL",
    icon: Crown,
    gradient: "from-orange-600 via-red-600 to-pink-600",
  },
  {
    id: "bisnis",
    label: "🏢 KERAJAAN BISNIS",
    icon: Sword,
    gradient: "from-blue-600 via-purple-600 to-pink-600",
  },
];

// Residential packages
export const residentialPackages = [
  {
    id: "jagoan-neon",
    name: "Jagoan Neon",
    icon: "🌟",
    speed: "10 Mbps",
    quota: "Unlimited FUP",
    price: "Rp150.000",
    originalPrice: "Rp200.000",
    features: [
      "🆓 Gratis instalasi",
      "🏠 Cocok untuk rumahan",
      "📺 Streaming HD lancar",
      "📱 Support 5-8 device",
      "🛡️ Customer support 24/7",
    ],
    popular: false,
    color: "orange" as const,
    character: "🧙‍♂️",
  },
  {
    id: "mandor-sakti",
    name: "Mandor Sakti",
    icon: "🔨",
    speed: "25 Mbps",
    quota: "Unlimited FUP",
    price: "Rp200.000",
    originalPrice: "Rp250.000",
    features: [
      "💪 Stabil buat kerja & belajar dari rumah",
      "📹 Video call HD tanpa lag",
      "🎮 Gaming online smooth",
      "📱 Support 10-15 device",
      "⭐ Priority customer support",
    ],
    popular: true,
    color: "blue" as const,
    character: "👷‍♂️",
  },
  {
    id: "wiro-sableng",
    name: "Wiro Sableng",
    icon: "⚔️",
    speed: "35 Mbps",
    quota: "Unlimited FUP",
    price: "Rp250.000",
    originalPrice: "Rp300.000",
    features: [
      "🚀 Ngebut buat streaming & CCTV remote",
      "🎬 4K streaming tanpa buffering",
      "📤 Upload file besar cepat",
      "📱 Support 15-20 device",
      "🎯 Dedicated customer support",
    ],
    popular: false,
    color: "green" as const,
    character: "🥷",
  },
  {
    id: "sultan",
    name: "Sultan",
    icon: "👑",
    speed: "50 Mbps",
    quota: "Unlimited Full",
    price: "Rp300.000",
    originalPrice: "Rp400.000",
    features: [
      "⚡ Prioritas bandwidth, anti lemot 24 jam",
      "♾️ Unlimited tanpa FUP",
      "🎮 Gaming pro & streaming 4K",
      "📱 Support unlimited device",
      "👑 VIP customer support",
    ],
    popular: false,
    color: "purple" as const,
    character: "🤴",
  },
];

// Business packages
export const businessPackages = [
  {
    id: "startup-warrior",
    name: "Startup Warrior",
    icon: "🚀",
    speed: "50 Mbps",
    quota: "Dedicated",
    price: "Rp500.000",
    originalPrice: "Rp650.000",
    features: [
      "🎯 Bandwidth dedicated",
      "🏠 Static IP address",
      "📊 SLA 99.9% uptime",
      "⚡ Priority technical support",
      "🌐 Free domain & email hosting",
    ],
    popular: false,
    color: "orange" as const,
    character: "🦸‍♂️",
  },
  {
    id: "corporate-beast",
    name: "Corporate Beast",
    icon: "🏢",
    speed: "100 Mbps",
    quota: "Dedicated",
    price: "Rp800.000",
    originalPrice: "Rp1.000.000",
    features: [
      "💎 Bandwidth dedicated full",
      "🌐 Multiple static IP",
      "📊 24/7 monitoring",
      "🛠️ On-site technical support",
      "🔄 Backup connection",
    ],
    popular: true,
    color: "blue" as const,
    character: "🦁",
  },
  {
    id: "enterprise-king",
    name: "Enterprise King",
    icon: "👑",
    speed: "200 Mbps",
    quota: "Dedicated",
    price: "Rp1.500.000",
    originalPrice: "Rp2.000.000",
    features: [
      "⚡ Ultra-fast dedicated connection",
      "🌐 Subnet IP allocation",
      "🔄 Redundant connection",
      "👨‍💼 Dedicated account manager",
      "🛠️ Custom network solution",
    ],
    popular: false,
    color: "purple" as const,
    character: "🐉",
  },
];

// Internet calculator section
export const calculatorSection = {
  title: "🧮 KALKULATOR KEBUTUHAN INTERNET 🧮",
  description:
    "Bingung pilih paket yang tepat? Gunakan kalkulator jagoan untuk menentukan paket internet yang sesuai dengan kebutuhan digital kamu!",
};

// Bonus features section
export const bonusFeatures = {
  title: "🎁 HARTA KARUN BONUS EKSKLUSIF 🎁",
  description: "Dapatkan harta karun digital yang luar biasa dengan setiap paket Jawara-Net!",
  features: [
    {
      id: "free-installation",
      icon: "🆓",
      title: "Gratis Instalasi",
      description: "Pemasangan & konfigurasi profesional",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
    },
    {
      id: "wifi-router",
      icon: "📶",
      title: "WiFi Router Premium",
      description: "Router WiFi berkualitas tinggi",
      gradient: "from-blue-500 via-cyan-500 to-sky-500",
      animationDelay: "0.1s",
    },
    {
      id: "maintenance",
      icon: "🛠️",
      title: "Maintenance Rutin",
      description: "Perawatan berkala tanpa biaya",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      animationDelay: "0.2s",
    },
    {
      id: "support",
      icon: "📞",
      title: "Support 24/7",
      description: "Bantuan kapan saja dibutuhkan",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      animationDelay: "0.3s",
    },
  ],
};

// Call-to-action section
export const packagesCTA = {
  title: "🚀 KLAIM HARTA KARUN SEKARANG! 🚀",
  buttonIcon: Sparkles,
  targetSection: "contact",
};

// Background decorative elements
export const packagesBackground = {
  topLeft: {
    icon: "⚔️",
    animation: "indonesian-wave",
    position: "top-20 left-10",
    size: "text-6xl",
    opacity: "opacity-20",
  },
  bottomRight: {
    icon: "👑",
    animation: "garuda-soar",
    position: "bottom-20 right-10",
    size: "text-6xl",
    opacity: "opacity-20",
  },
};

// Complete packages configuration export
export const packagesConfig = {
  header: packagesHeader,
  categories: packageCategories,
  packages: {
    rumah: residentialPackages,
    bisnis: businessPackages,
  },
  calculator: calculatorSection,
  bonusFeatures,
  cta: packagesCTA,
  background: packagesBackground,
};

// Default export untuk kemudahan import
export default packagesConfig;
