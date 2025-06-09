import React from "react";
import { FaUniversity, FaSchool } from "react-icons/fa";

const Education = () => {
  return (
    <section className="p-3 bg-gray-100 text-gray-800 rounded-lg shadow-md">
      {/* Section Heading */}
      <div className="mb-2">
        <h2 className="text-2xl font-bold flex items-center">Education</h2>
        <span className="block w-40 h-[3px] bg-black mt-1"></span>
      </div>

      <div className="space-y-6">
        {/* University Education */}
        <div className="flex gap-3">
          <FaUniversity className="text-2xl text-blue-600 mt-1" />
          <div>
            <p className="text-xl font-bold">
              B.Tech in Information Technology (GEOINFORMATICS)
            </p>
            <p className="text-lg font-medium text-gray-700">
              Netaji Subhas University of Technology (NSUT), New Delhi
            </p>
            <p className="text-gray-600">August 2020 – July 2024</p>
            <p className="text-lg font-semibold text-gray-800">CGPA: 7.0</p>
          </div>
        </div>

        {/* School Education */}
        <div className="flex gap-3">
          <FaSchool className="text-2xl text-green-600 mt-1" />
          <div>
            <p className="text-xl font-bold">Senior Secondary (Class XII)</p>
            <p className="text-lg font-medium text-gray-700">
              Arcadian Public School, Bajna, Mathura
            </p>
            <p className="text-gray-600">2018 – 2019</p>
            <p className="text-lg font-semibold text-gray-800">Percentage: 78%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
