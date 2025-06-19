/**
 * JAWARA-NET CONFIGURATION CENTER
 * ================================
 * 
 * Centralized configuration system untuk seluruh aplikasi Jawara-Net.
 * Semua content, UI settings, dan konfigurasi tersimpan di sini untuk
 * memudahkan maintenance dan konsistensi.
 */

// Export semua konfigurasi utama
export * from './content/index'
export * from './ui/index'
export * from './api/index'
export * from './navigation/index'
export * from './site/index'

// Re-export untuk kemudahan akses
export { contentConfig } from './content/index'
export { uiConfig } from './ui/index'
export { apiConfig } from './api/index'
export { navigationConfig } from './navigation/index'
export { siteConfig } from './site/index'

// Types untuk konfigurasi
export interface ConfigBase {
  id: string
  name: string
  description?: string
  enabled: boolean
  lastUpdated: string
}

export interface ContentConfig extends ConfigBase {
  language: 'id' | 'en'
  version: string
}

export interface UIConfig extends ConfigBase {
  theme: 'dark' | 'light' | 'auto'
  animations: boolean
}

export interface APIConfig extends ConfigBase {
  baseUrl: string
  timeout: number
  retries: number
}
