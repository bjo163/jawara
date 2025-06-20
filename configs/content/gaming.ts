/**
 * GAMING HUD CONFIGURATION
 * =========================
 *
 * Centralized gaming HUD configuration untuk Jawara-Net.
 * Includes player stats, UI elements, notifications, minimap, skills, dan quest configurations.
 */

// Game stats interface
export interface GameStats {
  level: number;
  experience: number;
  maxExperience: number;
  health: number;
  maxHealth: number;
  mana: number;
  maxMana: number;
  coins: number;
  achievements: number;
}

// Stat bar configuration interface
export interface StatBar {
  id: string;
  icon: string;
  label: string;
  color: string;
  gradient: string;
  textColor: string;
  valueKey: keyof GameStats;
  maxValueKey?: keyof GameStats;
}

// Player info interface
export interface PlayerInfo {
  avatar: string;
  title: string;
  subtitle: string;
  avatarGradient: string;
  borderColor: string;
  titleColor: string;
  subtitleColor: string;
}

// Quick action button interface
export interface QuickAction {
  id: string;
  icon: string;
  action: "toggle" | "navigate" | "modal";
  stateKey?: string;
  className?: string;
}

// Notification interface
export interface GameNotification {
  id: number;
  text: string;
  type: "achievement" | "status" | "warning" | "success";
  duration?: number;
  icon?: string;
}

// Minimap location interface
export interface MinimapLocation {
  id: string;
  name: string;
  position: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
  color: string;
  size: string;
  status: "active" | "inactive" | "coming-soon";
}

// Skill slot interface
export interface SkillSlot {
  id: string;
  icon: string;
  color: string;
  keyBinding: string;
  name: string;
  description?: string;
  cooldown?: number;
}

// Quest interface
export interface Quest {
  id: string;
  title: string;
  description: string;
  progress?: number;
  maxProgress?: number;
  status: "active" | "completed" | "locked";
  reward?: string;
}

// Currency display interface
export interface CurrencyDisplay {
  id: string;
  icon: string;
  color: string;
  label: string;
  valueKey: keyof GameStats;
  formatter?: "number" | "localeString";
}

// Floating text interface
export interface FloatingText {
  id: string;
  text: string;
  type: "exp" | "damage" | "heal" | "critical" | "combo";
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
  color: string;
  size: string;
  animation: string;
}

// HUD settings interface
export interface HudSettings {
  enabled: boolean;
  autoHide: boolean;
  transparency: number;
  scale: number;
  soundEnabled: boolean;
  notifications: boolean;
  minimap: boolean;
  compass: boolean;
}

// Main gaming HUD configuration interface
export interface GamingHudConfig {
  playerInfo: PlayerInfo;
  statBars: StatBar[];
  currencies: CurrencyDisplay[];
  quickActions: QuickAction[];
  minimapLocations: MinimapLocation[];
  skillSlots: SkillSlot[];
  quests: Quest[];
  floatingTexts: FloatingText[];
  defaultStats: GameStats;
  defaultNotifications: GameNotification[];
  settings: HudSettings;
  styling: {
    panel: string;
    button: string;
    progressBar: string;
    progressFill: string;
    text: string;
    minimap: string;
    notification: string;
    skillSlot: string;
    compass: string;
    questTracker: string;
    comboMeter: string;
  };
  positions: {
    topLeft: string;
    topRight: string;
    bottomCenter: string;
    rightSide: string;
    leftSide: string;
  };
}

// Default player info
export const defaultPlayerInfo: PlayerInfo = {
  avatar: "🥷",
  title: "JAGOAN DIGITAL",
  subtitle: "Warrior",
  avatarGradient: "from-orange-500 to-red-500",
  borderColor: "border-yellow-400",
  titleColor: "text-yellow-400",
  subtitleColor: "text-white",
};

