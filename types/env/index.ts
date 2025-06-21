/**
 * ENVIRONMENT VARIABLES TYPES
 * ===========================
 *
 * Type definitions untuk environment variables dengan validasi.
 */

// Environment types
export type Environment = "development" | "production" | "test";

// Database environment variables
export interface DatabaseEnv {
  DATABASE_URL?: string;
  DATABASE_HOST?: string;
  DATABASE_PORT?: string;
  DATABASE_NAME?: string;
  DATABASE_USER?: string;
  DATABASE_PASSWORD?: string;
}

// API environment variables
export interface ApiEnv {
  NEXT_PUBLIC_API_URL?: string;
  API_SECRET_KEY?: string;
  API_TIMEOUT?: string;
  API_RETRIES?: string;
}

// External services environment variables
export interface ExternalServicesEnv {
  WHATSAPP_API_KEY?: string;
  WHATSAPP_PHONE_NUMBER?: string;
  GOOGLE_MAPS_API_KEY?: string;
  SMTP_HOST?: string;
  SMTP_PORT?: string;
  SMTP_USER?: string;
  SMTP_PASSWORD?: string;
}

// Analytics and monitoring
export interface AnalyticsEnv {
  GOOGLE_ANALYTICS_ID?: string;
  SENTRY_DSN?: string;
  HOTJAR_ID?: string;
}

// Security environment variables
export interface SecurityEnv {
  JWT_SECRET?: string;
  NEXTAUTH_SECRET?: string;
  NEXTAUTH_URL?: string;
  ENCRYPTION_KEY?: string;
}

// Application settings
export interface AppEnv {
  NODE_ENV: Environment;
  NEXT_PUBLIC_APP_URL?: string;
  NEXT_PUBLIC_APP_NAME?: string;
  NEXT_PUBLIC_APP_VERSION?: string;
  PORT?: string;
}

// Complete environment configuration
export interface EnvironmentConfig extends DatabaseEnv, ApiEnv, ExternalServicesEnv, AnalyticsEnv, SecurityEnv, AppEnv {
  // Custom environment variables bisa ditambahkan di sini
}
