import type { Metadata } from 'next';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'contact — Karthik S Kashyap',
};

export default function ContactPage() {
  return (
    <main className="flex-1 flex flex-col">
      <Contact />
    </main>
  );
}
