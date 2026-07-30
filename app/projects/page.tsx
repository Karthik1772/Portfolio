import type { Metadata } from 'next';
import RevealObserver from '@/components/RevealObserver';
import Projects from '@/components/Projects';

export const metadata: Metadata = {
  title: 'releases — Karthik S Kashyap',
};

export default function ProjectsPage() {
  return (
    <>
      <RevealObserver />
      <main className="min-h-screen">
        <Projects />
      </main>
    </>
  );
}
