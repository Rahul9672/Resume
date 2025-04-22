import React from "react";

const Hobbies = () => {
  return (
    <section className="p-3 bg-gray-100 text-gray-800 rounded-lg shadow-md">
      {/* Section Heading */}
      <div className="mb-2">
        <h2 className="text-2xl font-bold flex items-center">INTERNSHIPS</h2>
        <span className="block w-40 h-[3px] bg-black mt-1"></span>
      </div>

      {/* Hobbies in Single Line */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-900">
        Software Developer, BISAG-N (Mar – Aug 2024) – Delhi, India
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Built a CRUD app using Spring Boot and improved transactional efficiency by 100%.</li>
          <li>Enhanced PM Gati Shakti website frontend, cutting load times by 50%.</li>
          <li>Handled SQL queries and database operations with JDBC.</li>
          <li><b>Tech Stack:</b>Spring Boot, Spring MVC, HTML5, CSS3, Bootstrap 5, EJS</li>
         </ul>
      </div>

    </section>
  );
};

export default Hobbies;
