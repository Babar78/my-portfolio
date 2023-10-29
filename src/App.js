import React from "react";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./sections/heroSection/HeroSection";
import OverviewSection from "./sections/overviewSection/OverviewSection";
import SkillsSection from "./sections/skillsSection/SkillsSection";
import WorkExperienceSection from "./sections/workExperienceSection/WorkExperienceSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <OverviewSection />
      <SkillsSection />
      <WorkExperienceSection />
    </div>
  );
}

export default App;
