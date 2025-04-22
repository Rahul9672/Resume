import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Hobbies = () => {
  return (
    <section className="p-3 bg-gray-100 text-gray-800 rounded-lg shadow-md">
      {/* Section Heading */}
      <div className="mb-2">
        <h2 className="text-2xl font-bold flex items-center">INTERNSHIPS</h2>
        <span className="block w-40 h-[3px] bg-black mt-1"></span>
      </div>

      {/* Hobbies in Single Line */}
      <div className="border-l-4 border-green-300 pl-4 py-4 mb-6 bg-white shadow-sm rounded">
        <h3 className="text-xl font-bold text-gray-900">Software Developer</h3>
        <a href="#" className="text-blue-600 font-semibold">
          BISAG-N
        </a>
        <div className="flex items-center text-sm text-gray-600 mt-1 space-x-4">
          <span className="flex items-center">
            <FaCalendarAlt className="mr-1" /> 03/2024 – 08/2024
          </span>
          <span className="flex items-center">
            <FaMapMarkerAlt className="mr-1" /> Delhi, India
          </span>
        </div>
        <p className="mt-2 text-gray-700">
          An organization that focuses on technology solutions for governmental
          projects
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>
            Built a CRUD app using Spring Boot and improved transactional
            efficiency by 100%
          </li>
          <li>
            Enhanced PM Gati Shakti website frontend, cutting load times by 50%
          </li>
          <li>Handled SQL queries and database operations with JDBC</li>
        </ul>
      </div>
    </section>
  );
};

export default Hobbies;
