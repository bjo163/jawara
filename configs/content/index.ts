/**
 * CONTENT CONFIGURATION
 * ====================
 *
 * Semua content text, data, dan media untuk aplikasi Jawara-Net.
 * Organized by feature/section untuk memudahkan maintenance.
 */

// Import loading configuration
export * from "./loading";
export { loadingConfig } from "./loading";

// Import about configuration
export { aboutConfig, aboutHeader, companyStory, missionVision, whyChooseUs, funFact } from "./about";

// Import testimonials configuration
export {
  testimonialsConfig,
  testimonialsHeader,
  customerTestimonials,
  testimonialsStats,
  testimonialsCTA,
} from "./testimonials";

// Import contact configuration
export { contactConfig } from "./contact";

// Import packages configuration
export { packagesConfig } from "./packages";

// Import services configuration
export { servicesConfig } from "./services";

// Import FAQ configuration
export { faqConfig } from "./faq";

// Import gaming cursor configuration
export { gamingCursorConfig } from "./cursor";

// Import live chat configuration
export { liveChatConfig } from "./livechat";

// Import process configuration
export { processConfig } from "./process";

// Import calculator configuration
export { calculatorConfig } from "./calculator";

// Import navbar configuration
export { navbarConfig } from "./navbar";

// Import coverage configuration
export { coverageConfig } from "./coverage";

// Import achievement configuration
export { achievementConfig } from "./achievements";

// Placeholder exports - akan diisi setelah migration content selesai
export const contentConfig = {
  loading: {}, // loading.ts - ✅ COMPLETED
  about: {}, // about.ts - ✅ COMPLETED
  testimonials: {}, // testimonials.ts - ✅ COMPLETED
  packages: {}, // packages.ts  contact: {}, // contact.ts
  services: {}, // services.ts
  chat: {}, // chat.ts
  faq: {}, // faq.ts
  hero: {}, // hero.ts
  cursor: {}, // cursor.ts - ✅ COMPLETED
  livechat: {}, // livechat.ts - ✅ COMPLETED
  process: {}, // process.ts - ✅ COMPLETED
  calculator: {}, // calculator.ts - ✅ COMPLETED
};

export type ContentConfigType = typeof contentConfig;
