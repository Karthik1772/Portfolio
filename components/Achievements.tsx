"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

const timeline = [
  {
    year: "2024",
    title: "1st place, Fusion Techathon 3.0",
    description:
      "Organized by the Department of AIML at Alva's Institute of Engineering & Technology.",
    images: ["/img/fusion/1.jpg", "/img/fusion/2.jpg"],
  },
  {
    year: "2024",
    title:
      "Chest Cancer Detection Using AI — presented at Infosys Engineering Next",
    description:
      "Presented the project at Infosys' Electronic City campus in Bangalore.",
    images: [
      "/img/infosys-presentation/1.jpg",
      "/img/infosys-presentation/2.jpg",
      "/img/infosys-presentation/3.jpg",
      "/img/infosys-presentation/4.jpg",
    ],
  },
  {
    year: "2024",
    title: "Open Source India, NIMHANS Convention Centre",
    description:
      "Attended talks and met practitioners across the Indian open-source ecosystem.",
    images: ["/img/osi/1.jpg", "/img/osi/2.jpg", "/img/osi/3.jpg"],
  },
  {
    year: "2024",
    title: "Volunteer, Alva's Pragathi",
    description:
      "Helped coordinate recruitment activities at South India's largest placement drive.",
    images: ["/img/pragathi/1.jpg"],
  },
  {
    year: "2023",
    title: "1st place, Technova — Algoriz Club (CSE, AIET)",
    description: "Team win at the department's flagship technical competition.",
    images: ["/img/algoriz/1.jpg", "/img/algoriz/2.jpg", "/img/algoriz/3.jpg"],
  },
  // {
  //   year: "2023",
  //   title: "Speaker, International Cultural Jamboree",
  //   description:
  //     "Represented Chirp Club and spoke on avian awareness to 3,000+ attendees.",
  // },
  {
    year: "2023",
    title: "Participant, Symbiot Hackathon — VVCE",
    description:
      "Collaborative build in a competitive, cross-college hackathon setting.",
    images: ["/img/symbiot/1.jpg", "/img/symbiot/2.jpg", "/img/symbiot/3.jpg"],
  },
  {
    year: "2023",
    title: "STEM workshops for Scouts & Guides",
    description:
      "Led sessions for 100+ students as Student Leader of Edwin Lab.",
    images: ["/img/stem/1.jpg", "/img/stem/2.jpg", "/img/stem/3.jpg"],
  },
  {
    year: "2022",
    title: "3rd place, National Mathematics Day",
    description: "Department of Mathematics competition, AIET.",
    images: ["/img/mathematics/mathematics-day.jpg"],
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

// Small delay before closing on mouse-leave so moving the cursor from the
// thumbnail toward the modal doesn't cause it to flicker shut.
const CLOSE_DELAY_MS = 150;

// How often thumbnails auto-cycle between photos, and how often the
// lightbox advances to the next photo when left untouched.
const THUMB_INTERVAL_MS = 2200;
const LIGHTBOX_AUTOPLAY_MS = 3000;

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  images?: string[];
};

function Thumbnail({ item }: { item: TimelineItem }) {
  const images = item.images ?? [];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, THUMB_INTERVAL_MS);
    return () => clearInterval(id);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-full">
      {images.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={src}
          src={src}
          alt={item.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-110"
          style={{
            opacity: i === index ? 1 : 0,
            transition: "opacity 0.6s ease-in-out",
          }}
        />
      ))}
      {images.length > 1 && (
        <span className="absolute bottom-1 right-1 flex gap-0.5 z-10">
          {images.map((_, i) => (
            <span
              key={i}
              className="w-1 h-1 rounded-full"
              style={{
                backgroundColor:
                  i === index ? "var(--clr-green)" : "rgba(255,255,255,0.5)",
              }}
            />
          ))}
        </span>
      )}
    </div>
  );
}

export default function Achievements() {
  const [lightbox, setLightbox] = useState<{
    images: string[];
    index: number;
    title: string;
    year: string;
  } | null>(null);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openLightbox = (item: TimelineItem) => {
    if (!item.images || item.images.length === 0) return;
    clearCloseTimer();
    setLightbox({
      images: item.images,
      index: 0,
      title: item.title,
      year: item.year,
    });
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => {
      setLightbox(null);
    }, CLOSE_DELAY_MS);
  };

  const closeNow = () => {
    clearCloseTimer();
    setLightbox(null);
  };

  const goNext = useCallback(() => {
    setLightbox((lb) =>
      lb ? { ...lb, index: (lb.index + 1) % lb.images.length } : lb,
    );
  }, []);

  const goPrev = useCallback(() => {
    setLightbox((lb) =>
      lb
        ? { ...lb, index: (lb.index - 1 + lb.images.length) % lb.images.length }
        : lb,
    );
  }, []);

  // Keyboard navigation: Escape closes, arrow keys move through the slideshow.
  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeNow();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox, goNext, goPrev]);

  // Autoplay the slideshow while the lightbox is open.
  useEffect(() => {
    if (!lightbox || lightbox.images.length <= 1) return;
    const id = setInterval(goNext, LIGHTBOX_AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [lightbox, goNext]);

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

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
                {item.images && item.images.length > 0 && (
                  <button
                    type="button"
                    onMouseEnter={() => openLightbox(item)}
                    onMouseLeave={scheduleClose}
                    onFocus={() => openLightbox(item)}
                    onBlur={scheduleClose}
                    onClick={() => openLightbox(item)}
                    className="group relative w-full sm:w-24 h-16 rounded-md border border-border shrink-0 overflow-hidden cursor-zoom-in transition-shadow duration-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2"
                    style={{ ["--tw-ring-color" as any]: "var(--clr-green)" }}
                    aria-label={`View photos: ${item.title}`}
                  >
                    <Thumbnail item={item} />
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
          onClick={closeNow}
          onMouseEnter={clearCloseTimer}
          onMouseLeave={scheduleClose}
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.title}
        >
          <button
            type="button"
            onClick={closeNow}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close photo"
          >
            <X size={20} />
          </button>

          <div
            className="max-w-3xl w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={goPrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label="Previous photo"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                  aria-label="Next photo"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={lightbox.images[lightbox.index]}
              src={lightbox.images[lightbox.index]}
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

              {lightbox.images.length > 1 && (
                <div className="flex items-center justify-center gap-1.5 mt-3">
                  {lightbox.images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() =>
                        setLightbox((lb) => (lb ? { ...lb, index: i } : lb))
                      }
                      className="w-1.5 h-1.5 rounded-full transition-colors"
                      style={{
                        backgroundColor:
                          i === lightbox.index
                            ? "var(--term-green)"
                            : "rgba(255,255,255,0.35)",
                      }}
                      aria-label={`Go to photo ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
