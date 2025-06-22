'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(
        'service_k611vwb', // Replace with your EmailJS Service ID
        'template_72dya9b', // Replace with your EmailJS Template ID
        templateParams,
        'hVSrYv_vQ1C4sHIEE'   // Replace with your EmailJS Public Key
      );

      alert('Message sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send message. Please try again later.');
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-background">
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
