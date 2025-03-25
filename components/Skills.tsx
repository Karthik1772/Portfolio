'use client';

import { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  percentage: number;
}

const skillsData: Skill[] = [
  { name: 'HTML', percentage: 100 },
  { name: 'CSS', percentage: 90 },
  { name: 'Figma', percentage: 75 },
  { name: 'Java', percentage: 80 },
  { name: 'Dart', percentage: 90 },
  { name: 'Flutter', percentage: 85 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-left pl-10 xl:pl-32 mb-12">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <p className="text-muted-foreground">
            My technical skills and expertise in various technologies and tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillsData.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill }: { skill: Skill }) {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && progressRef.current) {
          progressRef.current.style.width = `${skill.percentage}%`;
        }
      },
      { threshold: 0.5 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, [skill.percentage]);

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-semibold">{skill.name}</span>
        <span className="text-muted-foreground">{skill.percentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          ref={progressRef}
          className="h-full bg-primary transition-all duration-1000 ease-out"
          style={{ width: '0%' }}
        />
      </div>
    </div>
  );
}