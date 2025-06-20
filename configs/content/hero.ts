/**
 * HERO SECTION CONFIGURATION
 * ==========================
 *
 * Centralized hero section configuration untuk Jawara-Net.
 * Includes slideshow data, floating elements, feature cards, stats, dan CTA configurations.
 */

import { TAILWIND_ANIMATIONS } from "../animations/index.js";

// Hero slide interface
export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  subDescription: string;
  character: string;
  color: string;
  decorativeElements: {
    topLeft: string;
    topRight: string;
    bottomLeft: string;
    bottomRight: string;
  };
}

// Floating element interface
export interface FloatingElement {
  id: string;
  icon: string;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  size: string;
  animation: string;
  opacity: number;
  animationDelay?: string;
}

// Feature card interface
export interface FeatureCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  subtitle: string;
  gradient: string;
  textColor: string;
  characterIcon: string;
  animationDelay?: string;
}

// Stat card interface
export interface StatCard {
  id: string;
  value: string;
  label: string;
  icon: string;
  color: string;
  animation: string;
  animationDelay?: string;
}

// CTA button interface
export interface CTAButton {
  id: string;
  text: string;
  leftIcon: string;
  rightIcon: string;
  action: "scroll" | "external" | "modal";
  target: string;
  gradient?: string;
  className?: string;
}

// Mouse follower configuration
export interface MouseFollower {
  enabled: boolean;
  size: number;
  gradient: string;
  blur: number;
  opacity: number;
  transition: string;
}

// Slideshow settings interface
export interface SlideshowSettings {
  autoPlay: boolean;
  interval: number;
  transitionDuration: number;
  showControls: boolean;
  showIndicators: boolean;
  showAutoPlayToggle: boolean;
}

// Particle system configuration
export interface ParticleSystem {
  enabled: boolean;
  count: number;
  icons: string[];
  animationDuration: {
    min: number;
    max: number;
  };
  size: string;
  opacity: number;
}

// Main hero configuration interface
export interface HeroConfig {
  sectionId: string;
  slides: HeroSlide[];
  floatingElements: FloatingElement[];
  featureCards: FeatureCard[];
  statCards: StatCard[];
  ctaButtons: CTAButton[];
  mouseFollower: MouseFollower;
  slideshowSettings: SlideshowSettings;
  particleSystem: ParticleSystem;
  styling: {
    section: string;
    container: string;
    contentWrapper: string;
  };
}

// Hero slides data
export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    title: "⚔️ JAWARA INTERNET ⚔️",
    subtitle: "🏺 NUSANTARA RAYA 🏺 🇮🇩",
    description: "Internet SECEPAT KILAT GARUDA ⚡ untuk para PEJUANG DIGITAL Indonesia! 🦸‍♂️",
    subDescription: "Koneksi setangguh Benteng Majapahit 🏛️, stabil seperti Gunung Semeru! 🌋",
    character: "🦅",
    color: "from-orange-400 via-yellow-500 to-orange-600",
    decorativeElements: {
      topLeft: "⚔️",
      topRight: "⚔️",
      bottomLeft: "🏺",
      bottomRight: "🏺",
    },
  },
  {
    id: 2,
    title: "🛡️ BENTENG DIGITAL 🛡️",
    subtitle: "🏰 KERAJAAN INTERNET 🏰 🇮🇩",
    description: "Jaringan SEKUAT KERIS MAJAPAHIT ⚔️ untuk para SULTAN DIGITAL Indonesia! 👑",
    subDescription: "Uptime 99.9% seperti Candi Borobudur 🏛️, tak pernah roboh! 💪",
    character: "🏰",
    color: "from-blue-400 via-cyan-500 to-teal-600",
    decorativeElements: {
      topLeft: "🛡️",
      topRight: "👑",
      bottomLeft: "🏰",
      bottomRight: "⚔️",
    },
  },
  {
    id: 3,
    title: "🌋 KEKUATAN NUSANTARA 🌋",
    subtitle: "🐉 INTERNET LEGENDARIS 🐉 🇮🇩",
    description: "Koneksi SESAKTI GAJAH MADA 🐘 untuk para PAHLAWAN DIGITAL Indonesia! ⚡",
    subDescription: "Dari Sabang sampai Merauke 🗺️, satu jaringan untuk semua! 🌊",
    character: "🐉",
    color: "from-green-400 via-emerald-500 to-lime-600",
    decorativeElements: {
      topLeft: "🌋",
      topRight: "🐉",
      bottomLeft: "🗺️",
      bottomRight: "🌊",
    },
  },
  {
    id: 4,
    title: "👑 SULTAN INTERNET 👑",
    subtitle: "🎭 WAYANG DIGITAL 🎭 🇮🇩",
    description: "Internet SEINDAH BATIK SOLO 🎨 untuk para MAESTRO DIGITAL Indonesia! 🎭",
    subDescription: "Fiber optic hingga 1 Gbps seperti kilat Dewa Indra! ⚡",
    character: "🎭",
    color: "from-purple-400 via-pink-500 to-rose-600",
    decorativeElements: {
      topLeft: "👑",
      topRight: "🎭",
      bottomLeft: "🎨",
      bottomRight: "⚡",
    },
  },
];

