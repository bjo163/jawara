/**
 * FORM VALIDATION UTILITIES
 * =========================
 *
 * Real-time form validation dengan Zod schemas dan error handling.
 */

import { z } from "zod";

// Base validation schemas
export const contactFormSchema = z.object({
  nama: z
    .string()
    .min(2, "Nama minimal 2 karakter")
    .max(50, "Nama maksimal 50 karakter")
    .regex(/^[a-zA-Z\s]+$/, "Nama hanya boleh huruf dan spasi"),

  email: z
    .string()
    .email("Format email tidak valid")
    .min(5, "Email minimal 5 karakter")
    .max(100, "Email maksimal 100 karakter"),

  whatsapp: z
    .string()
    .min(10, "Nomor WhatsApp minimal 10 digit")
    .max(15, "Nomor WhatsApp maksimal 15 digit")
    .regex(/^[0-9+\-\s()]+$/, "Format nomor tidak valid"),

  jenispesan: z.enum(["berlangganan", "complain", "kontak", "upgrade"], {
    errorMap: () => ({ message: "Pilih jenis pesan yang valid" }),
  }),

  pesan: z.string().min(10, "Pesan minimal 10 karakter").max(500, "Pesan maksimal 500 karakter"),

  // Optional fields for different message types
  alamat: z.string().optional(),
  paket: z.string().optional(),
  idpelanggan: z.string().optional(),
  lokasi: z.string().optional(),
});

// Conditional validation based on message type
export const getConditionalSchema = (jenispesan: string) => {
  const baseSchema = contactFormSchema;

  switch (jenispesan) {
    case "berlangganan":
      return baseSchema.extend({
        alamat: z.string().min(10, "Alamat minimal 10 karakter").max(200, "Alamat maksimal 200 karakter"),
        paket: z.string().min(1, "Pilih paket yang diinginkan"),
      });

    case "complain":
      return baseSchema.extend({
        idpelanggan: z
          .string()
          .min(5, "ID Pelanggan minimal 5 karakter")
          .max(20, "ID Pelanggan maksimal 20 karakter")
          .regex(/^[A-Z0-9]+$/, "Format ID Pelanggan tidak valid (huruf besar dan angka)"),
        lokasi: z.string().min(5, "Lokasi minimal 5 karakter").max(100, "Lokasi maksimal 100 karakter"),
      });

    default:
      return baseSchema;
  }
};

// Field validation result type
export interface FieldValidationResult {
  isValid: boolean;
  error?: string;
  warning?: string;
}

// Real-time field validation
export const validateField = (
  fieldName: string,
  value: unknown,
  schema: z.ZodSchema,
  context?: Record<string, unknown>
): FieldValidationResult => {
  try {
    // Get the field schema
    const fieldSchema = (schema as z.ZodObject<z.ZodRawShape>).shape[fieldName];
    if (!fieldSchema) {
      return { isValid: true };
    }

    // Validate the field
    fieldSchema.parse(value);

    // Additional context-based validation
    if (fieldName === "alamat" && context?.jenispesan !== "berlangganan") {
      return { isValid: true, warning: "Alamat opsional untuk jenis pesan ini" };
    }

    if (fieldName === "idpelanggan" && context?.jenispesan !== "complain") {
      return { isValid: true, warning: "ID Pelanggan tidak diperlukan untuk jenis pesan ini" };
    }

    return { isValid: true };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        isValid: false,
        error: error.errors[0]?.message || "Field tidak valid",
      };
    }
    return {
      isValid: false,
      error: "Terjadi kesalahan validasi",
    };
  }
};

// Full form validation
export const validateForm = (data: Record<string, unknown>) => {
  const schema = getConditionalSchema((data.jenispesan as string) || "");

  try {
    schema.parse(data);
    return {
      isValid: true,
      errors: {},
      data,
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      error.errors.forEach((err) => {
        const path = err.path.join(".");
        errors[path] = err.message;
      });

      return {
        isValid: false,
        errors,
        data: null,
      };
    }

    return {
      isValid: false,
      errors: { general: "Terjadi kesalahan validasi" },
      data: null,
    };
  }
};

// Phone number formatting utility
export const formatPhoneNumber = (value: string): string => {
  // Remove all non-numeric characters except +
  const cleaned = value.replace(/[^\d+]/g, "");
  // Auto-format Indonesian numbers
  if (cleaned.startsWith("08")) {
    return `+62${cleaned.substring(1)}`;
  }

  if (cleaned.startsWith("8") && cleaned.length >= 10) {
    return `+62${cleaned}`;
  }

  return cleaned;
};

// Email domain validation (additional check)
export const validateEmailDomain = (email: string): boolean => {
  const commonDomains = [
    "gmail.com",
    "yahoo.com",
    "outlook.com",
    "hotmail.com",
    "live.com",
    "aol.com",
    "icloud.com",
    "protonmail.com",
  ];

  const domain = email.split("@")[1]?.toLowerCase();
  return domain ? commonDomains.includes(domain) || domain.includes(".") : false;
};

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type ConditionalFormData = z.infer<ReturnType<typeof getConditionalSchema>>;
