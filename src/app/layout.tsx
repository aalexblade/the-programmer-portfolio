import type { Metadata } from "next";
import { DM_Mono, IBM_Plex_Mono } from "next/font/google";
import "../styles/globals.css";

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-ibm-mono",
});

export const metadata: Metadata = {
  title: "TheProgrammer | Developer Portfolio",
  description: "Professional portfolio landing page for Software Engineer",
  keywords: [
    "Front-end Developer",
    "Software Engineer",
    "Portfolio",
    "React",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={`${dmMono.variable} ${ibmPlexMono.variable}`}>
      <body className="bg-[#0D0E11] text-[#E4E6EB] font-ibm antialiased selection:bg-[#3B82F6] selection:text-white">
        {children}
      </body>
    </html>
  );
}
