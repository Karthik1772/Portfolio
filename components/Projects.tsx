import { Wallet, Layout, Database, Terminal, Cloud, User2 } from 'lucide-react';

const projects = [
  {
    image: '/img/icons/doozy.jpg',
    title: 'Doozy',
    description: 'A clean, minimal to-do app designed to simplify daily task management.',
    icon: Database,
    github: 'https://github.com/Karthik1772/Doozy',
    liveLink: 'https://github.com/Karthik1772/Doozy/releases/download/v1.0.0/Doozy.apk',
    textb:'Download',
  },
  {
    image: '/img/icons/xoxo.jpg',
    title: 'XoXo',
    description: 'A custom-built Tic Tac Toe game with a clean Flutter architecture.',
    icon: Layout,
    github: 'https://github.com/Karthik1772/XoXo',
    liveLink: 'https://github.com/Karthik1772/XoXo/releases/download/v1.0.0/XoXo.apk',
    textb: 'Download',
  },
  {
    image: '/img/icons/xpenso.jpg',
    title: 'Xpenso',
    description: 'A lightweight and intuitive expense tracker for managing your daily spending',
    icon: Wallet,
    github: 'https://github.com/Karthik1772/Xpenso',
    liveLink: 'https://github.com/Karthik1772/Xpenso/releases/download/v1.0.0/Xpenso.apk',
    textb: 'Download',
  },
  {
    image: '/img/icons/formify.jpg',
    title: 'Formify',
    description: 'A modular Flutter app for building dynamic forms with reusable components and clean architecture.',
    icon: Terminal,
    github: 'https://github.com/Karthik1772/Formify',
    liveLink: 'https://github.com/Karthik1772/Formify/releases/download/v1.0.0/app-release.apk',
    textb: 'Download',
  },
  {
    image: '/img/icons/mystery.jpg',
    title: 'Mystery Messager',
    description: 'A Next.js app for sending anonymous messages with AI suggestions, secure login, and OTP verification.',
    icon: User2,
    github: 'https://github.com/Karthik1772/Mystery_Messager',
    liveLink: 'https://mystery-messager.vercel.app/',
    textb: 'View Live',
  },
  // {
  //   title: 'Major project',
  //   description: 'Cloud-based applications and infrastructure solutions.',
  //   icon: Cloud,
  //   github: 'https://github.com/Karthik1772/',
  //   liveLink: 'https://github.com/Karthik1772'
  // },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-left mb-12">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <p className="text-muted-foreground">
              Showcase of my technical projects and applications built with various technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, icon: Icon, github, liveLink, image, textb }: {
  title: string;
  description: string;
  icon: any;
  github?: string;
  liveLink?: string;
  image?: string;
  textb?: string;
}) {
  return (
    <div className="bg-background p-6 rounded-lg shadow-lg border border-border hover:border-primary transition-colors">
      <div className="w-12 h-12 text-primary flex items-center justify-center mb-4">
        {image ?
          <img src={image} alt={title} className="w-full h-full rounded-xl object-cover" /> :
          <div className="w-full h-full bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon className="w-6 h-6" />
          </div>
        }
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
      <div className="mt-4 flex items-center space-x-4">
        {github && <a target='_blank' href={github} className="text-primary hover:underline p-2 bg-muted rounded-lg hover:bg-muted/50">
          View Code
        </a>}
        {liveLink && <a target='_blank' href={liveLink} className="text-primary hover:underline bg-muted p-2 rounded-lg hover:bg-muted/50">
          {textb}
        </a>}
      </div>
    </div>
  );
}