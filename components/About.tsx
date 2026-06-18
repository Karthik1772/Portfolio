"use client";

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-background w-full">
      <div className="container mx-auto px-4">
        {/* About Title */}
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="text-muted-foreground">
            Frontend Developer with industry experience building scalable enterprise SaaS applications using React, Next.js, TypeScript,and modern frontend tooling. Skilled in API integration, responsive UI development, testing, debugging, CI/CD workflows, and collaborating within agile teams to deliver production-ready software solutions.</p>
        </div>

        {/* Image + Content side-by-side */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Image */}
          <div className="relative w-full max-w-sm">
            <Image
              src="/img/profile-img.jpg"
              alt="Karthik S Kashyap"
              width={500}
              height={500}
              className="rounded-lg object-cover w-full"
            />
          </div>

          {/* Text content */}
          <div className="flex-1 text-left">
            <h3 className="text-2xl font-bold mb-4">Frontend Developer</h3>
            <p className="text-muted-foreground mb-6">
              I'm passionate about building scalable, user-focused web
              applications. From enterprise SaaS dashboards at Barracuda
              Networks to full-stack personal projects, I enjoy turning complex
              problems into clean, intuitive interfaces.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 w-full">
              <div>
                <ul className="space-y-4">
                  <InfoItem label="Name" value="Karthik S Kashyap" />
                  <InfoItem label="Age" value="21" />
                  <InfoItem label="Phone" value="+91 9945681174" />
                  <InfoItem label="City" value="Bangalore, Karnataka, India" />
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <InfoItem
                    label="Degree"
                    value="Bachelor of Engineering in E&C"
                  />
                  <InfoItem label="Email" value="karthikamma2004@gmail.com" />
                  <InfoItem
                    label="Website"
                    value="karthik-s-kashyap.vercel.app"
                  />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoItem({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex gap-2">
      <span className="font-semibold min-w-[80px]">{label}:</span>
      <span className="text-muted-foreground">{value}</span>
    </li>
  );
}
