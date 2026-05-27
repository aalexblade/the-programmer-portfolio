import { Container } from "@/components/ui/Container";

/**
 * Footer Component
 * A Next.js Server Component representing the site footer.
 * Displays copyright and tech stack information using technical typography.
 */
export const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-dark-card/30 py-8">
      <Container>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="font-ibm text-sm font-medium text-gray-500">
            &copy; 2026 Oleksandr Vasylenko. Built with Next.js &amp; Tailwind CSS v4.
          </p>
        </div>
      </Container>
    </footer>
  );
};
