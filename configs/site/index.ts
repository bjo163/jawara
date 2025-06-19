/**
 * SITE CONFIGURATION
 * ==================
 *
 * Konfigurasi brand, meta tags, SEO, dan informasi perusahaan.
 * Global settings yang digunakan di seluruh aplikasi.
 */

export const siteConfig = {
  brand: {
    name: "Jawara-Net",
    fullName: "JAWARA-NET - INTERNET NUSANTARA RAYA",
    tagline: "Internet Service Provider Nusantara",
    description:
      "Internet Service Provider yang menguasai nusantara dengan koneksi secepat kilat petir! Untuk para jagoan digital Indonesia!",
    logo: "/placeholder-logo.svg",
    favicon: "/favicon.ico",
  },
  company: {
    establishedYear: 2020,
    address: {
      street: "Jl. Teknologi No. 123",
      city: "Jakarta Selatan",
      postal: "12345",
      country: "Indonesia",
    },
    contact: {
      phone: "021-1234-5678",
      whatsapp: "+62 812-3456-7890",
      email: "info@jawara-net.com",
      supportEmail: "support@jawara-net.com",
    },
    social: {
      facebook: "#",
      instagram: "#",
      twitter: "#",
      youtube: "#",
    },
  },
  seo: {
    defaultTitle: "Jawara-Net - Internet Nusantara Raya",
    titleTemplate: "%s | Jawara-Net",
    description:
      "Provider internet terbaik Indonesia dengan koneksi fiber optic super cepat dan stabil. Melayani rumahan dan bisnis di seluruh Nusantara.",
    keywords: ["internet", "fiber optic", "ISP", "Indonesia", "broadband", "wifi"],
    image: "/hero-bg.png",
    url: "https://jawara-net.com",
  },
  features: {
    enableChat: true,
    enableTestimonials: true,
    enableFAQ: true,
    enableAnimations: true,
    enableDarkMode: false,
  },
};

export type SiteConfigType = typeof siteConfig;
