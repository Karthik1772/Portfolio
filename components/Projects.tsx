import { Code2, Wallet, Layout, Database, Terminal, Cloud } from 'lucide-react';

const projects = [
  {
    title: 'Doozy ',
    description: 'A clean, minimal to-do app designed to simplify daily task management.',
    icon: Database,
  },
  {
    title: 'XoXo',
    description: 'A custom-built Tic Tac Toe game with a clean Flutter architecture.',
    icon: Layout,
  },
  {
    title: 'Xpenso',
    description: 'A lightweight and intuitive expense tracker for managing your daily spending',
    icon: Wallet,
  },
  {
    title: 'Formify',
    description: 'A modular Flutter app for building dynamic forms with reusable components and clean architecture.',
    icon: Terminal,
  },
  {
    title: 'Studentix',
    description: 'A real-time student tracking app that instantly shows which student is logged in and actively using the system',
    icon: Code2,
  },
  {
    title: 'Major project',
    description: 'Cloud-based applications and infrastructure solutions.',
    icon: Cloud,
  },
];

export default function Projects() {
  return (
    <section id="services" className="py-20 bg-muted/30">
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

function ProjectCard({ title, description, icon: Icon }: {
  title: string;
  description: string;
  icon: any;
}) {
  return (
    <div className="bg-background p-6 rounded-lg shadow-lg border border-border hover:border-primary transition-colors">
      <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
