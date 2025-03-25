'use client';

import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className='flex items-center gap-2 w-full justify-center'
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
      <div className=''>{theme === 'dark' ? 'Light' : 'Dark'}</div>
    </Button>
  );
}