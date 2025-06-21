/**
 * LOADING SYSTEM TYPES
 * ====================
 *
 * Types untuk loading screens, progress bars, dan loading states.
 */

import type { BackgroundElement } from "../shared/base";

// Loading stage configuration
export interface LoadingStage {
  text: string;
  icon: string;
  progress: number;
}

// Loading statistics display
export interface LoadingStat {
  icon: React.ComponentType<{ className?: string }>; // Lucide icon component
  value: string;
  label: string;
  color: string;
  textColor: string;
}

// Loading brand information
export interface LoadingBrand {
  title: string;
  tagline: string;
  description: string;
  decorativeIcons: string[];
}

// Complete loading configuration
export interface LoadingConfig {
  stages: LoadingStage[];
  brand: LoadingBrand;
  stats: LoadingStat[];
  progress: {
    labels: {
      title: string;
      percentage: (progress: number) => string;
    };
    styling: {
      barGradient: string;
      backgroundColor: string;
      height: string;
    };
    animation: {
      duration: string;
      easing: string;
    };
  };
  dots: Array<{
    gradient: string;
    delay: string;
  }>;
  timing: {
    stageInterval: number;
    progressUpdateInterval: number;
    finalDelay: number;
  };
  background: BackgroundElement[];
}
