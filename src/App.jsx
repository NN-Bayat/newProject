import React from "react";
import HeroSection from "./sections/HeroSection";
import Navbar from "./sections/Navbar";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import FeaturesSection from "./sections/FeaturesSection";
import PricingSection from "./sections/PricingSection";

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
        <PricingSection />
      </main>
    </>
  );
};

export default App;