// Floating elements configuration
export const floatingElements: FloatingElement[] = [
  {
    id: "garuda-top-left",
    icon: "🦅",
    position: { top: "16", left: "8" },
    size: "text-4xl md:text-6xl",
    animation: TAILWIND_ANIMATIONS.garudaSoar,
    opacity: 40,
  },
  {
    id: "sword-top-right",
    icon: "⚔️",
    position: { top: "28", right: "16" },
    size: "text-3xl md:text-5xl",
    animation: TAILWIND_ANIMATIONS.indonesianWave,
    opacity: 35,
  },
  {
    id: "temple-bottom-left",
    icon: "🏛️",
    position: { bottom: "36", left: "12" },
    size: "text-3xl md:text-5xl",
    animation: TAILWIND_ANIMATIONS.particleFloat,
    opacity: 40,
  },
  {
    id: "mask-center-right",
    icon: "🎭",
    position: { top: "1/3", right: "8" },
    size: "text-4xl md:text-6xl",
    animation: TAILWIND_ANIMATIONS.garudaSoar,
    opacity: 30,
    animationDelay: "2s",
  },
  {
    id: "dragon-bottom-right",
    icon: "🐉",
    position: { bottom: "16", right: "28" },
    size: "text-3xl md:text-4xl",
    animation: TAILWIND_ANIMATIONS.indonesianWave,
    opacity: 35,
  },
  {
    id: "shield-middle-left",
    icon: "🛡️",
    position: { top: "1/2", left: "6" },
    size: "text-3xl md:text-5xl",
    animation: TAILWIND_ANIMATIONS.particleFloat,
    opacity: 30,
    animationDelay: "3s",
  },
  {
    id: "drum-bottom-center",
    icon: "🥁",
    position: { bottom: "28", left: "1/3" },
    size: "text-3xl md:text-4xl",
    animation: TAILWIND_ANIMATIONS.garudaSoar,
    opacity: 35,
    animationDelay: "1s",
  },
  {
    id: "crown-top-center",
    icon: "👑",
    position: { top: "36", left: "1/3" },
    size: "text-3xl md:text-4xl",
    animation: TAILWIND_ANIMATIONS.indonesianWave,
    opacity: 30,
    animationDelay: "4s",
  },
  {
    id: "volcano-bottom-right-center",
    icon: "🌋",
    position: { bottom: "40", right: "1/4" },
    size: "text-3xl md:text-5xl",
    animation: TAILWIND_ANIMATIONS.particleFloat,
    opacity: 25,
    animationDelay: "2.5s",
  },
  {
    id: "ship-right-center",
    icon: "⛵",
    position: { top: "2/3", right: "12" },
    size: "text-3xl md:text-4xl",
    animation: TAILWIND_ANIMATIONS.garudaSoar,
    opacity: 30,
    animationDelay: "1.5s",
  },
];

// Feature cards configuration
export const featureCards: FeatureCard[] = [
  {
    id: "speed",
    icon: "Zap",
    title: "⚡ KECEPATAN GARUDA ⚡",
    description: "Fiber optic hingga 1 Gbps",
    subtitle: "Secepat Garuda menyambar mangsa!",
    gradient: "from-orange-500 via-red-500 to-pink-500",
    textColor: "text-orange-400",
    characterIcon: "🦅",
  },
  {
    id: "reliability",
    icon: "Shield",
    title: "🛡️ BENTENG MAJAPAHIT 🛡️",
    description: "Uptime 99.9% terjamin",
    subtitle: "Sekuat benteng Kerajaan Majapahit!",
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    textColor: "text-blue-400",
    characterIcon: "🏛️",
    animationDelay: "0.2s",
  },
  {
    id: "coverage",
    icon: "Globe",
    title: "🗺️ TAKLUKKAN NUSANTARA 🗺️",
    description: "50+ kota di Indonesia",
    subtitle: "Dari Sabang sampai Merauke!",
    gradient: "from-green-500 via-emerald-500 to-lime-500",
    textColor: "text-green-400",
    characterIcon: "🐉",
    animationDelay: "0.4s",
  },
];

