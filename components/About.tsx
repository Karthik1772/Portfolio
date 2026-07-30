"use client";

const DOB = "2004-07-22"; // 22/07/2004

function calculateAge(dob: string) {
  const birthDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

export default function About() {
  const meta = [
    { label: "Name", value: "Karthik S Kashyap" },
    { label: "Degree", value: "Bachelor of Engineering in E&C · 2022-2026" },
    { label: "Age", value: `${calculateAge(DOB)}` },
    { label: "Based In", value: "Bangalore, Karnataka, India" },
    { label: "Stack", value: "React / Next.js / TS" },
  ];

  return (
    <section id="about" className="py-10 sm:py-14">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-[1.3fr,0.7fr] gap-12">
          <div>
            <div className="eyebrow">About</div>
            <h2 className="font-display font-semibold text-[clamp(1.75rem,3.4vw,2.5rem)] mb-5">
              Frontend, with an electronics engineer&apos;s habits
            </h2>
            <p className="text-muted-foreground mb-5 max-w-2xl">
              I recently completed my B.E. in Electronics &amp; Communication
              Engineering and now work as a frontend developer — which mostly
              means I default to thinking in signal paths, states, and failure
              modes before I think in components. Currently at Barracuda
              Networks&apos; Data Protection team, building the interfaces
              enterprise customers use to manage cloud backups. Before that, at
              IIIT Dharwad, building the UI for an AI sustainability tool that
              turned ML predictions into recommendations people could actually
              act on.
            </p>
            <p className="text-muted-foreground max-w-2xl">
              Outside of work I coordinate Edwin Lab, AIET&apos;s open-source
              student club, and run STEM workshops for Scouts &amp; Guides
              across Karnataka — teaching the same instinct I use at work: build
              the small thing, ship it, see if it holds up.
            </p>
          </div>

          <div className="self-center font-mono-brand text-[13.5px] border-t border-border">
            {meta.map((row) => (
              <div
                key={row.label}
                className="flex justify-between py-2.5 border-b border-border"
              >
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
