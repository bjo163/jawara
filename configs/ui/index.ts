/**
 * UI CONFIGURATION
 * ================
 *
 * Konfigurasi tema, styling, dan komponen UI untuk Jawara-Net.
 * Includes theme settings, animation preferences, dan responsive breakpoints.
 */

export const uiConfig = {
  theme: {
    primary: {
      orange: "#ea580c",
      red: "#dc2626",
      pink: "#ec4899",
    },
    gradients: {
      nusantara: "from-orange-500 via-red-500 to-pink-500",
      blue: "from-blue-500 via-cyan-500 to-teal-500",
      green: "from-green-500 via-emerald-500 to-lime-500",
    },
  },
  animations: {
    enabled: true,
    duration: {
      fast: "0.3s",
      normal: "0.5s",
      slow: "1s",
    },
  },
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};

export type UIConfigType = typeof uiConfig;
