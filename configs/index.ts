/**
 * JAWARA-NET CONFIGURATION CENTER
 * ================================
 * 
 * Centralized configuration system untuk seluruh aplikasi Jawara-Net.
 * Semua content, UI settings, dan konfigurasi tersimpan di sini untuk
 * memudahkan maintenance dan konsistensi.
 */

// Export semua konfigurasi utama
export * from './content'
export * from './ui'
export * from './api'
export * from './navigation'
export * from './site'

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
