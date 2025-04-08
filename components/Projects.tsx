import { Code2, Wallet, Layout, Database, Terminal, Cloud } from 'lucide-react';

const projects = [
  {
    title: 'Resource Management Application',
    description: 'Android application for educational resource management using Flutter and Node.js.',
    icon: Database,
  },
  {
    title: 'TIC TAC TOE App',
    description: 'Interactive game application built with modern technologies.',
    icon: Layout,
  },
  {
    title: 'Expense Tracker',
    description: 'Personal finance management application with intuitive interface.',
    icon: Wallet,
  },
  {
    title: 'CLI Tools',
    description: 'Collection of command-line utilities for developer productivity.',
    icon: Terminal,
  },
  {
    title: 'Code Editor Extensions',
    description: 'VS Code extensions for enhanced development experience.',
    icon: Code2,
  },
  {
    title: 'Cloud Solutions',
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
