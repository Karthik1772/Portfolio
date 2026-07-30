import type { Metadata } from 'next';
import RevealObserver from '@/components/RevealObserver';
import About from '@/components/About';

export const metadata: Metadata = {
  title: 'about.md — Karthik S Kashyap',
};

export default function AboutPage() {
  return (
    <>
      <RevealObserver />
      <main className="min-h-screen">
        <About />
      </main>
    </>
  );
}
