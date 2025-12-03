import NavBar from "@/components/ui/NavBar";
import Hero from "@/components/ui/Hero";
import WelcomeSection from "@/components/ui/WelcomeSection";
import Testimonial from "@/components/ui/Testimonial";
import Footer from "@/components/ui/Footer";
import HealingSection from "@/components/ui/HealingSection";
import SupportSection from "@/components/ui/SupportSection";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Hero />
      <WelcomeSection />
      <HealingSection/>
      <SupportSection/>
      <Testimonial />
      {/* <Footer /> */}
    </div>
  );
}
