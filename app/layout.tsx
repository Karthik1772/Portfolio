import type { Metadata } from 'next';
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TerminalDock from '@/components/TerminalDock';
import { Providers } from '@/components/Providers';

const displayFont = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display',
});
const bodyFont = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});
const monoFont = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-mono-brand',
});

export const metadata: Metadata = {
  title: 'Karthik S Kashyap - Portfolio',
  description: 'Software Developer Portfolio of Karthik S Kashyap',
  keywords: ['software developer', 'portfolio', 'web development', 'react', 'next.js'],
  icons: {
    icon: '/img/favicon.png', 
    shortcut: '/img/favicon-16x16.png',
    apple: '/img/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} font-sans`}
        style={{ fontFamily: 'var(--font-body), sans-serif' }}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
          <TerminalDock />
        </Providers>
      </body>
    </html>
  );
}