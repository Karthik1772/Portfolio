'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Terminal as TerminalIcon } from 'lucide-react';
import Terminal from './Terminal';

export default function TerminalDock() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // The home page already has the hero terminal.
  if (pathname === '/') return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {open ? (
        <div className="w-[min(92vw,400px)]">
          <Terminal
            showIntro={false}
            heightClass="h-[240px]"
            onClose={() => setOpen(false)}
            onNavigate={() => setOpen(false)}
          />
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="font-mono-brand text-[13px] flex items-center gap-2 px-4 py-2.5 rounded-md border border-black/40 shadow-xl hover:opacity-90 transition-opacity"
          style={{ background: '#14181A', color: '#7FE0AA' }}
          aria-label="Open terminal"
        >
          <TerminalIcon size={15} />
          terminal
        </button>
      )}
    </div>
  );
}
