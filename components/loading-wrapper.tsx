"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Wifi, Sparkles } from "lucide-react";

interface LoadingWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

export function LoadingWrapper({ children, delay = 500 }: LoadingWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (isLoading) {
    return (
      <div className="jawara-loading min-h-[400px] flex flex-col items-center justify-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center animate-pulse">
            <Wifi className="h-10 w-10 text-white" />
          </div>
          <Sparkles className="absolute -top-2 -right-2 h-8 w-8 text-yellow-400 animate-spin" />
        </div>

        <div className="jawara-loading-dots mb-6">
          <div className="jawara-loading-dot"></div>
          <div className="jawara-loading-dot"></div>
          <div className="jawara-loading-dot"></div>
        </div>

        <p className="jawara-text text-gray-400 text-lg font-semibold">Memuat konten Jawara-Net...</p>
      </div>
    );
  }

  return <>{children}</>;
}
