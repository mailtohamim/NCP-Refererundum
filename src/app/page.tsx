import Link from "next/link"; // unused but preventing removal if any
import Hero from "@/components/Hero";
import TimelineSection from "@/components/TimelineSection";
import CharterFeatures from "@/components/CharterFeatures";
import VotingGuide from "@/components/VotingGuide";
import Footer from "@/components/Footer";
import FloatingParticles from "@/components/FloatingParticles";

import PhotoCarousel from "@/components/PhotoCarousel";
import ReferendumWithPulse from "@/components/ReferendumWithPulse";

export default function Home() {
  return (
    <main className="min-h-screen text-text-primary relative">
      <FloatingParticles />
      <Hero />
      <TimelineSection />
      <CharterFeatures />
      <PhotoCarousel />
      <ReferendumWithPulse />
      <VotingGuide />
      <Footer />
    </main>
  );
}
