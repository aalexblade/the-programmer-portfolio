"use client";

import React from "react";

/**
 * Props for the Button component.
 * Extends standard HTML button attributes to ensure high reusability.
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual style variant of the button.
   * - 'primary': Standard filled button using the brand primary color.
   * - 'secondary': Outline/ghost variant emphasizing the technical font-dm aesthetic.
   */
  variant?: "primary" | "secondary";
  /**
   * Optional custom classes to append to the button.
   */
  className?: string;
  /**
   * The content to be rendered inside the button.
   */
  children: React.ReactNode;
}

/**
 * A highly reusable, accessible Button component styled with Tailwind v4 tokens.
 * 
 * @example
 * <Button variant="primary">Click Me</Button>
 * <Button variant="secondary" onClick={handleResume}>Download Resume</Button>
 */
export const Button = ({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  // Base styles shared across all variants
  const baseStyles = "inline-flex items-center justify-center px-6 py-2.5 text-sm font-dm font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

  // Variant-specific styles using Tailwind v4 design tokens
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-blue-600 shadow-sm shadow-brand-primary/20",
    secondary: "border border-white/10 text-white hover:bg-white/5 hover:border-white/20",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
