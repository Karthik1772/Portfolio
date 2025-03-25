import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen lg:ml-[300px] lg:max-w-[calc(100vw-300px)] ">
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Projects />
      <Contact />
    </main>
  );
}