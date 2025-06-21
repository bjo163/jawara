"use client";

/**
 * API METRICS DISPLAY COMPONENT
 * =============================
 *
 * Development-only component untuk monitoring API performance.
 */

import { useApiMetrics } from "@/lib/api-monitor";

export function ApiMetricsDisplay() {
  const metrics = useApiMetrics();

  if (process.env.NODE_ENV !== "development") {
    return null;
  }

  const summary = metrics.getSummary();

  if (summary.totalRequests === 0) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: 10,
        right: 10,
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        color: "white",
        padding: "12px",
        fontSize: "11px",
        fontFamily: "monospace",
        zIndex: 9999,
        maxWidth: "280px",
        borderRadius: "8px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(8px)",
      }}
    >
      <h4 style={{ margin: "0 0 8px 0", fontSize: "12px", color: "#00ff88" }}>🔍 API Metrics (Dev)</h4>
      <div style={{ marginBottom: "4px" }}>
        📊 Requests: <span style={{ color: "#88ccff" }}>{summary.totalRequests}</span>
      </div>
      <div style={{ marginBottom: "4px" }}>
        ✅ Success:{" "}
        <span style={{ color: summary.successRate >= 95 ? "#00ff88" : "#ffaa00" }}>
          {summary.successRate.toFixed(1)}%
        </span>
      </div>
      <div style={{ marginBottom: "4px" }}>
        ⏱️ Avg Duration:{" "}
        <span style={{ color: summary.averageDuration < 1000 ? "#00ff88" : "#ffaa00" }}>
          {summary.averageDuration.toFixed(0)}ms
        </span>
      </div>
      <div style={{ marginBottom: "8px" }}>
        🐌 Slow Requests:{" "}
        <span style={{ color: summary.slowRequests > 0 ? "#ff6666" : "#00ff88" }}>{summary.slowRequests}</span>
      </div>
      <button
        onClick={metrics.clearMetrics}
        style={{
          marginTop: "5px",
          fontSize: "10px",
          padding: "4px 8px",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          color: "white",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        🗑️ Clear
      </button>
    </div>
  );
}
