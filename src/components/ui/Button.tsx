"use client";

import React from "react";
import Link from "next/link";

/**
 * Props for the Button component.
 * Supports both standard HTML button attributes and Next.js Link props.
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual style variant of the button.
   */
  variant?: "primary" | "secondary";
  /**
   * If provided, the button will render as a Next.js Link.
   */
  href?: string;
  /**
   * Optional custom classes to append.
   */
  className?: string;
  /**
   * The content to be rendered inside the button.
   */
  children: React.ReactNode;
}

/**
 * A highly reusable Button component that dynamically renders as 
 * either a <button> or a Next.js <Link>.
 */
export const Button = ({
  variant = "primary",
  href,
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

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};
