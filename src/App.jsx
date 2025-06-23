import React, { useEffect, useState } from "react";
import Navbar from "./components/essential/navbar";
import Footer from "./components/essential/footer";
import About from "./components/About/About";
import Contact from "./components/Contact Us/contact";
import Home from "./components/Home/pages";
import NotFound from "./components/Not found/Notfound";
import Loader from "./components/Loader/Loader";

import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate load time (replace with actual fetch if needed)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); // you can change this to match actual loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

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

      
    </div>
  );
}

export default App;
