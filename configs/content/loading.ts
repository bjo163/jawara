/**
 * LOADING CONFIGURATION
 * =====================
 *
 * Centralized loading screen content untuk aplikasi Jawara-Net.
 * Includes stages, stats, branding, dan progress configurations.
 */

import { Crown, Globe, Shield, Sparkles } from "lucide-react";

// Loading stages dengan progress indicators
export const loadingStages = [
  {
    text: "Menyiapkan koneksi super ngebut...",
    icon: "🦅",
    progress: 25,
  },
  {
    text: "Mengaktifkan mode warrior digital...",
    icon: "⚔️",
    progress: 50,
  },
  {
    text: "Membangun benteng internet Nusantara...",
    icon: "🏛️",
    progress: 75,
  },
  {
    text: "Menyelesaikan persiapan jagoan...",
    icon: "👑",
    progress: 100,
  },
];

// Brand info untuk loading screen
export const loadingBrand = {
  title: "⚔️ JAWARA-NET ⚔️",
  tagline: "INTERNET NUSANTARA RAYA",
  description: "Memuat pengalaman internet terbaik Indonesia...",
  decorativeIcons: ["🦅", "⚔️", "🏛️", "🎭", "🐉"],
};

// Loading stats yang ditampilkan
export const loadingStats = [
  {
    icon: Crown,
    value: "1000+",
    label: "Jagoan Setia",
    color: "from-orange-500 to-red-500",
    textColor: "text-orange-500",
  },
  {
    icon: Globe,
    value: "50+",
    label: "Kota Taklukan",
    color: "from-blue-500 to-cyan-500",
    textColor: "text-blue-500",
  },
  {
    icon: Shield,
    value: "99.9%",
    label: "Uptime",
    color: "from-green-500 to-emerald-500",
    textColor: "text-green-500",
  },
  {
    icon: Sparkles,
    value: "24/7",
    label: "Support",
    color: "from-purple-500 to-pink-500",
    textColor: "text-purple-500",
  },
];

// Progress bar configuration
export const progressConfig = {
  labels: {
    title: "Loading Progress",
    percentage: (progress: number) => `${Math.round(progress)}%`,
  },
  styling: {
    barGradient: "from-orange-500 via-red-500 to-pink-500",
    backgroundColor: "bg-slate-700",
    height: "h-6",
  },
  animation: {
    duration: "duration-500",
    easing: "ease-out",
  },
};

// Loading dots animation configuration
export const loadingDots = [
  {
    gradient: "from-orange-500 to-red-500",
    delay: "0s",
  },
  {
    gradient: "from-red-500 to-pink-500",
    delay: "0.1s",
  },
  {
    gradient: "from-pink-500 to-purple-500",
    delay: "0.2s",
  },
];

// Timing configuration
export const loadingTiming = {
  stageInterval: 1500, // ms between stages
  progressUpdateInterval: 100, // ms for progress animation
  finalDelay: 1000, // ms before hiding loading screen
};

// Background decorative elements
export const backgroundElements = [
  { icon: "🦅", position: "top-20 left-20", size: "text-8xl", animation: "garuda-soar", opacity: "opacity-30" },
  { icon: "⚔️", position: "top-40 right-20", size: "text-7xl", animation: "indonesian-wave", opacity: "opacity-25" },
  { icon: "🏛️", position: "bottom-40 left-20", size: "text-6xl", animation: "particle-float", opacity: "opacity-30" },
  { icon: "🛡️", position: "bottom-20 right-20", size: "text-8xl", animation: "garuda-soar", opacity: "opacity-25" },
  {
    icon: "🇮🇩",
    position: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
    size: "text-9xl",
    animation: "indonesian-wave",
    opacity: "opacity-10",
  },
];

// Export all loading configuration
export const loadingConfig = {
  stages: loadingStages,
  brand: loadingBrand,
  stats: loadingStats,
  progress: progressConfig,
  dots: loadingDots,
  timing: loadingTiming,
  background: backgroundElements,
};

// Types for TypeScript support
export interface LoadingStage {
  text: string;
  icon: string;
  progress: number;
}

export interface LoadingStat {
  icon: any;
  value: string;
  label: string;
  color: string;
  textColor: string;
}

export interface BackgroundElement {
  icon: string;
  position: string;
  size: string;
  animation: string;
  opacity: string;
}

export type LoadingConfigType = typeof loadingConfig;