// Stat cards configuration
export const statCards: StatCard[] = [
  {
    id: "customers",
    value: "1000+",
    label: "🏆 Jagoan Setia",
    icon: "⚔️",
    color: "text-orange-500",
    animation: "indonesian-wave",
  },
  {
    id: "cities",
    value: "50+",
    label: "🏝️ Pulau Taklukan",
    icon: "🦅",
    color: "text-blue-500",
    animation: "garuda-soar",
    animationDelay: "0.1s",
  },
  {
    id: "uptime",
    value: "99.9%",
    label: "⚡ Kekuatan Stabil",
    icon: "🏛️",
    color: "text-green-500",
    animation: "particle-float",
    animationDelay: "0.2s",
  },
  {
    id: "support",
    value: "24/7",
    label: "🛡️ Penjaga Setia",
    icon: "🎭",
    color: "text-purple-500",
    animation: "garuda-soar",
    animationDelay: "0.3s",
  },
];

// CTA buttons configuration
export const ctaButtons: CTAButton[] = [
  {
    id: "packages",
    text: "⚔️ PILIH SENJATA INTERNET! ⚔️",
    leftIcon: "Sword",
    rightIcon: "ArrowRight",
    action: "scroll",
    target: "packages",
    className:
      "mega-button px-8 md:px-16 py-6 md:py-8 text-xl md:text-3xl font-black text-white mega-text flex items-center space-x-4 md:space-x-6 mega-hover w-full sm:w-auto",
  },
  {
    id: "contact",
    text: "👑 GABUNG SEKARANG JUGA! 👑",
    leftIcon: "Crown",
    rightIcon: "Sparkles",
    action: "scroll",
    target: "contact",
    gradient: "from-blue-600 via-purple-600 to-pink-600",
    className:
      "mega-button bg-gradient-to-r px-8 md:px-16 py-6 md:py-8 text-xl md:text-3xl font-black text-white mega-text mega-hover w-full sm:w-auto",
  },
];

// Main hero configuration
export const heroConfig: HeroConfig = {
  sectionId: "hero",
  slides: heroSlides,
  floatingElements,
  featureCards,
  statCards,
  ctaButtons,

  mouseFollower: {
    enabled: true,
    size: 96, // w-96 h-96
    gradient: "radial-gradient(circle, rgba(220, 38, 38, 0.4) 0%, rgba(249, 115, 22, 0.3) 50%, transparent 70%)",
    blur: 50,
    opacity: 30,
    transition: "all 0.3s ease",
  },
  slideshowSettings: {
    autoPlay: true,
    interval: 5000,
    transitionDuration: 700,
    showControls: true,
    showIndicators: true,
    showAutoPlayToggle: true,
  },

  particleSystem: {
    enabled: true,
    count: 20,
    icons: ["⚔️", "🛡️", "👑", "🔥"],
    animationDuration: {
      min: 12,
      max: 18,
    },
    size: "text-sm md:text-lg",
    opacity: 70,
  },

  styling: {
    section: "relative min-h-screen flex items-center justify-center overflow-hidden nusantara-bg pt-16 md:pt-20",
    container: "relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
    contentWrapper: "space-y-12 md:space-y-20 scroll-reveal",
  },
};

// Additional utilities for hero management
export const heroUtils = {
  getSlideById: (id: number) => heroSlides.find((slide) => slide.id === id),
  getFeatureByIconType: (iconType: string) => featureCards.find((card) => card.icon === iconType),
  getStatByType: (type: string) => statCards.find((stat) => stat.id === type),
  getFloatingElementsByAnimation: (animation: string) =>
    floatingElements.filter((element) => element.animation === animation),
  getTotalSlides: () => heroSlides.length,
};

// Export main configuration as default
export default heroConfig;
