import { Container } from "@/components/ui/Container";
import { EXPERIENCE_DATA } from "@/constants/experience";

/**
 * Experience Section Component
 * A Next.js Server Component displaying professional history.
 * Uses a clean vertical layout with semantic HTML5 elements.
 */
export const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-dark-card/20">
      <Container>
        {/* Section Heading */}
        <div className="mb-16">
          <h2 className="font-ibm text-3xl font-bold text-white sm:text-4xl">
            <span className="text-brand-primary">03.</span> Work Experience
          </h2>
          <div className="mt-4 h-1 w-20 bg-brand-primary/20"></div>
        </div>

        {/* Experience List */}
        <div className="max-w-4xl space-y-12">
          {EXPERIENCE_DATA.map((exp) => (
            <article key={exp.id} className="group relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-px before:bg-white/10 before:transition-colors hover:before:bg-brand-primary/50">
              {/* Timeline Marker */}
              <div className="absolute left-[-4px] top-0 h-2 w-2 rounded-full bg-white/20 transition-colors group-hover:bg-brand-primary" aria-hidden="true"></div>
              
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-ibm text-xl font-bold text-white group-hover:text-brand-primary transition-colors">
                  {exp.role}
                </h3>
                <span className="font-ibm text-xs font-medium tracking-wider text-brand-accent uppercase">
                  {exp.period}
                </span>
              </div>
              
              <div className="mb-6 mt-1">
                <span className="font-dm text-sm font-medium text-gray-400">
                  {exp.company}
                </span>
              </div>

              <ul className="space-y-4">
                {exp.description.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-brand-primary/60" aria-hidden="true"></span>
                    <p className="font-sans text-base leading-relaxed text-gray-400">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};
