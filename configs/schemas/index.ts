/**
 * ZOD VALIDATION SCHEMAS
 * ======================
 *
 * Runtime validation schemas untuk semua configuration objects.
 * Ensures type safety dan data integrity.
 */

import { z } from "zod";

// Base configuration schema
export const configBaseSchema = z.object({
  id: z.string().min(1, "ID tidak boleh kosong"),
  name: z.string().min(1, "Name tidak boleh kosong"),
  description: z.string().optional(),
  enabled: z.boolean(),
  lastUpdated: z.string().datetime("Format datetime tidak valid"),
});

// API Response schemas
export const apiResponseSchema = z.object({
  success: z.boolean(),
  data: z.unknown().optional(),
  message: z.string().optional(),
  error: z.string().optional(),
  timestamp: z.string().datetime(),
  requestId: z.string().optional(),
});

export const paginatedResponseSchema = z.object({
  success: z.boolean(),
  data: z.array(z.unknown()).optional(),
  pagination: z.object({
    page: z.number().min(1),
    limit: z.number().min(1).max(100),
    total: z.number().min(0),
    totalPages: z.number().min(0),
    hasNext: z.boolean(),
    hasPrevious: z.boolean(),
  }),
  message: z.string().optional(),
  timestamp: z.string().datetime(),
});

export const contactFormDataSchema = z.object({
  name: z.string().min(1, "Name tidak boleh kosong"),
  email: z.string().email("Email format tidak valid"),
  phone: z.string().regex(/^[\d\-\+\(\)\s]+$/, "Phone format tidak valid"),
  subject: z.string().min(5, "Subject minimal 5 karakter"),
  message: z.string().min(10, "Message minimal 10 karakter"),
  packageInterest: z.string().optional(),
  location: z.string().optional(),
});

export const packageInquiryDataSchema = z.object({
  packageId: z.string().min(1, "Package ID tidak boleh kosong"),
  customerName: z.string().min(1, "Customer name tidak boleh kosong"),
  customerEmail: z.string().email("Email format tidak valid"),
  customerPhone: z.string().regex(/^[\d\-\+\(\)\s]+$/, "Phone format tidak valid"),
  location: z.string().min(1, "Location tidak boleh kosong"),
  installationAddress: z.string().min(10, "Installation address minimal 10 karakter"),
  preferredInstallationDate: z.string().optional(),
  additionalNotes: z.string().optional(),
});

export const testimonialSubmissionDataSchema = z.object({
  customerName: z.string().min(1, "Customer name tidak boleh kosong"),
  customerEmail: z.string().email("Email format tidak valid"),
  packageUsed: z.string().min(1, "Package used tidak boleh kosong"),
  rating: z.number().min(1).max(5, "Rating harus antara 1-5"),
  comment: z.string().min(10, "Comment minimal 10 karakter"),
  location: z.string().min(1, "Location tidak boleh kosong"),
  usageDuration: z.string().min(1, "Usage duration tidak boleh kosong"),
  allowPublicDisplay: z.boolean(),
  customerPhoto: z.string().optional(),
});

export const coverageCheckDataSchema = z.object({
  address: z.string().min(5, "Address minimal 5 karakter"),
  latitude: z.number().min(-90).max(90).optional(),
  longitude: z.number().min(-180).max(180).optional(),
  postalCode: z.string().optional(),
  city: z.string().min(1, "City tidak boleh kosong"),
  province: z.string().min(1, "Province tidak boleh kosong"),
});

export const newsletterSubscriptionDataSchema = z.object({
  email: z.string().email("Email format tidak valid"),
  name: z.string().optional(),
  interests: z.array(z.string().min(1)).min(1, "Minimal 1 interest"),
  location: z.string().optional(),
});

export const supportTicketDataSchema = z.object({
  customerName: z.string().min(1, "Customer name tidak boleh kosong"),
  customerEmail: z.string().email("Email format tidak valid"),
  customerPhone: z.string().optional(),
  category: z.enum(["technical", "billing", "general", "complaint"]),
  priority: z.enum(["low", "medium", "high", "urgent"]),
  subject: z.string().min(5, "Subject minimal 5 karakter"),
  description: z.string().min(10, "Description minimal 10 karakter"),
  packageUsed: z.string().optional(),
  attachments: z.array(z.string()).optional(),
});

