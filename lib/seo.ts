/**
 * SEO & METADATA CONFIGURATION
 * ============================
 *
 * Enhanced SEO configuration dengan structured data, Open Graph, dan Twitter Cards.
 */

import type { Metadata, Viewport } from "next";

export const baseMetadata: Metadata = {
  title: {
    default: "Jawara-Net - Internet Nusantara Raya | Provider Fiber Optic Terbaik",
    template: "%s | Jawara-Net",
  },
  description:
    "Internet Service Provider terbaik Indonesia dengan koneksi fiber optic super cepat hingga 1 Gbps. Melayani rumahan dan bisnis di Jakarta, Bandung, Surabaya. Gaming lancar, streaming HD, unlimited FUP.",
  keywords: [
    "internet cepat",
    "fiber optic indonesia",
    "ISP terbaik",
    "wifi unlimited",
    "internet gaming",
    "broadband jakarta",
    "internet bisnis",
    "provider wifi",
    "koneksi stabil",
    "internet rumahan",
  ],
  authors: [{ name: "Jawara-Net Team" }],
  creator: "Jawara-Net",
  publisher: "Jawara-Net Indonesia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://jawara-net.com",
    siteName: "Jawara-Net",
    title: "Jawara-Net - Internet Nusantara Raya | Provider Fiber Optic Terbaik",
    description:
      "Internet super cepat hingga 1 Gbps untuk gaming, streaming, dan bisnis. Fiber optic terpercaya di Jakarta, Bandung, Surabaya. Unlimited FUP, 24/7 support.",
    images: [
      {
        url: "/hero-bg.png",
        width: 1200,
        height: 630,
        alt: "Jawara-Net - Internet Fiber Optic Nusantara",
        type: "image/png",
      },
      {
        url: "/placeholder-logo.svg",
        width: 400,
        height: 400,
        alt: "Logo Jawara-Net",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@jawaranet",
    creator: "@jawaranet",
    title: "Jawara-Net - Internet Fiber Optic Nusantara",
    description:
      "Internet super cepat hingga 1 Gbps. Gaming lancar, streaming HD, unlimited FUP. Provider terpercaya di Indonesia.",
    images: ["/hero-bg.png"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    yandex: process.env.YANDEX_VERIFICATION,
    yahoo: process.env.YAHOO_VERIFICATION,
  },
  alternates: {
    canonical: "https://jawara-net.com",
    languages: {
      "id-ID": "https://jawara-net.com",
      "en-US": "https://jawara-net.com/en",
    },
  },
  category: "Internet Service Provider",
  classification: "Business",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "dark light",
};

// Structured Data untuk SEO
export const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Jawara-Net",
  alternateName: "Internet Nusantara Raya",
  description: "Internet Service Provider fiber optic terbaik Indonesia",
  url: "https://jawara-net.com",
  logo: "https://jawara-net.com/placeholder-logo.svg",
  image: "https://jawara-net.com/hero-bg.png",
  telephone: "+62-21-1234-5678",
  email: "info@jawara-net.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Teknologi No. 123",
    addressLocality: "Jakarta Selatan",
    postalCode: "12345",
    addressCountry: "ID",
  },
  sameAs: [
    "https://facebook.com/jawaranet",
    "https://instagram.com/jawaranet",
    "https://twitter.com/jawaranet",
    "https://youtube.com/jawaranet",
  ],
  foundingDate: "2020",
  serviceArea: {
    "@type": "Country",
    name: "Indonesia",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Jakarta",
    },
    {
      "@type": "City",
      name: "Bandung",
    },
    {
      "@type": "City",
      name: "Surabaya",
    },
    {
      "@type": "City",
      name: "Yogyakarta",
    },
    {
      "@type": "City",
      name: "Medan",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Internet Packages",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Paket Rumahan",
          description: "Internet fiber optic untuk kebutuhan rumah tangga",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Paket Bisnis",
          description: "Internet dedicated untuk kebutuhan bisnis dan kantor",
        },
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1000",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Andi Pratama",
      },
      datePublished: "2024-12-01",
      reviewBody: "Internet super cepat dan stabil, customer service responsif 24/7.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    },
  ],
};

// FAQ Structured Data
export const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Apakah Jawara-Net tersedia di daerah saya?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kami melayani Jakarta, Bogor, Depok, Tangerang, Bekasi, Bandung, Surabaya, Yogyakarta, dan Medan. Untuk cek ketersediaan, hubungi customer service kami.",
      },
    },
    {
      "@type": "Question",
      name: "Berapa lama proses aktivasi internet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Proses aktivasi 1-3 hari kerja setelah survei teknis selesai dan pembayaran dikonfirmasi.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah ada biaya instalasi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Untuk semua paket, instalasi GRATIS termasuk router WiFi premium.",
      },
    },
  ],
};

// Breadcrumb Structured Data untuk navigation
export const breadcrumbStructuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://jawara-net.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Paket Internet",
      item: "https://jawara-net.com#packages",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Coverage Area",
      item: "https://jawara-net.com#coverage",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Kontak",
      item: "https://jawara-net.com#contact",
    },
  ],
};
