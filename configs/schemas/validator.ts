/**
 * CONFIGURATION VALIDATOR UTILITIES
 * =================================
 *
 * Utility functions untuk validasi runtime configuration objects.
 */

import { z } from "zod";
import { schemas } from "./index";

// Generic validator function
export function validateConfig<T>(schema: z.ZodSchema<T>, data: unknown, configName?: string): T {
  try {
    return schema.parse(data);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessages = error.errors.map((err) => `${err.path.join(".")}: ${err.message}`).join(", ");

      throw new Error(`Configuration validation failed${configName ? ` for ${configName}` : ""}: ${errorMessages}`);
    }
    throw error;
  }
}

// Safe validator yang return result object
export function safeValidateConfig<T>(
  schema: z.ZodSchema<T>,
  data: unknown,
  configName?: string
): { success: true; data: T } | { success: false; error: string } {
  try {
    const validData = validateConfig(schema, data, configName);
    return { success: true, data: validData };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown validation error",
    };
  }
}

// Specific validators untuk common configurations
export const validators = {
  // Environment validation
  validateEnvironment: (env: unknown) => validateConfig(schemas.environmentConfig, env, "Environment"),

  safeValidateEnvironment: (env: unknown) => safeValidateConfig(schemas.environmentConfig, env, "Environment"),

  // Package validation
  validatePackage: (pkg: unknown) => validateConfig(schemas.packageData, pkg, "Package"),

  validatePackages: (packages: unknown[]) => {
    if (!Array.isArray(packages)) {
      throw new Error("Packages must be an array");
    }
    return packages.map((pkg, index) => validateConfig(schemas.packageData, pkg, `Package[${index}]`));
  },

  // Testimonial validation
  validateTestimonial: (testimonial: unknown) => validateConfig(schemas.testimonialData, testimonial, "Testimonial"),

  validateTestimonials: (testimonials: unknown[]) => {
    if (!Array.isArray(testimonials)) {
      throw new Error("Testimonials must be an array");
    }
    return testimonials.map((testimonial, index) =>
      validateConfig(schemas.testimonialData, testimonial, `Testimonial[${index}]`)
    );
  },

  // Service validation
  validateService: (service: unknown) => validateConfig(schemas.serviceData, service, "Service"),

  // FAQ validation
  validateFAQ: (faq: unknown) => validateConfig(schemas.faqData, faq, "FAQ"),

  validateFAQs: (faqs: unknown[]) => {
    if (!Array.isArray(faqs)) {
      throw new Error("FAQs must be an array");
    }
    return faqs.map((faq, index) => validateConfig(schemas.faqData, faq, `FAQ[${index}]`));
  },

  // Loading validation
  validateLoadingStage: (stage: unknown) => validateConfig(schemas.loadingStage, stage, "Loading Stage"),

  validateLoadingStages: (stages: unknown[]) => {
    if (!Array.isArray(stages)) {
      throw new Error("Loading stages must be an array");
    }
    return stages.map((stage, index) => validateConfig(schemas.loadingStage, stage, `Loading Stage[${index}]`));
  },

  // Component props validation
  validateProductCardProps: (props: unknown) => validateConfig(schemas.productCardProps, props, "ProductCard Props"),

  // Theme validation
  validateAnimationConfig: (config: unknown) => validateConfig(schemas.animationConfig, config, "Animation Config"),

  validateThemeColors: (colors: unknown) => validateConfig(schemas.themeColors, colors, "Theme Colors"),
  // Navigation validation
  validateNavItem: (item: unknown) => validateConfig(schemas.navItem, item, "Nav Item"),

  validateNavItems: (items: unknown[]) => {
    if (!Array.isArray(items)) {
      throw new Error("Nav items must be an array");
    }
    return items.map((item, index) => validateConfig(schemas.navItem, item, `Nav Item[${index}]`));
  },

  // API validation
  validateContactForm: (data: unknown) => validateConfig(schemas.contactFormData, data, "Contact Form"),

  validatePackageInquiry: (data: unknown) => validateConfig(schemas.packageInquiryData, data, "Package Inquiry"),

  validateTestimonialSubmission: (data: unknown) =>
    validateConfig(schemas.testimonialSubmissionData, data, "Testimonial Submission"),

  validateCoverageCheck: (data: unknown) => validateConfig(schemas.coverageCheckData, data, "Coverage Check"),

  validateNewsletterSubscription: (data: unknown) =>
    validateConfig(schemas.newsletterSubscriptionData, data, "Newsletter Subscription"),

  validateSupportTicket: (data: unknown) => validateConfig(schemas.supportTicketData, data, "Support Ticket"),

  validateSpeedTestResult: (data: unknown) => validateConfig(schemas.speedTestResult, data, "Speed Test Result"),

  validateApiResponse: (response: unknown) => validateConfig(schemas.apiResponse, response, "API Response"),

  validatePaginatedResponse: (response: unknown) =>
    validateConfig(schemas.paginatedResponse, response, "Paginated Response"),
} as const;

// Development mode validator yang log warnings instead of throwing
export function devValidateConfig<T>(schema: z.ZodSchema<T>, data: unknown, configName?: string): T | undefined {
  if (process.env.NODE_ENV === "development") {
    const result = safeValidateConfig(schema, data, configName);
    if (!result.success) {
      console.warn(`⚠️ Configuration validation warning: ${result.error}`);
      return undefined;
    }
    return result.data;
  }

  // Di production, tetap throw error
  return validateConfig(schema, data, configName);
}

// Batch validator untuk multiple configurations
export function validateConfigs(
  configs: Array<{
    schema: z.ZodSchema<unknown>;
    data: unknown;
    name: string;
  }>
): Array<{ name: string; success: boolean; data?: unknown; error?: string }> {
  return configs.map(({ schema, data, name }) => {
    const result = safeValidateConfig(schema, data, name);
    return {
      name,
      success: result.success,
      ...(result.success ? { data: result.data } : { error: result.error }),
    };
  });
}
