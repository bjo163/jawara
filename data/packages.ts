// Data paket internet Jawara-Net - Centralized Package Data
export interface Package {
  id: string
  name: string
  icon: string
  character: string
  speed: string
  uploadSpeed: string
  quota: string
  price: string
  originalPrice?: string
  priceNumeric: number
  category: 'rumah' | 'bisnis'
  features: string[]
  popular?: boolean
  color: 'orange' | 'blue' | 'green' | 'purple'
  description: string
}

export const packages: Package[] = [
  // Paket Rumah - Sesuai dengan SPA Page Screenshots
  {
    id: 'paket-pemula',
    name: 'Paket Pemula',
    icon: '🌟',
    character: '🧙‍♂️',
    speed: '20 Mbps',
    uploadSpeed: '10 Mbps',
    quota: 'Unlimited Quota',
    price: 'Rp 150.000',
    priceNumeric: 150000,
    category: 'rumah',
    features: [
      'Download 20 Mbps',
      'Upload 10 Mbps',
      'Unlimited Quota', 
      'Free Instalasi'
    ],
    popular: false,
    color: 'orange',
    description: 'Paket internet pemula yang cocok untuk kebutuhan dasar browsing dan streaming'
  },
  {
    id: 'paket-gaming-pro',
    name: 'Paket Gaming Pro',
    icon: '🎮',
    character: '🎯',
    speed: '50 Mbps',
    uploadSpeed: '25 Mbps',
    quota: 'Unlimited',
    price: 'Rp 275.000',
    priceNumeric: 275000,
    category: 'rumah',
    features: [
      'Download 50 Mbps',
      'Upload 25 Mbps',
      'Low Latency Gaming',
      'Priority Support'
    ],
    popular: false,
    color: 'blue',
    description: 'Paket khusus untuk gaming dengan latensi rendah'
  },
  {
    id: 'paket-keluarga',
    name: 'Paket Keluarga',
    icon: '👨‍👩‍👧‍👦',
    character: '🏠',
    speed: '100 Mbps',
    uploadSpeed: '50 Mbps',
    quota: 'Unlimited',
    price: 'Rp 450.000',
    priceNumeric: 450000,
    category: 'rumah',
    features: [
      'Download 100 Mbps',
      'Upload 50 Mbps',
      '4K Streaming Ready',
      '24/7 Support'
    ],
    popular: true,
    color: 'green',
    description: 'Paket keluarga dengan bandwidth besar untuk streaming dan gaming'
  },
  {
    id: 'paket-bisnis-home',
    name: 'Paket Bisnis',
    icon: '💼',
    character: '🏢',
    speed: '200 Mbps',
    uploadSpeed: '100 Mbps',
    quota: 'Unlimited',
    price: 'Rp 750.000',
    priceNumeric: 750000,
    category: 'rumah',
    features: [
      'Download 200 Mbps',
      'Upload 100 Mbps',
      'Static IP',
      'Priority Network'
    ],
    popular: false,
    color: 'purple',
    description: 'Paket bisnis dengan performa tinggi dan static IP'
  },

  // Paket Bisnis Khusus
  {
    id: 'bisnis-starter',
    name: 'Bisnis Starter',
    icon: '🏢',
    character: '💼',
    speed: '30 Mbps',
    uploadSpeed: '15 Mbps',
    quota: 'Unlimited',
    price: 'Rp 400.000',
    priceNumeric: 400000,
    category: 'bisnis',
    features: [
      '🏢 Cocok untuk usaha kecil',
      '💻 Video conference HD',
      '☁️ Cloud backup lancar',
      '📧 Email server stabil',
      '📞 Support prioritas bisnis'
    ],
    popular: false,
    color: 'blue',
    description: 'Paket internet untuk usaha kecil dan startup'
  },
  {
    id: 'bisnis-pro',
    name: 'Bisnis Pro',
    icon: '🏪',
    character: '👨‍💼',
    speed: '60 Mbps',
    uploadSpeed: '30 Mbps',
    quota: 'Unlimited',
    price: 'Rp 650.000',
    priceNumeric: 650000,
    category: 'bisnis',
    features: [
      '🏪 Untuk toko/kantor menengah',
      '📊 Multiple branch connection',
      '🛡️ Security & firewall',
      '📡 Static IP tersedia',
      '⚡ SLA 99.5% uptime'
    ],
    popular: true,
    color: 'green',
    description: 'Paket bisnis untuk kantor menengah dengan kebutuhan operasional'
  },
  {
    id: 'bisnis-enterprise',
    name: 'Bisnis Enterprise',
    icon: '🏭',
    character: '👔',
    speed: '100 Mbps',
    uploadSpeed: '50 Mbps',
    quota: 'Unlimited',
    price: 'Rp 1.200.000',
    priceNumeric: 1200000,
    category: 'bisnis',
    features: [
      '🏭 Enterprise grade connection',
      '🔧 Dedicated support engineer',
      '🛡️ Advanced security suite',
      '📡 Multiple static IP',
      '⚡ SLA 99.9% uptime guarantee'
    ],
    popular: false,
    color: 'purple',
    description: 'Paket enterprise untuk kebutuhan bisnis skala besar'
  }
]

// Helper functions
export const getPackageById = (id: string): Package | undefined => {
  return packages.find(pkg => pkg.id === id)
}

export const getPackagesByCategory = (category: 'rumah' | 'bisnis'): Package[] => {
  return packages.filter(pkg => pkg.category === category)
}

export const getPopularPackages = (): Package[] => {
  return packages.filter(pkg => pkg.popular === true)
}

export const formatPrice = (price: string): string => {
  return price + '/bulan'
}

export const getPackageForForm = (id: string) => {
  const pkg = getPackageById(id)
  if (!pkg) return null
  
  return {
    id: pkg.id,
    name: pkg.name,
    speed: pkg.speed,
    price: pkg.price,
    features: pkg.features
  }
}
