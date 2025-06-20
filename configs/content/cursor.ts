/**
 * GAMING CURSOR CONFIGURATION
 * ============================
 *
 * Centralized gaming cursor configuration untuk aplikasi Jawara-Net.
 * Includes cursor icons, effects, animations, dan click interactions.
 */

// Cursor visual configuration
export const cursorConfig = {
  // Primary cursor icon and styles
  icon: {
    default: "⚔️",
    hover: "🗡️",
    click: "💥",
    loading: "🌀",
  },

  // Visual effects configuration
  effects: {
    trail: {
      enabled: true,
      length: 5,
      opacity: 0.6,
      color: "rgba(249, 115, 22, 0.8)",
      fadeSpeed: 0.1,
    },
    clickRing: {
      enabled: true,
      size: 60,
      color: "rgba(249, 115, 22, 0.8)",
      duration: 0.5,
      borderWidth: 3,
    },
    clickSpark: {
      enabled: true,
      count: 6,
      size: 4,
      color: "rgba(249, 115, 22, 1)",
      spread: 20,
      duration: 0.3,
    },
  },

  // Animation settings
  animations: {
    hover: {
      scale: 1.2,
      rotation: 15,
      duration: 0.3,
    },
    click: {
      scale: 1.5,
      rotation: 45,
      duration: 0.2,
    },
    idle: {
      float: true,
      amplitude: 2,
      frequency: 2,
    },
  },

  // Cursor states
  states: {
    default: {
      icon: "⚔️",
      size: 24,
      glow: true,
      trail: true,
    },
    hover: {
      icon: "🗡️",
      size: 28,
      glow: true,
      trail: true,
      animation: "pulse",
    },
    click: {
      icon: "💥",
      size: 32,
      glow: true,
      trail: false,
      effects: ["ring", "spark"],
    },
    loading: {
      icon: "🌀",
      size: 26,
      glow: true,
      trail: true,
      animation: "spin",
    },
  },

  // Performance settings
  performance: {
    throttleMs: 16, // 60fps
    maxTrailNodes: 10,
    enableHardwareAcceleration: true,
    reduceMotionRespect: true,
  },

  // Indonesian warrior themed cursors
  themes: {
    warrior: {
      icons: ["⚔️", "🗡️", "🛡️", "🏹"],
      colors: ["#f97316", "#dc2626", "#eab308"],
    },
    royal: {
      icons: ["👑", "💎", "🔱", "⚜️"],
      colors: ["#eab308", "#f59e0b", "#d97706"],
    },
    mystical: {
      icons: ["🔮", "✨", "🌟", "💫"],
      colors: ["#8b5cf6", "#a855f7", "#9333ea"],
    },
  },
};

// Special cursor effects for different elements
export const cursorTargets = {
  buttons: {
    icon: "🗡️",
    effect: "glow",
    animation: "pulse",
    scale: 1.2,
  },
  links: {
    icon: "🏹",
    effect: "trail",
    animation: "float",
    scale: 1.1,
  },
  cards: {
    icon: "👑",
    effect: "sparkle",
    animation: "rotate",
    scale: 1.15,
  },
  inputs: {
    icon: "✍️",
    effect: "focus",
    animation: "steady",
    scale: 1.0,
  },
};

// Click sound effects configuration
export const cursorSounds = {
  enabled: true,
  volume: 0.3,
  sounds: {
    click: "/sounds/sword-clash.mp3",
    hover: "/sounds/sword-draw.mp3",
    special: "/sounds/magic-spell.mp3",
  },
};

// Accessibility options
export const cursorAccessibility = {
  respectReducedMotion: true,
  fallbackCursor: "pointer",
  highContrast: false,
  largeSize: false,
  disableEffects: false,
};

// Export complete cursor configuration
export const gamingCursorConfig = {
  ...cursorConfig,
  targets: cursorTargets,
  sounds: cursorSounds,
  accessibility: cursorAccessibility,
};
