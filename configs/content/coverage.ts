/**
 * COVERAGE SECTION CONFIGURATION
 * =============================
 *
 * Centralized coverage configuration untuk Jawara-Net.
 * Includes coverage areas, cities data, color schemes, status management, dan CTA configurations.
 */

// Coverage area status types
export type CoverageStatus = "active" | "coming-soon" | "planned" | "maintenance";

// Color theme types
export type ColorTheme =
  | "orange"
  | "blue"
  | "green"
  | "purple"
  | "pink"
  | "cyan"
  | "emerald"
  | "amber"
  | "red"
  | "yellow";

// Coverage area interface
export interface CoverageArea {
  id: string;
  city: string;
  province?: string;
  areas: string[];
  status: CoverageStatus;
  coverage: string;
  icon: string;
  color: ColorTheme;
  priority: number;
  launchDate?: string;
  description?: string;
  specialFeatures?: string[];
}

// Color configuration interface
export interface ColorConfig {
  gradient: string;
  text: string;
  border: string;
  bg: string;
  glow?: string;
}

// Status configuration interface
export interface StatusConfig {
  label: string;
  icon: string;
  color: string;
  description: string;
  ctaText: string;
  ctaType: "contact" | "notify" | "whatsapp";
}

// Background elements configuration
export interface BackgroundElements {
  grid: {
    enabled: boolean;
    opacity: number;
    class: string;
  };
  decorations: Array<{
    icon: string;
    position: string;
    size: string;
    animation: string;
    opacity: number;
  }>;
}

// Request section configuration
export interface RequestSection {
  title: string;
  subtitle: string;
  icon: string;
  features: Array<{
    icon: string;
    title: string;
    description: string;
    color: string;
    animation?: string;
  }>;
  cta: {
    primary: {
      text: string;
      icon: string;
      action: "contact" | "scroll";
      target: string;
    };
    secondary: {
      text: string;
      icon: string;
      action: "external" | "modal";
      target: string;
    };
  };
}

// Main coverage configuration interface
export interface CoverageConfig {
  sectionId: string;
  header: {
    title: string;
    subtitle: string;
  };
  areas: CoverageArea[];
  colors: Record<ColorTheme, ColorConfig>;
  statuses: Record<CoverageStatus, StatusConfig>;
  background: BackgroundElements;
  request: RequestSection;
  grid: {
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
      large: string;
    };
    gap: string;
    animation: {
      delay: number;
      stagger: number;
    };
  };
  styling: {
    section: string;
    container: string;
    card: string;
    cardHover: string;
  };
}

