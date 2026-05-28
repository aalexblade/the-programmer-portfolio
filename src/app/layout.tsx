import type { Metadata } from "next";
import { DM_Mono, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { SITE_CONFIG, ROOT_METADATA } from "@/constants/siteConfig";
import { ViewportWarning } from "@/components/ui/ViewportWarning";
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

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin", "cyrillic"],
  variable: "--font-ibm-sans",
});

export const metadata: Metadata = ROOT_METADATA;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang={SITE_CONFIG.locale} 
      className={`${dmMono.variable} ${ibmPlexMono.variable} ${ibmPlexSans.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-dark-bg text-[#E4E6EB] font-sans antialiased selection:bg-brand-primary selection:text-white">
        <ViewportWarning />
        {children}
      </body>
    </html>
  );
}