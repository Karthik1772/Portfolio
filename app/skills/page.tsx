import type { Metadata } from 'next';
import RevealObserver from '@/components/RevealObserver';
import Skills from '@/components/Skills';

export const metadata: Metadata = {
  title: 'stack.json — Karthik S Kashyap',
};

export default function SkillsPage() {
  return (
    <>
      <RevealObserver />
      <main className="min-h-screen">
        <Skills />
      </main>
    </>
  );
}