export const speedTestResultSchema = z.object({
  testId: z.string().min(1, "Test ID tidak boleh kosong"),
  timestamp: z.string().datetime(),
  downloadSpeed: z.number().min(0, "Download speed tidak boleh negatif"),
  uploadSpeed: z.number().min(0, "Upload speed tidak boleh negatif"),
  ping: z.number().min(0, "Ping tidak boleh negatif"),
  jitter: z.number().min(0, "Jitter tidak boleh negatif"),
  packetLoss: z.number().min(0).max(100, "Packet loss harus antara 0-100"),
  serverLocation: z.string().min(1, "Server location tidak boleh kosong"),
  userLocation: z.string().optional(),
  isp: z.string().min(1, "ISP tidak boleh kosong"),
  connectionType: z.string().optional(),
});

// Navigation schemas
export const navItemSchema = z.object({
  id: z.string().optional(),
  label: z.string().min(1, "Label tidak boleh kosong"),
  icon: z.string().optional(),
  href: z.string().optional(),
});

export const socialLinkSchema = z.object({
  name: z.string().min(1, "Name tidak boleh kosong"),
  href: z.string().url("URL tidak valid"),
  gradient: z.string().min(1, "Gradient tidak boleh kosong"),
});

export const brandNavSchema = z.object({
  name: z.string().min(1, "Name tidak boleh kosong"),
  tagline: z.string().min(1, "Tagline tidak boleh kosong"),
  copyright: z.object({
    text: z.string().min(1, "Copyright text tidak boleh kosong"),
    suffix: z.string().min(1, "Suffix tidak boleh kosong"),
    flag: z.string().min(1, "Flag tidak boleh kosong"),
  }),
});

// Content schemas
export const testimonialDataSchema = z.object({
  name: z.string().min(1, "Name tidak boleh kosong"),
  role: z.string().min(1, "Role tidak boleh kosong"),
  location: z.string().min(1, "Location tidak boleh kosong"),
  image: z.string().url("Image URL tidak valid"),
  rating: z.number().min(1).max(5, "Rating harus antara 1-5"),
  comment: z.string().min(10, "Comment minimal 10 karakter"),
  package: z.string().min(1, "Package tidak boleh kosong"),
});

export const packageDataSchema = z.object({
  name: z.string().min(1, "Name tidak boleh kosong"),
  icon: z.string().min(1, "Icon tidak boleh kosong"),
  speed: z.string().min(1, "Speed tidak boleh kosong"),
  quota: z.string().min(1, "Quota tidak boleh kosong"),
  price: z.string().min(1, "Price tidak boleh kosong"),
  originalPrice: z.string().min(1, "Original price tidak boleh kosong"),
  features: z.array(z.string().min(1)).min(1, "Minimal 1 feature"),
  popular: z.boolean(),
  color: z.enum(["orange", "blue", "green", "purple", "pink"]),
  character: z.string().min(1, "Character tidak boleh kosong"),
});

export const serviceDataSchema = z.object({
  title: z.string().min(1, "Title tidak boleh kosong"),
  description: z.string().min(10, "Description minimal 10 karakter"),
  features: z.array(z.string().min(1)).min(1, "Minimal 1 feature"),
  color: z.enum(["orange", "blue", "green", "purple", "pink"]),
});

export const faqDataSchema = z.object({
  question: z.string().min(5, "Question minimal 5 karakter"),
  answer: z.string().min(10, "Answer minimal 10 karakter"),
});

// Loading schemas
export const loadingStageSchema = z.object({
  text: z.string().min(1, "Text tidak boleh kosong"),
  icon: z.string().min(1, "Icon tidak boleh kosong"),
  progress: z.number().min(0).max(100, "Progress harus antara 0-100"),
});

export const loadingStatSchema = z.object({
  value: z.string().min(1, "Value tidak boleh kosong"),
  label: z.string().min(1, "Label tidak boleh kosong"),
  color: z.string().min(1, "Color tidak boleh kosong"),
  textColor: z.string().min(1, "Text color tidak boleh kosong"),
});

// UI schemas
export const themeColorsSchema = z.record(z.string().min(1, "Color value tidak boleh kosong"));

export const animationConfigSchema = z.object({
  enabled: z.boolean(),
  duration: z.object({
    fast: z.string().regex(/^\d+(\.\d+)?(s|ms)$/, "Duration format tidak valid"),
    normal: z.string().regex(/^\d+(\.\d+)?(s|ms)$/, "Duration format tidak valid"),
    slow: z.string().regex(/^\d+(\.\d+)?(s|ms)$/, "Duration format tidak valid"),
  }),
});

// Environment schemas
export const environmentSchema = z.enum(["development", "production", "test"]);

