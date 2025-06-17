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

      {/* Weframetech Internship */}
      <div className="border-l-4 border-green-300 pl-4 py-4 mb-6 bg-white shadow-sm rounded">
        <h3 className="text-xl font-bold text-gray-900">
          Backend Developer Intern
        </h3>
        <a href="#" className="text-blue-600 font-semibold">
          Weframetech Solutions Pvt. Ltd.
        </a>
        <div className="flex items-center text-sm text-gray-600 mt-1 space-x-4">
          <span className="flex items-center">
            <FaCalendarAlt className="mr-1" /> Jan 2025 – Apr 2025
          </span>
          <span className="flex items-center">
            <FaMapMarkerAlt className="mr-1" /> Gurugram, India
          </span>
        </div>
        {/* <p className="mt-2 text-gray-700">
          A product-based technology company specializing in scalable backend
          systems for modern e-commerce solutions. Contributed to building a
          robust clothing e-commerce platform using MedusaJS and Directus.
        </p> */}
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>
            Developed and maintained RESTful APIs using MedusaJS for product
            catalog, cart, checkout, and user services
          </li>
          <li>
            Integrated Directus CMS for dynamic content management and seamless
            synchronization of product data
          </li>
          <li>
            Implemented secure JWT-based authentication and role-based access
            control for admin and users
          </li>
          <li>
            Utilized PostgreSQL for efficient relational data management and
            optimized queries for performance
          </li>
          <li>
            Used Redis for caching and session storage to improve response times
            and handle high concurrency
          </li>
          <li>
            Integrated WebSocket for real-time features such as order status
            updates and admin notifications
          </li>
          <li>
            Containerized the backend services using Docker for consistent
            development and deployment across environments
          </li>
          <li>
            Worked in collaboration with frontend and DevOps teams to ensure
            smooth CI/CD and deployment pipelines
          </li>
        </ul>
      </div>

      {/* Webpulse Internship
      <div className="border-l-4 border-green-300 pl-4 py-4 mb-6 bg-white shadow-sm rounded">
        <h3 className="text-xl font-bold text-gray-900">PHP Developer</h3>
        <a href="#" className="text-blue-600 font-semibold">
          𝐖𝐞𝐛𝐩𝐮𝐥𝐬𝐞 𝐒𝐨𝐥𝐮𝐭𝐢𝐨𝐧 𝐏𝐯𝐭 𝐋𝐭𝐝
        </a>
        <div className="flex items-center text-sm text-gray-600 mt-1 space-x-4">
          <span className="flex items-center">
            <FaCalendarAlt className="mr-1" /> 04/2025 – 05/2025
          </span>
          <span className="flex items-center">
            <FaMapMarkerAlt className="mr-1" /> Delhi, India
          </span>
        </div>
        <p className="mt-2 text-gray-700">
          A company specializing in web development services
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>Developing dynamic web applications and managing backend logic in PHP</li>
          <li>Integrated MySQL databases and optimized queries for better performance</li>
          <li>Maintaining code quality and collaborating with UI teams for smooth delivery</li>
        </ul>
      </div> */}
    </section>
  );
};

export default Internships;
