'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const introScript = [
  { text: '$ whoami', cls: 'text-[#7FE0AA]' },
  { text: 'karthik — frontend developer, bengaluru' },
  { text: '' },
  { text: '$ git log --oneline -4', cls: 'text-[#7FE0AA]' },
  { text: 'a1b2c3d ship(mystery-messenger): gemini reply suggestions' },
  { text: 'f4e5d6c fix(barracuda): backup-source race condition' },
  { text: '9c8b7a6 feat(bug-blaster): priority sort + filters' },
  { text: '3d2e1f0 release(doozy): tag v1.0.0' },
  { text: '' },
];

type Command = { path: string; label: string };

const commands: Record<string, Command> = {
  about: { path: '/about', label: 'about.md' },
  log: { path: '/resume', label: 'build-log' },
  experience: { path: '/resume', label: 'build-log' },
  resume: { path: '/resume', label: 'build-log' },
  stack: { path: '/skills', label: 'stack.json' },
  skills: { path: '/skills', label: 'stack.json' },
  releases: { path: '/projects', label: 'releases' },
  projects: { path: '/projects', label: 'releases' },
  achievements: { path: '/achievements', label: 'achievements' },
  contact: { path: '/contact', label: 'contact' },
  home: { path: '/', label: 'home' },
};

const commandList = ['/about', '/log', '/stack', '/releases', '/achievements', '/contact'];

type HistoryLine = { type: 'cmd' | 'out' | 'err'; text: string };

export default function Hero() {
  const router = useRouter();
  const introRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [introDone, setIntroDone] = useState(false);
  const [history, setHistory] = useState<HistoryLine[]>([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const full = introScript.map((l) => l.text).join('\n');

    if (reduced || !introRef.current) {
      renderIntro(full.length);
      setIntroDone(true);
      return;
    }

    let i = 0;
    const id = window.setInterval(() => {
      i += 1;
      renderIntro(i);
      if (i >= full.length) {
        window.clearInterval(id);
        setTimeout(() => setIntroDone(true), 200);
      }
    }, 12);

    function renderIntro(count: number) {
      const shown = full.slice(0, count);
      const shownLines = shown.split('\n');
      if (!introRef.current) return;
      introRef.current.innerHTML = shownLines
        .map((line, idx) => {
          const original = introScript[idx];
          const cls = original?.cls ?? '';
          return `<div class="${cls}">${line || '&nbsp;'}</div>`;
        })
        .join('');
    }

    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (introDone) inputRef.current?.focus();
  }, [introDone]);

  const runCommand = (raw: string) => {
    const trimmed = raw.trim();
    if (!trimmed) return;
    const clean = trimmed.toLowerCase().replace(/^\//, '');

    if (clean === 'clear') {
      setHistory([]);
      return;
    }

    if (clean === 'help' || clean === 'ls') {
      setHistory((h) => [
        ...h,
        { type: 'cmd', text: raw },
        { type: 'out', text: `available: ${commandList.join(' ')} /home /clear` },
      ]);
      return;
    }

    const match = commands[clean];
    if (match) {
      setHistory((h) => [
        ...h,
        { type: 'cmd', text: raw },
        { type: 'out', text: `→ cd ${match.label}` },
      ]);
      window.setTimeout(() => router.push(match.path), 350);
    } else {
      setHistory((h) => [
        ...h,
        { type: 'cmd', text: raw },
        { type: 'err', text: `command not found: ${clean} — try /help` },
      ]);
    }
  };

  return (
    <section id="hero" className="pt-20 pb-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-14 items-center">
          <div>
            <div className="eyebrow">whoami</div>
            <h1 className="font-display font-semibold leading-[1.02] text-[clamp(2.4rem,5.6vw,4rem)]">
              Karthik S
              <br />
              Kashyap
            </h1>
            <div
              className="font-mono-brand text-sm mt-3.5"
              style={{ color: 'var(--clr-green)' }}
            >
              Frontend Developer — React · Next.js · TypeScript
            </div>
            <p className="mt-5 text-muted-foreground max-w-md">
              Building scalable enterprise SaaS interfaces at Barracuda Networks
              by day, and shipping small, complete, versioned apps on my own
              time. I care about the same thing at both scales: does it actually
              work for the person using it.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="/contact"
                className="font-mono-brand text-[13px] px-5 py-3 rounded border border-foreground bg-foreground text-background hover:bg-[var(--clr-green)] hover:border-[var(--clr-green)] transition-colors"
              >
                get in touch
              </Link>

              <a
                href="https://github.com/Karthik1772"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono-brand text-[13px] px-5 py-3 rounded border border-border hover:border-foreground transition-colors"
              >
                view github ↗
              </a>
            </div>
          </div>

          <div>
            <div
              className="rounded-lg overflow-hidden border border-black/40 shadow-2xl cursor-text"
              style={{ background: '#14181A' }}
              onClick={() => inputRef.current?.focus()}
            >
              <div className="flex gap-1.5 px-3.5 py-3 bg-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#3A413C]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#3A413C]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#3A413C]" />
              </div>
              <div
                className="font-mono-brand text-[13.5px] leading-[1.75] px-5 pt-5 pb-5 min-h-[230px]"
                style={{ color: '#D9F0E1' }}
              >
                <div ref={introRef} />
                {!introDone && <span className="term-cursor" />}

                {introDone && (
                  <>
                    {history.map((line, i) => (
                      <div
                        key={i}
                        className={
                          line.type === 'cmd'
                            ? 'text-[#7FE0AA]'
                            : line.type === 'err'
                              ? 'text-[#E08A6A]'
                              : 'text-[#D9F0E1]/80'
                        }
                      >
                        {line.type === 'cmd' ? `$ ${line.text}` : line.text}
                      </div>
                    ))}
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        runCommand(value);
                        setValue('');
                      }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-[#7FE0AA]">$</span>
                      <input
                        ref={inputRef}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        spellCheck={false}
                        autoComplete="off"
                        className="flex-1 bg-transparent outline-none font-mono-brand text-[13.5px]"
                        style={{
                          color: '#D9F0E1',
                          caretColor: 'var(--clr-green)',
                        }}
                        placeholder="type a command…"
                      />
                    </form>
                  </>
                )}
              </div>
            </div>
            <p className="font-mono-brand text-xs text-muted-foreground mt-3 px-1">
              try {commandList.join(' · ')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
