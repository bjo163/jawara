/**
 * CONTENT DATA TYPES
 * ==================
 *
 * Types untuk semua content data seperti testimonials, packages, services, dll.
 */

import type { ColorVariant } from "../components";

// Testimonial data
export interface TestimonialData {
  name: string;
  role: string;
  location: string;
  image: string;
  rating: number;
  comment: string;
  package: string;
}

// Package data
export interface PackageData {
  name: string;
  icon: string;
  speed: string;
  quota: string;
  price: string;
  originalPrice: string;
  features: string[];
  popular: boolean;
  color: ColorVariant;
  character: string;
}

// Service data
export interface ServiceData {
  icon: React.ComponentType<{ className?: string }>; // Lucide icon component
  title: string;
  description: string;
  features: string[];
  color: string;
}

// FAQ data
export interface FAQData {
  question: string;
  answer: string;
}
