import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CONTACT_DATA } from "@/constants/contact";

/**
 * Contact Section Component
 * A Next.js Server Component providing a clean, centered call-to-action
 * for professional inquiries. Adheres to Tailwind v4 design tokens.
 */
export const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32">
      <Container>
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          {/* Section Index Heading */}
          <div className="mb-4 inline-flex items-center justify-center">
            <span className="font-dm text-sm font-medium tracking-widest text-brand-primary uppercase">
              04. What&apos;s Next?
            </span>
          </div>

          {/* Main Invitation Title */}
          <h2 className="mb-6 font-ibm text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Get In Touch
          </h2>

          {/* Narrative Paragraph */}
          <p className="mb-12 font-sans text-lg leading-relaxed text-gray-400">
            I am currently looking for new opportunities as a Junior Front-end Developer. 
            Whether you have a question, a project proposal, or just want to say hi, 
            my inbox is always open. I&apos;ll try my best to get back to you!
          </p>

          {/* Call-to-Action */}
          <Button 
            variant="primary" 
            href={`mailto:${CONTACT_DATA.email}`}
            className="px-8 py-4 text-base"
          >
            Say Hello
          </Button>
        </div>
      </Container>
    </section>
  );
};
