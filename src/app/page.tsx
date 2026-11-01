import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import BookingCalculator from "@/components/BookingCalculator";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FDFBF7] text-[#1E293B]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <BookingCalculator />
        <TestimonialsSection />
        <LocationSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
