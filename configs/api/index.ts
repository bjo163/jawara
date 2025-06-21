/**
 * API CONFIGURATION
 * =================
 *
 * Konfigurasi endpoints, timeout, dan settings untuk API calls.
 * Includes environment-specific settings dan error handling.
 */

import { env, envUtils } from "../env";

export const apiConfig = {
  endpoints: {
    contact: "/api/contact",
    chat: "/api/chat",
    packages: "/api/packages",
    testimonials: "/api/testimonials",
  },
  settings: {
    timeout: envUtils.getTimeout(),
    retries: envUtils.getRetries(),
    baseUrl: env.NEXT_PUBLIC_API_URL || "",
  },
  external: {
    whatsapp: {
      baseUrl: "https://wa.me/",
      defaultNumber: env.WHATSAPP_PHONE_NUMBER || "6281234567890",
      getUrl: envUtils.getWhatsAppUrl,
    },
    maps: {
      embedUrl: "https://maps.google.com/maps/embed",
      apiKey: env.GOOGLE_MAPS_API_KEY,
    },
  },
};

export type APIConfigType = typeof apiConfig;
