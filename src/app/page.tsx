import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import BusinessSectorsFull from "@/components/BusinessSectorsFull";
import WhoWeAreJourney from "@/components/WhoWeAreJourney";
import MissionVisionStrip from "@/components/MissionVisionStrip";
import CoreValues from "@/components/CoreValues";
import GlobalReach from "@/components/GlobalReach";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <WhoWeAreJourney />
        <BusinessSectorsFull />
        <MissionVisionStrip />
        <CoreValues />
        <GlobalReach />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}