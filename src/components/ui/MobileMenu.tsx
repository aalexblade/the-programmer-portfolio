"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAVIGATION_LINKS } from "@/constants/navigation";

/**
 * Technical Icon Components (Inline SVG to avoid missing dependencies)
 */
const Icons = {
  Home: () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  User: () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
  ),
  Code2: () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  Briefcase: () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Mail: () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  FileText: () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
  X: () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
};

const getIconForLabel = (label: string) => {
  switch (label.toLowerCase()) {
    case "home": return <Icons.Home />;
    case "about": return <Icons.User />;
    case "projects": return <Icons.Code2 />;
    case "experience": return <Icons.Briefcase />;
    case "contact": return <Icons.Mail />;
    default: return <Icons.Home />;
  }
};

/**
 * MobileMenu Client Component
 * Refactored into a premium cyber-geek engineering layout.
 */
export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Toggle Button */}
      <button 
        className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden" 
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`}></span>
        <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
        <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}></span>
      </button>

      {/* Premium Cyber-Geek Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0D0E11]/95 p-8 backdrop-blur-xl md:hidden">
          {/* Subtle Technical Grid Background Overlay */}
          <div 
            className="pointer-events-none absolute inset-0 -z-10 opacity-5" 
            style={{ 
              backgroundImage: "radial-gradient(#ffffff 0.5px, transparent 0.5px), linear-gradient(to right, #ffffff 0.5px, transparent 0.5px), linear-gradient(to bottom, #ffffff 0.5px, transparent 0.5px)",
              backgroundSize: "24px 24px"
            }}
          ></div>

          {/* Top Section: Branding & Close Button */}
          <div className="flex items-start justify-between">
            <div className="flex-1"></div>
            <h2 className="flex-1 text-center font-ibm text-2xl font-bold tracking-tight text-white whitespace-nowrap">
              Oleksandr Vasylenko
            </h2>
            <div className="flex flex-1 justify-end">
              <button 
                onClick={closeMenu}
                className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/5 text-white transition-colors hover:border-brand-primary/50 hover:bg-brand-primary/10"
              >
                <Icons.X />
              </button>
            </div>
          </div>

          {/* Middle Section: Technical Navigation Links */}
          <nav className="flex flex-col items-center justify-center gap-2">
            <div className="flex w-full max-w-xs flex-col gap-1">
              {NAVIGATION_LINKS.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="group relative flex items-center gap-4 py-4 px-6 transition-all"
                >
                  <div className="flex h-10 w-10 items-center justify-center text-brand-primary transition-transform group-hover:scale-110">
                    {getIconForLabel(link.label)}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-dm text-xl font-bold tracking-widest text-white uppercase transition-all group-hover:text-brand-primary group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
                      {link.label}
                    </span>
                    <div className="h-px w-0 bg-brand-primary/50 transition-all duration-300 group-hover:w-full"></div>
                  </div>
                </Link>
              ))}

              {/* Resume CTA inside Menu */}
              <Link 
                href="/resume.pdf"
                onClick={closeMenu}
                className="group relative flex items-center gap-4 py-4 px-6 transition-all"
              >
                <div className="flex h-10 w-10 items-center justify-center text-brand-accent transition-transform group-hover:scale-110">
                  <Icons.FileText />
                </div>
                <div className="flex flex-col">
                  <span className="font-dm text-xl font-bold tracking-widest text-white uppercase transition-all group-hover:text-brand-accent group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]">
                    Resume
                  </span>
                  <div className="h-px w-0 bg-brand-accent/50 transition-all duration-300 group-hover:w-full"></div>
                </div>
              </Link>
            </div>
          </nav>

          {/* Bottom Section: Technical Layout Badges */}
          <div className="flex flex-col items-center gap-4">
            <div className="h-px w-20 bg-white/10"></div>
            <div className="flex flex-wrap justify-center gap-4 opacity-40">
              {["Next.js 15", "React 19", "Tailwind CSS v4", "TypeScript"].map((badge) => (
                <span key={badge} className="font-dm text-[10px] font-medium tracking-tighter uppercase">
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
