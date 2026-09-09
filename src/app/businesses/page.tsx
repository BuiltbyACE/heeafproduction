import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BusinessesHero from "@/components/BusinessesHero";
import BusinessSectorsFull from "@/components/BusinessSectorsFull";
import ProductSectorSection from "@/components/ProductSectorSection";
import WhyPartnerStrip from "@/components/WhyPartnerStrip";
import BusinessesCTA from "@/components/BusinessesCTA";
import { productSectors } from "@/data/productsServices";

export default function BusinessesPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <BusinessesHero />
        <BusinessSectorsFull />
        {productSectors.map((sector) => (
          <ProductSectorSection key={sector.slug} sector={sector} />
        ))}
        <WhyPartnerStrip />
        <BusinessesCTA />
      </main>
      <Footer />
    </>
  );
}