// Coverage areas data
export const coverageAreas: CoverageArea[] = [
  {
    id: "jakarta",
    city: "Jakarta",
    province: "DKI Jakarta",
    areas: ["Jakarta Pusat", "Jakarta Selatan", "Jakarta Barat", "Jakarta Utara", "Jakarta Timur"],
    status: "active",
    coverage: "95%",
    icon: "🏛️",
    color: "orange",
    priority: 1,
    description: "Ibu kota dengan coverage terluas",
    specialFeatures: ["Fiber Optic", "5G Ready", "24/7 Support"],
  },
  {
    id: "bogor",
    city: "Bogor",
    province: "Jawa Barat",
    areas: ["Bogor Kota", "Cibinong", "Sentul", "Citeureup", "Gunung Putri"],
    status: "active",
    coverage: "85%",
    icon: "🌋",
    color: "blue",
    priority: 2,
    description: "Kota hujan dengan koneksi stabil",
    specialFeatures: ["Weather Resistant", "Fiber Optic"],
  },
  {
    id: "depok",
    city: "Depok",
    province: "Jawa Barat",
    areas: ["Margonda", "UI Area", "Cinere", "Sawangan", "Beji"],
    status: "active",
    coverage: "90%",
    icon: "🎓",
    color: "green",
    priority: 3,
    description: "Kota pendidikan dengan internet super cepat",
    specialFeatures: ["Education Package", "Student Discount"],
  },
  {
    id: "tangerang",
    city: "Tangerang",
    province: "Banten",
    areas: ["Tangerang Kota", "BSD", "Gading Serpong", "Alam Sutera", "Karawaci"],
    status: "active",
    coverage: "88%",
    icon: "🏢",
    color: "purple",
    priority: 4,
    description: "Kawasan bisnis dengan layanan premium",
    specialFeatures: ["Business Package", "Dedicated Support"],
  },
  {
    id: "bekasi",
    city: "Bekasi",
    province: "Jawa Barat",
    areas: ["Bekasi Kota", "Harapan Indah", "Galaxy", "Summarecon", "Kemang Pratama"],
    status: "active",
    coverage: "82%",
    icon: "🏭",
    color: "pink",
    priority: 5,
    description: "Kota industri dengan infrastruktur modern",
    specialFeatures: ["Industrial Package", "Bulk Discount"],
  },
  {
    id: "bandung",
    city: "Bandung",
    province: "Jawa Barat",
    areas: ["Bandung Kota", "Cimahi", "Dago", "Setiabudhi", "Antapani"],
    status: "active",
    coverage: "75%",
    icon: "🏔️",
    color: "cyan",
    priority: 6,
    description: "Paris van Java dengan koneksi kreatif",
    specialFeatures: ["Creative Package", "Startup Support"],
  },
  {
    id: "surabaya",
    city: "Surabaya",
    province: "Jawa Timur",
    areas: ["Surabaya Pusat", "Surabaya Barat", "Sidoarjo", "Gresik"],
    status: "active",
    coverage: "70%",
    icon: "🚢",
    color: "emerald",
    priority: 7,
    description: "Kota pahlawan dengan semangat digital",
    specialFeatures: ["Marine Resistant", "Port Coverage"],
  },
  {
    id: "yogyakarta",
    city: "Yogyakarta",
    province: "DI Yogyakarta",
    areas: ["Yogya Kota", "Sleman", "Bantul", "UGM Area"],
    status: "active",
    coverage: "65%",
    icon: "🏯",
    color: "amber",
    priority: 8,
    description: "Kota budaya dengan teknologi modern",
    specialFeatures: ["Cultural Package", "Heritage Support"],
  },
  {
    id: "medan",
    city: "Medan",
    province: "Sumatera Utara",
    areas: ["Medan Kota", "Medan Barat", "Deli Serdang"],
    status: "coming-soon",
    coverage: "Coming Soon",
    icon: "🌴",
    color: "orange",
    priority: 9,
    launchDate: "Q3 2025",
    description: "Ekspansi ke Sumatera segera dimulai",
  },
  {
    id: "semarang",
    city: "Semarang",
    province: "Jawa Tengah",
    areas: ["Semarang Kota", "Tembalang", "Banyumanik"],
    status: "coming-soon",
    coverage: "Coming Soon",
    icon: "⛵",
    color: "blue",
    priority: 10,
    launchDate: "Q4 2025",
    description: "Pelabuhan digital Jawa Tengah",
  },
];

// Color configurations
export const colorConfigs: Record<ColorTheme, ColorConfig> = {
  orange: {
    gradient: "from-orange-500 via-red-500 to-pink-500",
    text: "text-orange-400",
    border: "border-orange-500/30",
    bg: "bg-orange-500/20",
    glow: "shadow-orange-500/50",
  },
  blue: {
    gradient: "from-blue-500 via-cyan-500 to-teal-500",
    text: "text-blue-400",
    border: "border-blue-500/30",
    bg: "bg-blue-500/20",
    glow: "shadow-blue-500/50",
  },
  green: {
    gradient: "from-green-500 via-emerald-500 to-lime-500",
    text: "text-green-400",
    border: "border-green-500/30",
    bg: "bg-green-500/20",
    glow: "shadow-green-500/50",
  },
  purple: {
    gradient: "from-purple-500 via-pink-500 to-rose-500",
    text: "text-purple-400",
    border: "border-purple-500/30",
    bg: "bg-purple-500/20",
    glow: "shadow-purple-500/50",
  },
  pink: {
    gradient: "from-pink-500 via-rose-500 to-red-500",
    text: "text-pink-400",
    border: "border-pink-500/30",
    bg: "bg-pink-500/20",
    glow: "shadow-pink-500/50",
  },
  cyan: {
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    text: "text-cyan-400",
    border: "border-cyan-500/30",
    bg: "bg-cyan-500/20",
    glow: "shadow-cyan-500/50",
  },
  emerald: {
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    text: "text-emerald-400",
    border: "border-emerald-500/30",
    bg: "bg-emerald-500/20",
    glow: "shadow-emerald-500/50",
  },
  amber: {
    gradient: "from-amber-500 via-yellow-500 to-orange-500",
    text: "text-amber-400",
    border: "border-amber-500/30",
    bg: "bg-amber-500/20",
    glow: "shadow-amber-500/50",
  },
  red: {
    gradient: "from-red-500 via-pink-500 to-rose-500",
    text: "text-red-400",
    border: "border-red-500/30",
    bg: "bg-red-500/20",
    glow: "shadow-red-500/50",
  },
  yellow: {
    gradient: "from-yellow-500 via-orange-500 to-amber-500",
    text: "text-yellow-400",
    border: "border-yellow-500/30",
    bg: "bg-yellow-500/20",
    glow: "shadow-yellow-500/50",
  },
};

