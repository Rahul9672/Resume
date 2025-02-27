import React from "react";

const Internships = () => {
  return (
    <section className="p-6 bg-gray-100 text-gray-800 rounded-lg shadow-md">
      {/* Section Heading */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold flex items-center">INTERNSHIPS</h2>
        <span className="block w-40 h-[3px] bg-black mt-1"></span>
      </div>

      {/* BISAG-N Internship */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-900">
          Software Developer, BISAG-N (March – Aug 2024) - Delhi, India
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Developed a robust CRUD application using Spring Boot, leveraging its features for rapid development and deployment.</li>
          <li>Optimized transactional management, resulting in a 100% improvement in CRUD operation efficiency.</li>
          <li>Contributed to the frontend development of the PM Gati Shakti website, optimizing the codebase for a 50% reduction in page load times.</li>
          <li>Executed SQL queries, performed CRUD operations, and managed database transactions using JDBC.</li>
          <li><b>Tech Stack:</b> HTML5, CSS3, Bootstrap 5, EJS, Spring Boot, Spring MVC.</li>
        </ul>
      </div>

      {/* YEF Internship */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-gray-900">
          Youth Empowerment Foundation (Jan – March 2024) - Delhi, India (YEF/22/DL412)
        </h3>
      </div>
    </section>
  );
};

export default Internships;
