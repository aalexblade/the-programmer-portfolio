# Developer Agent Instructions & Project Context

You are an expert AI pair-programmer and software architect. Your mission is to help build **"TheProgrammer" — a 1-page Developer Portfolio Landing Page**. You must strictly adhere to the technical stack, architectural guidelines, and rules defined below.

---

## 🛠️ Technical Stack & Framework Constraints

- **Framework:** Next.js 15+ (App Router, Static Site Generation / SSG).
- **Language:** TypeScript (Strict mode enabled, no explicit `any` types allowed).
- **Styling:** Tailwind CSS v4.
  - *CRITICAL:* Do NOT look for or create a `tailwind.config.ts` file. 
  - All theme extensions (colors, fonts) are handled via CSS variables using the `@theme` directive directly inside `src/styles/globals.css`.
- **Design System:** Atomic Design principles (Components split into `atoms`, `molecules`, and `organisms`).
- **Icons:** Google Icons or Lucide React.
- **Typography:**
  - `font-dm` (mapped to `var(--font-dm-mono)`) for code accents, badges, and technical headings.
  - `font-ibm` (mapped to `var(--font-ibm-mono)`) for primary layout typography and body text.

---

## 🌳 Directory & Architecture Rules

Maintain a clean, modular structure. Ensure code is highly scannable and isolated:

```text
src/
├── app/                  # Next.js App Router (Layouts & main structural entry points)
├── components/
│   ├── atoms/            # Pure, lowest-level visual components (Buttons, Tags, Typography wrappers)
│   ├── molecules/        # Simple combinations of atoms (NavLinks, ProjectCard items, SocialLinks)
│   └── organisms/        # Independent, large-scale layout sections (Header, Hero, Projects grid)
├── constants/            # Static data configurations (Project arrays, timeline lists) to decouple content from layout
├── styles/               # Global CSS entry points (globals.css containing Tailwind v4 @theme configuration)
└── types/                # Global TypeScript type definitions and shared interfaces