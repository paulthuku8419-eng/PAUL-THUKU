import React from "react";
import HeroImage from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      className="w-full h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
          Welcome to MechSolutions
        </h1>
        <p className="text-xl md:text-2xl mb-6">
          Innovative Mechanical & Automation Solutions
        </p>
        <a
          href="#contact"
          className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition"
        >
          Get in Touch
        </a>
      </div>

      <div className="absolute bottom-0 w-full h-32 bg-linear-to-b from-transparent to-gray-50"></div>
    </section>
  );
};

export default Hero;
