"use client";

import { useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";

const timeline = [
  {
    year: "2024",
    title: "1st place, Fusion Techathon 3.0",
    description:
      "Organized by the Department of AIML at Alva's Institute of Engineering & Technology.",
    image: "/img/fusion/1.jpg",
  },
  {
    year: "2024",
    title:
      "Chest Cancer Detection Using AI — presented at Infosys Engineering Next",
    description:
      "Presented the project at Infosys' Electronic City campus in Bangalore.",
    image: "/img/infosys-presentation/1.jpg",
  },
  {
    year: "2024",
    title: "Open Source India, NIMHANS Convention Centre",
    description:
      "Attended talks and met practitioners across the Indian open-source ecosystem.",
    image: "/img/osi/1.jpg",
  },
  {
    year: "2024",
    title: "Volunteer, Alva's Pragathi",
    description:
      "Helped coordinate recruitment activities at South India's largest placement drive.",
    image: "/img/pragathi/1.jpg",
  },
  {
    year: "2023",
    title: "1st place, Technova — Algoriz Club (CSE, AIET)",
    description: "Team win at the department's flagship technical competition.",
    image: "/img/algoriz/1.jpg",
  },
  {
    year: "2023",
    title: "Speaker, International Cultural Jamboree",
    description:
      "Represented Chirp Club and spoke on avian awareness to 3,000+ attendees.",
  },
  {
    year: "2023",
    title: "Participant, Symbiot Hackathon — VVCE",
    description:
      "Collaborative build in a competitive, cross-college hackathon setting.",
    image: "/img/symbiot/1.jpg",
  },
  {
    year: "2023",
    title: "STEM workshops for Scouts & Guides",
    description:
      "Led sessions for 100+ students as Student Leader of Edwin Lab.",
    image: "/img/stem/1.jpg",
  },
  {
    year: "2022",
    title: "3rd place, National Mathematics Day",
    description: "Department of Mathematics competition, AIET.",
    image: "/img/mathematics/mathematics-day.jpg",
  },
];

const leadership = [
  {
    title: "Edwin Lab Coordinator",
    points: [
      "Student Leader, Edwin Lab (AIET): led open-source software projects, fostering growth of students with hands-on development.",
      "STEM Facilitator: conducted sessions for 100+ Scouts & Guides across Karnataka, promoting science and technology.",
    ],
  },
  {
    title: "CHIRP Club Coordinator",
    points: [
      "Student Coordinator, Chirp Club (AIET): led birding activities, documented species, and studied habitats and migration.",
      "Speaker, International Cultural Jamboree: represented Chirp Club and addressed 3,000+ students on avian awareness.",
    ],
  },
];

export default function Achievements() {
  const [lightbox, setLightbox] = useState<{
    image: string;
    title: string;
    year: string;
  } | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  return (
    <section id="achievements" className="py-10 sm:py-14">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="eyebrow">Achievements</div>
        <h2 className="font-display font-semibold text-[clamp(1.75rem,3.4vw,2.5rem)] mb-12">
          Outside the editor
        </h2>

        <div className="relative pl-7">
          <div className="absolute left-[5px] top-1.5 bottom-1.5 w-px bg-border" />
          {timeline.map((item, i) => (
            <div key={i} className="relative pb-8 last:pb-0">
              <span
                className="absolute -left-7 top-1 w-2.5 h-2.5 rounded-full bg-background"
                style={{ border: "2px solid var(--clr-green)" }}
              />
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {item.image && (
                  <button
                    type="button"
                    onClick={() =>
                      setLightbox({
                        image: item.image!,
                        title: item.title,
                        year: item.year,
                      })
                    }
                    className="group relative w-full sm:w-24 h-16 rounded-md border border-border shrink-0 overflow-hidden cursor-zoom-in transition-shadow duration-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2"
                    style={{ ["--tw-ring-color" as any]: "var(--clr-green)" }}
                    aria-label={`View photo: ${item.title}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
                    />
                    <span className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                      <ZoomIn
                        size={16}
                        className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </span>
                  </button>
                )}
                <div>
                  <div
                    className="font-mono-brand text-xs"
                    style={{ color: "var(--clr-green)" }}
                  >
                    {item.year}
                  </div>
                  <h4 className="font-semibold text-[15.5px] mt-0.5 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm max-w-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="font-display font-semibold text-xl mb-6">
            Leadership & Extracurriculars
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {leadership.map((item) => (
              <div
                key={item.title}
                className="border border-border rounded-md p-6 bg-card"
              >
                <h4 className="font-semibold mb-3">{item.title}</h4>
                <ul className="space-y-2.5">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-muted-foreground text-sm"
                    >
                      <span
                        className="mt-0.5"
                        style={{ color: "var(--clr-green)" }}
                      >
                        +
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close photo"
          >
            <X size={20} />
          </button>

          <div
            className="max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={lightbox.image}
              alt={lightbox.title}
              className="w-full max-h-[75vh] object-contain rounded-md shadow-2xl"
            />
            <div className="mt-4 text-center">
              <div
                className="font-mono-brand text-xs"
                style={{ color: "var(--term-green)" }}
              >
                {lightbox.year}
              </div>
              <h4 className="text-white font-semibold text-base mt-1">
                {lightbox.title}
              </h4>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
