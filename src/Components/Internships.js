import React from "react";

const Internships = () => {
  return (
    <section className="p-6 bg-gray-100 text-gray-800 rounded-lg shadow-md">
      {/* Section Heading */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold flex items-center">EXPERIENCES</h2>
        <span className="block w-40 h-[3px] bg-black mt-1"></span>
      </div>

      {/* BISAG-N Internship */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-900">
        Backend Developer, WEFRAME (Jan – March 2025) – Gurugram, India
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Built RESTful APIs and optimized backend logic for improved performance.</li>
          <li>Implemented JWT-based authentication and enhanced database efficiency.</li>
          <li>Collaborated with frontend teams for seamless integration.</li>
          <li><b>Tech Stack:</b>Node.js, Express.js, MongoDB, JWT</li>
         </ul>
      </div>

      <br/>
      <br/>
      {/* YEF Internship */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-900">
        PHP Developer, WEBPULSE (Apr – Present 2025) – Delhi, India
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Developing dynamic web applications and managing backend logic in PHP.</li>
          <li>Integrated MySQL databases and optimized queries for better performance.</li>
          <li>Maintaining code quality and collaborating with UI teams for smooth delivery.</li>
          <li><b>Tech Stack:</b>PHP, MySQL, Laravel, HTML5, CSS3</li>
         </ul>
      </div>

    </section>
  );
};

export default Internships;
