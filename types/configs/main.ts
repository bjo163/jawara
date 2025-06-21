/**
 * MAIN CONFIGURATION AGGREGATION TYPES
 * ====================================
 *
 * Combined configuration interfaces untuk root-level config objects.
 */

import type { PackageData, TestimonialData, ServiceData, FAQData } from "./content";
import type { LoadingStage } from "./loading";
import type { NavItem, FooterMenu, SocialLink } from "./navigation";
import type { BrandInfo, SEOConfig } from "./site";
import type { ContactInfo } from "./contact";
import type { ThemeColors, AnimationConfig } from "../ui/theme";

// Chat response mapping
export interface ChatResponse {
  [key: string]: string;
}

// Main application configuration interface
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
    social: SocialLink[];
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
