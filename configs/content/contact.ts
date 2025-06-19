/**
 * CONTACT CONFIGURATION
 * =====================
 *
 * Centralized contact information untuk aplikasi Jawara-Net.
 * Includes contact methods, office info, operating hours, dan support stats.
 */

import { Phone, Mail, MapPin, Clock, Crown, Sparkles } from "lucide-react";

// Section header
export const contactHeader = {
  title: "📞 HUBUNGI PARA JAGOAN 📞",
  subtitle: "Siap membantu kamu 24/7! Pilih cara yang paling nyaman buat kamu, Jagoan Digital!",
};

// Main contact section intro
export const contactIntro = {
  icon: Phone,
  title: "📞 KONTAK LANGSUNG 📞",
  description: "Tim Penjaga Kerajaan Digital siap melayani seperti Pengawal Istana Merdeka! 🏛️",
  highlights: [
    { text: "Penjaga Kerajaan Digital", color: "text-orange-400" },
    { text: "Pengawal Istana Merdeka", color: "text-green-400" },
  ],
};

// Contact methods
export const contactMethods = [
  {
    id: "whatsapp",
    type: "whatsapp",
    icon: Phone,
    title: "🟢 WhatsApp Jagoan",
    value: "+62 812-3456-7890",
    description: "Respon secepat kilat Garuda, chat langsung dengan CS! 🦅",
    highlights: [{ text: "secepat kilat Garuda", color: "text-yellow-400" }],
    color: "green",
    bgColor: "bg-green-500/20",
    borderColor: "border-green-500/30",
    gradient: "from-green-500 to-emerald-500",
    valueColor: "text-green-400",
    link: {
      url: "https://wa.me/6281234567890",
      text: "💬 Chat Sekarang",
      icon: Sparkles,
    },
  },
  {
    id: "phone",
    type: "phone",
    icon: Phone,
    title: "📞 Telepon Kerajaan",
    value: "021-1234-5678",
    description: "Layanan telepon 24 jam seperti penjaga istana! 🏰",
    highlights: [{ text: "24 jam seperti penjaga istana", color: "text-purple-400" }],
    color: "blue",
    bgColor: "bg-blue-500/20",
    borderColor: "border-blue-500/30",
    gradient: "from-blue-500 to-cyan-500",
    valueColor: "text-blue-400",
    link: {
      url: "tel:+622112345678",
      text: "📞 Telepon Sekarang",
      icon: Crown,
    },
  },
  {
    id: "email",
    type: "email",
    icon: Mail,
    title: "📧 Surat Digital",
    value: "info@jawara-net.com",
    description: "Untuk pertanyaan detail & komplain seperti surat raja! 📜",
    highlights: [{ text: "seperti surat raja", color: "text-red-400" }],
    color: "orange",
    bgColor: "bg-orange-500/20",
    borderColor: "border-orange-500/30",
    gradient: "from-orange-500 to-red-500",
    valueColor: "text-orange-400",
  },
  {
    id: "address",
    type: "address",
    icon: MapPin,
    title: "🏛️ Istana Pusat",
    value: ["Jl. Teknologi No. 123", "Jakarta Selatan 12345"],
    description: "Buka Senin-Sabtu, 08:00-17:00 seperti istana kerajaan! 🏰",
    highlights: [{ text: "seperti istana kerajaan", color: "text-yellow-400" }],
    color: "purple",
    bgColor: "bg-purple-500/20",
    borderColor: "border-purple-500/30",
    gradient: "from-purple-500 to-pink-500",
    valueColor: "text-purple-400",
  },
];

// Operating hours
export const operatingHours = {
  icon: Clock,
  title: "⏰ Jam Penjagaan",
  color: "yellow",
  bgColor: "bg-yellow-500/20",
  borderColor: "border-yellow-500/30",
  gradient: "from-yellow-500 to-orange-500",
  valueColor: "text-yellow-400",
  schedules: [
    {
      service: "Customer Service",
      hours: "24/7",
      icon: "🛡️",
    },
    {
      service: "Technical Support",
      hours: "24/7",
      icon: "⚔️",
    },
    {
      service: "Kantor",
      hours: "Senin-Sabtu 08:00-17:00",
      icon: "🏛️",
    },
  ],
};

// Quick action buttons
export const quickActions = {
  title: "🚀 AKSI CEPAT JAGOAN 🚀",
  description: "Pilih senjata komunikasi yang paling ampuh! ⚔️",
  highlight: { text: "ampuh", color: "text-orange-400" },
  actions: [
    {
      id: "whatsapp-quick",
      icon: "💬",
      text: "Chat WhatsApp Jagoan",
      url: "https://wa.me/6281234567890",
      gradient: "from-green-500 to-emerald-500",
      actionIcon: Sparkles,
      target: "_blank",
    },
    {
      id: "phone-quick",
      icon: "📞",
      text: "Telepon Kerajaan",
      url: "tel:+622112345678",
      gradient: "from-blue-500 to-cyan-500",
      actionIcon: Crown,
    },
  ],
};

// Support statistics
export const supportStats = [
  {
    id: "response-time",
    icon: "⚡",
    value: "2 Min",
    label: "Respon WhatsApp",
    color: "text-green-500",
    gradient: "from-green-500 to-emerald-500",
    animationDelay: "0s",
  },
  {
    id: "availability",
    icon: "🛡️",
    value: "24/7",
    label: "Penjagaan Aktif",
    color: "text-blue-500",
    gradient: "from-blue-500 to-cyan-500",
    animationDelay: "0.1s",
  },
  {
    id: "satisfaction",
    icon: "🏆",
    value: "4.9/5",
    label: "Rating Kepuasan",
    color: "text-orange-500",
    gradient: "from-orange-500 to-red-500",
    animationDelay: "0.2s",
  },
  {
    id: "customers-served",
    icon: "👑",
    value: "1000+",
    label: "Jagoan Terlayani",
    color: "text-purple-500",
    gradient: "from-purple-500 to-pink-500",
    animationDelay: "0.3s",
  },
];

// Background decorative elements
export const contactBackground = {
  topLeft: {
    icon: "📞",
    animation: "indonesian-wave",
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

// Complete contact configuration export
export const contactConfig = {
  header: contactHeader,
  intro: contactIntro,
  methods: contactMethods,
  hours: operatingHours,
  quickActions,
  stats: supportStats,
  background: contactBackground,
};

// Default export untuk kemudahan import
export default contactConfig;
