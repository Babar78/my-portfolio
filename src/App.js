import React from "react";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./sections/heroSection/HeroSection";
import OverviewSection from "./sections/overviewSection/OverviewSection";
import SkillsSection from "./sections/skillsSection/SkillsSection";
import WorkExperienceSection from "./sections/workExperienceSection/WorkExperienceSection";
import PersonalProjects from "./sections/personalProjects/PersonalProjects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <SkillsSection />
      <WorkExperienceSection />
      <PersonalProjects />
    </div>
  );
}

export default App;
