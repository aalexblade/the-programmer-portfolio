import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col">
        <Hero />
        <About />
        <Projects />
        <Experience />
        
        {/* Placeholder sections for scroll testing */}
        <section id="contact" className="h-screen w-full flex items-center justify-center">
          <h2 className="font-dm text-3xl text-white">Contact Section</h2>
        </section>
      </main>
    </>
  );
}
