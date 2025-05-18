import React from "react";
import HeroSection from "./sections/HeroSection";
import Navbar from "./sections/Navbar";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";

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
      </main>
    </>
  );
};

export default App;
