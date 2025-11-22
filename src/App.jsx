import React from "react";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Stats from "./Components/Stats.jsx";
import About from "./Components/About.jsx";
import Services from "./Components/Services.jsx";
import Automation from "./Components/Automation.jsx";
import Products from "./Components/Products.jsx";
import Testimonials from "./Components/Testimonials.jsx";
import CTA from "./Components/CTA.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      
      {/* Sections with IDs for navbar linking */}
      <div id="home">
        <Hero />
      </div>

      <div id="stats">
        <Stats />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="automation">
        <Automation />
      </div>

      <div id="products">
        <Products />
      </div>

      <div id="testimonials">
        <Testimonials />
      </div>

      <div id="contact">
        <CTA />
      </div>

      <Footer />
    </div>
  );
};

export default App;
