import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Internships = () => {
  return (
    <section className="p-4 bg-gray-100 text-gray-800 rounded-lg shadow-md">
      {/* Section Heading */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold flex items-center">EXPERIENCE</h2>
        <span className="block w-40 h-[3px] bg-black mt-1"></span>
      </div>

      {/* BISAG-N Internship */}
      <div className="border-l-4 border-green-300 pl-4 py-4 mb-6 bg-white shadow-sm rounded">
        <h3 className="text-xl font-bold text-gray-900">Backend Developer</h3>
        <a href="#" className="text-blue-600 font-semibold">
          WEFRAME
        </a>
        <div className="flex items-center text-sm text-gray-600 mt-1 space-x-4">
          <span className="flex items-center">
            <FaCalendarAlt className="mr-1" /> 01/2025 – 03/2025
          </span>
          <span className="flex items-center">
            <FaMapMarkerAlt className="mr-1" /> Gurugram, India
          </span>
        </div>
        <p className="mt-2 text-gray-700">
          A technology company focused on developing comprehensive backend
          solutions
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>
            Built RESTful APIs and optimized backend logic for improved
            performance
          </li>
          <li>
            Implemented JWT-based authentication and enhanced database
            efficiency
          </li>
          <li>Collaborated with frontend teams for seamless integration</li>
        </ul>
      </div>
      {/* YEF Internship */}
      <div className="border-l-4 border-green-300 pl-4 py-4 mb-6 bg-white shadow-sm rounded">
        <h3 className="text-xl font-bold text-gray-900">PHP Developer</h3>
        <a href="#" className="text-blue-600 font-semibold">
          WEBPULSE
        </a>
        <div className="flex items-center text-sm text-gray-600 mt-1 space-x-4">
          <span className="flex items-center">
            <FaCalendarAlt className="mr-1" /> 04/2025 – Present
          </span>
          <span className="flex items-center">
            <FaMapMarkerAlt className="mr-1" /> Delhi, India
          </span>
        </div>
        <p className="mt-2 text-gray-700">
          A company specializing in web development services
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>
            Developing dynamic web applications and managing backend logic in
            PHP
          </li>
          <li>
            Integrated MySQL databases and optimized queries for better
            performance
          </li>
          <li>
            Maintaining code quality and collaborating with UI teams for smooth
            delivery
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Internships;
