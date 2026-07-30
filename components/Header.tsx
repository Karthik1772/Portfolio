'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { href: "/about", label: "About" },
  { href: "/work-experience", label: "Work Experience" },
  { href: "/education", label: "Education" },
  { href: "/tech-stack", label: "Tech Stack" },
  { href: "/projects", label: "Projects" },
  { href: "/achievements", label: "Achievements" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 shrink-0 backdrop-blur-md bg-background/85 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-mono-brand text-sm font-medium flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: 'var(--clr-green)', boxShadow: '0 0 0 3px var(--clr-green-soft)' }}
          />
          karthik@dev ~
        </Link>

        <nav className="hidden lg:flex items-center gap-7 font-mono-brand text-[13px] text-muted-foreground">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${active ? 'font-medium' : 'hover:text-foreground'}`}
                style={active ? { color: 'var(--clr-green)' } : undefined}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
          <button
            className="lg:hidden p-2 rounded-md border border-border"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="lg:hidden border-t border-border bg-background px-4 py-4 flex flex-col gap-1 font-mono-brand text-sm">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`py-2.5 px-2 rounded-md transition-colors ${
                  active ? 'bg-muted' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
                style={active ? { color: 'var(--clr-green)' } : undefined}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-2">
            <ThemeToggle />
          </div>
        </nav>
      )}
    </header>
  );
}
