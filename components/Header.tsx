'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUp, Menu, X, Github, Twitter, Instagram, Linkedin, Home, User, FileText, Layers, Mail, BarChart, Trophy } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const HoverBGColors: Record<string, string> = {
  instagram: 'hover:bg-gradient-to-r from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
  twitter: 'hover:bg-gradient-to-r from-[#1DA1F2] via-[#1DA1F2] to-[#1DA1F2]',
  linkedin: 'hover:bg-gradient-to-r from-[#0077B6] via-[#0077B6] to-[#0077B6]',
  github: 'hover:bg-gradient-to-r from-[#24292e] via-[#24292e] to-[#24292e]',
}
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {
    if (window.innerWidth > 1024) {
      setIsMenuOpen(true);
    }
    const handleResize = (e: Event) => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(true);
      }
      else {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 200;
      setIsScrolled(window.scrollY > 0);

      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id') || '';

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 bottom-0 ${isMenuOpen ? 'w-[300px] z-50' : 'z-10'}`}>
      <button
        className={`lg:hidden fixed top-4 right-4 sm:right-4   p-2 rounded-full ${isScrolled ? 'bg-primary text-background' : 'bg-background text-primary'}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span className="sr-only">Toggle Menu</span>
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      <button
        className={`lg:hidden fixed bottom-4 right-4 sm:right-4  p-2 rounded-full ${isScrolled ? 'bg-primary text-background' : 'bg-background text-primary hidden'}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <ArrowUp className="w-6 h-6" />

      </button>
      <div className="fixed top-0 left-0 bottom-0 w-[300px] p-4 border-r border-border bg-background overflow-y-auto z-50 transition-all duration-300 ease-in-out lg:translate-x-0" style={{ transform: isMenuOpen ? 'translateX(0)' : 'translateX(-120%)' }}>
        <div className="text-center mb-8">
          <div className="relative w-32 h-32 mx-auto mb-4 ">
            <Image
              src="/img/profile-img.jpg"
              alt="Profile"
              fill
              className="rounded-full border-8 border-muted"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold">Karthik S Kashyap</h1>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          <SocialLink href="https://github.com/Karthik1772" icon={<Github />} label="GitHub" />
          <SocialLink href="https://x.com/karthik__177" icon={<Twitter />} label="Twitter" />
          <SocialLink href="https://www.instagram.com/nomadic_brahmana_/" icon={<Instagram />} label="Instagram" />
          <SocialLink href="https://www.linkedin.com/in/karthik-s-kashyap/" icon={<Linkedin />} label="LinkedIn" />
        </div>

        <nav>
          <ul className="space-y-2">
            <NavItem href="/" icon={<Home />} label="Home" isActive={activeSection === 'hero'} setIsMenuOpen={setIsMenuOpen} />
            <NavItem href="#about" icon={<User />} label="About" isActive={activeSection === 'about'} setIsMenuOpen={setIsMenuOpen} />
            <NavItem href="#skills" icon={<BarChart />} label="Skills" isActive={activeSection === 'skills'} setIsMenuOpen={setIsMenuOpen} />
            <NavItem href="#resume" icon={<FileText />} label="Resume" isActive={activeSection === 'resume'} setIsMenuOpen={setIsMenuOpen} />
            <NavItem href="#projects" icon={<Layers />} label="Projects" isActive={activeSection === 'projects'} setIsMenuOpen={setIsMenuOpen} />
            <NavItem href="#achievements" icon={<Trophy />} label="Achievements" isActive={activeSection === 'achievements'} setIsMenuOpen={setIsMenuOpen} />
            <NavItem href="#contact" icon={<Mail />} label="Contact" isActive={activeSection === 'contact'} setIsMenuOpen={setIsMenuOpen} />
            <ThemeToggle />
          </ul>
        </nav>
      </div>
    </header>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      className={`${HoverBGColors[label.toLowerCase()]} w-10 h-10 flex items-center justify-center rounded-full bg-muted  hover:text-primary-foreground transition-colors`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

function NavItem({ href, icon, label, isActive, setIsMenuOpen }: { href: string; icon: React.ReactNode; label: string; isActive: boolean; setIsMenuOpen: (open: boolean) => void }) {
  return (
    <li>
      <Link
        href={href}
        className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-300 ${isActive
          ? 'bg-primary text-primary-foreground'
          : 'hover:bg-muted text-muted-foreground hover:text-foreground'
          }`}
        onClick={() => {
          if (href !== '/') {
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: 'smooth' });
            if (window.innerWidth < 1024) {
              setIsMenuOpen(false);
            }
          }
        }}
      >
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  );
}