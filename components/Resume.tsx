"use client";

import { Download } from "lucide-react";

export default function Resume() {
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

            <a href="/resume/Karthik_S_Kashyap.pdf"
              download="Karthik_S_Kashyap.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors no-underline"
            >
              <Download size={16} />
              Download resume
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6">Education</h3>
              <div className="space-y-8">
                <ResumeItem
                  title="Alva's Institute of Engineering & Technology"
                  date="2022 - 2026"
                  description="Currently pursuing Bachelor's degree in Electronics and Communication Engineering."
                />
                <ResumeItem
                  title="Gopalaswamy PU College"
                  date="2022"
                  description="Completed pre-university education with focus on science and mathematics with a overall Percentage of 87.5"
                />
                <ResumeItem
                  title="Sadvidya High School"
                  date="2020"
                  description="Completed secondary education with distinctional percentage of 93.28"
                />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Professional Experience</h3>
              <div className="space-y-8">
                <ResumeItem
                  title="Internship at InternPe"
                  date="06/2024 – 08/2024"
                  description={`• Gained hands-on experience in C++ development, improving algorithm efficiency and problem resolution capabilities.
                                • As a C++ Developer Intern, I enhanced my analytical and troubleshooting skills by working with complex algorithms.`}
                />
                <ResumeItem
                  title="Research Intern at IIIT Dharward"
                  date="02/2025 - 05/2025"
                  description={`• Completed a 12-week online internship at Indian Institute of Information Technology Dharwad, contributing to an AI-based app development for Reducing Carbon Footprints at Individual Level
                                • As a Research Intern, I gained experience in developing and deploying multi state flutter apps.`}
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
