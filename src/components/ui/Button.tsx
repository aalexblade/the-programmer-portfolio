import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outline";
}

export const Button = ({ 
  children, 
  href, 
  onClick, 
  className = "", 
  variant = "primary" 
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center px-5 py-2 text-sm font-dm transition-all focus:outline-none";
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-blue-600",
    outline: "border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
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
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};
