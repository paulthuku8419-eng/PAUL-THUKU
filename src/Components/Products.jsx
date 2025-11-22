import React from "react";

const products = [
  { name: "CNC Machine", image: "/assets/product-cnc.jpg" },
  { name: "PLC Controller", image: "/assets/product-plc.jpg" },
  { name: "Hydraulic Pump", image: "/assets/product-pump.jpg" },
  { name: "Industrial Robot", image: "/assets/product-robot.jpg" },
  { name: "Conveyor System", image: "/assets/product-conveyor.jpg" },
  { name: "Automation Panel", image: "/assets/product-panel.jpg" },
];

const Products = () => {
  return (
    <section className="py-20 bg-gray-50 px-4">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-800">Our Products</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover"/>
            <h3 className="text-lg font-semibold mt-2 mb-4">{product.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;

