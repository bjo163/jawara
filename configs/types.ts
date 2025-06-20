/**
 * JAWARA-NET CONFIGURATION TYPES
 * ==============================
 *
 * Global TypeScript definitions untuk semua konfigurasi.
 * Ensures type safety across configuration system.
 */

// Base configuration interface
export interface ConfigBase {
  id: string;
  name: string;
  description?: string;
  enabled: boolean;
  lastUpdated: string;
}

// Navigation types
export interface NavItem {
  id?: string;
  label: string;
  icon?: string;
  href?: string;
}

export interface FooterMenu {
  title: string;
  icon: any; // Lucide icon component
  iconColor: string;
  hoverColor: string;
  items: NavItem[];
}

export interface SocialLink {
  name: string;
  icon: any; // Lucide icon component
  href: string;
  gradient: string;
}

export interface BrandNav {
  name: string;
  tagline: string;
  copyright: {
    text: string;
    suffix: string;
    flag: string;
  };
}

export interface NavigationBehavior {
  scrollOffset: number;
  smoothScroll: boolean;
  scrollBehavior: ScrollBehavior;
}

export interface MobileNav {
  breakpoint: number;
  animationDuration: number;
  overlayOpacity: number;
}

export interface NavigationConfig {
  navbar: {
    brand: BrandNav;
    items: NavItem[];
    behavior: NavigationBehavior;
    mobile: MobileNav;
  };
  footer: {
    brand: BrandNav;
    menus: {
      main: FooterMenu;
      support: FooterMenu;
    };
    social: SocialLink[];
    legal: NavItem[];
  };
}

// Content types
export interface TestimonialData {
  name: string;
  role: string;
  location: string;
  image: string;
  rating: number;
  comment: string;
  package: string;
}

export interface PackageData {
  name: string;
  icon: string;
  speed: string;
  quota: string;
  price: string;
  originalPrice: string;
  features: string[];
  popular: boolean;
  color: string;
  character: string;
}

export interface ServiceData {
  icon: any; // Lucide icon component
  title: string;
  description: string;
  features: string[];
  color: string;
}

export interface FAQData {
  question: string;
  answer: string;
}

export interface ChatResponse {
  [key: string]: string;
}

// Contact types
export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: {
    street: string;
    city: string;
    postal: string;
    country: string;
  };
}

// Loading types
export interface LoadingStage {
  text: string;
  icon: string;
  progress: number;
}

export interface LoadingStat {
  icon: any; // Lucide icon component
  value: string;
  label: string;
  color: string;
  textColor: string;
}

export interface BackgroundElement {
  icon: string;
  position: string;
  size: string;
  animation: string;
  opacity: string;
}

export interface LoadingBrand {
  title: string;
  tagline: string;
  description: string;
  decorativeIcons: string[];
}

export interface LoadingConfig {
  stages: LoadingStage[];
  brand: LoadingBrand;
  stats: LoadingStat[];
  progress: {
    labels: {
      title: string;
      percentage: (progress: number) => string;
    };
    styling: {
      barGradient: string;
      backgroundColor: string;
      height: string;
    };
    animation: {
      duration: string;
      easing: string;
    };
  };
  dots: Array<{
    gradient: string;
    delay: string;
  }>;
  timing: {
    stageInterval: number;
    progressUpdateInterval: number;
    finalDelay: number;
  };
  background: BackgroundElement[];
}

// UI types
export interface ThemeColors {
  [key: string]: string;
}

export interface AnimationConfig {
  enabled: boolean;
  duration: {
    fast: string;
    normal: string;
    slow: string;
  };
}

// Site types
export interface BrandInfo {
  name: string;
  fullName: string;
  tagline: string;
  description: string;
  logo: string;
  favicon: string;
}

export interface SEOConfig {
  defaultTitle: string;
  titleTemplate: string;
  description: string;
  keywords: string[];
  image: string;
  url: string;
}

// Gaming Cursor types
export interface CursorState {
  icon: string;
  size: number;
  glow: boolean;
  trail: boolean;
  animation?: string;
  effects?: string[];
}

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

export interface CursorAnimation {
  scale: number;
  rotation: number;
  duration: number;
}

export interface CursorTarget {
  icon: string;
  effect: string;
  animation: string;
  scale: number;
}

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

// Export combined types
export interface JawaraNetConfig {
  content: {
    loading: LoadingStage[];
    packages: PackageData[];
    testimonials: TestimonialData[];
    services: ServiceData[];
    faq: FAQData[];
    chat: ChatResponse;
  };
  navigation: {
    navbar: NavItem[];
    footer: FooterMenu[];
  };
  site: {
    brand: BrandInfo;
    seo: SEOConfig;
    contact: ContactInfo;
  };
  ui: {
    theme: ThemeColors;
    animations: AnimationConfig;
  };
}
