import React from "react";

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-blue-600 text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Ready to Transform Your Operations?</h2>
        <p className="text-lg md:text-xl mb-8 text-gray-100">
          Get in touch with us today to discuss how our mechanical and automation solutions can optimize your business.
        </p>
        <a href="#contact" className="bg-white text-blue-600 font-bold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition">
          Request a Quote
        </a>
      </div>
    </section>
  );
};

export default CTA;
