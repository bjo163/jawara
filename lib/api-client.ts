/**
 * API CLIENT UTILITIES
 * ===================
 *
 * Type-safe API client dengan validation, error handling, dan monitoring.
 */

import type {
  ApiResponse,
  ErrorResponse,
  SuccessResponse,
  ApiRequestOptions,
  ApiClientConfig,
  ContactFormData,
  ContactFormResponse,
  PackageInquiryData,
  PackageInquiryResponse,
  TestimonialSubmissionData,
  TestimonialSubmissionResponse,
  CoverageCheckData,
  CoverageCheckResponse,
  NewsletterSubscriptionData,
  NewsletterSubscriptionResponse,
  SupportTicketData,
  SupportTicketResponse,
  SpeedTestResponse,
  HealthCheckResponse,
} from "@/types/api";
import { validators } from "@/configs/schemas/validator";
import { env } from "@/configs/env";
import { apiMonitor } from "./api-monitor";

// API client class
export class ApiClient {
  private config: ApiClientConfig;

  constructor(config?: Partial<ApiClientConfig>) {
    this.config = {
      baseUrl: env.NEXT_PUBLIC_API_URL || "",
      timeout: 5000,
      retries: 3,
      defaultHeaders: {
        "Content-Type": "application/json",
      },
      ...config,
    };
  }
  // Generic request method
  private async request<T>(endpoint: string, options: RequestInit & ApiRequestOptions = {}): Promise<ApiResponse<T>> {
    const url = `${this.config.baseUrl}${endpoint}`;
    const controller = new AbortController();
    const method = (options.method || "GET").toUpperCase();
    const startTime = Date.now();

    // Log request start
    apiMonitor.logRequestStart(endpoint, method, options.body);

    // Setup timeout
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, options.timeout || this.config.timeout);

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...this.config.defaultHeaders,
          ...options.headers,
        },
        signal: options.signal || controller.signal,
      });

      clearTimeout(timeoutId);
      const duration = Date.now() - startTime;

      if (!response.ok) {
        const errorMessage = `HTTP ${response.status}: ${response.statusText}`;

        // Record failed metric
        apiMonitor.recordMetric({
          endpoint,
          method,
          status: response.status,
          duration,
          timestamp: new Date(),
          success: false,
          errorMessage,
        });

        apiMonitor.logRequestError(endpoint, new Error(errorMessage), duration);
        throw new Error(errorMessage);
      }

      const data = await response.json();

      // Validate response structure dan return as ApiResponse<T>
      const validatedResponse = validators.validateApiResponse(data);

      // Record successful metric
      apiMonitor.recordMetric({
        endpoint,
        method,
        status: response.status,
        duration,
        timestamp: new Date(),
        success: true,
      });

      apiMonitor.logRequestSuccess(endpoint, duration, data);

      return validatedResponse as ApiResponse<T>;
    } catch (error) {
      clearTimeout(timeoutId);
      const duration = Date.now() - startTime;
      const errorMessage = error instanceof Error ? error.message : "Unknown error";

      // Record failed metric
      apiMonitor.recordMetric({
        endpoint,
        method,
        status: 0, // Network error
        duration,
        timestamp: new Date(),
        success: false,
        errorMessage,
      });

      apiMonitor.logRequestError(endpoint, error, duration);

      const errorResponse: ErrorResponse = {
        success: false,
        error: errorMessage,
        timestamp: new Date().toISOString(),
      };

      return errorResponse;
    }
  }

  // Contact form submission
  async submitContactForm(data: ContactFormData): Promise<ContactFormResponse> {
    // Validate input data
    const validatedData = validators.validateContactForm(data);

    const response = await this.request<ContactFormResponse["data"]>("/api/contact", {
      method: "POST",
      body: JSON.stringify(validatedData),
    });

    if (!response.success) {
      throw new Error(response.error || "Contact form submission failed");
    }

    return response as ContactFormResponse;
  }

  // Package inquiry
  async submitPackageInquiry(data: PackageInquiryData): Promise<PackageInquiryResponse> {
    const validatedData = validators.validatePackageInquiry(data);

    const response = await this.request<PackageInquiryResponse["data"]>("/api/packages/inquiry", {
      method: "POST",
      body: JSON.stringify(validatedData),
    });

    if (!response.success) {
      throw new Error(response.error || "Package inquiry submission failed");
    }

    return response as PackageInquiryResponse;
  }

  // Testimonial submission
  async submitTestimonial(data: TestimonialSubmissionData): Promise<TestimonialSubmissionResponse> {
    const validatedData = validators.validateTestimonialSubmission(data);

    const response = await this.request<TestimonialSubmissionResponse["data"]>("/api/testimonials", {
      method: "POST",
      body: JSON.stringify(validatedData),
    });

    if (!response.success) {
      throw new Error(response.error || "Testimonial submission failed");
    }

    return response as TestimonialSubmissionResponse;
  }

  // Coverage area check
  async checkCoverage(data: CoverageCheckData): Promise<CoverageCheckResponse> {
    const validatedData = validators.validateCoverageCheck(data);

    const response = await this.request<CoverageCheckResponse["data"]>("/api/coverage/check", {
      method: "POST",
      body: JSON.stringify(validatedData),
    });

    if (!response.success) {
      throw new Error(response.error || "Coverage check failed");
    }

    return response as CoverageCheckResponse;
  }

  // Newsletter subscription
  async subscribeNewsletter(data: NewsletterSubscriptionData): Promise<NewsletterSubscriptionResponse> {
    const validatedData = validators.validateNewsletterSubscription(data);

    const response = await this.request<NewsletterSubscriptionResponse["data"]>("/api/newsletter/subscribe", {
      method: "POST",
      body: JSON.stringify(validatedData),
    });

    if (!response.success) {
      throw new Error(response.error || "Newsletter subscription failed");
    }

    return response as NewsletterSubscriptionResponse;
  }

  // Support ticket creation
  async createSupportTicket(data: SupportTicketData): Promise<SupportTicketResponse> {
    const validatedData = validators.validateSupportTicket(data);

    const response = await this.request<SupportTicketResponse["data"]>("/api/support/tickets", {
      method: "POST",
      body: JSON.stringify(validatedData),
    });

    if (!response.success) {
      throw new Error(response.error || "Support ticket creation failed");
    }

    return response as SupportTicketResponse;
  }

  // Speed test
  async getSpeedTest(): Promise<SpeedTestResponse> {
    const response = await this.request<SpeedTestResponse["data"]>("/api/speedtest");

    if (!response.success) {
      throw new Error(response.error || "Speed test failed");
    }

    return response as SpeedTestResponse;
  }

  // Health check
  async getHealthCheck(): Promise<HealthCheckResponse> {
    const response = await this.request<HealthCheckResponse["data"]>("/api/health");

    if (!response.success) {
      throw new Error(response.error || "Health check failed");
    }
    return response as HealthCheckResponse;
  }

  // Health check for monitoring API availability
  async checkHealth(): Promise<{ healthy: boolean; latency: number }> {
    const startTime = Date.now();

    try {
      await this.getHealthCheck();
      return {
        healthy: true,
        latency: Date.now() - startTime,
      };
    } catch {
      return {
        healthy: false,
        latency: Date.now() - startTime,
      };
    }
  }

  // Get API client configuration
  getConfig(): ApiClientConfig {
    return { ...this.config };
  }

  // Update API client configuration
  updateConfig(newConfig: Partial<ApiClientConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }
}

