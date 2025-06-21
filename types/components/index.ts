/**
 * COMPONENT PROP INTERFACES
 * =========================
 *
 * Centralized interfaces untuk semua component props.
 */

import type { LucideIcon } from "lucide-react";

// Color variants yang umum digunakan
export type ColorVariant = "orange" | "blue" | "green" | "purple" | "pink";

// Product Card Props
export interface ProductCardProps {
  name: string;
  icon: string;
  speed: string;
  quota: string;
  price: string;
  originalPrice?: string;
  features: string[];
  popular?: boolean;
  color: ColorVariant;
  character?: string;
}

// Service Card Props
export interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: ColorVariant;
}

// Testimonial Card Props
export interface TestimonialCardProps {
  name: string;
  role: string;
  location: string;
  image: string;
  rating: number;
  comment: string;
  packageName: string;
}

// Section Title Props
export interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
}

// Section Wrapper Props
export interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: "default" | "nusantara" | "dark";
}

// Navigation Loader Props
export interface NavigationLoaderProps {
  isLoading: boolean;
  progress: number;
  currentSection?: string;
}

// Loading Wrapper Props
export interface LoadingWrapperProps {
  children: React.ReactNode;
  isLoading: boolean;
  loadingComponent?: React.ReactNode;
  className?: string;
}

// Navbar Props
export interface NavbarProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
  className?: string;
}

// Accordion Item Props
export interface AccordionItemProps {
  question: string;
  answer: string;
}

// Tech Timeline Props
export interface TimelineStep {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  color: ColorVariant;
  character: string;
  epicTitle: string;
}

export interface TechTimelineProps {
  steps: TimelineStep[];
}

// Internet Calculator Props
export interface DeviceCount {
  smartphone: number;
  laptop: number;
  tv: number;
  gaming: number;
}

export interface PackageRecommendation {
  name: string;
  speed: string;
  price: string;
  suitable: string[];
  character: string;
  color: ColorVariant;
}
