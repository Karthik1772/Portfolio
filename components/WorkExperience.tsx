'use client';

import { Download } from "lucide-react";

const experience = [
  {
    tag: "2025.10 → now",
    company: "Barracuda Networks",
    role: "Frontend Developer Intern · Data Protection Team · Bangalore",
    changes: [
      "Shipped frontend features for enterprise cloud backup SaaS across the Reports and Backup Sources modules using React, Next.js, TypeScript and Material UI.",
      "Root-caused and resolved production issues in multi-tenant environments alongside cross-functional engineering teams.",
      "Built reusable components with Jest and React Testing Library coverage to cut regression risk.",
      "Built two internal AI tools during AI Dev Days: Start-Story for Jira–Confluence sprint planning, and Self-Review for automated code-standards checks.",
    ],
  },
  {
    tag: "2025.02 → 2025.05",
    company: "IIIT Dharwad",
    role: "Software Development Intern · Hybrid",
    changes: [
      "Built the user-facing recommendation interface for an AI-driven carbon-footprint sustainability app over a 12-week internship.",
      "Integrated ML prediction APIs into the frontend and worked with researchers to translate model output into insights end users could actually use.",
    ],
  },
];

export default function WorkExperience() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Resume/KARTHIK-S-KASHYAP.pdf";
    link.setAttribute("download", "Karthik_S_Kashyap.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="WorkExperience"
      className="py-10 sm:py-14 bg-card border-y border-border"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-4">
          <div>
            <div className="eyebrow">work-experience</div>
            <h2 className="font-display font-semibold text-[clamp(1.75rem,3.4vw,2.5rem)] mb-2">
              Where I&apos;ve shipped
            </h2>
            <p className="text-muted-foreground max-w-md">
              Experience, logged like commits — what changed and what it
              touched.
            </p>
          </div>
          <button
            onClick={handleDownload}
            className="font-mono-brand text-[13px] inline-flex items-center gap-2 px-5 py-3 rounded border border-foreground bg-foreground text-background hover:bg-[var(--clr-green)] hover:border-[var(--clr-green)] transition-colors self-start"
          >
            <Download size={15} />
            download resume
          </button>
        </div>

        <div className="mt-6">
          {experience.map((entry) => (
            <div
              key={entry.company}
              className="grid sm:grid-cols-[150px,1fr] gap-4 sm:gap-7 py-7 border-t border-border last:border-b"
            >
              <span
                className="font-mono-brand text-xs px-2.5 py-1 rounded h-fit whitespace-nowrap"
                style={{
                  color: "var(--clr-green)",
                  background: "var(--clr-green-soft)",
                }}
              >
                {entry.tag}
              </span>
              <div>
                <h3 className="font-display font-semibold text-lg mb-0.5">
                  {entry.company}
                </h3>
                <div className="text-sm text-muted-foreground mb-3.5">
                  {entry.role}
                </div>
                <ul className="font-mono-brand text-[13.5px] leading-loose space-y-0.5">
                  {entry.changes.map((c, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span
                        style={{ color: "var(--clr-green)" }}
                        className="font-semibold"
                      >
                        +
                      </span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
