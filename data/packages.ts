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
    id: 'jagoan-neon',
    name: 'Jagoan Neon',
    icon: '🌟',
    character: '🧙‍♂️',
    speed: '10 Mbps',
    uploadSpeed: '5 Mbps',
    quota: 'Unlimited FUP',
    price: 'Rp150.000',
    originalPrice: 'Rp200.000',
    priceNumeric: 150000,
    category: 'rumah',
    features: [
      '🆓 Gratis instalasi',
      '🍪 Cocok untuk rumahan',
      '📺 Streaming HD lancar',
      '📱 Support 5-8 device',
      '🛠️ Customer support 24/7',
    ],
    popular: false,
    color: 'orange',
    description: 'Paket internet pemula dengan teknologi terdepan',
  },
  {
    id: 'mandor-sakti',
    name: 'Mandor Sakti',
    icon: '👷‍♂️',
    character: '🔨',
    speed: '25 Mbps',
    uploadSpeed: '12 Mbps',
    quota: 'Unlimited FUP',
    price: 'Rp200.000',
    originalPrice: 'Rp250.000',
    priceNumeric: 200000,
    category: 'rumah',
    features: [
      '🏗️ Stabil buat kerja & belajar dari rumah',
      '📹 Video call HD tanpa lag',
      '🎮 Gaming online smooth',
      '📱 Support 10-15 device',
      '⭐ Priority customer support',
    ],
    popular: false,
    color: 'blue',
    description: 'Paket andalan untuk professional',
  },
  {
    id: 'wiro-sableng',
    name: 'Wiro Sableng',
    icon: '🥷',
    character: '⚔️',
    speed: '35 Mbps',
    uploadSpeed: '20 Mbps',
    quota: 'Unlimited FUP',
    price: 'Rp250.000',
    originalPrice: 'Rp300.000',
    priceNumeric: 250000,
    category: 'rumah',
    features: [
      '⚡ Ngabut streaming & CCTV',
      '🎬 4K streaming tanpa buffering',
      '📤 Upload file besar cepat',
      '📱 Support 15-20 device',
      '🛡️ Dedicated support',
    ],
    popular: false,
    color: 'green',
    description: 'Paket untuk warrior digital',
  },
  {
    id: 'sultan',
    name: 'Sultan',
    icon: '🤴',
    character: '👑',
    speed: '50 Mbps',
    uploadSpeed: '25 Mbps',
    quota: 'Unlimited Full',
    price: 'Rp300.000',
    originalPrice: 'Rp350.000',
    priceNumeric: 300000,
    category: 'rumah',
    features: [
      '🔥 Prioritas bandwidth, anti lemot 24 jam',
      '♾️ Unlimited tanpa FUP',
      '🎮 Gaming pro & streaming 4K',
      '📱 Support unlimited device',
      '👑 VIP customer support',
    ],
    popular: false,
    color: 'purple',
    description: 'Paket premium untuk sultan digital',
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
      '📞 Support prioritas bisnis',
    ],
    popular: false,
    color: 'blue',
    description: 'Paket internet untuk usaha kecil dan startup',
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
      '🏪 Untuk toko/kantor',
      '📊 Multiple branch connection',
      '🛡️ Security & firewall',
      '📡 Static IP tersedia',
      '⚡ SLA 99.5% uptime',
    ],
    popular: true,
    color: 'green',
    description:
      'Paket bisnis untuk kantor menengah dengan kebutuhan operasional',
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
      '🏭 Enterprise grade',
      '🔧 Dedicated support engineer',
      '🛡️ Advanced security suite',
      '📡 Multiple static IP',
      '⚡ SLA 99.9% uptime',
    ],
    popular: false,
    color: 'purple',
    description: 'Paket enterprise untuk kebutuhan bisnis skala besar',
  },
  // Paket Bisnis - Sesuai dengan SPA Page Screenshots
  {
    id: 'bisnis-ultimate',
    name: 'Bisnis Ultimate',
    icon: '🏢',
    character: '👨‍💼',
    speed: '150 Mbps',
    uploadSpeed: '75 Mbps',
    quota: 'Unlimited',
    price: 'Rp 2.000.000',
    priceNumeric: 2000000,
    category: 'bisnis',
    features: [
      '🏢 Untuk perusahaan besar',
      '📈 High availability connection',
      '🛡️ Security & firewall',
      '📡 Multiple static IPs',
      '⚡ SLA 99.99% uptime',
    ],
    popular: false,
    color: 'orange',
    description: 'Paket bisnis untuk perusahaan besar dengan kebutuhan kritis',
  },
]

// Helper functions
export const getPackageById = (id: string): Package | undefined => {
  return packages.find(pkg => pkg.id === id)
}

export const getPackagesByCategory = (
  category: 'rumah' | 'bisnis'
): Package[] => {
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
    features: pkg.features,
  }
}