// Stat bars configuration
export const statBars: StatBar[] = [
  {
    id: "health",
    icon: "Shield",
    label: "NYAWA",
    color: "text-red-500",
    gradient: "from-red-600 to-red-400",
    textColor: "text-red-400",
    valueKey: "health",
    maxValueKey: "maxHealth",
  },
  {
    id: "mana",
    icon: "Zap",
    label: "CHAKRA",
    color: "text-blue-500",
    gradient: "from-blue-600 to-cyan-400",
    textColor: "text-blue-400",
    valueKey: "mana",
    maxValueKey: "maxMana",
  },
  {
    id: "experience",
    icon: "Star",
    label: "PENGALAMAN",
    color: "text-yellow-500",
    gradient: "from-yellow-600 to-orange-400",
    textColor: "text-yellow-400",
    valueKey: "experience",
    maxValueKey: "maxExperience",
  },
];

// Currency displays configuration
export const currencies: CurrencyDisplay[] = [
  {
    id: "coins",
    icon: "Crown",
    color: "text-yellow-500",
    label: "Koin Emas",
    valueKey: "coins",
    formatter: "localeString",
  },
  {
    id: "achievements",
    icon: "Trophy",
    color: "text-orange-500",
    label: "Prestasi",
    valueKey: "achievements",
    formatter: "number",
  },
];

// Quick actions configuration
export const quickActions: QuickAction[] = [
  {
    id: "sound",
    icon: "Volume2",
    action: "toggle",
    stateKey: "soundEnabled",
    className: "gaming-button w-10 h-10 flex items-center justify-center",
  },
  {
    id: "map",
    icon: "Map",
    action: "modal",
    className: "gaming-button w-10 h-10 flex items-center justify-center",
  },
  {
    id: "settings",
    icon: "Settings",
    action: "modal",
    className: "gaming-button w-10 h-10 flex items-center justify-center",
  },
];

// Minimap locations configuration
export const minimapLocations: MinimapLocation[] = [
  {
    id: "jakarta",
    name: "Jakarta",
    position: { top: "2", left: "4" },
    color: "bg-green-500",
    size: "w-2 h-2",
    status: "active",
  },
  {
    id: "bandung",
    name: "Bandung",
    position: { top: "4", left: "8" },
    color: "bg-blue-500",
    size: "w-2 h-2",
    status: "active",
  },
  {
    id: "surabaya",
    name: "Surabaya",
    position: { top: "3", right: "6" },
    color: "bg-orange-500",
    size: "w-2 h-2",
    status: "active",
  },
  {
    id: "yogyakarta",
    name: "Yogyakarta",
    position: { bottom: "4", left: "6" },
    color: "bg-purple-500",
    size: "w-2 h-2",
    status: "active",
  },
];

// Skill slots configuration
export const skillSlots: SkillSlot[] = [
  {
    id: "connection",
    icon: "Wifi",
    color: "text-blue-400",
    keyBinding: "1",
    name: "Super Koneksi",
    description: "Tingkatkan kecepatan internet hingga maksimal",
  },
  {
    id: "protection",
    icon: "Shield",
    color: "text-green-400",
    keyBinding: "2",
    name: "Benteng Digital",
    description: "Aktifkan perlindungan maksimal dari gangguan",
  },
  {
    id: "attack",
    icon: "Sword",
    color: "text-red-400",
    keyBinding: "3",
    name: "Serangan Kilat",
    description: "Lakukan serangan cepat ke kompetitor",
  },
  {
    id: "ultimate",
    icon: "Crown",
    color: "text-yellow-400",
    keyBinding: "4",
    name: "Kekuatan Sultan",
    description: "Keahlian ultimate untuk dominasi total",
  },
];

// Quests configuration
export const quests: Quest[] = [
  {
    id: "conquest",
    title: "🎯 MISI AKTIF",
    description: "• Taklukkan Internet Nusantara",
    status: "active",
    progress: 7,
    maxProgress: 10,
  },
  {
    id: "recruitment",
    title: "• Kumpulkan 1000 Jagoan",
    description: "Rekrut pelanggan setia untuk memperkuat kerajaan",
    status: "active",
    progress: 250,
    maxProgress: 1000,
  },
  {
    id: "kingdom",
    title: "• Bangun Kerajaan Digital",
    description: "Ekspansi jaringan ke seluruh nusantara",
    status: "active",
    progress: 3,
    maxProgress: 50,
  },
];

