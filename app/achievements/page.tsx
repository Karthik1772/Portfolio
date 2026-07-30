import type { Metadata } from 'next';
import Achievements from '@/components/Achievements';

export const metadata: Metadata = {
  title: 'achievements — Karthik S Kashyap',
};

export default function AchievementsPage() {
  return (
    <main className="flex-1 flex flex-col">
      <Achievements />
    </main>
  );
}
