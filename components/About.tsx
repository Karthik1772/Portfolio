"use client";

import Image from "next/image";
import {
  MapPin,
  Mail,
  GraduationCap,
  Globe,
  User,
  Calendar,
} from "lucide-react";

function calculateAge(birthday: Date): number {
  // Get current date in IST (UTC+5:30)
  const now = new Date();
  const istOffset = 5.5 * 60 * 60 * 1000; // 5h30m in ms
  const istNow = new Date(
    now.getTime() + istOffset - now.getTimezoneOffset() * 60 * 1000,
  );

  let age = istNow.getFullYear() - birthday.getFullYear();
  const hasHadBirthdayThisYear =
    istNow.getMonth() > birthday.getMonth() ||
    (istNow.getMonth() === birthday.getMonth() &&
      istNow.getDate() >= birthday.getDate());
  if (!hasHadBirthdayThisYear) age--;
  return age;
}

const birthday = new Date(2004, 6, 17); // July 17, 2004

const info = [
  { icon: User, label: "Name", value: "Karthik S Kashyap" },
  {
    icon: GraduationCap,
    label: "Degree",
    value: "Bachelor of Engineering in E&C",
  },
  { icon: Calendar, label: "Age", value: `${calculateAge(birthday)}` },
  { icon: Mail, label: "Email", value: "karthikamma2004@gmail.com" },
  { icon: MapPin, label: "City", value: "Bangalore, Karnataka, India" },
  { icon: Globe, label: "Website", value: "karthik-s-kashyap.vercel.app" },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-background w-full">
      <div className="container mx-auto px-4">
        {/* About Title */}
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold mb-4">About</h2>
          <p className="text-muted-foreground">
            Frontend Developer with industry experience building scalable
            enterprise SaaS applications using React, Next.js, TypeScript, and
            modern frontend tooling. Skilled in API integration, responsive UI
            development, testing, debugging, CI/CD workflows, and collaborating
            within agile teams to deliver production-ready software solutions.
          </p>
        </div>

        {/* Image + Info */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Image */}
          <div className="w-full max-w-sm shrink-0">
            <div className="rounded-xl overflow-hidden ring-2 ring-primary/20 shadow-lg shadow-primary/10">
              <Image
                src="/img/profile-img.jpg"
                alt="Karthik S Kashyap"
                width={500}
                height={500}
                className="object-cover w-full"
              />
            </div>
          </div>

          {/* Info grid */}
          <div className="flex-1 w-full">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {info.map(({ icon: Icon, label, value }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg bg-muted/40 border border-border hover:border-primary/40 hover:bg-muted/70 transition-colors"
                >
                  <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-semibold text-xs text-muted-foreground uppercase tracking-wide">
                      {label}
                    </span>
                    <span className="text-foreground text-sm font-medium truncate">
                      {value}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
