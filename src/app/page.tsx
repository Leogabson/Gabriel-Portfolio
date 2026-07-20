import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import PhotoBreakSection from "@/components/sections/PhotoBreakSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <PhotoBreakSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <ContactSection />
    </>
  );
}
