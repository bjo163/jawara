/**
 * GAMING CURSOR TYPES
 * ===================
 *
 * Types untuk gaming cursor system dan interactive elements.
 */

// Cursor state definitions
export interface CursorState {
  icon: string;
  size: number;
  glow: boolean;
  trail: boolean;
  animation?: string;
  effects?: string[];
}

// Cursor effect configuration
export interface CursorEffect {
  enabled: boolean;
  size?: number;
  color: string;
  duration?: number;
  opacity?: number;
  borderWidth?: number;
  count?: number;
  spread?: number;
  length?: number;
  fadeSpeed?: number;
}

// Cursor animation settings
export interface CursorAnimation {
  scale: number;
  rotation: number;
  duration: number;
}

// Cursor target configuration
export interface CursorTarget {
  icon: string;
  effect: string;
  animation: string;
  scale: number;
}

// Complete gaming cursor configuration
export interface GamingCursorConfig {
  icon: {
    default: string;
    hover: string;
    click: string;
    loading: string;
  };
  effects: {
    trail: CursorEffect;
    clickRing: CursorEffect;
    clickSpark: CursorEffect;
  };
  animations: {
    hover: CursorAnimation;
    click: CursorAnimation;
    idle: {
      float: boolean;
      amplitude: number;
      frequency: number;
    };
  };
  states: {
    [key: string]: CursorState;
  };
  performance: {
    throttleMs: number;
    maxTrailNodes: number;
    enableHardwareAcceleration: boolean;
    reduceMotionRespect: boolean;
  };
  targets: {
    [key: string]: CursorTarget;
  };
  sounds: {
    enabled: boolean;
    volume: number;
    sounds: {
      [key: string]: string;
    };
  };
  accessibility: {
    respectReducedMotion: boolean;
    fallbackCursor: string;
    highContrast: boolean;
    largeSize: boolean;
    disableEffects: boolean;
  };
}
