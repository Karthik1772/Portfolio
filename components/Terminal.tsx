"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Terminal as XTerm } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";
import { X } from "lucide-react";
import "@xterm/xterm/css/xterm.css";

const introLines = ["$ Who Am I", "Karthik — FrontEnd Developer, Mysore", ""];

type Command = { path: string; label: string };

const commands: Record<string, Command> = {
  about: { path: "/about", label: "about.md" },
  experience: { path: "/work-experience", label: "work-experience" },
  "work-experience": { path: "/work-experience", label: "work-experience" },
  education: { path: "/education", label: "education" },
  stack: { path: "/tech-stack", label: "tech-stack" },
  "tech-stack": { path: "/tech-stack", label: "tech-stack" },
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
const SESSION_KEY = "terminal-session-history";
const MAX_HISTORY = 50;

type HistoryLine = { type: "cmd" | "out" | "err"; text: string };

type TerminalProps = {
  showIntro?: boolean;
  heightClass?: string;
  onClose?: () => void;
  onNavigate?: () => void;
};

// ANSI helpers — colors pulled from the same --term-* tokens the rest of
// the site's terminal chrome uses, so the real xterm instance matches.
const GREEN = "\x1b[38;2;127;224;170m";
const ERROR = "\x1b[38;2;224;138;106m";
const DIM = "\x1b[38;2;217;240;225;2m";
const RESET = "\x1b[0m";

export default function Terminal({
  showIntro = true,
  heightClass = "h-[280px]",
  onClose,
  onNavigate,
}: TerminalProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const termRef = useRef<XTerm | null>(null);
  const fitRef = useRef<FitAddon | null>(null);
  const bufferRef = useRef("");
  const cmdHistoryRef = useRef<string[]>([]);
  const historyIndexRef = useRef(-1);
  const draftRef = useRef("");
  const readyRef = useRef(false);
  const [isReady, setIsReady] = useState(false);

  const writePrompt = () => {
    termRef.current?.write(`\r\n${GREEN}$ ${RESET}`);
  };

  const setLine = (next: string) => {
    const term = termRef.current;
    if (!term) return;
    const current = bufferRef.current;
    if (current.length > 0) {
      term.write("\b \b".repeat(current.length));
    }
    bufferRef.current = next;
    term.write(next);
  };

  const persistHistory = (line: HistoryLine) => {
    try {
      const saved = window.localStorage.getItem(SESSION_KEY);
      const list: HistoryLine[] = saved ? JSON.parse(saved) : [];
      const next = [...list, line].slice(-200);
      window.localStorage.setItem(SESSION_KEY, JSON.stringify(next));
    } catch {
      // ignore malformed/unavailable storage
    }
  };

  const pushCmdHistory = (cmd: string) => {
    const list = cmdHistoryRef.current;
    if (list[list.length - 1] === cmd) return;
    const next = [...list, cmd].slice(-MAX_HISTORY);
    cmdHistoryRef.current = next;
    try {
      window.localStorage.setItem(CMD_HISTORY_KEY, JSON.stringify(next));
    } catch {
      // ignore malformed/unavailable storage
    }
    historyIndexRef.current = -1;
  };

  const runCommand = (raw: string) => {
    const term = termRef.current;
    if (!term) return;
    const trimmed = raw.trim();
    if (!trimmed) {
      writePrompt();
      return;
    }
    const clean = trimmed.toLowerCase().replace(/^\//, "");
    pushCmdHistory(trimmed);

    if (clean === "clear") {
      term.clear();
      try {
        window.localStorage.setItem(SESSION_KEY, "[]");
      } catch {
        // ignore
      }
      writePrompt();
      return;
    }

    if (clean === "help" || clean === "ls") {
      const text = `available: ${commandList.join(" ")} /home /clear /history`;
      term.write(`\r\n${text}`);
      persistHistory({ type: "cmd", text: raw });
      persistHistory({ type: "out", text });
      writePrompt();
      return;
    }

    if (clean === "history") {
      const text =
        cmdHistoryRef.current.length === 0
          ? "no commands yet"
          : cmdHistoryRef.current
              .map((c, i) => `  ${i + 1}  ${c}`)
              .join("\r\n");
      term.write(`\r\n${text}`);
      persistHistory({ type: "cmd", text: raw });
      persistHistory({ type: "out", text });
      writePrompt();
      return;
    }

    const match = commands[clean];
    if (match) {
      const text = `→ cd ${match.label}`;
      term.write(`\r\n${GREEN}${text}${RESET}`);
      persistHistory({ type: "cmd", text: raw });
      persistHistory({ type: "out", text });
      window.setTimeout(() => {
        router.push(match.path);
        onNavigate?.();
      }, 350);
      return;
    }

    const text = `command not found: ${clean} — try /help`;
    term.write(`\r\n${ERROR}${text}${RESET}`);
    persistHistory({ type: "cmd", text: raw });
    persistHistory({ type: "err", text });
    writePrompt();
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const term = new XTerm({
      fontFamily:
        '"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace',
      fontSize: 13,
      lineHeight: 1.5,
      cursorBlink: true,
      convertEol: true,
      disableStdin: false,
      scrollback: 500,
      theme: {
        background: "#14181a",
        foreground: "#d9f0e1",
        cursor: "#7fe0aa",
        cursorAccent: "#14181a",
        selectionBackground: "rgba(127, 224, 170, 0.3)",
      },
    });
    const fit = new FitAddon();
    term.loadAddon(fit);
    term.open(containerRef.current);
    fit.fit();
    termRef.current = term;
    fitRef.current = fit;

    try {
      const savedCmds = window.localStorage.getItem(CMD_HISTORY_KEY);
      if (savedCmds) cmdHistoryRef.current = JSON.parse(savedCmds);
    } catch {
      // ignore
    }

    let savedSession: HistoryLine[] = [];
    try {
      const raw = window.localStorage.getItem(SESSION_KEY);
      if (raw) savedSession = JSON.parse(raw);
    } catch {
      // ignore
    }

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const replaySession = () => {
      savedSession.forEach((line) => {
        if (line.type === "cmd") {
          term.write(`\r\n${GREEN}$ ${RESET}${line.text}`);
        } else if (line.type === "err") {
          term.write(`\r\n${ERROR}${line.text}${RESET}`);
        } else {
          term.write(`\r\n${DIM}${line.text}${RESET}`);
        }
      });
      writePrompt();
      readyRef.current = true;
      setIsReady(true);
    };

    if (!showIntro) {
      replaySession();
    } else if (reduced || savedSession.length > 0) {
      term.write(introLines.join("\r\n"));
      replaySession();
    } else {
      const full = introLines.join("\n");
      let i = 0;
      const id = window.setInterval(() => {
        i += 1;
        term.write(full[i - 1] === "\n" ? "\r\n" : full[i - 1]);
        if (i >= full.length) {
          window.clearInterval(id);
          window.setTimeout(replaySession, 150);
        }
      }, 12);
    }

    const onData = term.onData((data) => {
      if (!readyRef.current) return;

      if (data === "\r") {
        const raw = bufferRef.current;
        bufferRef.current = "";
        runCommand(raw);
        return;
      }

      if (data === "\u007f") {
        if (bufferRef.current.length > 0) {
          bufferRef.current = bufferRef.current.slice(0, -1);
          term.write("\b \b");
        }
        return;
      }

      if (data === "\u001b[A") {
        const hist = cmdHistoryRef.current;
        if (hist.length === 0) return;
        if (historyIndexRef.current === -1)
          draftRef.current = bufferRef.current;
        const nextIdx =
          historyIndexRef.current === -1
            ? hist.length - 1
            : Math.max(0, historyIndexRef.current - 1);
        historyIndexRef.current = nextIdx;
        setLine(hist[nextIdx]);
        return;
      }

      if (data === "\u001b[B") {
        if (historyIndexRef.current === -1) return;
        const nextIdx = historyIndexRef.current + 1;
        const hist = cmdHistoryRef.current;
        if (nextIdx >= hist.length) {
          historyIndexRef.current = -1;
          setLine(draftRef.current);
        } else {
          historyIndexRef.current = nextIdx;
          setLine(hist[nextIdx]);
        }
        return;
      }

      // ignore other escape sequences (left/right arrows, etc.) for now
      if (data.charCodeAt(0) === 0x1b) return;

      bufferRef.current += data;
      term.write(data);
    });

    const resizeObserver = new ResizeObserver(() => {
      try {
        fit.fit();
      } catch {
        // ignore fit errors during transient layout states
      }
    });
    resizeObserver.observe(containerRef.current);

    return () => {
      onData.dispose();
      resizeObserver.disconnect();
      term.dispose();
      termRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isReady) fitRef.current?.fit();
  }, [isReady, heightClass]);

  return (
    <div
      className="rounded-lg overflow-hidden border border-black/40 shadow-2xl"
      style={{ background: "var(--term-bg)" }}
    >
      <div className="flex items-center gap-1.5 px-3.5 py-3 bg-white/5">
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--term-dot)]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--term-dot)]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[var(--term-dot)]" />
        <span className="ml-2 font-mono-brand text-[11px] text-white/40">
          Karthik@dev ~
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
        ref={containerRef}
        onClick={() => termRef.current?.focus()}
        className={`px-2 py-2 cursor-text ${heightClass}`}
      />
    </div>
  );
}
