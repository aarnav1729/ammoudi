import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { RoomShowcase } from "@/components/RoomShowcase";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <main className="w-full">
        <HeroSection />
        <RoomShowcase />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
