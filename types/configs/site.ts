/**
 * SITE & BRAND CONFIGURATION TYPES
 * =================================
 *
 * Types untuk site branding, metadata, dan brand identity.
 */

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
