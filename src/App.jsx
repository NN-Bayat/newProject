import React from "react";
import HeroSection from "./sections/HeroSection";
import Navbar from "./sections/Navbar";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import FeaturesSection from "./sections/FeaturesSection";
import PricingSection from "./sections/PricingSection";
import Accordion from "./sections/Accordion";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
        <HeroSection />
      </header>
      <main>
        <AboutSection />
        <ServicesSection />
        <FeaturesSection />
        <PricingSection />
        <Accordion />
        <ContactSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
