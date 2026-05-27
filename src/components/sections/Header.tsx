import { Container } from "@/components/ui/Container";
import { NavLink } from "@/components/ui/NavLink";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS } from "@/constants/navigation";

export const Header = () => {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-dark-bg/80 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-dm text-xl font-bold tracking-tighter text-white">
              <span className="text-brand-primary">The</span>Programmer
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <NavLink href={link.href}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Button */}
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden sm:inline-flex" href="#contact">
              Resume
            </Button>
            
            {/* Mobile Menu Placeholder - In a real app, this would be a client component trigger */}
            <button className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden" aria-label="Toggle Menu">
              <span className="h-0.5 w-6 bg-white"></span>
              <span className="h-0.5 w-6 bg-white"></span>
              <span className="h-0.5 w-6 bg-white"></span>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};
