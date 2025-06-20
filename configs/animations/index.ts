/**
 * Centralized Animation System
 * Standardizes all animations, transitions, and effects across the Jawara-Net project
 */

// =============================================================================
// ANIMATION DURATIONS
// =============================================================================

export const ANIMATION_DURATIONS = {
  // Standard durations
  fast: "0.3s",
  normal: "0.5s",
  slow: "0.8s",

  // Component-specific durations
  hover: "0.4s",
  transition: "0.5s",
  slideshow: "1000ms", // For hero slideshow
  navigationLoader: "300ms",

  // Special effects
  glow: "6s",
  flow: "8s",
  wave: "6s",
  soar: "10s",
  float: "8s",
  pulse: "2s",

  // Gaming-specific
  scan: "3s",
  shimmer: "2s",
  timer: "5s",
  compass: "10s",
  trail: "1s",

  // Button effects
  buttonFlow: "8s",
  titleFlow: "10s",
  gridFlow: "25s",
  nusantaraFlow: "20s",
} as const;

// =============================================================================
// ANIMATION EASING
// =============================================================================

export const ANIMATION_EASING = {
  // Standard easings
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",

  // Custom cubic-bezier
  smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
  bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
} as const;

// =============================================================================
// TAILWIND ANIMATION CLASSES
// =============================================================================

export const TAILWIND_ANIMATIONS = {
  // Standard Tailwind animations
  pulse: "animate-pulse",
  bounce: "animate-bounce",
  spin: "animate-spin",
  ping: "animate-ping",

  // Custom animations (defined in CSS)
  indonesianWave: "indonesian-wave",
  garudaSoar: "garuda-soar",
  particleFloat: "particle-float",
  scrollReveal: "scroll-reveal",

  // Gaming animations
  gamingPulse: "gaming-pulse",
  gamingKerisGlow: "gaming-keris-glow",
  gamingTrail: "gaming-trail",
  gamingCompassSpin: "gaming-compass-spin",

  // Mega animations
  megaGlow: "mega-glow",
  megaButtonFlow: "mega-button-flow",
  megaTitleFlow: "mega-title-flow",
  megaGridFlow: "mega-grid-flow",
  nusantaraGlow: "nusantara-glow",
  nusantaraFlow: "nusantara-flow",

  // Achievement animations
  achievementAppear: "gaming-achievement-appear",

  // Loading animations
  floatUp: "gaming-float-up",
  scan: "gaming-scan",
  shimmer: "gaming-shimmer",
  timer: "gaming-timer",

  // Click effects
  kerisStrike: "gaming-keris-strike",
  clickExpand: "gaming-click-expand",
  spark: "gaming-spark",
} as const;

// =============================================================================
// TRANSITION CLASSES
// =============================================================================

export const TRANSITION_CLASSES = {
  // Basic transitions
  all: "transition-all",
  colors: "transition-colors",
  transform: "transition-transform",
  opacity: "transition-opacity",

  // Duration classes
  duration300: "duration-300",
  duration500: "duration-500",
  duration700: "duration-700",
  duration1000: "duration-1000",

  // Combined transition classes
  smooth: "transition-all duration-500 ease-out",
  hover: "transition-all duration-400 cubic-bezier(0.4, 0, 0.2, 1)",
  colors300: "transition-colors duration-300",
  transform500: "transition-transform duration-500",
  megaHover: "transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)",
} as const;

// =============================================================================
// HOVER EFFECTS
// =============================================================================

export const HOVER_EFFECTS = {
  // Transform effects
  scaleUp: "hover:scale-105",
  scaleDown: "hover:scale-95",
  translateY: "hover:-translate-y-2",
  rotate: "hover:rotate-3",

  // Color effects
  textOrange: "hover:text-orange-400",
  bgOrange: "hover:bg-orange-500/20",
  borderOrange: "hover:border-orange-500",

  // Combined effects
  mega: "mega-hover",
  button: "hover:scale-105 hover:-translate-y-2",
  card: "hover:-translate-y-2 hover:scale-101",

  // Gaming effects
  gamingGlow: "hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]",
  gamingButton:
    "hover:border-orange-400 hover:text-orange-400 hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] hover:-translate-y-0.5",
} as const;

// =============================================================================
// ANIMATION PRESETS
// =============================================================================

export const ANIMATION_PRESETS = {
  // Button animations
  primaryButton: `${TRANSITION_CLASSES.smooth} ${HOVER_EFFECTS.button}`,
  secondaryButton: `${TRANSITION_CLASSES.hover} ${HOVER_EFFECTS.scaleUp}`,

  // Card animations
  card: `${TRANSITION_CLASSES.megaHover} ${HOVER_EFFECTS.card}`,
  serviceCard: `${TRANSITION_CLASSES.smooth} ${HOVER_EFFECTS.mega}`,

  // Text animations
  titleText: TAILWIND_ANIMATIONS.megaTitleFlow,
  glowText: TAILWIND_ANIMATIONS.megaGlow,

  // Gaming elements
  cursor: TAILWIND_ANIMATIONS.gamingKerisGlow,
  hudElement: TAILWIND_ANIMATIONS.gamingPulse,
  notification: TAILWIND_ANIMATIONS.pulse,

  // Loading elements
  spinner: TAILWIND_ANIMATIONS.spin,
  loader: TAILWIND_ANIMATIONS.pulse,
  progressBar: `${TRANSITION_CLASSES.all} ${ANIMATION_DURATIONS.navigationLoader}`,

  // Interactive elements
  linkHover: `${TRANSITION_CLASSES.colors300} ${HOVER_EFFECTS.textOrange}`,
  iconSpin: TAILWIND_ANIMATIONS.spin,
  iconPulse: TAILWIND_ANIMATIONS.pulse,
  iconBounce: TAILWIND_ANIMATIONS.bounce,

  // Special effects
  glow: TAILWIND_ANIMATIONS.nusantaraGlow,
  wave: TAILWIND_ANIMATIONS.indonesianWave,
  float: TAILWIND_ANIMATIONS.particleFloat,
} as const;

