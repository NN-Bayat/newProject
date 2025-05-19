import React from "react";
import HeroSection from "./sections/HeroSection";
import Navbar from "./sections/Navbar";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import FeaturesSection from "./sections/FeaturesSection";
import PricingSection from "./sections/PricingSection";
import Accordion from "./sections/Accordion";
import ContactSection from "./sections/ContactSection";

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
        <Accordion />
        <ContactSection />
      </main>
    </>
  );
};

export default App;
