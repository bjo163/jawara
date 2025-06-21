/**
 * UI THEME & STYLING TYPES
 * ========================
 *
 * Types untuk tema, colors, animations, dan styling configuration.
 */

// Theme color definitions
export interface ThemeColors {
  [key: string]: string;
}

// Animation configuration
export interface AnimationConfig {
  enabled: boolean;
  duration: {
    fast: string;
    normal: string;
    slow: string;
  };
}