// =============================================================================
// KEYFRAME ANIMATION NAMES (for CSS)
// =============================================================================

export const KEYFRAME_NAMES = {
  // Gaming animations
  "gaming-scan": "gaming-scan",
  "gaming-shimmer": "gaming-shimmer",
  "gaming-pulse": "gaming-pulse",
  "gaming-timer": "gaming-timer",
  "gaming-keris-glow": "gaming-keris-glow",
  "gaming-trail": "gaming-trail",
  "gaming-keris-strike": "gaming-keris-strike",
  "gaming-click-expand": "gaming-click-expand",
  "gaming-spark": "gaming-spark",
  "gaming-achievement-appear": "gaming-achievement-appear",
  "gaming-float-up": "gaming-float-up",
  "gaming-compass-spin": "gaming-compass-spin",

  // Indonesian themed animations
  "indonesian-wave": "indonesian-wave",
  "garuda-soar": "garuda-soar",
  "particle-float": "particle-float",
  "scroll-reveal": "scroll-reveal",
  "nusantara-flow": "nusantara-flow",

  // Mega animations
  "mega-button-flow": "mega-button-flow",
  "mega-title-flow": "mega-title-flow",
  "mega-glow-pulse": "mega-glow-pulse",
  "mega-grid-flow": "mega-grid-flow",
  "nusantara-glow-pulse": "nusantara-glow-pulse",
} as const;

// =============================================================================
// USAGE EXAMPLES AND UTILITIES
// =============================================================================

/**
 * Utility function to combine animation classes
 */
export function combineAnimations(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Create a custom transition with duration and easing
 */
export function createTransition(
  property: string = "all",
  duration: keyof typeof ANIMATION_DURATIONS = "normal",
  easing: keyof typeof ANIMATION_EASING = "smooth"
): string {
  return `transition-${property} duration-${duration} ${ANIMATION_EASING[easing]}`;
}

/**
 * Common animation combinations for different component types
 */
export const COMPONENT_ANIMATIONS = {
  // Navigation
  navbar: {
    container: `${TRANSITION_CLASSES.all} ${ANIMATION_DURATIONS.slow}`,
    item: `${TRANSITION_CLASSES.all} ${ANIMATION_DURATIONS.normal} ${HOVER_EFFECTS.mega}`,
    mobileItem: `${TRANSITION_CLASSES.all} ${ANIMATION_DURATIONS.normal}`,
  },

  // Hero section
  hero: {
    title: ANIMATION_PRESETS.titleText,
    slideshow: `${TRANSITION_CLASSES.transform} duration-${ANIMATION_DURATIONS.slideshow} ease-in-out`,
    controls: `${TRANSITION_CLASSES.all} ${ANIMATION_DURATIONS.navigationLoader}`,
  },

  // Sections
  section: {
    card: ANIMATION_PRESETS.card,
    button: ANIMATION_PRESETS.primaryButton,
    icon: TAILWIND_ANIMATIONS.spin,
  },

  // Gaming elements
  gaming: {
    cursor: ANIMATION_PRESETS.cursor,
    hud: ANIMATION_PRESETS.hudElement,
    achievement: TAILWIND_ANIMATIONS.achievementAppear,
    notification: ANIMATION_PRESETS.notification,
  },

  // Loading states
  loading: {
    spinner: ANIMATION_PRESETS.spinner,
    progress: ANIMATION_PRESETS.progressBar,
    dots: TAILWIND_ANIMATIONS.bounce,
    glow: ANIMATION_PRESETS.glow,
  },

  // Interactive elements
  interactive: {
    button: ANIMATION_PRESETS.primaryButton,
    card: ANIMATION_PRESETS.serviceCard,
    link: ANIMATION_PRESETS.linkHover,
    icon: ANIMATION_PRESETS.iconSpin,
  },
} as const;

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================

export type AnimationDuration = keyof typeof ANIMATION_DURATIONS;
export type AnimationEasing = keyof typeof ANIMATION_EASING;
export type TailwindAnimation = keyof typeof TAILWIND_ANIMATIONS;
export type TransitionClass = keyof typeof TRANSITION_CLASSES;
export type HoverEffect = keyof typeof HOVER_EFFECTS;
export type AnimationPreset = keyof typeof ANIMATION_PRESETS;
export type KeyframeName = keyof typeof KEYFRAME_NAMES;

// Export everything for easy importing
const animations = {
  ANIMATION_DURATIONS,
  ANIMATION_EASING,
  TAILWIND_ANIMATIONS,
  TRANSITION_CLASSES,
  HOVER_EFFECTS,
  ANIMATION_PRESETS,
  KEYFRAME_NAMES,
  COMPONENT_ANIMATIONS,
  combineAnimations,
  createTransition,
};

export default animations;
