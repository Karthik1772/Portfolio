import type { Metadata } from 'next';
import WorkExperience from '@/components/WorkExperience';

export const metadata: Metadata = {
  title: 'build-log — Karthik S Kashyap',
};

export default function WorkExperiencePage() {
  return (
    <main className="flex-1 flex flex-col">
      <WorkExperience />
    </main>
  );
}
