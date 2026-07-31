import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Home — Karthik S Kashyap",
};

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <Hero />
    </main>
  );
}
