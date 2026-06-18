"use client";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const achievements = [
  {
    name: "Mathematics Day",
    images: ["/img/mathematics/mathematics-day.jpg"],
    description:
      "Secured 3rd place in the National Mathematics Day competition, organized by the Department of Mathematics at Alva's Institute of Engineering and Technology in 2022.",
  },
  {
    name: "STEM Workshop 2023",
    images: ["/img/stem/1.jpg", "/img/stem/2.jpg", "/img/stem/3.jpg"],
    description:
      "Sparking future innovators! Had a blast leading a STEM workshop for Scouts & Guides showing them the power of Science, Technology, Engineering, and Maths.",
  },
  {
    name: "Algoriz Technova",
    images: ["/img/algoriz/1.jpg", "/img/algoriz/2.jpg", "/img/algoriz/3.jpg"],
    description:
      "My team won Technova, organized by the Algoriz Club of the CSE department at Alva's Institute of Engineering & Technology, Moodbidri.",
  },
  {
    name: "Symbiot VVCE Hackathon",
    images: ["/img/symbiot/1.jpg", "/img/symbiot/2.jpg", "/img/symbiot/3.jpg"],
    description:
      "Participated in a hackathon organized by Vidyavardhaka College of Engineering, engaging in collaborative problem-solving and innovative solution development in a competitive and professional setting.",
  },
  {
    name: "Pragathi 2024",
    images: ["/img/pragathi/1.jpg"],
    description:
      "Volunteered with the Employment Enhancement Center (EEC) at Alva's Pragati, South India's largest placement drive, assisting in the smooth coordination of recruitment activities.",
  },
  {
    name: "Infosys Project Presentation",
    images: [
      "/img/infosys-presentation/1.jpg",
      "/img/infosys-presentation/2.jpg",
      "/img/infosys-presentation/3.jpg",
      "/img/infosys-presentation/4.jpg",
    ],
    description:
      "We had an incredible experience presenting our project, 'Chest Cancer Detection Using AI', at the Engineering Next 2024 event hosted by Infosys at their Electronic City campus in Bangalore!",
  },
  {
    name: "Open Source India",
    images: ["/img/osi/1.jpg", "/img/osi/2.jpg", "/img/osi/3.jpg"],
    description:
      "I had an incredible opportunity to attend Open Source India 2024 at the NIMHANS Convention Center—a gathering point for innovators and industry leaders in open source technology!",
  },
  {
    name: "Fusion Techathon",
    images: ["/img/fusion/1.jpg", "/img/fusion/2.jpg"],
    description:
      "Thrilled to share that our team secured 1st place in the Fusion Techathon 3.0 organized by the Department of AIML at Alva's Institute of Engineering and Technology!",
  },
];

const leadershipPoints = [
  {
    title: "Edwin Lab Coordinator",
    points: [
      "Student Leader, Edwin Lab (AIET): Led open-source software projects, fostering growth of students with hands-on development.",
      "STEM Facilitator: Conducted sessions for 100+ Scouts & Guides across Karnataka, promoting science and technology.",
    ],
  },
  {
    title: "CHIRP Club Coordinator",
    points: [
      "Student Coordinator, Chirp Club (AIET): Led birding activities, documented species, and studied habitats and migration.",
      "Speaker, International Cultural Jamboree: Represented Chirp Club and addressed 3000+ students on avian awareness.",
    ],
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-3xl font-bold mb-4">Achievements</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <AchievementCarousel key={index} {...achievement} />
            ))}
          </div>

          {/* Leadership & Extracurriculars */}
          <div className="mt-16">
            <h3 className="text-xl font-bold mb-6">
              Leadership & Extracurriculars
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {leadershipPoints.map((item, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg border border-border p-6"
                >
                  <h4 className="text-base font-semibold mb-3">{item.title}</h4>
                  <ul className="space-y-2">
                    {item.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="mt-1 text-primary">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AchievementCarousel({
  name,
  images,
  description,
}: {
  name: string;
  images: string[];
  description?: string;
}) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4">{name}</h3>
      <Carousel
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="w-full h-full md:h-[200px] md:w-[300px]"
            >
              <img src={image} alt={name} className="object-cover" />
            </CarouselItem>
          ))}
        </CarouselContent>
        {description && (
          <div className="text-muted-foreground mt-4">{description}</div>
        )}
      </Carousel>
    </div>
  );
}
