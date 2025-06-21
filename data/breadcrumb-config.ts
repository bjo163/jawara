// Centralized Breadcrumb Configuration
// Konfigurasi breadcrumb untuk semua halaman dalam aplikasi

export interface BreadcrumbItem {
  label: string
  href?: string
  icon?: string
  active?: boolean
}

export interface PageConfig {
  title: string
  breadcrumbs: BreadcrumbItem[]
  backButton?: {
    href: string
    label: string
  }
  description?: string
}

// Konfigurasi halaman dan breadcrumb
export const pageConfigs: Record<string, PageConfig> = {
  '/': {
    title: 'Beranda',
    breadcrumbs: [],
    description: 'Halaman utama Jawara-Net'
  },
  '/paket': {
    title: 'Paket Internet',
    breadcrumbs: [
      { label: 'Paket Internet', active: true, icon: '💎' }
    ],
    backButton: {
      href: '/',
      label: 'Kembali ke Beranda'
    },
    description: 'Pilih paket internet terbaik untuk kebutuhan Anda'
  },
  '/berlangganan': {
    title: 'Berlangganan',
    breadcrumbs: [
      { label: 'Berlangganan', active: true, icon: '🗡️' }
    ],
    backButton: {
      href: '/',
      label: 'Kembali ke Beranda'
    },
    description: 'Form berlangganan internet Jawara-Net'
  },
  '/speedtest': {
    title: 'Speed Test',
    breadcrumbs: [
      { label: 'Speed Test', active: true, icon: '⚡' }
    ],
    backButton: {
      href: '/',
      label: 'Kembali ke Beranda'
    },
    description: 'Test kecepatan internet Anda'
  },  '/contact': {
    title: 'Kontak',
    breadcrumbs: [
      { label: 'Kontak', active: true, icon: '📞' }
    ],
    backButton: {
      href: '/',
      label: 'Kembali ke Beranda'
    },
    description: 'Hubungi customer service Jawara-Net'
  },  '/faq': {
    title: 'FAQ',
    breadcrumbs: [
      { label: 'FAQ', active: true, icon: '❓' }
    ],
    backButton: {
      href: '/',
      label: 'Kembali ke Beranda'
    },
    description: 'Pertanyaan yang sering ditanyakan'
  },
  '/login/pelanggan': {
    title: 'Login Pelanggan',
    breadcrumbs: [
      { label: 'Login Pelanggan', active: true, icon: '👤' }
    ],
    backButton: {
      href: '/',
      label: 'Kembali ke Beranda'
    },
    description: 'Masuk ke akun pelanggan Jawara-Net'
  },
  '/login/admin': {
    title: 'Login Admin',
    breadcrumbs: [
      { label: 'Login Admin', active: true, icon: '🔐' }
    ],
    backButton: {
      href: '/',
      label: 'Kembali ke Beranda'
    },
    description: 'Masuk ke panel admin Jawara-Net'
  }
}

// Helper function untuk mendapatkan konfigurasi halaman
export function getPageConfig(pathname: string): PageConfig {
  return pageConfigs[pathname] || {
    title: 'Halaman',
    breadcrumbs: [
      { label: 'Halaman', active: true }
    ],
    backButton: {
      href: '/',
      label: 'Kembali ke Beranda'
    }
  }
}

// Helper function untuk generate breadcrumb berdasarkan path
export function generateBreadcrumbs(pathname: string): BreadcrumbItem[] {
  const config = getPageConfig(pathname)
  return config.breadcrumbs
}

// Helper function untuk mendapatkan back button config
export function getBackButtonConfig(pathname: string) {
  const config = getPageConfig(pathname)
  return config.backButton
}

// Helper function untuk mendapatkan page title
export function getPageTitle(pathname: string): string {
  const config = getPageConfig(pathname)
  return config.title
}

// Helper function untuk mendapatkan page description
export function getPageDescription(pathname: string): string | undefined {
  const config = getPageConfig(pathname)
  return config.description
}
