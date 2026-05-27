"use client";

import { useState, useEffect } from "react";

/**
 * Custom hook to track viewport dimensions and identify mobile viewport shifts.
 * Optimized for cross-browser stability (Safari iOS, Chrome Android).
 */
export const useViewport = () => {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Use a passive listener for better scroll/resize performance
    window.addEventListener("resize", handleResize, { passive: true });
    
    // Initial check
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isExtraSmall = width > 0 && width < 320;
  const isMobile = width > 0 && width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

  return { width, isExtraSmall, isMobile, isTablet, isDesktop };
};
