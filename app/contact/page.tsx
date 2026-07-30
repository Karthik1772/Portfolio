import type { Metadata } from 'next';
import RevealObserver from '@/components/RevealObserver';
import Contact from '@/components/Contact';

export const metadata: Metadata = {
  title: 'contact — Karthik S Kashyap',
};

export default function ContactPage() {
  return (
    <>
      <RevealObserver />
      <main className="min-h-screen">
        <Contact />
      </main>
    </>
  );
}
