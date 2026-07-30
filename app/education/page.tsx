import type { Metadata } from "next";
import Education from "@/components/Education";

export const metadata: Metadata = {
  title: "education — Karthik S Kashyap",
};

export default function EducationPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] flex flex-col justify-center">
      <Education />
    </main>
  );
}
