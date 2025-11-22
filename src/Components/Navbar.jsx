import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">MechSolutions</h1>
        <ul className="flex space-x-6">
          <li>
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-400 transition">Services</a>
          </li>
          <li>
            <a href="#products" className="hover:text-blue-400 transition">Products</a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-blue-400 transition">Testimonials</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
