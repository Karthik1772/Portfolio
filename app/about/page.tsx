import type { Metadata } from 'next';
import About from '@/components/About';

export const metadata: Metadata = {
  title: 'about.md — Karthik S Kashyap',
};

export default function AboutPage() {
  return (
    <main className="flex-1 flex flex-col justify-center">
      <About />
    </main>
  );
}
