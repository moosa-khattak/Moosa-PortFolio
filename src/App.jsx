import React from "react";
import Navbar from "./components/essential/navbar";
import Footer from "./components/essential/footer";
import About from "./components/About/About";
import Contact from "./components/Contact Us/contact";
import Home from "./components/Home/pages";
import NotFound from "./components/Not found/Notfound";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GrTechnology } from "react-icons/gr";
import Technologies from "./components/Home/tools";

function App() {
  return (
    <div>
      
      <BrowserRouter>
        {(window.location.pathname === '/' ||
          window.location.pathname ===  '/About' ||
          window.location.pathname === "/Contact") && <Navbar />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {(window.location.pathname === '/' ||
          window.location.pathname ===  '/About' ||
          window.location.pathname === "/Contact") && <Footer />}
      </BrowserRouter>

      {/* <Technologies /> */}
    </div>
  );
}

export default App;
