import type { Metadata } from 'next';
import Resume from '@/components/Resume';

export const metadata: Metadata = {
  title: 'build-log — Karthik S Kashyap',
};

export default function ResumePage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <Resume />
    </main>
  );
}
