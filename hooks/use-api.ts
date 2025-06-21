"use client";

/**
 * API CLIENT HOOKS
 * ================
 *
 * React hooks untuk interacting dengan API client dalam components.
 */

import { useState, useCallback, useEffect } from "react";
import { api, apiClient } from "@/lib/api-client";
import { useApiMetrics } from "@/lib/api-monitor";

// Generic API call hook
export function useApiCall<TData, TResponse>(apiFunction: (data: TData) => Promise<TResponse>) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<TResponse | null>(null);

  const execute = useCallback(
    async (requestData: TData) => {
      setLoading(true);
      setError(null);

      try {
        const result = await apiFunction(requestData);
        setData(result);
        return result;
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
        setError(errorMessage);
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [apiFunction]
  );

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return {
    execute,
    loading,
    error,
    data,
    reset,
  };
}

// Specific hooks for common API calls
export function useContactForm() {
  return useApiCall(api.submitContactForm);
}

export function usePackageInquiry() {
  return useApiCall(api.submitPackageInquiry);
}

export function useTestimonialSubmission() {
  return useApiCall(api.submitTestimonial);
}

export function useCoverageCheck() {
  return useApiCall(api.checkCoverage);
}

export function useNewsletterSubscription() {
  return useApiCall(api.subscribeNewsletter);
}

export function useSupportTicket() {
  return useApiCall(api.createSupportTicket);
}

// API health monitoring hook
export function useApiHealth() {
  const [health, setHealth] = useState<{ healthy: boolean; latency: number } | null>(null);
  const [checking, setChecking] = useState(false);

  const checkHealth = useCallback(async () => {
    setChecking(true);
    try {
      const result = await apiClient.checkHealth();
      setHealth(result);
      return result;
    } catch (error) {
      setHealth({ healthy: false, latency: 0 });
      throw error;
    } finally {
      setChecking(false);
    }
  }, []);

  // Auto-check health on mount
  useEffect(() => {
    checkHealth();
  }, [checkHealth]);

  return {
    health,
    checking,
    checkHealth,
  };
}

// Form submission helper hook
export function useFormSubmission<TData>(
  submitFunction: (data: TData) => Promise<unknown>,
  onSuccess?: (result: unknown) => void,
  onError?: (error: string) => void
) {
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = useCallback(
    async (data: TData) => {
      setSubmitting(true);
      setSubmitError(null);
      setSubmitSuccess(false);

      try {
        const result = await submitFunction(data);
        setSubmitSuccess(true);
        onSuccess?.(result);
        return result;
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Submission failed";
        setSubmitError(errorMessage);
        onError?.(errorMessage);
        throw error;
      } finally {
        setSubmitting(false);
      }
    },
    [submitFunction, onSuccess, onError]
  );

  const resetSubmission = useCallback(() => {
    setSubmitError(null);
    setSubmitSuccess(false);
    setSubmitting(false);
  }, []);

  return {
    handleSubmit,
    submitting,
    submitError,
    submitSuccess,
    resetSubmission,
  };
}

// Speed test hook
export function useSpeedTest() {
  const [testing, setTesting] = useState(false);
  const [result, setResult] = useState<{ downloadSpeed: number; uploadSpeed: number; ping: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const runSpeedTest = useCallback(async () => {
    setTesting(true);
    setError(null);

    try {
      const response = await api.getSpeedTest();
      if (response.success && response.data) {
        setResult(response.data);
        return response.data;
      } else {
        throw new Error("Speed test failed");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Speed test failed";
      setError(errorMessage);
      throw err;
    } finally {
      setTesting(false);
    }
  }, []);

  return {
    runSpeedTest,
    testing,
    result,
    error,
  };
}

// Combined API status hook
export function useApiStatus() {
  const metrics = useApiMetrics();
  const { health, checking, checkHealth } = useApiHealth();

  return {
    metrics: metrics.getSummary(),
    health,
    checking,
    checkHealth,
    recentErrors: metrics.getRecentErrors(5),
    endpointStats: metrics.getEndpointStats(),
  };
}
