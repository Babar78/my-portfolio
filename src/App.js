import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./sections/heroSection/HeroSection";
import OverviewSection from "./sections/overviewSection/OverviewSection";
import SkillsSection from "./sections/skillsSection/SkillsSection";
import WorkExperienceSection from "./sections/workExperienceSection/WorkExperienceSection";
import PersonalProjects from "./sections/personalProjects/PersonalProjects";
import ServicesSection from "./sections/servicesSection/ServicesSection";
import TestimonialSection from "./sections/testimonialSection/TestimonialSection";
import ContactUsSection from "./sections/contactUsSection/ContactUsSection";
import FooterSection from "./sections/footerSection/FooterSection";
import TakeToTopButton from "./components/takeToTopButton/TakeToTopButton";

function App() {
  // Show take to top button or Not
  const [showTakeToTopButton, setShowTakeToTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 100;

      if (scrollPosition > threshold) {
        setShowTakeToTopButton(true);
      } else {
        setShowTakeToTopButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      {showTakeToTopButton && <TakeToTopButton />}
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <SkillsSection />
      <WorkExperienceSection />
      <PersonalProjects />
      <ServicesSection />
      <TestimonialSection />
      <ContactUsSection />
      <FooterSection />
    </div>
  );
}

export default App;
