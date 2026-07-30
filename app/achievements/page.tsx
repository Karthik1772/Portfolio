import type { Metadata } from 'next';
import RevealObserver from '@/components/RevealObserver';
import Achievements from '@/components/Achievements';

export const metadata: Metadata = {
  title: 'achievements — Karthik S Kashyap',
};

export default function AchievementsPage() {
  return (
    <>
      <RevealObserver />
      <main className="min-h-screen">
        <Achievements />
      </main>
    </>
  );
}
