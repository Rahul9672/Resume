import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const Internships = () => {
  return (
    <section className="p-3 bg-gray-100 text-gray-800 rounded-lg shadow-md">
      {/* Section Heading */}
      <div className="mb-2">
        <h2 className="text-2xl font-bold flex items-center">Internships</h2>
        <span className="block w-40 h-[3px] bg-black mt-1"></span>
      </div>

      {/* Internship Entry */}
      <div className="border-l-4 border-green-300 pl-4 py-4 mb-6 bg-white shadow-sm rounded">
        <h3 className="text-xl font-bold text-gray-900">Full Stack Developer Intern</h3>
        <p className="text-blue-600 font-semibold">
          Bhaskaracharya National Institute for Space Applications and Geo-Informatics (BISAG-N)
        </p>
        <div className="flex items-center text-sm text-gray-600 mt-1 space-x-4">
          <span className="flex items-center">
            <FaCalendarAlt className="mr-1" /> March 2024 – August 2024
          </span>
          <span className="flex items-center">
            <FaMapMarkerAlt className="mr-1" /> Delhi, India
          </span>
        </div>
        <p className="mt-2 text-gray-700">
          A government organization providing innovative technology solutions for national infrastructure and data projects.
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
          <li>
            Developed a full-stack CRUD application using Node.js, Express.js, and MongoDB, improving operational efficiency by 100%.
          </li>
          <li>
            Improved the performance and responsiveness of the PM Gati Shakti website using React.js and Tailwind CSS, reducing load times by 50%.
          </li>
          <li>
            Designed and implemented RESTful APIs for database operations, leveraging Mongoose for schema modeling and data handling.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Internships;
