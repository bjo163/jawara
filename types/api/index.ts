/**
 * API TYPES - REQUEST & RESPONSE INTERFACES
 * =========================================
 *
 * Standardized types untuk semua API interactions.
 */

// Base API response structure
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
  timestamp: string;
  requestId?: string;
}

// Paginated response
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrevious: boolean;
  };
}

// Error response structure
export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
  stack?: string; // Only in development
}

// Standard API error response
export interface ErrorResponse extends ApiResponse<never> {
  success: false;
  error: string;
  errorCode?: string;
  details?: ApiError;
}

// Success response wrapper
export interface SuccessResponse<T> extends ApiResponse<T> {
  success: true;
  data: T;
}

// Contact form submission types
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  packageInterest?: string;
  location?: string;
}

export type ContactFormResponse = SuccessResponse<{
  submissionId: string;
  estimatedResponseTime: string;
  supportTicketNumber?: string;
}>;

// Package inquiry types
export interface PackageInquiryData {
  packageId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  location: string;
  installationAddress: string;
  preferredInstallationDate?: string;
  additionalNotes?: string;
}

export type PackageInquiryResponse = SuccessResponse<{
  inquiryId: string;
  packageName: string;
  estimatedPrice: string;
  installationTimeframe: string;
  nextSteps: string[];
}>;

// Testimonial submission types
export interface TestimonialSubmissionData {
  customerName: string;
  customerEmail: string;
  packageUsed: string;
  rating: number; // 1-5
  comment: string;
  location: string;
  usageDuration: string;
  allowPublicDisplay: boolean;
  customerPhoto?: string; // base64 or URL
}

export type TestimonialSubmissionResponse = SuccessResponse<{
  submissionId: string;
  status: "pending_review" | "approved" | "published";
  reviewTimeframe: string;
}>;

// Coverage area check types
export interface CoverageCheckData {
  address: string;
  latitude?: number;
  longitude?: number;
  postalCode?: string;
  city: string;
  province: string;
}

export type CoverageCheckResponse = SuccessResponse<{
  isAvailable: boolean;
  coverageType?: "fiber" | "wireless" | "hybrid";
  availablePackages: string[];
  estimatedInstallationTime?: string;
  installationCost?: string;
  nearestServicePoint?: {
    name: string;
    distance: string;
    contact: string;
  };
  plannedExpansion?: {
    estimatedDate: string;
    status: "planned" | "in_progress" | "completed";
  };
}>;

// Newsletter subscription types
export interface NewsletterSubscriptionData {
  email: string;
  name?: string;
  interests: string[]; // packages, promotions, tech_updates, etc.
  location?: string;
}

export type NewsletterSubscriptionResponse = SuccessResponse<{
  subscriptionId: string;
  confirmationRequired: boolean;
  preferences: {
    frequency: string;
    categories: string[];
  };
}>;

// Support ticket types
export interface SupportTicketData {
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  category: "technical" | "billing" | "general" | "complaint";
  priority: "low" | "medium" | "high" | "urgent";
  subject: string;
  description: string;
  packageUsed?: string;
  attachments?: string[]; // URLs or base64
}

export type SupportTicketResponse = SuccessResponse<{
  ticketId: string;
  ticketNumber: string;
  status: "open" | "in_progress" | "resolved" | "closed";
  assignedAgent?: string;
  estimatedResolutionTime: string;
  supportChannels: {
    email: string;
    phone: string;
    whatsapp: string;
  };
}>;

// Internet speed test result types
export interface SpeedTestResult {
  testId: string;
  timestamp: string;
  downloadSpeed: number; // Mbps
  uploadSpeed: number; // Mbps
  ping: number; // ms
  jitter: number; // ms
  packetLoss: number; // percentage
  serverLocation: string;
  userLocation?: string;
  isp: string;
  connectionType?: string;
}

export type SpeedTestResponse = SuccessResponse<SpeedTestResult>;

// Health check types
export type HealthCheckResponse = SuccessResponse<{
  status: "healthy" | "degraded" | "unhealthy";
  version: string;
  uptime: number;
  services: {
    database: "healthy" | "unhealthy";
    external_apis: "healthy" | "unhealthy";
    email_service: "healthy" | "unhealthy";
  };
  performance: {
    responseTime: number;
    memoryUsage: number;
    cpuUsage: number;
  };
}>;

// Generic request options
export interface ApiRequestOptions {
  timeout?: number;
  retries?: number;
  headers?: Record<string, string>;
  signal?: AbortSignal;
}

// API client configuration
export interface ApiClientConfig {
  baseUrl: string;
  timeout: number;
  retries: number;
  defaultHeaders: Record<string, string>;
  interceptors?: {
    request?: (config: ApiRequestOptions) => ApiRequestOptions;
    response?: <T>(response: ApiResponse<T>) => ApiResponse<T>;
    error?: (error: ApiError) => ApiError;
  };
}
