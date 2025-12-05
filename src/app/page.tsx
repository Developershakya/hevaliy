import NavBar from "@/components/ui/NavBar";
import Hero from "@/components/ui/Hero";
import WelcomeSection from "@/components/ui/WelcomeSection";
import Testimonial from "@/components/ui/Testimonial";
import Footer from "@/components/Footer";
import HealingSection from "@/components/ui/HealingSection";
import SupportSection from "@/components/ui/SupportSection";
import SubscribeSection from "@/components/ui/Subscription";
export default function HomePage() {
  return (
<div 
  className="min-h-screen  bg-cover bg-center bg-no-repeat" 
  // style={{ backgroundImage: "url('/images/background.png')" }}
>
      <div
      className="fixed inset-0 bg-white -z-10 bg-contain bg-center bg-no-repeat  mix-blend-screen"
      style={{
        backgroundImage: "url('/images/Topographic 5.png')",
      }}
    ></div>
  <NavBar />
  <Hero />
  <WelcomeSection />
  <HealingSection />
  <SupportSection />
  <Testimonial />
  <SubscribeSection />
  <Footer />
</div>

  );
}
