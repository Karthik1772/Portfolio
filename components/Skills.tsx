"use client";

const skillGroups = [
  {
    category: "Languages",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5",
      "CSS3 / SCSS",
      "Java",
      "Dart",
      "SQL",
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React.js", "Next.js", "Material UI", "Tailwind CSS", "Flutter"],
  },
  {
    category: "Testing",
    skills: ["Jest", "React Testing Library"],
  },
  {
    category: "DevOps & Tools",
    skills: [
      "Git",
      "GitHub",
      "Azure DevOps CI/CD",
      "ArgoCD",
      "Kubernetes (kubectl)",
      "Vercel",
    ],
  },
  {
    category: "Collaboration",
    skills: ["Jira", "Confluence", "Figma", "Agile / Scrum"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <p className="text-muted-foreground">
              My technical skills and expertise in various technologies and
              tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="bg-background rounded-lg border border-border p-6 shadow-sm"
              >
                <h3 className="text-base font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
