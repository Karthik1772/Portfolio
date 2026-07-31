import type { Metadata } from "next";
import Education from "@/components/Education";

export const metadata: Metadata = {
  title: "Education — Karthik S Kashyap",
};

export default function EducationPage() {
  return (
    <main className="flex-1 flex flex-col">
      <Education />
    </main>
  );
}
