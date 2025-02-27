import React from "react";

const Hobbies = () => {
  return (
    <section className="p-6 bg-gray-100 text-gray-800 rounded-lg shadow-md">
      {/* Section Heading */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold flex items-center">HOBBIES & INTERESTS</h2>
        <span className="block w-40 h-[3px] bg-black mt-1"></span>
      </div>

      {/* Hobbies in Single Line */}
      <p className="text-md text-gray-700 font-medium">
        Travelling • Sports • Yoga • Gym
      </p>
    </section>
  );
};

export default Hobbies;
