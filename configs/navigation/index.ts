/**
 * NAVIGATION CONFIGURATION
 * ========================
 *
 * Konfigurasi menu, routing, dan navigasi untuk seluruh aplikasi.
 * Includes navbar items, footer links, dan breadcrumb settings.
 */

// Import menu configuration
export * from "./menu";

// Legacy navigation config (akan dihapus setelah migration)
export const legacyNavigationConfig = {
  navbar: {
    brand: {
      name: "JAWARA-NET",
      tagline: "INTERNET NUSANTARA RAYA",
    },
    items: [
      { id: "hero", label: "Beranda", icon: "🏛️" },
      { id: "about", label: "Tentang", icon: "🛡️" },
      { id: "services", label: "Layanan", icon: "⚔️" },
      { id: "packages", label: "Paket", icon: "👑" },
      { id: "testimonials", label: "Testimoni", icon: "🏆" },
      { id: "contact", label: "Kontak", icon: "📞" },
    ],
  },
  footer: {
    sections: {
      main: [
        { id: "hero", label: "🏠 Beranda" },
        { id: "about", label: "📖 Tentang Kami" },
        { id: "services", label: "⚔️ Layanan" },
        { id: "packages", label: "💎 Paket Internet" },
        { id: "coverage", label: "🗺️ Area Coverage" },
      ],
      support: [
        { id: "faq", label: "❓ FAQ" },
        { id: "contact", label: "📞 Hubungi Kami" },
        { label: "📋 Panduan Instalasi", href: "#" },
        { label: "🔧 Troubleshooting", href: "#" },
        { label: "📊 Status Jaringan", href: "#" },
      ],
      legal: [
        { label: "📋 Syarat & Ketentuan", href: "#" },
        { label: "🔒 Kebijakan Privasi", href: "#" },
        { label: "⚠️ Disclaimer", href: "#" },
      ],
    },
  },
};

export type NavigationConfigType = typeof legacyNavigationConfig;
