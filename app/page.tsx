import StatusStrip from '@/components/StatusStrip';
import RevealObserver from '@/components/RevealObserver';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Resume from '@/components/Resume';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Achievements from '@/components/Achievements';

export default function Home() {
  return (
    <>
      <RevealObserver />
      <StatusStrip />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Resume />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}