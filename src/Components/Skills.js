import React from "react";

const Skills = () => {
  return (
    <section className="p-3 bg-gray-100 text-gray-800 rounded-lg shadow-md">
      {/* Section Heading */}
      <div className="mb-2">
        <h2 className="text-2xl font-bold flex items-center">SKILLS</h2>
        <span className="block w-40 h-[3px] bg-black mt-1"></span>
      </div>

      {/* Skills List */}
      <div className="space-y-3">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 underline">
            Programming Languages:
          </h3>
          <p className="text-gray-700">
            C++ (Intermediate), JavaScript (Proficient), Java (Beginner)
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 underline">
            Databases:
          </h3>
          <p className="text-gray-700">
            Experience with MongoDB, MySQL, PostgreSQL, and SQL Server.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 underline">
            Frameworks:
          </h3>
          <p className="text-gray-700">
            React JSX, TypeScript, Express.js, Node.js, Tailwind CSS, ASP.NET
            Core, REST APIs.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900 underline">
            Version Control & Tools:
          </h3>
          <p className="text-gray-700">
            Git, GitHub, MedusaJS, Directus, Docker, Postman
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
