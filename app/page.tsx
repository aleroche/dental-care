import { Navbar } from "@/components/navbar/navbar";
import {
  HeroSection,
  OffersSection,
  AboutSection,
  FeaturesSection,
  WhyUsSection,
  BilingualSection,
  ServicesSection,
  InsuranceSection,
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
        <FeaturesSection />
        <WhyUsSection />
        <BilingualSection />
        <ServicesSection />
        <InsuranceSection />
        <TeamSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
