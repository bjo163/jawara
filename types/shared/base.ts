/**
 * SHARED BASE TYPES
 * =================
 *
 * Basic interfaces dan utility types yang digunakan di seluruh aplikasi.
 */

// Base configuration interface
export interface ConfigBase {
  id: string;
  name: string;
  description?: string;
  enabled: boolean;
  lastUpdated: string;
}

// Content configuration types
export interface ContentConfig extends ConfigBase {
  language: "id" | "en";
  version: string;
}

// UI configuration types
export interface UIConfig extends ConfigBase {
  theme: "dark" | "light" | "auto";
  animations: boolean;
}

// API configuration types
export interface APIConfig extends ConfigBase {
  baseUrl: string;
  timeout: number;
  retries: number;
}

// Common background element type
export interface BackgroundElement {
  icon: string;
  position: string;
  size: string;
  animation: string;
  opacity: string;
}
