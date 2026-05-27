import type { Metadata } from "next";

/**
 * Site configuration and SEO metadata.
 * Centralizing these tokens ensures consistency across the application.
 */
export const SITE_CONFIG = {
  title: "TheProgrammer | Developer Portfolio",
  description: "Professional 1-page portfolio landing page for Software Engineer",
  author: "TheProgrammer",
  url: "https://the-programmer-portfolio.vercel.app", // Replace with actual production URL
  ogImage: "/og-image.png",
  locale: "uk",
  robots: "index, follow",
} as const;

/**
 * Global SEO metadata configuration for the Root Layout.
 */
export const ROOT_METADATA: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.author}`,
  },
  description: SITE_CONFIG.description,
  robots: SITE_CONFIG.robots,
  openGraph: {
    type: "website",
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.title,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
  },
};
