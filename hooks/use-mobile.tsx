/**
 * MOBILE INTERACTION HOOKS
 * ========================
 *
 * React hooks untuk enhanced mobile experience dan touch interactions.
 */

import { useState, useEffect, useCallback } from "react";

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;

// Enhanced mobile detection hook
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);
  const [isTablet, setIsTablet] = useState(false);
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("desktop");

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      const isMobileDevice = width < MOBILE_BREAKPOINT;
      const isTabletDevice = width >= MOBILE_BREAKPOINT && width < TABLET_BREAKPOINT;

      setIsMobile(isMobileDevice);
      setIsTablet(isTabletDevice);

      if (isMobileDevice) {
        setScreenSize("mobile");
      } else if (isTabletDevice) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return {
    isMobile: !!isMobile,
    isTablet,
    isDesktop: !isMobile && !isTablet,
    screenSize,
  };
}

// Touch gesture hook
export function useTouchGestures(
  onSwipeLeft?: () => void,
  onSwipeRight?: () => void,
  onSwipeUp?: () => void,
  onSwipeDown?: () => void,
  threshold = 50
) {
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);
  const [touchEnd, setTouchEnd] = useState<{ x: number; y: number } | null>(null);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    const touch = e.touches[0];
    setTouchStart({ x: touch.clientX, y: touch.clientY });
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    const touch = e.touches[0];
    setTouchEnd({ x: touch.clientX, y: touch.clientY });
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;

    const deltaX = touchStart.x - touchEnd.x;
    const deltaY = touchStart.y - touchEnd.y;
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);

    // Horizontal swipe
    if (absDeltaX > absDeltaY && absDeltaX > threshold) {
      if (deltaX > 0) {
        onSwipeLeft?.();
      } else {
        onSwipeRight?.();
      }
    }
    // Vertical swipe
    else if (absDeltaY > absDeltaX && absDeltaY > threshold) {
      if (deltaY > 0) {
        onSwipeUp?.();
      } else {
        onSwipeDown?.();
      }
    }

    setTouchStart(null);
    setTouchEnd(null);
  }, [touchStart, touchEnd, threshold, onSwipeLeft, onSwipeRight, onSwipeUp, onSwipeDown]);

  return {
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
  };
}

// Mobile navigation hook
export function useMobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useIsMobile();

  const openNav = useCallback(() => {
    setIsOpen(true);
    // Prevent background scrolling
    if (isMobile) {
      document.body.style.overflow = "hidden";
    }
  }, [isMobile]);

  const closeNav = useCallback(() => {
    setIsOpen(false);
    // Restore background scrolling
    document.body.style.overflow = "unset";
  }, []);

  const toggleNav = useCallback(() => {
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  }, [isOpen, closeNav, openNav]);

  // Close nav on desktop resize
  useEffect(() => {
    if (!isMobile && isOpen) {
      closeNav();
    }
  }, [isMobile, isOpen, closeNav]);

  // Close nav on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeNav();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, closeNav]);

  return {
    isOpen,
    openNav,
    closeNav,
    toggleNav,
  };
}

// Viewport height hook (for mobile 100vh issues)
export function useViewportHeight() {
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const updateViewportHeight = () => {
      // Use visual viewport API if available, otherwise fallback to window height
      const height = window.visualViewport?.height || window.innerHeight;
      setViewportHeight(height);

      // Update CSS custom property
      document.documentElement.style.setProperty("--vh", `${height * 0.01}px`);
    };

    updateViewportHeight();

    // Listen for viewport changes (especially on mobile when virtual keyboard appears)
    if (window.visualViewport) {
      window.visualViewport.addEventListener("resize", updateViewportHeight);
      return () => window.visualViewport?.removeEventListener("resize", updateViewportHeight);
    } else {
      window.addEventListener("resize", updateViewportHeight);
      return () => window.removeEventListener("resize", updateViewportHeight);
    }
  }, []);

  return viewportHeight;
}

// Mobile form optimization hook
export function useMobileFormOptimization() {
  const { isMobile } = useIsMobile();

  const getInputProps = useCallback(
    (type: "text" | "email" | "tel" | "number" = "text") => {
      if (!isMobile) return {};

      const baseProps = {
        autoComplete: "off",
        autoCapitalize: "off",
        autoCorrect: "off",
        spellCheck: false,
      };

      switch (type) {
        case "email":
          return {
            ...baseProps,
            inputMode: "email" as const,
            type: "email",
            autoCapitalize: "none",
          };
        case "tel":
          return {
            ...baseProps,
            inputMode: "tel" as const,
            type: "tel",
          };
        case "number":
          return {
            ...baseProps,
            inputMode: "numeric" as const,
            type: "text", // Use text to prevent mobile number spinners
            pattern: "[0-9]*",
          };
        default:
          return baseProps;
      }
    },
    [isMobile]
  );

  return { getInputProps, isMobile };
}
