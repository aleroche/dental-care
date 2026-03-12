import { Navbar } from "@/components/navbar/navbar";
import {
  HeroSection,
  OffersSection,
  AboutSection,
  WhyUsSection,
  BilingualSection,
  ServicesSection,
  InsuranceSection,
  FinancingSection,
  TeamSection,
  TestimonialsSection,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <OffersSection />
        <AboutSection />
        <WhyUsSection />
        <BilingualSection />
        <ServicesSection />
        <InsuranceSection />
        <FinancingSection />
        <TeamSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
