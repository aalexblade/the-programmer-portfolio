import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const NavLink = ({ href, children, className = "" }: NavLinkProps) => {
  return (
    <Link
      href={href}
      className={`font-ibm text-sm font-medium transition-colors hover:text-brand-primary ${className}`}
    >
      {children}
    </Link>
  );
};
