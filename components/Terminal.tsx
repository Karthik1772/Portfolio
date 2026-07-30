'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

const introScript = [
  { text: '$ whoami', cls: 'text-[#7FE0AA]' },
  { text: 'karthik — frontend developer, bengaluru' },
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

export const commandList = ['/about', '/log', '/stack', '/releases', '/achievements', '/contact'];

type HistoryLine = { type: 'cmd' | 'out' | 'err'; text: string };

type TerminalProps = {
  showIntro?: boolean;
  heightClass?: string;
  onClose?: () => void;
  onNavigate?: () => void;
};

export default function Terminal({
  showIntro = true,
  heightClass = 'h-[280px]',
  onClose,
  onNavigate,
}: TerminalProps) {
  const router = useRouter();
  const introRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [introDone, setIntroDone] = useState(!showIntro);
  const [history, setHistory] = useState<HistoryLine[]>([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (!showIntro) return;

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

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight });
  }, [history, introDone]);

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
      window.setTimeout(() => {
        router.push(match.path);
        onNavigate?.();
      }, 350);
    } else {
      setHistory((h) => [
        ...h,
        { type: 'cmd', text: raw },
        { type: 'err', text: `command not found: ${clean} — try /help` },
      ]);
    }
  };

  return (
    <div
      className="rounded-lg overflow-hidden border border-black/40 shadow-2xl cursor-text"
      style={{ background: '#14181A' }}
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-1.5 px-3.5 py-3 bg-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#3A413C]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#3A413C]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#3A413C]" />
        <span className="ml-2 font-mono-brand text-[11px] text-white/40">karthik@dev ~</span>
        {onClose && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="ml-auto p-1 text-white/50 hover:text-white transition-colors"
            aria-label="Close terminal"
          >
            <X size={14} />
          </button>
        )}
      </div>
      <div
        ref={scrollRef}
        className={`font-mono-brand text-[13.5px] leading-[1.75] px-5 py-5 overflow-y-auto ${heightClass}`}
        style={{ color: '#D9F0E1' }}
      >
        {showIntro && <div ref={introRef} />}
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
                style={{ color: '#D9F0E1', caretColor: 'var(--clr-green)' }}
                placeholder="type a command…"
              />
            </form>
          </>
        )}
      </div>
    </div>
  );
}