// Floating texts configuration
export const floatingTexts: FloatingText[] = [
  {
    id: "exp-gain",
    text: "+50 EXP",
    type: "exp",
    position: { top: "30%", left: "20%" },
    color: "text-yellow-400",
    size: "text-lg",
    animation: "gaming-floating-text",
  },
  {
    id: "critical-hit",
    text: "CRITICAL HIT!",
    type: "critical",
    position: { top: "40%", right: "30%" },
    color: "text-red-400",
    size: "text-xl",
    animation: "gaming-floating-text gaming-crit",
  },
];

// Default game stats
export const defaultGameStats: GameStats = {
  level: 15,
  experience: 750,
  maxExperience: 1000,
  health: 85,
  maxHealth: 100,
  mana: 92,
  maxMana: 100,
  coins: 2500,
  achievements: 12,
};

// Default notifications
export const defaultNotifications: GameNotification[] = [
  {
    id: 1,
    text: "🏆 Achievement: Jagoan Sejati unlocked!",
    type: "achievement",
    duration: 5000,
  },
  {
    id: 2,
    text: "⚡ Koneksi stabil seperti Benteng Majapahit!",
    type: "status",
    duration: 3000,
  },
];

// HUD settings
export const defaultHudSettings: HudSettings = {
  enabled: true,
  autoHide: false,
  transparency: 90,
  scale: 100,
  soundEnabled: true,
  notifications: true,
  minimap: true,
  compass: true,
};

// Main gaming HUD configuration
export const gamingHudConfig: GamingHudConfig = {
  playerInfo: defaultPlayerInfo,
  statBars,
  currencies,
  quickActions,
  minimapLocations,
  skillSlots,
  quests,
  floatingTexts,
  defaultStats: defaultGameStats,
  defaultNotifications,
  settings: defaultHudSettings,

  styling: {
    panel: "gaming-panel",
    button: "gaming-button",
    progressBar: "gaming-progress-bar",
    progressFill: "gaming-progress-fill",
    text: "gaming-text",
    minimap: "gaming-minimap",
    notification: "gaming-notification",
    skillSlot: "gaming-skill-slot",
    compass: "gaming-compass",
    questTracker: "gaming-quest-tracker",
    comboMeter: "gaming-combo-meter",
  },

  positions: {
    topLeft: "absolute top-20 left-0 right-0 pointer-events-auto",
    topRight: "absolute top-32 right-4 pointer-events-auto",
    bottomCenter: "absolute bottom-4 left-1/2 transform -translate-x-1/2 pointer-events-auto",
    rightSide: "absolute top-1/4 right-4 space-y-2 pointer-events-auto",
    leftSide: "absolute top-1/2 left-4 pointer-events-auto",
  },
};

// Utility functions for gaming HUD
export const gamingHudUtils = {
  calculatePercentage: (current: number, max: number) => Math.round((current / max) * 100),
  formatCurrency: (value: number, type: "number" | "localeString" = "number") =>
    type === "localeString" ? value.toLocaleString() : value.toString(),
  getStatColor: (percentage: number) => {
    if (percentage >= 70) return "text-green-400";
    if (percentage >= 30) return "text-yellow-400";
    return "text-red-400";
  },
  generateRandomExp: () => Math.floor(Math.random() * 5) + 1,
  dismissNotification: (notifications: GameNotification[], id: number) => notifications.filter((n) => n.id !== id),
  addNotification: (notifications: GameNotification[], notification: GameNotification) =>
    [...notifications, notification].slice(-5), // Keep only last 5 notifications
};

// Export main configuration as default
export default gamingHudConfig;
