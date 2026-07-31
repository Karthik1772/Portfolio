import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Projects — Karthik S Kashyap",
};

export default function ProjectsPage() {
  return (
    <main className="flex-1 flex flex-col">
      <Projects />
    </main>
  );
}
