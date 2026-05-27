"use client";

import React, { useState, useEffect } from "react";
import { useViewport } from "@/hooks/useViewport";

/**
 * ViewportWarning Component
 * Displays an elegant, responsive overlay when the viewport drops below 
 * standard mobile widths (320px), preventing layout breakages.
 */
export const ViewportWarning = () => {
  const { isExtraSmall } = useViewport();
  const [mounted, setMounted] = useState(false);

  // Ensure component only renders on the client to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || !isExtraSmall) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-dark-bg/95 p-6 text-center backdrop-blur-md">
      <div className="max-w-xs space-y-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
          <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        
        <div className="space-y-2">
          <h3 className="font-ibm text-xl font-bold text-white">
            Viewport Too Small
          </h3>
          <p className="font-sans text-sm leading-relaxed text-gray-400">
            Your screen width is below the supported minimum. For the best experience, please use a device with a wider display.
          </p>
        </div>

        <div className="pt-4">
          <p className="font-dm text-[10px] font-medium tracking-widest text-brand-primary uppercase">
            Optimized for 320px+
          </p>
        </div>
      </div>
    </div>
  );
};
