import type { Metadata } from 'next';
import Projects from '@/components/Projects';

export const metadata: Metadata = {
  title: 'releases — Karthik S Kashyap',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <Projects />
    </main>
  );
}
