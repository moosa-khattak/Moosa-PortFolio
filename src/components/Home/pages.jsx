import React from "react";
import HeroSection from "./HeroSection";
import Service from "./service";
import Technologies from "./tools";
import Projects from "./Projects";

function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <Technologies />
        <Service />
        <Projects />
      </main>
    </>
  );
}

export default Home;
