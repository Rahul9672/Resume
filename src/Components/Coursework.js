import React from 'react';

const Coursework = () => {
  return (
    <section className="p-3 bg-gray-100 text-gray-800 rounded-lg shadow-md">
      {/* Section Heading */}
      <div className="mb-2">
        <h2 className="text-2xl font-bold flex items-center">COURSEWORK</h2>
        <span className="block w-40 h-[2px] bg-black mt-1"></span>
      </div>

      {/* Coursework List */}
      <ul className="list-disc list-inside space-y-1 text-gray-700 text-md">
        <li>Data Structures and Algorithms</li>
        <li>Object-Oriented Programming</li>
        <li>Database Management System</li>
        <li>Software Development</li>
        <li>Cloud Computing</li>
        <li>Operating Systems</li>
        <li>Computer Networks</li>
      </ul>
    </section>
  );
};

export default Coursework;
