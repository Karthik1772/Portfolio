'use client';

const projects = [
  {
    title: 'Mystery Messenger',
    tag: 'live',
    description:
      'Anonymous messaging app with OTP email verification, session auth via NextAuth.js, and Gemini-powered reply suggestions.',
    tech: 'Next.js · TypeScript · MongoDB · NextAuth.js',
    github: 'https://github.com/Karthik1772/Mystery_Messager',
    live: 'https://mystery-messager.vercel.app/',
    liveLabel: 'live',
  },
  {
    title: 'Bug Blaster',
    tag: 'v1.0.0',
    description:
      'Issue tracker with full CRUD, priority-based sorting, and a filterable dashboard for triaging bugs.',
    tech: 'React.js · Axios · MongoDB · REST API',
    github: 'https://github.com/Karthik1772/Bug-Blaster',
  },
  {
    title: 'Doozy',
    tag: 'v1.0.0',
    description: 'A clean, minimal to-do app built to make daily task management genuinely simple.',
    tech: 'Flutter · Dart',
    github: 'https://github.com/Karthik1772/Doozy',
    live: 'https://github.com/Karthik1772/Doozy/releases/download/v1.0.0/Doozy.apk',
    liveLabel: 'apk',
  },
  {
    title: 'Xpenso',
    tag: 'v1.0.0',
    description: 'Lightweight expense tracker for logging and reviewing daily spending at a glance.',
    tech: 'Flutter · Dart',
    github: 'https://github.com/Karthik1772/Xpenso',
    live: 'https://github.com/Karthik1772/Xpenso/releases/download/v1.0.0/Xpenso.apk',
    liveLabel: 'apk',
  },
  {
    title: 'Formify',
    tag: 'v1.0.0',
    description: 'Modular app for building dynamic forms from reusable components with a clean architecture underneath.',
    tech: 'Flutter · Dart',
    github: 'https://github.com/Karthik1772/Formify',
    live: 'https://github.com/Karthik1772/Formify/releases/download/v1.0.0/app-release.apk',
    liveLabel: 'apk',
  },
  {
    title: 'XoXo',
    tag: 'v1.0.0',
    description: 'Tic-tac-toe, built as an exercise in clean Flutter architecture rather than the game itself.',
    tech: 'Flutter · Dart',
    github: 'https://github.com/Karthik1772/XoXo',
    live: 'https://github.com/Karthik1772/XoXo/releases/download/v1.0.0/XoXo.apk',
    liveLabel: 'apk',
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-10 sm:py-14 bg-card border-y border-border"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="eyebrow">Projects</div>
        <h2 className="font-display font-semibold text-[clamp(1.75rem,3.4vw,2.5rem)] mb-2">
          Things I&apos;ve shipped end to end
        </h2>
        <p className="text-muted-foreground max-w-md mb-12">
          Not demos — tagged, released, and downloadable.
        </p>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <div
              key={p.title}
              className="border border-border rounded-md p-6 bg-background hover:-translate-y-1 hover:border-[var(--clr-green)] transition-all"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display font-semibold text-lg">
                  {p.title}
                </h3>
                <span
                  className="font-mono-brand text-[11.5px] px-2 py-1 rounded"
                  style={{
                    color: "var(--clr-copper)",
                    background: "var(--clr-copper-soft)",
                  }}
                >
                  {p.tag}
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                {p.description}
              </p>
              <div className="font-mono-brand text-[11.5px] text-muted-foreground mb-4">
                {p.tech}
              </div>
              <div className="flex gap-2.5">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono-brand text-[12.5px] border border-border px-3 py-1.5 rounded hover:border-foreground transition-colors"
                >
                  code ↗
                </a>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono-brand text-[12.5px] border border-border px-3 py-1.5 rounded hover:border-foreground transition-colors"
                  >
                    {p.liveLabel} {p.liveLabel === "apk" ? "↓" : "↗"}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
