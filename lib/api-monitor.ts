/**
 * ENHANCED API MONITORING & LOGGING
 * =================================
 *
 * Advanced monitoring, logging, dan error tracking untuk API calls.
 */

export interface ApiMetrics {
  endpoint: string;
  method: string;
  status: number;
  duration: number;
  timestamp: Date;
  success: boolean;
  errorMessage?: string;
  retryCount?: number;
}

export interface ApiLogger {
  info: (message: string, meta?: Record<string, unknown>) => void;
  warn: (message: string, meta?: Record<string, unknown>) => void;
  error: (message: string, meta?: Record<string, unknown>) => void;
  debug: (message: string, meta?: Record<string, unknown>) => void;
}

export interface ApiMonitorConfig {
  enableLogging: boolean;
  enableMetrics: boolean;
  enableRetryTracking: boolean;
  logLevel: "debug" | "info" | "warn" | "error";
  maxMetricsHistory: number;
  performanceThreshold: number; // ms
}

class ApiMonitor {
  private metrics: ApiMetrics[] = [];
  private config: ApiMonitorConfig;
  private logger: ApiLogger;

  constructor(config: Partial<ApiMonitorConfig> = {}) {
    this.config = {
      enableLogging: true,
      enableMetrics: true,
      enableRetryTracking: true,
      logLevel: "info",
      maxMetricsHistory: 100,
      performanceThreshold: 2000,
      ...config,
    };

    // Simple console logger for now (could be enhanced with external services)
    this.logger = {
      info: (message, meta) => {
        if (this.shouldLog("info")) {
          console.info(`[API] ${message}`, meta);
        }
      },
      warn: (message, meta) => {
        if (this.shouldLog("warn")) {
          console.warn(`[API] ${message}`, meta);
        }
      },
      error: (message, meta) => {
        if (this.shouldLog("error")) {
          console.error(`[API] ${message}`, meta);
        }
      },
      debug: (message, meta) => {
        if (this.shouldLog("debug")) {
          console.debug(`[API] ${message}`, meta);
        }
      },
    };
  }

  private shouldLog(level: string): boolean {
    const levels = { debug: 0, info: 1, warn: 2, error: 3 };
    return levels[level as keyof typeof levels] >= levels[this.config.logLevel];
  }

  // Record API metrics
  recordMetric(metric: ApiMetrics): void {
    if (!this.config.enableMetrics) return;

    this.metrics.push(metric);

    // Limit metrics history
    if (this.metrics.length > this.config.maxMetricsHistory) {
      this.metrics = this.metrics.slice(-this.config.maxMetricsHistory);
    }

    // Log performance warnings
    if (metric.duration > this.config.performanceThreshold) {
      this.logger.warn(`Slow API call detected`, {
        endpoint: metric.endpoint,
        duration: metric.duration,
        threshold: this.config.performanceThreshold,
      });
    }

    // Log errors
    if (!metric.success) {
      this.logger.error(`API call failed`, {
        endpoint: metric.endpoint,
        status: metric.status,
        error: metric.errorMessage,
        retryCount: metric.retryCount,
      });
    }
  }

  // Log API request start
  logRequestStart(endpoint: string, method: string, data?: unknown): void {
    if (!this.config.enableLogging) return;

    this.logger.debug(`API Request Started`, {
      endpoint,
      method,
      hasData: !!data,
    });
  }

  // Log API request success
  logRequestSuccess(endpoint: string, duration: number, data?: unknown): void {
    if (!this.config.enableLogging) return;

    this.logger.info(`API Request Successful`, {
      endpoint,
      duration,
      hasData: !!data,
    });
  }

  // Log API request error
  logRequestError(endpoint: string, error: unknown, duration: number, retryCount?: number): void {
    if (!this.config.enableLogging) return;

    this.logger.error(`API Request Failed`, {
      endpoint,
      error: error instanceof Error ? error.message : "Unknown error",
      duration,
      retryCount,
    });
  }

  // Get metrics summary
  getMetricsSummary(): {
    totalRequests: number;
    successRate: number;
    averageDuration: number;
    errorRate: number;
    slowRequests: number;
  } {
    if (this.metrics.length === 0) {
      return {
        totalRequests: 0,
        successRate: 0,
        averageDuration: 0,
        errorRate: 0,
        slowRequests: 0,
      };
    }

    const successfulRequests = this.metrics.filter((m) => m.success).length;
    const totalDuration = this.metrics.reduce((sum, m) => sum + m.duration, 0);
    const slowRequests = this.metrics.filter((m) => m.duration > this.config.performanceThreshold).length;

    return {
      totalRequests: this.metrics.length,
      successRate: (successfulRequests / this.metrics.length) * 100,
      averageDuration: totalDuration / this.metrics.length,
      errorRate: ((this.metrics.length - successfulRequests) / this.metrics.length) * 100,
      slowRequests,
    };
  }

  // Get recent errors
  getRecentErrors(limit: number = 10): ApiMetrics[] {
    return this.metrics
      .filter((m) => !m.success)
      .slice(-limit)
      .reverse();
  }

  // Get endpoint performance stats
  getEndpointStats(): Record<
    string,
    {
      calls: number;
      successRate: number;
      averageDuration: number;
    }
  > {
    const stats: Record<string, { calls: number; success: number; totalDuration: number }> = {};

    this.metrics.forEach((metric) => {
      if (!stats[metric.endpoint]) {
        stats[metric.endpoint] = { calls: 0, success: 0, totalDuration: 0 };
      }

      stats[metric.endpoint].calls++;
      stats[metric.endpoint].totalDuration += metric.duration;
      if (metric.success) {
        stats[metric.endpoint].success++;
      }
    });

    // Convert to percentage and averages
    const result: Record<string, { calls: number; successRate: number; averageDuration: number }> = {};

    Object.entries(stats).forEach(([endpoint, data]) => {
      result[endpoint] = {
        calls: data.calls,
        successRate: (data.success / data.calls) * 100,
        averageDuration: data.totalDuration / data.calls,
      };
    });

    return result;
  }

  // Clear metrics history
  clearMetrics(): void {
    this.metrics = [];
    this.logger.info("API metrics cleared");
  }
}

// Create global monitor instance
export const apiMonitor = new ApiMonitor();

// React hook for accessing API metrics in components
export function useApiMetrics() {
  return {
    getSummary: () => apiMonitor.getMetricsSummary(),
    getRecentErrors: (limit?: number) => apiMonitor.getRecentErrors(limit),
    getEndpointStats: () => apiMonitor.getEndpointStats(),
    clearMetrics: () => apiMonitor.clearMetrics(),
  };
}
