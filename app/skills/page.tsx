import type { Metadata } from 'next';
import Skills from '@/components/Skills';

export const metadata: Metadata = {
  title: 'stack.json — Karthik S Kashyap',
};

export default function SkillsPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <Skills />
    </main>
  );
}
