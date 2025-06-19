/**
 * NAVIGATION CONFIGURATION
 * ========================
 *
 * Centralized navigation menu untuk seluruh aplikasi Jawara-Net.
 * Includes navbar items, footer sections, brand info, dan social media links.
 */

import { Sword, Crown, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

// Main navigation items untuk navbar
export const navbarItems = [
  { id: "hero", label: "Beranda", icon: "🏛️" },
  { id: "about", label: "Tentang", icon: "🛡️" },
  { id: "services", label: "Layanan", icon: "⚔️" },
  { id: "packages", label: "Paket", icon: "👑" },
  { id: "testimonials", label: "Testimoni", icon: "🏆" },
  { id: "contact", label: "Kontak", icon: "📞" },
];

// Footer menu sections
export const footerMenus = {
  main: {
    title: "Menu Utama",
    icon: Sword,
    iconColor: "text-orange-400",
    hoverColor: "hover:text-orange-400",
    items: [
      { id: "hero", label: "🏠 Beranda" },
      { id: "about", label: "📖 Tentang Kami" },
      { id: "services", label: "⚔️ Layanan" },
      { id: "packages", label: "💎 Paket Internet" },
      { id: "coverage", label: "🗺️ Area Coverage" },
    ],
  },
  support: {
    title: "Bantuan",
    icon: Crown,
    iconColor: "text-blue-400",
    hoverColor: "hover:text-blue-400",
    items: [
      { id: "faq", label: "❓ FAQ" },
      { id: "contact", label: "📞 Hubungi Kami" },
      { label: "📋 Panduan Instalasi", href: "#" },
      { label: "🔧 Troubleshooting", href: "#" },
      { label: "📊 Status Jaringan", href: "#" },
    ],
  },
};

// Social media links
export const socialMediaLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "#",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "#",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "#",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "#",
    gradient: "from-red-500 to-red-600",
  },
];

// Legal/policy links
export const legalLinks = [
  { label: "📋 Syarat & Ketentuan", href: "#" },
  { label: "🔒 Kebijakan Privasi", href: "#" },
  { label: "⚠️ Disclaimer", href: "#" },
];

// Brand navigation info
export const brandNav = {
  name: "JAWARA-NET",
  tagline: "INTERNET NUSANTARA",
  copyright: {
    text: "Jawara-Net - Internet Nusantara.",
    suffix: "Dibuat dengan ❤️ untuk Indonesia Raya!",
    flag: "🇮🇩",
  },
};

// Navigation configuration untuk scroll behavior
export const navigationBehavior = {
  scrollOffset: 100, // Offset untuk active section detection
  smoothScroll: true,
  scrollBehavior: "smooth" as ScrollBehavior,
};

// Mobile navigation settings
export const mobileNav = {
  breakpoint: 768, // px
  animationDuration: 300, // ms
  overlayOpacity: 0.5,
};

// Export complete navigation configuration
export const navigationConfig = {
  navbar: {
    brand: brandNav,
    items: navbarItems,
    behavior: navigationBehavior,
    mobile: mobileNav,
  },
  footer: {
    brand: brandNav,
    menus: footerMenus,
    social: socialMediaLinks,
    legal: legalLinks,
  },
};

// Types for TypeScript support
export interface NavItem {
  id?: string;
  label: string;
  icon?: string;
  href?: string;
}

export interface FooterMenu {
  title: string;
  icon: any;
  iconColor: string;
  hoverColor: string;
  items: NavItem[];
}

export interface SocialLink {
  name: string;
  icon: any;
  href: string;
  gradient: string;
}

export interface BrandNav {
  name: string;
  tagline: string;
  copyright: {
    text: string;
    suffix: string;
    flag: string;
  };
}

export type NavigationConfigType = typeof navigationConfig;
