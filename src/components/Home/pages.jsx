import React from "react";
import HeroSection from "./HeroSection";
import Service from "./service";
import Technologies from "./tools";

function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <Technologies />
        <Service />
      </main>
    </>
  );
}

export default Home;
