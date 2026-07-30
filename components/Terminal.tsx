"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

const introScript = [
  { text: "$ Who am i", cls: "text-[#7FE0AA]" },
  { text: "Karthik — FrontEnd Developer, Mysore" },
  { text: "" },
];

type Command = { path: string; label: string };

const commands: Record<string, Command> = {
  about: { path: "/about", label: "about.md" },
  experience: { path: "/resume", label: "work-experience" },
  "work-experience": { path: "/resume", label: "work-experience" },
  education: { path: "/education", label: "education" },
  stack: { path: "/skills", label: "tech-stack" },
  "tech-stack": { path: "/skills", label: "tech-stack" },
  projects: { path: "/projects", label: "projects" },
  achievements: { path: "/achievements", label: "achievements" },
  contact: { path: "/contact", label: "contact" },
  home: { path: "/", label: "home" },
};

export const commandList = [
  "/about",
  "/work-experience",
  "/education",
  "/tech-stack",
  "/projects",
  "/achievements",
  "/contact",
];

const CMD_HISTORY_KEY = "terminal-cmd-history";
const MAX_HISTORY = 50;

type HistoryLine = { type: "cmd" | "out" | "err"; text: string };

type TerminalProps = {
  showIntro?: boolean;
  heightClass?: string;
  onClose?: () => void;
  onNavigate?: () => void;
};

export default function Terminal({
  showIntro = true,
  heightClass = "h-[280px]",
  onClose,
  onNavigate,
}: TerminalProps) {
  const router = useRouter();
  const introRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [introDone, setIntroDone] = useState(!showIntro);
  const [history, setHistory] = useState<HistoryLine[]>([]);
  const [value, setValue] = useState("");
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const draftRef = useRef("");

  // Load previously typed commands so the up/down arrows have history
  // to page through, even after navigating between pages or reloading.
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(CMD_HISTORY_KEY);
      if (saved) setCmdHistory(JSON.parse(saved));
    } catch {
      // ignore malformed/unavailable storage
    }
  }, []);

  const pushToCmdHistory = (cmd: string) => {
    setCmdHistory((h) => {
      if (h[h.length - 1] === cmd) return h;
      const next = [...h, cmd].slice(-MAX_HISTORY);
      try {
        window.localStorage.setItem(CMD_HISTORY_KEY, JSON.stringify(next));
      } catch {
        // ignore malformed/unavailable storage
      }
      return next;
    });
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      setHistoryIndex((idx) => {
        if (idx === -1) draftRef.current = value;
        const nextIdx = idx === -1 ? cmdHistory.length - 1 : Math.max(0, idx - 1);
        setValue(cmdHistory[nextIdx]);
        return nextIdx;
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      setHistoryIndex((idx) => {
        const nextIdx = idx + 1;
        if (nextIdx >= cmdHistory.length) {
          setValue(draftRef.current);
          return -1;
        }
        setValue(cmdHistory[nextIdx]);
        return nextIdx;
      });
    }
  };

  useEffect(() => {
    if (!showIntro) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const full = introScript.map((l) => l.text).join("\n");

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
      const shownLines = shown.split("\n");
      if (!introRef.current) return;
      introRef.current.innerHTML = shownLines
        .map((line, idx) => {
          const original = introScript[idx];
          const cls = original?.cls ?? "";
          return `<div class="${cls}">${line || "&nbsp;"}</div>`;
        })
        .join("");
    }

    return () => window.clearInterval(id);
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
    const clean = trimmed.toLowerCase().replace(/^\//, "");
    pushToCmdHistory(trimmed);

    if (clean === "clear") {
      setHistory([]);
      return;
    }

    if (clean === "help" || clean === "ls") {
      setHistory((h) => [
        ...h,
        { type: "cmd", text: raw },
        {
          type: "out",
          text: `available: ${commandList.join(" ")} /home /clear`,
        },
      ]);
      return;
    }

    const match = commands[clean];
    if (match) {
      setHistory((h) => [
        ...h,
        { type: "cmd", text: raw },
        { type: "out", text: `→ cd ${match.label}` },
      ]);
      window.setTimeout(() => {
        router.push(match.path);
        onNavigate?.();
      }, 350);
    } else {
      setHistory((h) => [
        ...h,
        { type: "cmd", text: raw },
        { type: "err", text: `command not found: ${clean} — try /help` },
      ]);
    }
  };

  return (
    <div
      className="rounded-lg overflow-hidden border border-black/40 shadow-2xl cursor-text"
      style={{ background: "#14181A" }}
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex items-center gap-1.5 px-3.5 py-3 bg-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#3A413C]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#3A413C]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#3A413C]" />
        <span className="ml-2 font-mono-brand text-[11px] text-white/40">
          karthik@dev ~
        </span>
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
        style={{ color: "#D9F0E1" }}
      >
        {showIntro && <div ref={introRef} />}
        {!introDone && <span className="term-cursor" />}

        {introDone && (
          <>
            {history.map((line, i) => (
              <div
                key={i}
                className={
                  line.type === "cmd"
                    ? "text-[#7FE0AA]"
                    : line.type === "err"
                      ? "text-[#E08A6A]"
                      : "text-[#D9F0E1]/80"
                }
              >
                {line.type === "cmd" ? `$ ${line.text}` : line.text}
              </div>
            ))}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                runCommand(value);
                setValue("");
              }}
              className="flex items-center gap-2"
            >
              <span className="text-[#7FE0AA]">$</span>
              <input
                ref={inputRef}
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  setHistoryIndex(-1);
                }}
                onKeyDown={handleKeyDown}
                spellCheck={false}
                autoComplete="off"
                className="flex-1 bg-transparent outline-none font-mono-brand text-[13.5px]"
                style={{ color: "#D9F0E1", caretColor: "var(--clr-green)" }}
                placeholder="type a command…"
              />
            </form>
          </>
        )}
      </div>
    </div>
  );
}
