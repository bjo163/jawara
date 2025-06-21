/**
 * JAWARA-NET CONFIGURATION CENTER
 * ================================
 *
 * Centralized configuration system untuk seluruh aplikasi Jawara-Net.
 * Semua content, UI settings, dan konfigurasi tersimpan di sini untuk
 * memudahkan maintenance dan konsistensi.
 */

// Export semua konfigurasi utama
export * from "./content/index";
export * from "./ui/index";
export * from "./api/index";
export * from "./navigation/index";
export * from "./site/index";
export * from "./animations/index";
export * from "./env/index";
export * from "./schemas/index";
export * from "./schemas/validator";

// Re-export untuk kemudahan akses
export { contentConfig } from "./content/index";
export { uiConfig } from "./ui/index";
export { apiConfig } from "./api/index";
export { navigationConfig } from "./navigation/index";
export { siteConfig } from "./site/index";
export { default as animationsConfig } from "./animations/index";
export { default as env, envUtils } from "./env/index";
export { schemas } from "./schemas/index";
export { validators, validateConfig, safeValidateConfig } from "./schemas/validator";

// Re-export types from centralized types directory
export type { ConfigBase, ContentConfig, UIConfig, APIConfig, BackgroundElement } from "../types";
