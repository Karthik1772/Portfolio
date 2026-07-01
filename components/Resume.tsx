"use client";

import { Download } from "lucide-react";

export default function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume/KARTHIK-S-KASHYAP.pdf";
    link.setAttribute("download", "Karthik_S_Kashyap.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-start flex-col sm:flex-row mb-12 gap-4">
            <div className="text-left">
              <h2 className="text-3xl font-bold mb-4">Resume</h2>
              <p className="text-muted-foreground">
                My educational background and professional experience.
              </p>
            </div>

            <button
              onClick={handleDownload}
              className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Download size={16} />
              Download resume
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h3 className="text-xl font-bold mb-6">Education</h3>
              <div className="space-y-8">
                <ResumeItem
                  title="Alva's Institute of Engineering & Technology"
                  date="2022 – 2026"
                  description="Currently pursuing Bachelor's degree in Electronics and Communication Engineering (CGPA: 7.9/10)."
                />
                <ResumeItem
                  title="Gopalaswamy PU College"
                  date="2022"
                  description="Completed pre-university education with focus on science and mathematics with an overall percentage of 87.5%."
                />
                <ResumeItem
                  title="Sadvidya High School"
                  date="2020"
                  description="Completed secondary education with a distinction percentage of 93.28%."
                />
              </div>
            </div>

            {/* Professional Experience */}
            <div>
              <h3 className="text-xl font-bold mb-6">
                Professional Experience
              </h3>
              <div className="space-y-8">
                <ResumeItem
                  title="Frontend Developer Intern — Barracuda Networks"
                  date="10/2025 – Present · Bangalore, India"
                  description={`• Developed scalable frontend features for enterprise cloud backup SaaS products using React, Next.js, TypeScript, and Material UI.\n• Resolved production issues in multi-tenant environments through root cause analysis and cross-team collaboration.\n• Built reusable UI components and wrote unit/integration tests using Jest and React Testing Library.\n• Built internal AI productivity tools — a Jira-Confluence planning tool and an automated code review validator — as part of AI Dev Days.`}
                />
                <ResumeItem
                  title="Software Development Intern — IIIT Dharwad"
                  date="02/2025 – 05/2025 · Hybrid"
                  description={`• Contributed to an AI-driven sustainability application during a 12-week internship, building the user-facing recommendation interface for reducing individual carbon footprints.\n• Integrated ML prediction APIs into the frontend and collaborated with researchers to present data-driven sustainability insights to end users.`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ResumeItem({
  title,
  date,
  description,
}: {
  title: string;
  date: string;
  description: string;
}) {
  return (
    <div className="border-l-2 border-primary pl-4">
      <h4 className="text-lg font-semibold mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground mb-2">{date}</p>
      <p className="text-muted-foreground whitespace-pre-line">{description}</p>
    </div>
  );
}
