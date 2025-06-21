/**
 * CONTACT CONFIGURATION TYPES
 * ===========================
 *
 * Types untuk contact information dan communication channels.
 */

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: {
    street: string;
    city: string;
    postal: string;
    country: string;
  };
}
