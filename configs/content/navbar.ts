/**
 * NAVBAR CONFIGURATION
 * ===================
 *
 * Centralized navbar configuration untuk Jawara-Net.
 * Includes brand info, navigation items, CTA buttons, mobile settings, dan visual configuration.
 */

// Navbar brand configuration
export interface NavbarBrand {
  name: {
    primary: string;
    secondary: string;
  };
  tagline: string;
  logo: {
    icon: string; // Emoji or icon identifier
    gradient: string;
    size: {
      mobile: string;
      desktop: string;
    };
    effects: string[];
  };
  decorations: {
    topRight: string;
    bottomLeft: string;
  };
}

// Navigation item configuration
export interface NavbarItem {
  id: string;
  label: string;
  icon: string;
  tooltip?: string;
  isActive?: boolean;
}

// CTA button configuration
export interface NavbarCTA {
  id: string;
  label: string;
  icon: string;
  action: {
    type: "scroll" | "external" | "modal";
    target: string;
  };
  style: {
    gradient: string;
    size: string;
    hover: string;
  };
  priority: number;
}

// Mobile navigation configuration
export interface MobileNavConfig {
  breakpoint: number;
  animation: {
    duration: string;
    easing: string;
  };
  overlay: {
    enabled: boolean;
    opacity: number;
  };
  menuIcon: {
    open: string;
    close: string;
  };
}

// Scroll behavior configuration
export interface ScrollConfig {
  threshold: number;
  offset: number;
  behavior: "smooth" | "auto";
  activeClass: string;
  scrolledClass: string;
}

// Complete navbar configuration
export interface NavbarConfig {
  sectionId: string;
  brand: NavbarBrand;
  navigation: {
    items: NavbarItem[];
    activeSection: string;
  };
  cta: {
    buttons: NavbarCTA[];
    spacing: string;
  };
  mobile: MobileNavConfig;
  scroll: ScrollConfig;
  styling: {
    height: {
      mobile: string;
      desktop: string;
    };
    background: {
      default: string;
      scrolled: string;
    };
    border: {
      default: string;
      scrolled: string;
    };
    backdrop: string;
    zIndex: string;
  };
}

// Main navbar configuration
export const navbarConfig: NavbarConfig = {
  sectionId: "navbar",

  brand: {
    name: {
      primary: "JAWARA",
      secondary: "NET",
    },
    tagline: "🏝️ NUSANTARA 🏝️",
    logo: {
      icon: "📡", // Wifi antenna emoji
      gradient: "from-orange-500 via-red-500 to-pink-500",
      size: {
        mobile: "w-10 h-10",
        desktop: "w-12 h-12",
      },
      effects: ["mega-glow", "nusantara-glow"],
    },
    decorations: {
      topRight: "🔴", // Red indicator
      bottomLeft: "✨", // Sparkles
    },
  },

  navigation: {
    items: [
      { id: "hero", label: "Beranda", icon: "🏛️", tooltip: "Halaman utama Jawara-Net" },
      { id: "about", label: "Tentang", icon: "🛡️", tooltip: "Tentang perusahaan kami" },
      { id: "services", label: "Layanan", icon: "⚔️", tooltip: "Layanan internet kami" },
      { id: "packages", label: "Paket", icon: "👑", tooltip: "Paket internet tersedia" },
      { id: "testimonials", label: "Testimoni", icon: "🏆", tooltip: "Kata pelanggan kami" },
      { id: "contact", label: "Kontak", icon: "📞", tooltip: "Hubungi kami" },
    ],
    activeSection: "hero",
  },

  cta: {
    buttons: [
      {
        id: "coverage",
        label: "📍 Coverage",
        icon: "🗺️",
        action: {
          type: "scroll",
          target: "coverage",
        },
        style: {
          gradient: "from-orange-500 to-red-500",
          size: "px-2 lg:px-3 py-1",
          hover: "mega-hover",
        },
        priority: 1,
      },
      {
        id: "whatsapp",
        label: "💬 WA",
        icon: "📱",
        action: {
          type: "external",
          target: "https://wa.me/6281234567890",
        },
        style: {
          gradient: "from-green-500 to-emerald-500",
          size: "px-2 lg:px-3 py-1",
          hover: "mega-hover",
        },
        priority: 2,
      },
    ],
    spacing: "space-x-1 lg:space-x-2",
  },

  mobile: {
    breakpoint: 1024, // lg breakpoint
    animation: {
      duration: "duration-300",
      easing: "ease-in-out",
    },
    overlay: {
      enabled: true,
      opacity: 0.5,
    },
    menuIcon: {
      open: "☰",
      close: "✕",
    },
  },

  scroll: {
    threshold: 20,
    offset: 100,
    behavior: "smooth",
    activeClass: "mega-button text-white shadow-2xl mega-glow",
    scrolledClass: "mega-card backdrop-blur-3xl border-b-4 border-orange-500/50 shadow-2xl mega-glow",
  },

  styling: {
    height: {
      mobile: "h-14",
      desktop: "md:h-16",
    },
    background: {
      default: "bg-slate-950/90 backdrop-blur-sm",
      scrolled: "mega-card backdrop-blur-3xl",
    },
    border: {
      default: "border-b border-orange-500/20",
      scrolled: "border-b-4 border-orange-500/50 shadow-2xl mega-glow",
    },
    backdrop: "backdrop-blur-3xl",
    zIndex: "z-50",
  },
};

// Extended mobile configuration untuk mobile menu content
export const mobileMenuConfig = {
  header: {
    show: true,
    title: "📱 Menu Jagoan",
    subtitle: "Navigasi Nusantara",
  },
  footer: {
    show: true,
    buttons: [
      {
        id: "mobile-coverage",
        label: "📍 Request Coverage Area",
        action: { type: "scroll" as const, target: "coverage" },
        style:
          "w-full mega-button bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold mega-text py-2 text-sm",
      },
      {
        id: "mobile-whatsapp",
        label: "💬 Tanya via WhatsApp",
        action: { type: "external" as const, target: "https://wa.me/6281234567890" },
        style:
          "w-full mega-button bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold mega-text py-2 text-sm",
      },
    ],
    spacing: "pt-3 space-y-2",
  },
  itemStyling: {
    container: "mega-card m-3 p-4 space-y-3 mega-glow",
    item: "w-full text-left px-4 py-3 rounded-xl font-bold mega-text transition-all duration-500 flex items-center space-x-3 mega-hover text-sm",
    activeItem: "mega-button text-white",
    inactiveItem: "text-gray-300 hover:text-white hover:bg-white/10",
  },
};

// Navbar state management configuration
export const navbarStates = {
  default: {
    background: "bg-slate-950/90 backdrop-blur-sm",
    border: "border-b border-orange-500/20",
    shadow: "",
  },
  scrolled: {
    background: "mega-card backdrop-blur-3xl",
    border: "border-b-4 border-orange-500/50",
    shadow: "shadow-2xl mega-glow",
  },
  mobile: {
    overlay: "fixed inset-0 bg-black/50 z-40",
    menu: "lg:hidden",
    container: "mega-card m-3 p-4 space-y-3 mega-glow",
  },
};

// Export only the main configuration object
export default navbarConfig;