export const environmentConfigSchema = z.object({
  NODE_ENV: environmentSchema,
  NEXT_PUBLIC_APP_URL: z.string().url("App URL tidak valid").optional(),
  NEXT_PUBLIC_APP_NAME: z.string().min(1, "App name tidak boleh kosong").optional(),
  NEXT_PUBLIC_APP_VERSION: z.string().min(1, "App version tidak boleh kosong").optional(),
  PORT: z.string().regex(/^\d+$/, "Port harus berupa angka").optional(),

  // API
  NEXT_PUBLIC_API_URL: z.string().optional(),
  API_SECRET_KEY: z.string().optional(),
  API_TIMEOUT: z.string().regex(/^\d+$/, "Timeout harus berupa angka").optional(),
  API_RETRIES: z.string().regex(/^\d+$/, "Retries harus berupa angka").optional(),

  // External services
  WHATSAPP_API_KEY: z.string().optional(),
  WHATSAPP_PHONE_NUMBER: z.string().regex(/^\d+$/, "Phone number harus berupa angka").optional(),
  GOOGLE_MAPS_API_KEY: z.string().optional(),

  // SMTP
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.string().regex(/^\d+$/, "Port harus berupa angka").optional(),
  SMTP_USER: z.string().email("Email format tidak valid").optional(),
  SMTP_PASSWORD: z.string().optional(),

  // Analytics
  GOOGLE_ANALYTICS_ID: z.string().optional(),
  SENTRY_DSN: z.string().url("Sentry DSN URL tidak valid").optional(),
  HOTJAR_ID: z.string().optional(),

  // Security
  JWT_SECRET: z.string().min(32, "JWT secret minimal 32 karakter").optional(),
  NEXTAUTH_SECRET: z.string().min(32, "NextAuth secret minimal 32 karakter").optional(),
  NEXTAUTH_URL: z.string().url("NextAuth URL tidak valid").optional(),
  ENCRYPTION_KEY: z.string().length(32, "Encryption key harus 32 karakter").optional(),

  // Database
  DATABASE_URL: z.string().url("Database URL tidak valid").optional(),
  DATABASE_HOST: z.string().optional(),
  DATABASE_PORT: z.string().regex(/^\d+$/, "Port harus berupa angka").optional(),
  DATABASE_NAME: z.string().optional(),
  DATABASE_USER: z.string().optional(),
  DATABASE_PASSWORD: z.string().optional(),
});

// Component prop schemas
export const colorVariantSchema = z.enum(["orange", "blue", "green", "purple", "pink"]);

export const productCardPropsSchema = z.object({
  name: z.string().min(1, "Name tidak boleh kosong"),
  icon: z.string().min(1, "Icon tidak boleh kosong"),
  speed: z.string().min(1, "Speed tidak boleh kosong"),
  quota: z.string().min(1, "Quota tidak boleh kosong"),
  price: z.string().min(1, "Price tidak boleh kosong"),
  originalPrice: z.string().optional(),
  features: z.array(z.string().min(1)).min(1, "Minimal 1 feature"),
  popular: z.boolean().optional().default(false),
  color: colorVariantSchema,
  character: z.string().optional(),
});

// Export semua schemas
export const schemas = {
  // Base schemas
  configBase: configBaseSchema,

  // API schemas
  apiResponse: apiResponseSchema,
  paginatedResponse: paginatedResponseSchema,
  contactFormData: contactFormDataSchema,
  packageInquiryData: packageInquiryDataSchema,
  testimonialSubmissionData: testimonialSubmissionDataSchema,
  coverageCheckData: coverageCheckDataSchema,
  newsletterSubscriptionData: newsletterSubscriptionDataSchema,
  supportTicketData: supportTicketDataSchema,
  speedTestResult: speedTestResultSchema,

  // Navigation schemas
  navItem: navItemSchema,
  socialLink: socialLinkSchema,
  brandNav: brandNavSchema,

  // Content schemas
  testimonialData: testimonialDataSchema,
  packageData: packageDataSchema,
  serviceData: serviceDataSchema,
  faqData: faqDataSchema,

  // Loading schemas
  loadingStage: loadingStageSchema,
  loadingStat: loadingStatSchema,

  // UI schemas
  themeColors: themeColorsSchema,
  animationConfig: animationConfigSchema,

  // Environment schemas
  environment: environmentSchema,
  environmentConfig: environmentConfigSchema,

  // Component schemas
  colorVariant: colorVariantSchema,
  productCardProps: productCardPropsSchema,
} as const;
