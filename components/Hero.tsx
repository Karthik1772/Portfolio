'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Typed from 'typed.js';

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: ['UiUx Designer', 'Android Developer'],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        loop: true
      });

      return () => typed.destroy();
    }
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-start py-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/hero-bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-left pl-10 xl:pl-32 text-white">
        <h2 className="text-5xl font-bold mb-4">Karthik S Kashyap</h2>
        <p className="text-2xl">
          I&apos;m <span ref={typedRef} className="text-white dark:text-primary border-0 border-b-2 border-blue-500"></span>
        </p>
      </div>
    </section>
  );
}