'use client';
import {  Wallet, Layout, Database, Terminal, Cloud , User2, Club, Computer} from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay'
const projects = [
  {
    image:'/img/doozy.jpg',
    title: 'Doozy',
    description: 'A clean, minimal to-do app designed to simplify daily task management.',
    icon: Database,
    github:'https://github.com/Karthik1772/Doozy',
    liveLink:'https://github.com/Karthik1772/Doozy/releases/download/v1.0.0/Doozy.apk'
  },
  {
    image:'/img/xoxo.jpg',
    title: 'XoXo',
    description: 'A custom-built Tic Tac Toe game with a clean Flutter architecture.',
    icon: Layout,
    github:'https://github.com/Karthik1772/XoXo',
    liveLink:'https://github.com/Karthik1772/XoXo/releases/download/v1.0.0/XoXo.apk'
  },
  {
    image:'/img/xpenso.jpg',
    title: 'Xpenso',
    description: 'A lightweight and intuitive expense tracker for managing your daily spending',
    icon: Wallet,
    github:'https://github.com/Karthik1772/Xpenso',
    liveLink:'https://github.com/Karthik1772/Xpenso/releases/download/v1.0.0/Xpenso.apk'
  },
  {
    image:'/img/formify.jpg',
    title: 'Formify',
    description: 'A modular Flutter app for building dynamic forms with reusable components and clean architecture.',
    icon: Terminal,
    github:'https://github.com/Karthik1772/Formify.git',
  },
  {
    
    title: 'Studentix',
    description: 'A real-time student tracking app that instantly shows which student is logged in and actively using the system',
    icon: User2,
    github:'https://github.com/Karthik1772/resource-managment.git',
  },
  {
    title: 'Major project',
    description: 'Cloud-based applications and infrastructure solutions.',
    icon: Cloud
  },
];

const achievementsDescription = [
    "Secured 3rd place in the National Mathematics Day competition, organized by the Department of Mathematics at Alva's Institute of Engineering and Technology in 2022.",
    "Successfully led a team to victory in Tecothon, a renowned competition conducted by the Algoriz Club of the Department of Computer Science Engineering at Alva's Institute of Engineering and Technology, Moodbidri, in 2023.",
    "Guided a team to triumph in Fusion Techathon 3.0, an event organized by the Department of AIML at Alva's Institute of Engineering and Technology, Moodbidri, in 2024.",
    'Received an official offer for a C++ Developer Internship from InternPe in 2023, with responsibilities centered around problem-solving, algorithm design, and software development.'
]

const achievements = [
  {
    name:"Mathematics Day",
    images:[
      '/img/mathematics-day.jpg',
    ],
    description: "Secured 3rd place in the National Mathematics Day competition, organized by the Department of Mathematics at Alva's Institute of Engineering and Technology in 2022."
  },
  {
    name:"Fusion Techathon",
    images:[
      '/img/fusion-techathon.jpg',
    ],
    description: "Thrilled to share that our team secured 1st place in the Fusion Tecathon 3.0 organized by the Department of AIML at Alva's Institute of Engineering and Technology ! 🏆✨"
  },
  {
    name:"Algoriz Tecothon",
    images:[
        '/img/algoriz/1.jpg',
        '/img/algoriz/2.jpg',
        '/img/algoriz/3.jpg',
        '/img/algoriz/4.jpg',
    ],
    description: "My team emerged as the champions at Tecothon, conducted by Algoriz Club from the department of Computer Science Engineering of Alva's Institute of Engineering and Technology, Moodbidri. The competition was fierce, but our hard work and dedication paid off."
  },
  {
    name:"Open Source India",
    images:[
        '/img/osi/1.jpg',
        '/img/osi/2.jpg',
        '/img/osi/3.jpg',
    ],
    description: "I had an incredible opportunity to attend Open Source India 2024 at the NIMHANS Convention Center—a gathering point for innovators and industry leaders in open source technology!"
  },
  {
    name:"Pragathi 2024",
    images:[
        '/img/pragathi/1.jpg',
        '/img/pragathi/2.jpg',
    ],
    description: "I'm thrilled to share my recent experience volunteering with the Employment Enhancement Center (EEC) at Alva's Pragati, South India's largest placement drive."
  },
  {
    name:"STEM Workshop 2023",
    images:[
        '/img/stem/1.jpg',
        '/img/stem/2.jpg',
        '/img/stem/3.jpg',
        '/img/stem/4.jpg',
        '/img/stem/5.jpg',
        '/img/stem/6.jpg',
    ],
    description: "Sparking future innovators! Had a blast leading a STEM workshop for Scouts&Guides.I guided Scouts&Guides through the exciting world of STEM, showing them the power of Science, Technology, Engineering, and Maths ."
  },
  {
    name:"Infosys Project Presentation",
    images:[
        '/img/infosys-presentation/1.jpg',
        '/img/infosys-presentation/2.jpg',
        '/img/infosys-presentation/3.jpg',
        '/img/infosys-presentation/4.jpg',
    ],
    description: "We had an incredible experience presenting our project, 'Chest Cancer Detection Using AI' ,at the Engineering Next 2024 event hosted by Infosys at their Electronic City campus in Bangalore!"
  },
  {
    name:"Symbiot VVCE Hackathon",
    images:[
        '/img/symbiot/1.jpg',
        '/img/symbiot/2.jpg',
        '/img/symbiot/3.jpg',
        '/img/symbiot/4.jpg'
    ],
    description: "🚀 Innovation meets enthusiasm at hackathons, and this one in the beautiful city of Mysore, hosted by Vidyavardhaka College of Engineering, was no different!"
  }
]

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
        </div>
      </div>
    </section>
  );
}

function AchievementCarousel({ name, images, description }: {
    name: string;
    images: string[]
    description?: string
}){
    return (
        <div className="mb-8">
            <h3 className="text-xl font-bold mb-4">{name}</h3>
            <Carousel plugins={[
                Autoplay({
                    delay:5000
                })
            ]} >
                <CarouselContent >
                    
                {images.map((image, index) => (
                    <CarouselItem key={index} className='h-[200px] w-[300px]'>
                        <img src={image} alt={name} className="object-contain" />
                    </CarouselItem>
                ))}
                </CarouselContent>
                {description && (
                    <div className="text-muted-foreground mt-4">
                        {description}
                    </div>
                )}
            </Carousel>
        </div>
    )
}
