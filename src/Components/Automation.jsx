import React from "react";
import AutomationImage from "../assets/automation.jpg";

const Automation = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 text-left">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-800">The Best Automation Solutions for Your Industry</h2>
          <p className="text-gray-700 text-lg">
            We provide cutting-edge automation solutions tailored to meet the specific needs of your industry. 
            From PLC programming to system optimization, our solutions improve efficiency, reduce downtime, 
            and ensure seamless operations for your business.
          </p>
        </div>
        <div className="md:w-1/2">
          <img src={AutomationImage} alt="Automation Solutions" className="w-full h-80 md:h-96 object-cover rounded-lg shadow-lg"/>
        </div>
      </div>
    </section>
  );
};

export default Automation;

