'use client';

const skillGroups = [
  {
    category: 'languages',
    skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3 / SCSS', 'Java', 'Dart', 'SQL'],
  },
  {
    category: 'frameworks & libraries',
    skills: ['React.js', 'Next.js', 'Material UI', 'Tailwind CSS', 'Flutter'],
  },
  {
    category: 'testing',
    skills: ['Jest', 'React Testing Library'],
  },
  {
    category: 'devops & tools',
    skills: ['Git / GitHub', 'Azure DevOps CI/CD', 'ArgoCD', 'Kubernetes', 'Vercel'],
  },
];

const collabAndCerts = [
  'Jira', 'Confluence', 'Figma', 'Agile / Scrum',
  'IBM · Front-End Apps with React', 'Wipro TalentNext · Java Full Stack',
];

export default function Skills() {
  return (
    <section id="skills" className="py-10 sm:py-14">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="eyebrow">tech-stack</div>
        <h2 className="font-display font-semibold text-[clamp(1.75rem,3.4vw,2.5rem)] mb-2">
          Tools I reach for
        </h2>
        <p className="text-muted-foreground max-w-md mb-12">
          Grouped by what they&apos;re for, not how impressive they sound.
        </p>

        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <div className="font-mono-brand text-[12.5px] text-muted-foreground mb-3">
                <span style={{ color: "var(--clr-copper)" }}>{"// "}</span>
                {group.category}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono-brand text-[12.5px] border border-border px-2.5 py-1.5 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

          <div className="md:col-span-2">
            <div className="font-mono-brand text-[12.5px] text-muted-foreground mb-3">
              <span style={{ color: "var(--clr-copper)" }}>{"// "}</span>
              collaboration & certs
            </div>
            <div className="flex flex-wrap gap-2">
              {collabAndCerts.map((item) => (
                <span
                  key={item}
                  className="font-mono-brand text-[12.5px] border border-border px-2.5 py-1.5 rounded"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
