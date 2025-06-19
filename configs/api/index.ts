/**
 * API CONFIGURATION
 * =================
 *
 * Konfigurasi endpoints, timeout, dan settings untuk API calls.
 * Includes environment-specific settings dan error handling.
 */

export const apiConfig = {
  endpoints: {
    contact: "/api/contact",
    chat: "/api/chat",
    packages: "/api/packages",
    testimonials: "/api/testimonials",
  },
  settings: {
    timeout: 5000,
    retries: 3,
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "",
  },
  external: {
    whatsapp: {
      baseUrl: "https://wa.me/",
      defaultNumber: "6281234567890",
    },
    maps: {
      embedUrl: "https://maps.google.com/maps/embed",
    },
  },
};

export type APIConfigType = typeof apiConfig;
