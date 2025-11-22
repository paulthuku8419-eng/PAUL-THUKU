import React from "react";

const statsData = [
  { label: "Projects Completed", value: 120 },
  { label: "Years of Experience", value: 15 },
  { label: "Industries Served", value: 10 },
  { label: "Clients Worldwide", value: 75 },
];

const Stats = () => {
  return (
    <section className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {statsData.map((stat, index) => (
          <div key={index}>
            <h3 className="text-4xl font-bold text-blue-600">{stat.value}+</h3>
            <p className="text-gray-700 mt-2">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;

