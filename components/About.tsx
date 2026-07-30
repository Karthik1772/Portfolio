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
              Frontend Developer with a Bachelor&apos;s degree in Electronics
              &amp; Communication Engineering and hands-on industry experience
              building scalable enterprise SaaS applications using React,
              Next.js, TypeScript, and modern frontend technologies. Experienced
              in developing responsive user interfaces, integrating REST APIs,
              debugging production issues, and collaborating within Agile teams
              to deliver reliable, production-ready software. Passionate about
              building clean, scalable applications and continuously learning
              modern web technologies.
            </p>
            <p className="text-muted-foreground max-w-2xl">
              Beyond development, I enjoy exploring new technologies and
              building side projects that expand my skills. I believe great software
              is built through curiosity, continuous learning, and teamwork.
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
