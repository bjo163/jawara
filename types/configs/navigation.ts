/**
 * NAVIGATION TYPES
 * ===============
 *
 * Types untuk navbar, footer, dan semua navigasi.
 */

// Navigation item type
export interface NavItem {
  id?: string;
  label: string;
  icon?: string;
  href?: string;
}

// Footer menu configuration
export interface FooterMenu {
  title: string;
  icon: React.ComponentType<{ className?: string }>; // Lucide icon component
  iconColor: string;
  hoverColor: string;
  items: NavItem[];
}

// Social media links
export interface SocialLink {
  name: string;
  icon: React.ComponentType<{ className?: string }>; // Lucide icon component
  href: string;
  gradient: string;
}

// Brand navigation info
export interface BrandNav {
  name: string;
  tagline: string;
  copyright: {
    text: string;
    suffix: string;
    flag: string;
  };
}

// Navigation behavior settings
export interface NavigationBehavior {
  scrollOffset: number;
  smoothScroll: boolean;
  scrollBehavior: ScrollBehavior;
}

// Mobile navigation settings
export interface MobileNav {
  breakpoint: number;
  animationDuration: number;
  overlayOpacity: number;
}

// Complete navigation configuration
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
