import React from "react";
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

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <SkillsSection />
      <WorkExperienceSection />
      <PersonalProjects />
      <ServicesSection />
      <TestimonialSection />
      <ContactUsSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
