import StatusStrip from '@/components/StatusStrip';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <StatusStrip />
      <main className="min-h-screen">
        <Hero />
      </main>
    </>
  );
}
