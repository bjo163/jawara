/**
 * PROCESS SECTION CONFIGURATION
 * =============================
 *
 * Centralized process configuration untuk aplikasi Jawara-Net.
 * Includes installation steps, timeline, requirements, dan support process.
 */

import { FileText, MapPin, Wrench, Wifi } from "lucide-react";

// Section header configuration
export const processHeader = {
  title: "⚔️ PROSES INSTALASI JAWARA ⚔️",
  subtitle: "Dari pendaftaran sampai internet ngebut, semua diurus tim profesional kami!",
};

// Installation process steps
export const installationSteps = [
  {
    id: 1,
    icon: FileText,
    title: "Isi Form Pendaftaran",
    description: "Daftar online atau via WhatsApp. Cuma butuh 2 menit, gampang banget!",
    details: ["Data diri lengkap", "Pilih paket internet", "Tentukan jadwal survey"],
    color: "orange" as const,
    character: "📝",
    epicTitle: "🗡️ DAFTAR SEBAGAI JAGOAN 🗡️",
    duration: "2 menit",
    requirement: "KTP & Nomor HP aktif",
  },
  {
    id: 2,
    icon: MapPin,
    title: "Survey Lokasi",
    description: "Tim teknisi datang ke lokasi untuk cek kelayakan dan jarak dari tower terdekat.",
    details: ["Cek sinyal coverage", "Ukur jarak kabel", "Tentukan titik instalasi"],
    color: "blue" as const,
    character: "🗺️",
    epicTitle: "🏛️ PEMETAAN WILAYAH 🏛️",
    duration: "30-45 menit",
    requirement: "Akses ke lokasi instalasi",
  },
  {
    id: 3,
    icon: Wrench,
    title: "Instalasi Perangkat",
    description: "Pemasangan kabel fiber optic dan konfigurasi router. Dikerjain sama teknisi berpengalaman!",
    details: ["Pasang kabel fiber", "Setup router WiFi", "Testing koneksi"],
    color: "green" as const,
    character: "🔧",
    epicTitle: "⚔️ PEMASANGAN SENJATA ⚔️",
    duration: "2-4 jam",
    requirement: "Izin akses instalasi",
  },
  {
    id: 4,
    icon: Wifi,
    title: "Aktif & Terhubung",
    description: "Internet siap dipakai! Selamat menikmati koneksi super cepat tanpa buffering.",
    details: ["Aktivasi akun", "Serah terima password", "Panduan penggunaan"],
    color: "purple" as const,
    character: "🚀",
    epicTitle: "👑 TAKLUKKAN DUNIA MAYA 👑",
    duration: "Seketika",
    requirement: "Payment konfirmasi",
  },
];

// Timeline configuration
export const processTimeline = {
  title: "📅 Timeline Instalasi",
  description: "Dari daftar sampai internet aktif dalam 3-7 hari kerja",
  phases: [
    {
      day: "Hari 1",
      activity: "Pendaftaran & Survey",
      description: "Daftar online, jadwalkan survey lokasi",
    },
    {
      day: "Hari 2-3",
      activity: "Persiapan Instalasi",
      description: "Procurement perangkat, koordinasi teknisi",
    },
    {
      day: "Hari 4-7",
      activity: "Instalasi & Aktivasi",
      description: "Pemasangan kabel, konfigurasi, testing",
    },
  ],
};

// Requirements and preparation
export const requirements = {
  title: "📋 Yang Perlu Disiapkan",
  items: [
    {
      category: "Dokumen",
      items: ["KTP asli", "Nomor HP aktif", "Email valid"],
      icon: "📄",
    },
    {
      category: "Lokasi",
      items: ["Akses ke lokasi", "Ruang untuk router", "Stopkontak listrik"],
      icon: "🏠",
    },
    {
      category: "Teknis",
      items: ["Line of sight ke tower", "Struktur bangunan kokoh", "Izin pemasangan"],
      icon: "🔧",
    },
  ],
};

// Support process
export const supportProcess = {
  title: "🛠️ Layanan Support 24/7",
  description: "Tim support Jawara-Net siap membantu kapan saja!",
  channels: [
    {
      name: "WhatsApp",
      contact: "+62 812-3456-7890",
      icon: "📱",
      availability: "24/7",
      responseTime: "< 5 menit",
    },
    {
      name: "Telepon",
      contact: "021-1234-5678",
      icon: "📞",
      availability: "06:00 - 22:00",
      responseTime: "Langsung",
    },
    {
      name: "Email",
      contact: "support@jawara-net.com",
      icon: "📧",
      availability: "24/7",
      responseTime: "< 2 jam",
    },
    {
      name: "Live Chat",
      contact: "Website chat",
      icon: "💬",
      availability: "24/7",
      responseTime: "< 1 menit",
    },
  ],
};

// Background decorative elements
export const processBackground = {
  topLeft: {
    icon: "🏛️",
    position: "top-20 left-20",
    size: "text-8xl",
    animation: "garuda-soar",
    opacity: "opacity-30",
  },
  bottomRight: {
    icon: "⚔️",
    position: "bottom-20 right-20",
    size: "text-8xl",
    animation: "indonesian-wave",
    opacity: "opacity-30",
  },
  centerLeft: {
    icon: "🛡️",
    position: "top-1/2 left-8",
    size: "text-6xl",
    animation: "particle-float",
    opacity: "opacity-20",
  },
  centerRight: {
    icon: "👑",
    position: "top-1/3 right-8",
    size: "text-6xl",
    animation: "garuda-soar",
    opacity: "opacity-25",
  },
};

// Call to action
export const processCTA = {
  title: "Siap Bergabung dengan Kerajaan Internet Nusantara?",
  subtitle: "Mulai proses instalasi sekarang dan rasakan internet super ngebut!",
  primaryButton: {
    text: "Daftar Sekarang",
    target: "contact",
    icon: "🚀",
  },
  secondaryButton: {
    text: "Tanya Teknisi",
    target: "whatsapp",
    icon: "💬",
  },
};

// Export complete process configuration
export const processConfig = {
  header: processHeader,
  steps: installationSteps,
  timeline: processTimeline,
  requirements,
  support: supportProcess,
  background: processBackground,
  cta: processCTA,
};
