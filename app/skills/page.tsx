import type { Metadata } from 'next';
import Skills from '@/components/Skills';

export const metadata: Metadata = {
  title: 'stack.json — Karthik S Kashyap',
};

export default function SkillsPage() {
  return (
    <main className="flex-1 flex flex-col justify-center">
      <Skills />
    </main>
  );
}
