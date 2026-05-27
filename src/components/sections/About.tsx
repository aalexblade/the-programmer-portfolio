import { Container } from "@/components/ui/Container";
import { SKILLS_DATA } from "@/constants/skills";

/**
 * About Section Component
 * A Next.js Server Component featuring a professional narrative and a dynamic tech stack grid.
 * Adheres to Section-Based Architecture and Tailwind v4 design tokens.
 */
export const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-dark-card/20">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left Side: Professional Narrative */}
          <div className="space-y-6">
            <h2 className="font-ibm text-3xl font-bold text-white sm:text-4xl">
              <span className="text-brand-primary">01.</span> About Me
            </h2>
            
            <div className="space-y-4 font-sans text-lg leading-relaxed text-gray-400">
              <p>
                My journey into software engineering was driven by a passion for building 
                efficient systems and solving complex problems. Transitioning from a 
                background in <span className="text-white">finance</span>, I brought a 
                meticulous eye for detail and data integrity to the world of web development.
              </p>
              <p>
                I have a strong focus on <span className="text-brand-accent">web performance</span>, 
                digital accessibility, and writing clean, maintainable code. My experience includes 
                contributing to complex SaaS platforms like 
                <span className="text-white"> Velvet Secrets</span>, where I focused on optimizing 
                frontend architectures and enhancing user experiences.
              </p>
              <p>
                Today, I leverage modern tools and AI-driven workflows to build scalable 
                applications that bridge the gap between business requirements and 
                technical excellence.
              </p>
            </div>
          </div>

          {/* Right Side: Tech Stack Grid */}
          <div className="rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-sm">
            <h3 className="mb-8 font-dm text-xl font-bold tracking-tight text-white uppercase">
              Technical Tech Stack
            </h3>
            
            <div className="space-y-8">
              {SKILLS_DATA.map((category) => (
                <div key={category.title} className="space-y-3">
                  <h4 className="font-ibm text-xs font-bold uppercase tracking-widest text-brand-primary/80">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="rounded-md border border-white/10 bg-white/5 px-3 py-1 font-dm text-xs text-gray-300 transition-colors hover:border-brand-primary/40 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      
      {/* Decorative background element */}
      <div className="absolute top-[20%] right-[-5%] -z-10 h-75 w-75 rounded-full bg-brand-primary/5 blur-3xl" aria-hidden="true"></div>
    </section>
  );
};
