import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import OverviewSection from "@/components/OverviewSection";
import SignatureMassages from "@/components/SignatureMassages";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import OtherServices from "@/components/OtherServices";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <div id="about">
        <AboutSection />
      </div>

      <OverviewSection />

      <div id="massages">
        <SignatureMassages />
      </div>

      <OtherServices />

      <div id="testimonials">
        <TestimonialsSection />
      </div>

      <div id="faqs">
        <FAQSection />
      </div>

      <CTASection/>
      <div id="contact">
        <ContactSection></ContactSection>
      </div>

      <Footer />

  
    </main>
  );
}
