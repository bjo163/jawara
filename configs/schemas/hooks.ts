/**
 * CONFIGURATION VALIDATION HOOKS
 * ==============================
 *
 * React hooks untuk validasi configuration dengan runtime type checking.
 */

"use client";

import { useMemo } from "react";
import { safeValidateConfig } from "./validator";
import { schemas } from "./index";

// Hook untuk validasi package data
export function useValidatedPackageData(packageData: unknown) {
  return useMemo(() => {
    const result = safeValidateConfig(schemas.packageData, packageData, "Package Data");

    if (!result.success) {
      console.warn("Package validation warning:", result.error);
      return null;
    }

    return result.data;
  }, [packageData]);
}

// Hook untuk validasi testimonial data
export function useValidatedTestimonialData(testimonialData: unknown) {
  return useMemo(() => {
    const result = safeValidateConfig(schemas.testimonialData, testimonialData, "Testimonial Data");

    if (!result.success) {
      console.warn("Testimonial validation warning:", result.error);
      return null;
    }

    return result.data;
  }, [testimonialData]);
}

// Hook untuk validasi service data
export function useValidatedServiceData(serviceData: unknown) {
  return useMemo(() => {
    const result = safeValidateConfig(schemas.serviceData, serviceData, "Service Data");

    if (!result.success) {
      console.warn("Service validation warning:", result.error);
      return null;
    }

    return result.data;
  }, [serviceData]);
}

// Hook untuk validasi FAQ data
export function useValidatedFAQData(faqData: unknown) {
  return useMemo(() => {
    const result = safeValidateConfig(schemas.faqData, faqData, "FAQ Data");

    if (!result.success) {
      console.warn("FAQ validation warning:", result.error);
      return null;
    }

    return result.data;
  }, [faqData]);
}

// Hook untuk validasi animation config
export function useValidatedAnimationConfig(animationConfig: unknown) {
  return useMemo(() => {
    const result = safeValidateConfig(schemas.animationConfig, animationConfig, "Animation Config");

    if (!result.success) {
      console.warn("Animation config validation warning:", result.error);
      return null;
    }

    return result.data;
  }, [animationConfig]);
}

// Hook untuk validasi component props
export function useValidatedProductCardProps(props: unknown) {
  return useMemo(() => {
    const result = safeValidateConfig(schemas.productCardProps, props, "ProductCard Props");

    if (!result.success) {
      console.warn("ProductCard props validation warning:", result.error);
      return null;
    }

    return result.data;
  }, [props]);
}

// Hook untuk development mode validation yang tidak memblokir rendering
export function useDevValidation(enabled = process.env.NODE_ENV === "development") {
  return useMemo(() => {
    if (!enabled) return { validate: () => null };

    return {
      validatePackage: (data: unknown) => {
        const result = safeValidateConfig(schemas.packageData, data, "Package");
        if (!result.success) {
          console.warn("🔍 Dev validation warning for Package:", result.error);
        }
        return result.success ? result.data : null;
      },

      validateTestimonial: (data: unknown) => {
        const result = safeValidateConfig(schemas.testimonialData, data, "Testimonial");
        if (!result.success) {
          console.warn("🔍 Dev validation warning for Testimonial:", result.error);
        }
        return result.success ? result.data : null;
      },

      validateService: (data: unknown) => {
        const result = safeValidateConfig(schemas.serviceData, data, "Service");
        if (!result.success) {
          console.warn("🔍 Dev validation warning for Service:", result.error);
        }
        return result.success ? result.data : null;
      },

      validateFAQ: (data: unknown) => {
        const result = safeValidateConfig(schemas.faqData, data, "FAQ");
        if (!result.success) {
          console.warn("🔍 Dev validation warning for FAQ:", result.error);
        }
        return result.success ? result.data : null;
      },
    };
  }, [enabled]);
}
