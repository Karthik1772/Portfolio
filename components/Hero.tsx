'use client';

import Link from 'next/link';
import Terminal, { commandList } from './Terminal';

export default function Hero() {
  return (
    <section id="hero" className="py-10 sm:py-14">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-14 items-center">
          <div>
            <div className="eyebrow">Who Am I</div>
            <h1 className="font-display font-semibold leading-[1.02] text-[clamp(2.4rem,5.6vw,4rem)]">
              Karthik S Kashyap
            </h1>
            <div
              className="font-mono-brand text-sm mt-3.5"
              style={{ color: "var(--clr-green)" }}
            >
              Frontend Developer — React · Next.js · TypeScript
            </div>
            <p className="mt-5 text-muted-foreground max-w-md">
              Building enterprise SaaS products
              <span className="font-medium text-foreground">
                {" "}
                {/* at Barracuda Networks */}
              </span>
              with React, Next.js, and TypeScript, while crafting scalable,
              performant, and user-centric web experiences that solve real-world
              problems.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="/contact"
                className="font-mono-brand text-[13px] px-5 py-3 rounded border border-foreground bg-foreground text-background hover:bg-[var(--clr-green)] hover:border-[var(--clr-green)] transition-colors"
              >
                Get In Touch
              </Link>

              <a
                href="https://github.com/Karthik1772"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-brand text-[13px] px-5 py-3 rounded border border-border hover:border-foreground transition-colors"
              >
                View Github ↗
              </a>
            </div>
          </div>

          <div>
            <Terminal />
            <p className="font-mono-brand text-xs text-muted-foreground mt-3 px-1">
              Try {commandList.join(" · ")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
