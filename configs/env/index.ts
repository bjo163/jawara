/**
 * ENVIRONMENT CONFIGURATION
 * =========================
 *
 * Centralized dan type-safe environment variable management.
 * Includes validation, defaults, dan runtime checks.
 */

import type { EnvironmentConfig, Environment } from "@/types/env";
import { validators, devValidateConfig } from "../schemas/validator";

// Environment variable lists untuk dokumentasi
const requiredEnvVars = ["NODE_ENV"] as const;

// Get environment variable dengan type safety
function getEnvVar(key: string): string | undefined {
  if (typeof window !== "undefined") {
    // Client-side: hanya akses NEXT_PUBLIC_ variables
    return key.startsWith("NEXT_PUBLIC_") ? process.env[key] : undefined;
  }

  // Server-side: akses semua variables
  return process.env[key];
}

// Validate environment variables
function validateEnv(): void {
  const missing: string[] = [];

  for (const key of requiredEnvVars) {
    if (!getEnvVar(key)) {
      missing.push(key);
    }
  }

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }
}

// Get current environment
export function getEnvironment(): Environment {
  const env = getEnvVar("NODE_ENV");
  if (env === "production" || env === "development" || env === "test") {
    return env;
  }
  return "development"; // default fallback
}

// Check if running in production
export const isProduction = (): boolean => getEnvironment() === "production";

// Check if running in development
export const isDevelopment = (): boolean => getEnvironment() === "development";

// Check if running in test
export const isTest = (): boolean => getEnvironment() === "test";

// Environment configuration dengan defaults dan validation
export const env: EnvironmentConfig = {
  // Application
  NODE_ENV: getEnvironment(),
  NEXT_PUBLIC_APP_URL: getEnvVar("NEXT_PUBLIC_APP_URL") || "http://localhost:3000",
  NEXT_PUBLIC_APP_NAME: getEnvVar("NEXT_PUBLIC_APP_NAME") || "Jawara-Net",
  NEXT_PUBLIC_APP_VERSION: getEnvVar("NEXT_PUBLIC_APP_VERSION") || "1.0.0",
  PORT: getEnvVar("PORT") || "3000",

  // API
  NEXT_PUBLIC_API_URL: getEnvVar("NEXT_PUBLIC_API_URL") || "",
  API_SECRET_KEY: getEnvVar("API_SECRET_KEY"),
  API_TIMEOUT: getEnvVar("API_TIMEOUT") || "5000",
  API_RETRIES: getEnvVar("API_RETRIES") || "3",

  // External Services
  WHATSAPP_API_KEY: getEnvVar("WHATSAPP_API_KEY"),
  WHATSAPP_PHONE_NUMBER: getEnvVar("WHATSAPP_PHONE_NUMBER") || "6281234567890",
  GOOGLE_MAPS_API_KEY: getEnvVar("GOOGLE_MAPS_API_KEY"),

  // SMTP
  SMTP_HOST: getEnvVar("SMTP_HOST"),
  SMTP_PORT: getEnvVar("SMTP_PORT") || "587",
  SMTP_USER: getEnvVar("SMTP_USER"),
  SMTP_PASSWORD: getEnvVar("SMTP_PASSWORD"),

  // Analytics
  GOOGLE_ANALYTICS_ID: getEnvVar("GOOGLE_ANALYTICS_ID"),
  SENTRY_DSN: getEnvVar("SENTRY_DSN"),
  HOTJAR_ID: getEnvVar("HOTJAR_ID"),

  // Security
  JWT_SECRET: getEnvVar("JWT_SECRET"),
  NEXTAUTH_SECRET: getEnvVar("NEXTAUTH_SECRET"),
  NEXTAUTH_URL: getEnvVar("NEXTAUTH_URL"),
  ENCRYPTION_KEY: getEnvVar("ENCRYPTION_KEY"),

  // Database
  DATABASE_URL: getEnvVar("DATABASE_URL"),
  DATABASE_HOST: getEnvVar("DATABASE_HOST"),
  DATABASE_PORT: getEnvVar("DATABASE_PORT") || "5432",
  DATABASE_NAME: getEnvVar("DATABASE_NAME"),
  DATABASE_USER: getEnvVar("DATABASE_USER"),
  DATABASE_PASSWORD: getEnvVar("DATABASE_PASSWORD"),
};

// Validate pada startup
if (typeof window === "undefined") {
  // Hanya validate di server-side
  validateEnv();

  // Validate environment configuration dengan Zod (dynamic import)
  import("../schemas/validator")
    .then(({ validators }) => {
      const result = validators.safeValidateEnvironment(env);
      if (!result.success) {
        console.warn(`⚠️ Environment validation warnings: ${result.error}`);
      }
    })
    .catch((error) => {
      console.warn("⚠️ Could not validate environment configuration:", error);
    });
}

// Environment utilities
export const envUtils = {
  // Get WhatsApp URL
  getWhatsAppUrl: (message = ""): string => {
    const phone = env.WHATSAPP_PHONE_NUMBER;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phone}${message ? `?text=${encodedMessage}` : ""}`;
  },

  // Get app URL dengan path
  getAppUrl: (path = ""): string => {
    const baseUrl = env.NEXT_PUBLIC_APP_URL || "";
    return `${baseUrl}${path}`;
  },

  // Check if feature enabled
  isFeatureEnabled: (feature: string): boolean => {
    const envKey = `NEXT_PUBLIC_FEATURE_${feature.toUpperCase()}`;
    return getEnvVar(envKey) === "true";
  },

  // Get timeout value
  getTimeout: (): number => {
    return parseInt(env.API_TIMEOUT || "5000", 10);
  },

  // Get retries count
  getRetries: (): number => {
    return parseInt(env.API_RETRIES || "3", 10);
  },
};

// Default export
export default env;
