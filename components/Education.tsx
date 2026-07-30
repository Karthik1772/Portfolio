"use client";

const education = [
  {
    name: "Alva's Institute of Engineering & Technology (VTU)",
    meta: "B.E. Electronics & Communication Engineering · 2022–2026",
    score: "CGPA 7.9/10",
  },
  {
    name: "Gopalaswamy PU College",
    meta: "Pre-University · 2022",
    score: "87.5%",
  },
  {
    name: "Sadvidya High School",
    meta: "SSLC / X · 2020",
    score: "93.28%",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="eyebrow">education</div>
        <h2 className="font-display font-semibold text-[clamp(1.75rem,3.4vw,2.5rem)] mb-2">
          Where I&apos;ve studied
        </h2>
        <div className="mt-8">
          {education.map((e) => (
            <div
              key={e.name}
              className="flex flex-wrap justify-between items-baseline gap-3 py-4 border-t border-border last:border-b"
            >
              <div>
                <div className="font-semibold">{e.name}</div>
                <div className="text-sm text-muted-foreground">{e.meta}</div>
              </div>
              <div
                className="font-mono-brand text-sm"
                style={{ color: "var(--clr-green)" }}
              >
                {e.score}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
