import React from "react";
import HeroSection from "./sections/HeroSection";
import Navbar from "./sections/Navbar";

const App = () => {
  return (
    <>
      <header className="h-full">
        <Navbar />
        <HeroSection />
      </header>
    </>
  );
};

export default App;
