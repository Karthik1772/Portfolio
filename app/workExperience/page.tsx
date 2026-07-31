import type { Metadata } from "next";
import WorkExperience from "@/components/WorkExperience";

export const metadata: Metadata = {
  title: "Work Experience — Karthik S Kashyap",
};

export default function WorkExperiencePage() {
  return (
    <main className="flex-1 flex flex-col">
      <WorkExperience />
    </main>
  );
}
