"use client";

import { useState } from "react";

/**
 * MobileMenu Client Component
 * Handles the state and toggle logic for the mobile navigation menu.
 * Isolated from the Server Component Header to prevent serialization errors.
 */
export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button 
      className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden" 
      onClick={() => setIsOpen(!isOpen)}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <span className={`h-0.5 w-6 bg-white transition-all ${isOpen ? "translate-y-2 rotate-45" : ""}`}></span>
      <span className={`h-0.5 w-6 bg-white transition-all ${isOpen ? "opacity-0" : ""}`}></span>
      <span className={`h-0.5 w-6 bg-white transition-all ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}></span>
    </button>
  );
};
