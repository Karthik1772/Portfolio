import type { Metadata } from 'next';
import Achievements from '@/components/Achievements';

export const metadata: Metadata = {
  title: 'achievements — Karthik S Kashyap',
};

export default function AchievementsPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <Achievements />
    </main>
  );
}
