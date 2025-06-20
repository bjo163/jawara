/**
 * INTERNET CALCULATOR CONFIGURATION
 * =================================
 *
 * Centralized internet calculator configuration untuk aplikasi Jawara-Net.
 * Includes device configs, bandwidth calculations, package recommendations.
 */

import { Smartphone, Laptop, Tv, Monitor, Gamepad2 } from "lucide-react";

// Device configuration for bandwidth calculation
export const deviceConfigs = [
  {
    key: "smartphone" as const,
    label: "📱 Smartphone",
    icon: Smartphone,
    bandwidth: 2, // Mbps per device
    color: "from-blue-500 to-cyan-500",
    description: "Streaming, browsing, social media",
  },
  {
    key: "laptop" as const,
    label: "💻 Laptop",
    icon: Laptop,
    bandwidth: 5, // Mbps per device
    color: "from-purple-500 to-pink-500",
    description: "Work, video call, streaming HD",
  },
  {
    key: "smartTv" as const,
    label: "📺 Smart TV",
    icon: Tv,
    bandwidth: 8, // Mbps per device
    color: "from-red-500 to-orange-500",
    description: "4K streaming, Netflix, YouTube",
  },
  {
    key: "desktop" as const,
    label: "🖥️ Desktop PC",
    icon: Monitor,
    bandwidth: 6, // Mbps per device
    color: "from-green-500 to-emerald-500",
    description: "Work heavy, download, streaming",
  },
  {
    key: "gaming" as const,
    label: "🎮 Gaming Console",
    icon: Gamepad2,
    bandwidth: 10, // Mbps per device
    color: "from-orange-500 to-red-500",
    description: "Online gaming, update, streaming",
  },
];

// Package recommendations based on calculated bandwidth
export const packageRecommendations = [
  {
    name: "Jagoan Neon",
    speed: "10 Mbps",
    price: "Rp 150.000",
    minBandwidth: 0,
    maxBandwidth: 15,
    description: "Perfect untuk keluarga kecil dengan penggunaan ringan",
    features: ["Browsing lancar", "Streaming SD", "Video call stabil"],
    color: "neon",
    suitable: true,
  },
  {
    name: "Mandor Sakti",
    speed: "25 Mbps",
    price: "Rp 250.000",
    minBandwidth: 15,
    maxBandwidth: 30,
    description: "Ideal untuk keluarga dengan multiple devices",
    features: ["Streaming HD", "Gaming online", "Work from home"],
    color: "blue",
    suitable: true,
  },
  {
    name: "Wiro Sableng",
    speed: "35 Mbps",
    price: "Rp 350.000",
    minBandwidth: 30,
    maxBandwidth: 45,
    description: "Power user dengan kebutuhan bandwidth tinggi",
    features: ["4K streaming", "Download cepat", "Multiple gaming"],
    color: "purple",
    suitable: true,
  },
  {
    name: "Sultan Digital",
    speed: "50 Mbps",
    price: "Rp 450.000",
    minBandwidth: 45,
    maxBandwidth: 999,
    description: "Ultimate speed untuk keluarga besar & bisnis",
    features: ["Ultra HD streaming", "Real-time gaming", "Video conference"],
    color: "gold",
    suitable: true,
  },
];

// Calculator UI configuration
export const calculatorUI = {
  title: "🧮 KALKULATOR KEBUTUHAN INTERNET 🧮",
  subtitle: "Hitung kebutuhan bandwidth dan dapatkan rekomendasi paket terbaik!",

  deviceSection: {
    title: "📱 Pilih Device yang Kamu Punya",
    subtitle: "Tambah atau kurangi jumlah device yang akan terhubung",
  },

  resultSection: {
    title: "⚡ Hasil Perhitungan & Rekomendasi",
    bandwidthLabel: "Total Bandwidth Dibutuhkan:",
    recommendationLabel: "Paket yang Direkomendasikan:",
    unit: "Mbps",
  },

  buttons: {
    calculate: {
      text: "🧮 Hitung Kebutuhan",
      icon: "⚡",
    },
    reset: {
      text: "🔄 Reset",
      icon: "🔄",
    },
    order: {
      text: "📞 Pesan Sekarang",
      icon: "🚀",
    },
  },

  tips: {
    title: "💡 Tips Memilih Paket Internet",
    items: [
      "Pertimbangkan peak usage (jam sibuk keluarga)",
      "Tambah 20-30% buffer untuk aktivitas mendadak",
      "Gaming online butuh bandwidth stabil, bukan cuma speed",
      "4K streaming Netflix butuh minimal 15 Mbps consistent",
    ],
  },
};

// Bandwidth calculation logic
export const bandwidthCalculation = {
  // Buffer percentage for peak usage
  bufferPercentage: 1.3, // 30% extra bandwidth

  // Peak hours multiplier
  peakHoursMultiplier: 1.5,

  // Minimum bandwidth recommendations
  minimums: {
    single: 5, // Mbps for single user
    couple: 10, // Mbps for couple
    family: 15, // Mbps for small family
    bigFamily: 25, // Mbps for big family
  },

  // Activity-based bandwidth needs
  activities: {
    browsing: 2,
    socialMedia: 3,
    streamingSD: 3,
    streamingHD: 5,
    streaming4K: 15,
    videoCall: 4,
    gaming: 8,
    downloading: 10,
  },
};

// Background decorative elements
export const calculatorBackground = {
  leftIcon: {
    icon: "🧮",
    position: "top-20 left-10",
    animation: "garuda-soar",
    opacity: "opacity-20",
  },
  rightIcon: {
    icon: "⚡",
    position: "bottom-20 right-10",
    animation: "indonesian-wave",
    opacity: "opacity-20",
  },
  centerIcon: {
    icon: "📊",
    position: "top-1/2 right-8",
    animation: "particle-float",
    opacity: "opacity-15",
  },
};

// Export complete calculator configuration
export const calculatorConfig = {
  devices: deviceConfigs,
  packages: packageRecommendations,
  ui: calculatorUI,
  calculation: bandwidthCalculation,
  background: calculatorBackground,
};
