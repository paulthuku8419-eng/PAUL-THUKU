import React, { useState } from "react";

const testimonials = [
  { name: "John kamau", role: "Factory Manager", feedback: "The CNC solutions provided by this company have increased our efficiency tremendously. Highly recommended!", image: "/assets/client1.jpg" },
  { name: "Evans Kioko", role: "Automation Engineer", feedback: "Their PLC programming and automation services are top-notch. We saw immediate improvements in our processes.", image: "/assets/client2.jpg" },
  { name: "Michael Munene", role: "Operations Head", feedback: "Excellent service and maintenance support. Our equipment uptime has never been better.", image: "/assets/client3.jpg" },
  { name: "Edwin Mkalee", role: "Plant Supervisor", feedback: "Professional and reliable. Their automation solutions transformed our workflow.", image: "/assets/client4.jpg" },
  { name: "David Ouma", role: "Engineer", feedback: "Great team! The PLC programming and maintenance services are exceptional.", image: "/assets/client5.jpg" },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonials = () => setCurrentIndex((prev) => (prev + 3) % testimonials.length);
  const prevTestimonials = () => setCurrentIndex((prev) => (prev - 3 + testimonials.length) % testimonials.length);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <section className="py-20 bg-gray-50 px-4">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-800">What Our Clients Say</h2>
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
        {visibleTestimonials.map((testimonial, index) => (
          <div key={index} className="flex-1 bg-white p-6 rounded-lg shadow-md text-center">
            <img src={testimonial.image} alt={testimonial.name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"/>
            <p className="text-gray-700 italic mb-4">"{testimonial.feedback}"</p>
            <h3 className="text-xl font-bold">{testimonial.name}</h3>
            <p className="text-gray-500">{testimonial.role}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <button onClick={prevTestimonials} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Previous</button>
        <button onClick={nextTestimonials} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Next</button>
      </div>
    </section>
  );
};

export default Testimonials;

