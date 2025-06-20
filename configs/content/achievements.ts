/**
 * ACHIEVEMENT SYSTEM CONFIGURATION
 * ===============================
 *
 * Centralized achievement system configuration untuk Jawara-Net.
 * Includes achievement data, rarity configurations, popup settings, dan panel configuration.
 */

// Achievement rarity types
export type AchievementRarity = "common" | "rare" | "epic" | "legendary";

// Achievement item interface
export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  rarity: AchievementRarity;
  unlocked: boolean;
  progress: number;
  maxProgress: number;
  category?: string;
  tooltip?: string;
}

// Rarity configuration interface
export interface RarityConfig {
  colors: {
    gradient: string;
    text: string;
    glow: string;
  };
  effects: string[];
  priority: number;
}

// Popup configuration interface
export interface PopupConfig {
  duration: number;
  position: {
    x: string;
    y: string;
  };
  animations: {
    enter: string;
    exit: string;
  };
  sounds?: {
    unlock: string;
    popup: string;
  };
}

// Panel configuration interface
export interface PanelConfig {
  position: {
    bottom: string;
    left: string;
  };
  size: {
    width: string;
    maxHeight: string;
  };
  styling: {
    container: string;
    header: string;
    items: string;
  };
  visibility: {
    enabled: boolean;
    collapsed: boolean;
  };
}

// Main achievement system configuration interface
export interface AchievementSystemConfig {
  sectionId: string;
  achievements: Achievement[];
  rarities: Record<AchievementRarity, RarityConfig>;
  popup: PopupConfig;
  panel: PanelConfig;
  simulation: {
    enabled: boolean;
    autoUnlock: {
      enabled: boolean;
      delay: number;
      targetId: string;
    };
  };
  texts: {
    popupTitle: string;
    panelTitle: string;
    lockedIcon: string;
    progressLabel: string;
  };
}

// Achievement data array
export const achievementList: Achievement[] = [
  {
    id: "first-visit",
    title: "🏛️ Penjelajah Nusantara",
    description: "Mengunjungi website Jawara-Net untuk pertama kali",
    icon: "🗺️",
    rarity: "common",
    unlocked: true,
    progress: 1,
    maxProgress: 1,
    category: "exploration",
    tooltip: "Selamat datang di dunia Jawara-Net!",
  },
  {
    id: "scroll-master",
    title: "📜 Master Gulungan",
    description: "Scroll hingga bagian bawah website",
    icon: "📜",
    rarity: "common",
    unlocked: false,
    progress: 3,
    maxProgress: 5,
    category: "exploration",
    tooltip: "Jelajahi semua fitur website kami",
  },
  {
    id: "package-explorer",
    title: "💎 Penjelajah Paket",
    description: "Melihat semua paket internet yang tersedia",
    icon: "💎",
    rarity: "rare",
    unlocked: false,
    progress: 2,
    maxProgress: 4,
    category: "packages",
    tooltip: "Temukan paket internet terbaik untuk Anda",
  },
  {
    id: "contact-warrior",
    title: "⚔️ Pejuang Kontak",
    description: "Menghubungi customer service Jawara-Net",
    icon: "⚔️",
    rarity: "epic",
    unlocked: false,
    progress: 0,
    maxProgress: 1,
    category: "engagement",
    tooltip: "Bergabung dengan komunitas Jawara-Net",
  },
  {
    id: "jagoan-legend",
    title: "👑 Legenda Jagoan",
    description: "Menjadi pelanggan setia Jawara-Net",
    icon: "👑",
    rarity: "legendary",
    unlocked: false,
    progress: 0,
    maxProgress: 1,
    category: "loyalty",
    tooltip: "Status tertinggi di dunia Jawara-Net",
  },
  {
    id: "speed-demon",
    title: "⚡ Setan Kecepatan",
    description: "Test kecepatan internet di calculator",
    icon: "⚡",
    rarity: "rare",
    unlocked: false,
    progress: 0,
    maxProgress: 3,
    category: "tools",
    tooltip: "Rasakan kecepatan internet super ngebut",
  },
  {
    id: "coverage-hunter",
    title: "🗺️ Pemburu Coverage",
    description: "Cek coverage area di seluruh Indonesia",
    icon: "🗺️",
    rarity: "epic",
    unlocked: false,
    progress: 0,
    maxProgress: 10,
    category: "exploration",
    tooltip: "Taklukkan semua wilayah Nusantara",
  },
  {
    id: "social-warrior",
    title: "📱 Pejuang Sosial",
    description: "Kunjungi semua social media Jawara-Net",
    icon: "📱",
    rarity: "rare",
    unlocked: false,
    progress: 0,
    maxProgress: 4,
    category: "social",
    tooltip: "Follow dan connect dengan kami",
  },
];

