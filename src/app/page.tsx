import { TopBar } from "@/components/sunzee/top-bar";
import { Header } from "@/components/sunzee/header";
import { Hero } from "@/components/sunzee/hero";
import { Destinations } from "@/components/sunzee/destinations";
import { About } from "@/components/sunzee/about";
import { CTA } from "@/components/sunzee/cta";
import { Enquiry } from "@/components/sunzee/enquiry";
import { Partners } from "@/components/sunzee/partners";
import { Footer } from "@/components/sunzee/footer";
import { FloatingActions } from "@/components/sunzee/floating-actions";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TopBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <Destinations />
        <About />
        <CTA />
        <Enquiry />
        <Partners />
      </main>
      <Footer />
      <FloatingActions />
      {/* Spacer so mobile bottom nav doesn't cover footer content */}
      <div className="h-16 md:hidden" aria-hidden="true" />
    </div>
  );
}
