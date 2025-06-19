/**
 * CONFIGURATION USAGE EXAMPLES
 * ============================
 *
 * Contoh cara menggunakan sistem konfigurasi tersentralisasi
 * untuk berbagai komponen di aplikasi Jawara-Net.
 */

// ===============================
// IMPORT EXAMPLES
// ===============================

// Import individual configs
// import { siteConfig } from '@/configs/site'
// import { navigationConfig } from '@/configs/navigation'
// import { contentConfig } from '@/configs/content'

// Import all configs at once
// import {
//   siteConfig,
//   navigationConfig,
//   contentConfig,
//   uiConfig,
//   apiConfig
// } from '@/configs'

// ===============================
// USAGE IN COMPONENTS
// ===============================

// 1. Navbar dengan navigationConfig
// const { navbar } = navigationConfig
// navbar.items.map(item => ({ id: item.id, label: item.label }))

// 2. Contact info dari siteConfig
// const { contact } = siteConfig.company
// `Telepon: ${contact.phone}, Email: ${contact.email}`

// 3. Theme colors dari uiConfig
// const { theme } = uiConfig
// className={`bg-gradient-to-r ${theme.gradients.nusantara}`}

// 4. SEO meta dari siteConfig
// const { seo } = siteConfig
// <title>{seo.defaultTitle}</title>

// 5. API endpoints dari apiConfig
// const { endpoints } = apiConfig
// fetch(`${endpoints.contact}`)

// ===============================
// MIGRATION TIPS
// ===============================

/*
BEFORE (hardcoded):
const navItems = [
  { id: "hero", label: "Beranda", icon: "🏛️" },
  { id: "about", label: "Tentang", icon: "🛡️" },
]

AFTER (from config):
import { navigationConfig } from '@/configs'
const navItems = navigationConfig.navbar.items
*/

export const configExamples = {
  info: "Configuration examples - Ready for implementation",
  nextSteps: ["Import configs in components", "Replace hardcoded values", "Test type safety", "Verify consistency"],
};
