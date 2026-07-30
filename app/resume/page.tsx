import type { Metadata } from 'next';
import RevealObserver from '@/components/RevealObserver';
import Resume from '@/components/Resume';

export const metadata: Metadata = {
  title: 'build-log — Karthik S Kashyap',
};

export default function ResumePage() {
  return (
    <>
      <RevealObserver />
      <main className="min-h-screen">
        <Resume />
      </main>
    </>
  );
}