// Status configurations
export const statusConfigs: Record<CoverageStatus, StatusConfig> = {
  active: {
    label: "🏆 Sudah Dikuasai!",
    icon: "✅",
    color: "text-green-400",
    description: "Koneksi super ngebut sudah tersedia",
    ctaText: "🚀 Taklukkan Sekarang!",
    ctaType: "contact",
  },
  "coming-soon": {
    label: "🚧 Segera Hadir!",
    icon: "🚧",
    color: "text-orange-400",
    description: "Daftar dulu untuk prioritas",
    ctaText: "📢 Notify Me!",
    ctaType: "notify",
  },
  planned: {
    label: "📅 Dalam Perencanaan",
    icon: "📋",
    color: "text-blue-400",
    description: "Sedang dalam tahap perencanaan",
    ctaText: "💌 Daftar Interest",
    ctaType: "contact",
  },
  maintenance: {
    label: "🔧 Maintenance",
    icon: "⚙️",
    color: "text-yellow-400",
    description: "Sedang dalam perbaikan",
    ctaText: "📞 Hubungi Support",
    ctaType: "whatsapp",
  },
};

// Main coverage configuration
export const coverageConfig: CoverageConfig = {
  sectionId: "coverage",

  header: {
    title: "🗺️ PETA KEKUASAAN NUSANTARA 🗺️",
    subtitle: "Cek apakah wilayah kamu sudah dikuasai oleh jaringan Jawara-Net!",
  },

  areas: coverageAreas,
  colors: colorConfigs,
  statuses: statusConfigs,

  background: {
    grid: {
      enabled: true,
      opacity: 30,
      class: "mega-grid",
    },
    decorations: [
      {
        icon: "🗺️",
        position: "top-20 left-10",
        size: "text-6xl",
        animation: "indonesian-wave",
        opacity: 20,
      },
      {
        icon: "🏝️",
        position: "bottom-20 right-10",
        size: "text-6xl",
        animation: "garuda-soar",
        opacity: 20,
      },
    ],
  },

  request: {
    title: "🏝️ Wilayah Kamu Belum Dikuasai? 🏝️",
    subtitle: "Kami terus memperluas kekuasaan digital ke seluruh Nusantara!",
    icon: "🗺️",
    features: [
      {
        icon: "🎯",
        title: "Prioritas Ekspansi",
        description: "Area dengan banyak request akan diprioritaskan",
        color: "text-orange-400",
        animation: "garuda-soar",
      },
      {
        icon: "📞",
        title: "Update Berkala",
        description: "Kami akan kabari progress ekspansi via WhatsApp",
        color: "text-blue-400",
        animation: "indonesian-wave",
      },
      {
        icon: "🎁",
        title: "Early Bird Promo",
        description: "Diskon khusus untuk pendaftar pertama di area baru",
        color: "text-green-400",
        animation: "particle-float",
      },
    ],
    cta: {
      primary: {
        text: "🗺️ Request Coverage Area",
        icon: "👑",
        action: "contact",
        target: "contact",
      },
      secondary: {
        text: "💬 Tanya via WhatsApp",
        icon: "✨",
        action: "external",
        target: "https://wa.me/6281234567890",
      },
    },
  },

  grid: {
    breakpoints: {
      mobile: "grid-cols-1",
      tablet: "md:grid-cols-2",
      desktop: "lg:grid-cols-3",
      large: "xl:grid-cols-4",
    },
    gap: "gap-8",
    animation: {
      delay: 0.1,
      stagger: 0.1,
    },
  },

  styling: {
    section: "py-24 nusantara-bg relative overflow-hidden",
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10",
    card: "mega-card p-8 mega-hover mega-glow scroll-reveal",
    cardHover: "mega-hover",
  },
};

// Additional utilities for coverage management
export const coverageUtils = {
  getActiveAreas: () => coverageAreas.filter((area) => area.status === "active"),
  getComingSoonAreas: () => coverageAreas.filter((area) => area.status === "coming-soon"),
  getAreasByProvince: (province: string) => coverageAreas.filter((area) => area.province === province),
  getHighPriorityAreas: () => coverageAreas.filter((area) => area.priority <= 5),
  getTotalCoverage: () => {
    const activeAreas = coverageAreas.filter((area) => area.status === "active");
    return activeAreas.length;
  },
};

// Export main configuration as default
export default coverageConfig;
