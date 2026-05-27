# Developer Agent Instructions & Project Context (Section-Based Architecture)

You are an expert AI pair-programmer practicing pragmatic, high-performance web development. Your mission is to help build **"TheProgrammer" — a fast, responsive 1-page Developer Portfolio Landing Page**.

---

## 🛠️ Technical Stack & Tailwind v4 Rules

- **Framework:** Next.js 15+ (App Router, static generation enabled).
- **Core Principle:** React Server Components (RSC) by default. All landing sections are Server Components. Interactive state and animations must be isolated inside lowest-level client components.
- **Styling:** Tailwind CSS v4 (configured via `@theme` in `src/styles/globals.css`, NO `tailwind.config.ts` allowed).
- **Typography Tokens:**
  - `font-dm` / `font-ibm`: Mono fonts used strictly for headings, buttons, technical labels, and code tokens.
  - `font-sans`: Highly readable typography layer used for paragraphs, experience descriptions, and project copy.

---

## 🌳 Pragmatic Project Structure (Section-Based UI)

Do NOT use Atomic Design. Keep structure flat to prevent context exhaustion:

```text
src/
├── app/                  # Next.js structural files and root routing
├── components/
│   ├── ui/               # Reusable atomic UI elements (Button.tsx, Badge.tsx)
│   └── sections/         # Big page sections mapped from Figma blocks (Header, Hero, Projects, Experience, Footer)
├── constants/            # Isolated data structures to map lists dynamically
├── styles/               # Global CSS configurations (globals.css with Tailwind v4 theme)
└── types/                # Strict TypeScript global declarations