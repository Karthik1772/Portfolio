import type { Metadata } from "next";
import TechStack from "@/components/TechStack";

export const metadata: Metadata = {
  title: "Tech Stack — Karthik S Kashyap",
};

export default function TechStackPage() {
  return (
    <main className="flex-1 flex flex-col">
      <TechStack />
    </main>
  );
}