// Rarity configurations
export const rarityConfigs: Record<AchievementRarity, RarityConfig> = {
  common: {
    colors: {
      gradient: "from-gray-500 to-gray-600",
      text: "text-gray-400",
      glow: "shadow-gray-500/50",
    },
    effects: ["fade-in"],
    priority: 1,
  },
  rare: {
    colors: {
      gradient: "from-blue-500 to-blue-600",
      text: "text-blue-400",
      glow: "shadow-blue-500/50",
    },
    effects: ["fade-in", "glow"],
    priority: 2,
  },
  epic: {
    colors: {
      gradient: "from-purple-500 to-purple-600",
      text: "text-purple-400",
      glow: "shadow-purple-500/50",
    },
    effects: ["fade-in", "glow", "pulse"],
    priority: 3,
  },
  legendary: {
    colors: {
      gradient: "from-yellow-500 to-orange-600",
      text: "text-yellow-400",
      glow: "shadow-yellow-500/50",
    },
    effects: ["fade-in", "glow", "pulse", "sparkle"],
    priority: 4,
  },
};

// Main achievement system configuration
export const achievementConfig: AchievementSystemConfig = {
  sectionId: "achievements",

  achievements: achievementList,

  rarities: rarityConfigs,

  popup: {
    duration: 5000,
    position: {
      x: "left-1/2 transform -translate-x-1/2",
      y: "top-1/2 transform -translate-y-1/2",
    },
    animations: {
      enter: "gaming-achievement-appear",
      exit: "fade-out",
    },
    sounds: {
      unlock: "achievement-unlock.mp3",
      popup: "notification.mp3",
    },
  },

  panel: {
    position: {
      bottom: "bottom-20",
      left: "left-4",
    },
    size: {
      width: "w-80",
      maxHeight: "max-h-96",
    },
    styling: {
      container: "gaming-panel p-4 overflow-y-auto pointer-events-auto",
      header: "flex items-center space-x-2 mb-4",
      items: "space-y-3",
    },
    visibility: {
      enabled: true,
      collapsed: false,
    },
  },

  simulation: {
    enabled: true,
    autoUnlock: {
      enabled: true,
      delay: 10000,
      targetId: "scroll-master",
    },
  },

  texts: {
    popupTitle: "PRESTASI TERBUKA!",
    panelTitle: "🏆 PRESTASI JAGOAN",
    lockedIcon: "🔒",
    progressLabel: "Progress",
  },
};

// Achievement categories for organization
export const achievementCategories = {
  exploration: {
    name: "Penjelajahan",
    icon: "🗺️",
    color: "text-orange-400",
    description: "Jelajahi fitur-fitur website Jawara-Net",
  },
  packages: {
    name: "Paket Internet",
    icon: "💎",
    color: "text-blue-400",
    description: "Temukan paket internet terbaik",
  },
  engagement: {
    name: "Interaksi",
    icon: "⚔️",
    color: "text-green-400",
    description: "Berinteraksi dengan layanan kami",
  },
  loyalty: {
    name: "Loyalitas",
    icon: "👑",
    color: "text-yellow-400",
    description: "Menjadi bagian keluarga Jawara-Net",
  },
  tools: {
    name: "Tools & Fitur",
    icon: "⚡",
    color: "text-purple-400",
    description: "Gunakan tools dan fitur khusus",
  },
  social: {
    name: "Media Sosial",
    icon: "📱",
    color: "text-pink-400",
    description: "Connect di social media",
  },
};

// Achievement progress tracking
export const progressTracking = {
  events: {
    pageView: "first-visit",
    scroll: "scroll-master",
    packageView: "package-explorer",
    contact: "contact-warrior",
    speedTest: "speed-demon",
    coverageCheck: "coverage-hunter",
    socialVisit: "social-warrior",
  },
  thresholds: {
    scrollPercentage: 90,
    packageViews: 4,
    coverageAreas: 10,
    socialPlatforms: 4,
  },
};

// Export main configuration as default
export default achievementConfig;
