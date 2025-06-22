'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import emailjs from 'emailjs-com';
import toast, { Toaster } from 'react-hot-toast';
import { useTheme } from 'next-themes';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const { resolvedTheme } = useTheme(); 
  const isDarkMode = resolvedTheme === 'dark'; 

  const getToastStyle = () => ({
    background: isDarkMode ? '#ffffff' : '#000000',
    color: isDarkMode ? '#000000' : '#ffffff',
    border: isDarkMode ? '1px solid #e5e7eb' : '1px solid #374151',
  });

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: getToastStyle(),
          success: {
            iconTheme: {
              primary: isDarkMode ? '#000000' : '#ffffff',
              secondary: isDarkMode ? '#ffffff' : '#000000',
            },
          },
          error: {
            iconTheme: {
              primary: isDarkMode ? '#000000' : '#ffffff',
              secondary: isDarkMode ? '#ffffff' : '#000000',
            },
          },
        }}
      />
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-muted-foreground">
              Get in touch with me for any questions or opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="space-y-8">
                <ContactInfo
                  icon={MapPin}
                  title="Location"
                  content="Mysore, Karnataka, India"
                />
                <ContactInfo
                  icon={Phone}
                  title="Call"
                  content="+91 9945681174"
                />
                <ContactInfo
                  icon={Mail}
                  title="Email"
                  content="karthikamma2004@gmail.com"
                />
              </div>
            </div>

            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-3 rounded-lg border border-border bg-background"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-3 rounded-lg border border-border bg-background"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full p-3 rounded-lg border border-border bg-background"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Message"
                  className="w-full p-3 rounded-lg border border-border bg-background resize-none"
                  required
                  value={formData.message}
                  onChange={handleChange}
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({
  icon: Icon,
  title,
  content,
}: {
  icon: any;
  title: string;
  content: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-muted-foreground">{content}</p>
      </div>
    </div>
  );
}
