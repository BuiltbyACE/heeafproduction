import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import WhoWeAreJourney from "@/components/WhoWeAreJourney";
import MissionVisionStrip from "@/components/MissionVisionStrip";
import CoreValues from "@/components/CoreValues";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <AboutHero />
        <WhoWeAreJourney />
        <MissionVisionStrip />
        <CoreValues />
      </main>
      <Footer />
    </>
  );
}
