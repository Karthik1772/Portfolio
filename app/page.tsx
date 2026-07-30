import StatusStrip from '@/components/StatusStrip';
import RevealObserver from '@/components/RevealObserver';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <RevealObserver />
      <StatusStrip />
      <main className="min-h-screen">
        <Hero />
      </main>
    </>
  );
}
