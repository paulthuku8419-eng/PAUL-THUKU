import React from "react";
import AboutImage from "../assets/about.jpg";

const About = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text left */}
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-800">About MechSolutions</h2>
          <p className="text-gray-700 text-lg mb-4">
            MechSolutions offers comprehensive mechanical engineering solutions including CNC machining, PLC programming, maintenance, and expert consultation. 
            Our team of skilled engineers ensures precision, reliability, and efficiency in all projects.
          </p>
          <p className="text-gray-700 text-lg">
            We work across industries to optimize operations and implement innovative solutions that meet your business goals.
          </p>
        </div>

        {/* Image right */}
        <div className="md:w-1/2">
          <img
            src={AboutImage}
            alt="About Us"
            className="w-full h-80 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
