import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import ContactQuickInfo from "@/components/ContactQuickInfo";
import ContactFormSection from "@/components/ContactFormSection";
import ContactMap from "@/components/ContactMap";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ContactHero />
        <ContactQuickInfo />
        <ContactFormSection />
        <ContactMap />
      </main>
      <Footer />
    </>
  );
}
