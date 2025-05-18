import React from "react";
import HeroSection from "./sections/HeroSection";
import Navbar from "./sections/Navbar";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import FeaturesSection from "./sections/FeaturesSection";

const App = () => {
  return (
    <>
      <header className="h-full">
        <Navbar />
        <HeroSection />
      </header>
      <main className="h-full">
        <AboutSection />
        <ServicesSection />
        <FeaturesSection />
      </main>
    </>
  );
};

export default App;
