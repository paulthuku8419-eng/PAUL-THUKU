import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold mb-2">MechSolutions</h1>
          <p className="text-gray-400">Providing mechanical and automation solutions worldwide.</p>
        </div>

        <div className="flex gap-6 text-gray-400">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#products" className="hover:text-white transition">Products</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        <div className="text-center md:text-right text-gray-400">
          <p>Email: info@mechsolutions.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-6">
        &copy; {new Date().getFullYear()} MechSolutions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
