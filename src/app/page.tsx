import { Header } from "@/components/sections/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center pt-20">
        <section id="home" className="flex flex-col items-center justify-center px-4 py-32 text-center">
          <h1 className="font-dm text-5xl font-bold text-white mb-6 md:text-7xl">
            Building Digital <span className="text-brand-primary">Experiences</span>
          </h1>
          <p className="max-w-2xl font-ibm text-lg text-gray-400 md:text-xl">
            Архітектурний каркас успішно розгорнуто. Шрифти та конфігурації підключені. Готовий до розробки основних секцій.
          </p>
        </section>
        
        {/* Placeholder sections for scroll testing */}
        <section id="about" className="h-screen w-full bg-dark-card/30 flex items-center justify-center">
          <h2 className="font-dm text-3xl text-white">About Section</h2>
        </section>
        <section id="projects" className="h-screen w-full flex items-center justify-center">
          <h2 className="font-dm text-3xl text-white">Projects Section</h2>
        </section>
      </main>
    </>
  );
}
