import React from "react";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./sections/heroSection/HeroSection";
import OverviewSection from "./sections/overviewSection/OverviewSection";
import SkillsSection from "./sections/skillsSection/SkillsSection";
import WorkExperienceSection from "./sections/workExperienceSection/WorkExperienceSection";
import PersonalProjects from "./sections/personalProjects/PersonalProjects";
import ServicesSection from "./sections/servicesSection/ServicesSection";

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
    </div>
  );
}

export default App;
