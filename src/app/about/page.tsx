import type { Metadata } from "next";
import { PageShell } from "@/components/sunzee/page-shell";
import { AboutPage } from "@/components/sunzee/about-page";

export const metadata: Metadata = {
  title: "About Us - Sunzee Holidays",
  description:
    "Learn about Sunzee Holidays - a B2B destination management company connecting travel agents and travellers with authentic experiences across the Indian Ocean. Founded by Imran Ally Kanowah and Zaynah Kanowah.",
};

export default function About() {
  return (
    <PageShell>
      <AboutPage />
    </PageShell>
  );
}
