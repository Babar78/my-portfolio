import React from "react";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./sections/heroSection/HeroSection";
import OverviewSection from "./sections/overviewSection/OverviewSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <OverviewSection />
    </div>
  );
}

export default App;