// Default API client instance
export const apiClient = new ApiClient();

// Utility functions
export const api = {
  // Contact
  submitContactForm: (data: ContactFormData) => apiClient.submitContactForm(data),

  // Packages
  submitPackageInquiry: (data: PackageInquiryData) => apiClient.submitPackageInquiry(data),

  // Testimonials
  submitTestimonial: (data: TestimonialSubmissionData) => apiClient.submitTestimonial(data),

  // Coverage
  checkCoverage: (data: CoverageCheckData) => apiClient.checkCoverage(data),

  // Newsletter
  subscribeNewsletter: (data: NewsletterSubscriptionData) => apiClient.subscribeNewsletter(data),

  // Support
  createSupportTicket: (data: SupportTicketData) => apiClient.createSupportTicket(data),

  // Speed test
  getSpeedTest: () => apiClient.getSpeedTest(),

  // Health
  getHealthCheck: () => apiClient.getHealthCheck(),
} as const;

// React hooks untuk API calls
export function useApiClient() {
  return apiClient;
}

// Error handling utilities
export function isApiError(response: ApiResponse<unknown>): response is ErrorResponse {
  return !response.success;
}

export function isApiSuccess<T>(response: ApiResponse<T>): response is SuccessResponse<T> {
  return response.success && response.data !== undefined;
}

// Request retry utility with monitoring
export async function withRetry<T>(
  requestFn: () => Promise<T>,
  maxRetries: number = 3,
  delay: number = 1000,
  endpoint: string = "unknown"
): Promise<T> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const result = await requestFn();

      // Log successful retry if this wasn't the first attempt
      if (attempt > 1) {
        apiMonitor.recordMetric({
          endpoint,
          method: "RETRY",
          status: 200,
          duration: 0,
          timestamp: new Date(),
          success: true,
          retryCount: attempt - 1,
        });
      }

      return result;
    } catch (error) {
      lastError = error;

      if (attempt === maxRetries) {
        // Record final failure
        apiMonitor.recordMetric({
          endpoint,
          method: "RETRY",
          status: 0,
          duration: 0,
          timestamp: new Date(),
          success: false,
          errorMessage: error instanceof Error ? error.message : "Max retries exceeded",
          retryCount: maxRetries,
        });

        break;
      }

      // Wait before retry with exponential backoff
      const retryDelay = delay * Math.pow(2, attempt - 1);
      await new Promise((resolve) => setTimeout(resolve, retryDelay));
    }
  }

  throw lastError || new Error("Max retries exceeded");
}
