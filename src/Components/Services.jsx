import React, { useState } from "react";

const services = [
  { title: "CNC Machining", desc: "Precision manufacturing", image: "/assets/cnc.jpg" },
  { title: "PLC Programming", desc: "Automation solutions", image: "/assets/plc.jpg" },
  { title: "Maintenance & Repair", desc: "Routine maintenance and repair", image: "/assets/maintenance.jpg" },
  { title: "Engineering Consultation", desc: "Expert advice for mechanical systems", image: "/assets/consultation.jpg" },
  { title: "Equipment Installation", desc: "Professional setup of machinery", image: "/assets/installation.jpg" },
  { title: "System Optimization", desc: "Improve performance & efficiency", image: "/assets/optimization.jpg" },
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextServices = () => setCurrentIndex((prev) => (prev + 3) % services.length);

  const visibleServices = [
    services[currentIndex],
    services[(currentIndex + 1) % services.length],
    services[(currentIndex + 2) % services.length],
  ];

  return (
    <section className="py-20 bg-gray-50 px-4">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-800">Our Services</h2>

      <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
        {visibleServices.map((service, index) => (
          <div key={index} className="flex flex-col md:flex-row bg-white p-4 md:p-6 rounded-lg shadow-md items-center md:w-1/3">
            <div className="relative md:w-1/2">
              <img src={service.image} alt={service.title} className="w-full h-48 md:h-64 object-cover rounded-lg"/>
              <h3 className="absolute bottom-2 left-2 text-white text-lg md:text-xl font-bold bg-black bg-opacity-50 px-2 py-1 rounded">
                {service.title}
              </h3>
            </div>
            <div className="md:w-1/2 mt-4 md:mt-0 md:pl-4 text-left">
              <p className="text-gray-700">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button onClick={nextServices} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
          Next
        </button>
      </div>
    </section>
  );
};

export default Services;
