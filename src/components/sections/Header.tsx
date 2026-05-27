import { Container } from "@/components/ui/Container";
import { NavLink } from "@/components/ui/NavLink";
import { ResumeButton } from "@/components/ui/ResumeButton";
import { MobileMenu } from "@/components/ui/MobileMenu";
import { NAV_LINKS } from "@/constants/navigation";

/**
 * Header Section Component
 * A Next.js Server Component that renders the sticky top navigation bar.
 * Uses semantic HTML5 elements and Tailwind v4 backdrop-blur effects.
 * 
 * Interactivity is delegated to specialized client sub-components (ResumeButton, MobileMenu)
 * to avoid "Event handlers cannot be passed to Client Component props" serialization errors.
 */
export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-dark-bg/80 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="#home" className="group flex items-center gap-2">
              <span className="font-dm text-xl font-bold tracking-tighter text-white">
                <span className="text-brand-primary group-hover:text-brand-accent transition-colors">The</span>Programmer
              </span>
            </a>
          </div>

          {/* Semantic Navigation Container (Desktop) */}
          <nav className="hidden md:block" aria-label="Main navigation">
            <ul className="flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <NavLink 
                    href={link.href} 
                    className="font-ibm text-xs uppercase tracking-widest text-gray-400 hover:text-white"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Section */}
          <div className="flex items-center gap-4">
            {/* 
              Delegated to a client component to handle local events 
              without passing functions from this Server Component.
            */}
            <ResumeButton />
            
            {/* 
              Delegated to a client component to handle state/interactivity
            */}
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
};
