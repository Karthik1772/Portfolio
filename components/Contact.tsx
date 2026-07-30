'use client';

import { useState } from 'react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copied, setCopied] = useState(false);

  const toastStyle = {
    background: 'hsl(var(--foreground))',
    color: 'hsl(var(--background))',
    border: '1px solid hsl(var(--border))',
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const templateParams = {
      name: formData.name,
      email: formData.email,
      title: formData.subject,
      message: formData.message,
      time: new Date().toLocaleString(),
    };
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('karthikamma2004@gmail.com').then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  const inputCls =
    'w-full p-3 rounded-md border border-border bg-background font-mono-brand text-sm placeholder:text-muted-foreground focus:outline-none focus:border-[var(--clr-green)]';

  return (
    <section id="contact" className="py-10 sm:py-14 bg-card border-t border-border">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: toastStyle,
          success: {
            iconTheme: {
              primary: 'hsl(var(--background))',
              secondary: 'hsl(var(--foreground))',
            },
          },
          error: {
            iconTheme: {
              primary: 'hsl(var(--background))',
              secondary: 'hsl(var(--foreground))',
            },
          },
        }}
      />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="eyebrow">Contact</div>
        <h2 className="font-display font-semibold text-[clamp(1.75rem,3.4vw,2.5rem)] mb-2">Let&apos;s talk</h2>
        <p className="text-muted-foreground max-w-md mb-10">
          Open to frontend roles, internships, and interesting problems worth building for.
        </p>

        <div className="border border-border rounded-lg p-7 sm:p-9 bg-background flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-12">
          <div className="font-mono-brand text-lg sm:text-xl flex items-center gap-3.5 flex-wrap">
            karthikamma2004@gmail.com
            <button
              onClick={copyEmail}
              className="font-mono-brand text-[11.5px] border border-border px-2.5 py-1 rounded text-muted-foreground hover:border-[var(--clr-green)] hover:text-[var(--clr-green)] transition-colors"
            >
              {copied ? 'copied' : 'copy'}
            </button>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <a href="mailto:karthikamma2004@gmail.com" className="font-mono-brand text-[12.5px] border border-border px-3 py-1.5 rounded hover:border-foreground transition-colors">Email ↗</a>
            <a href="https://www.linkedin.com/in/karthik-s-kashyap/" target="_blank" rel="noopener noreferrer" className="font-mono-brand text-[12.5px] border border-border px-3 py-1.5 rounded hover:border-foreground transition-colors">LinkedIn ↗</a>
            <a href="https://github.com/Karthik1772" target="_blank" rel="noopener noreferrer" className="font-mono-brand text-[12.5px] border border-border px-3 py-1.5 rounded hover:border-foreground transition-colors">Github ↗</a>
          </div>
        </div>

        <div className="font-mono-brand text-xs text-muted-foreground mb-4">
          <span style={{ color: 'var(--clr-copper)' }}>{'// '}</span>or send a message directly
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <input type="text" name="name" placeholder="your name" className={inputCls} required value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="your email" className={inputCls} required value={formData.email} onChange={handleChange} />
          </div>
          <input type="text" name="subject" placeholder="subject" className={inputCls} required value={formData.subject} onChange={handleChange} />
          <textarea name="message" rows={5} placeholder="message" className={`${inputCls} resize-none`} required value={formData.message} onChange={handleChange} />
          <button
            type="submit"
            className="font-mono-brand text-[13px] px-6 py-3 rounded border border-foreground bg-foreground text-background hover:bg-[var(--clr-green)] hover:border-[var(--clr-green)] transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
