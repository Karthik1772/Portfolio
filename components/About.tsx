'use client';

const meta = [
  { label: 'based in', value: 'Bengaluru, Karnataka' },
  { label: 'studying', value: 'B.E. E&C · 2022–2026' },
  { label: 'currently', value: 'Frontend Intern, Barracuda' },
  { label: 'stack', value: 'React / Next.js / TS' },
  { label: 'shipped', value: '6 released projects' },
];

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.3fr,0.7fr] gap-12">
          <div>
            <div className="eyebrow">about.md</div>
            <h2 className="font-display font-semibold text-[clamp(1.75rem,3.4vw,2.5rem)] mb-5">
              Frontend, with an electronics engineer&apos;s habits
            </h2>
            <p className="text-muted-foreground mb-5 max-w-2xl">
              I&apos;m finishing a B.E. in Electronics &amp; Communication Engineering while
              working as a frontend developer — which mostly means I default to thinking in
              signal paths, states, and failure modes before I think in components. Currently
              at Barracuda Networks&apos; Data Protection team, building the interfaces
              enterprise customers use to manage cloud backups. Before that, at IIIT Dharwad,
              building the UI for an AI sustainability tool that turned ML predictions into
              recommendations people could actually act on.
            </p>
            <p className="text-muted-foreground max-w-2xl">
              Outside of work I coordinate Edwin Lab, AIET&apos;s open-source student club, and
              run STEM workshops for Scouts &amp; Guides across Karnataka — teaching the same
              instinct I use at work: build the small thing, ship it, see if it holds up.
            </p>
          </div>

          <div className="font-mono-brand text-[13.5px] border-t border-border">
            {meta.map((row) => (
              <div key={row.label} className="flex justify-between py-2.5 border-b border-border">
                <span className="text-muted-foreground">{row.label}</span>
                <span>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
