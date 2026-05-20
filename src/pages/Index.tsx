import CustomCursor from "@/components/CustomCursor";
import ProgressBar from "@/components/ProgressBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhatAreYouLookingFor from "@/components/WhatAreYouLookingFor";
import MarqueeSection from "@/components/MarqueeSection";
import AboutSection from "@/components/AboutSection";
import WorkSection from "@/components/WorkSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <CustomCursor />
      <ProgressBar />
      <Navbar />
      <HeroSection />
      <WhatAreYouLookingFor />
      <MarqueeSection />
      <AboutSection />
      <WorkSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default Index;
