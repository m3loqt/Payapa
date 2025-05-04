import CTASection from "@/components/CTASection";
import FeaturedServicesSection from "@/components/FeaturedServicesSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import SignatureMassages from "@/components/SignatureMassages";
import TestimonialsSection from "@/components/TestimonialsSection";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection></HeroSection>
      <OverviewSection></OverviewSection>
      <SignatureMassages></SignatureMassages>
      <TestimonialsSection></TestimonialsSection>
      <CTASection></CTASection>
      <Footer></Footer>
    </main>
  );
}
