import React from "react";

const Achievements = () => {
  return (
    <section className="p-3 bg-gray-100 text-gray-800 rounded-lg shadow-md">
      {/* Section Heading */}
      <div className="mb-2">
        <h2 className="text-2xl font-bold flex items-center">Achievements</h2>
        <span className="block w-40 h-[2px] bg-black mt-1"></span>
      </div>

      {/* Achievements List */}
      <ul className="list-decimal list-inside space-y-2 text-md text-gray-700">
        <li>
          <a
            href="https://learn.codehelp.in/share-certificate?serialno=4AVE2LFN"
            className="text-blue-600 hover:underline"
            target="_blank" rel="noopener noreferrer"
          >
            Certified in Data Structures and Algorithms by CodeHelp
          </a>
        </li>
        <li>
          <a
            href="https://learn.codehelp.in/share-certificate?serialno=XOWRCBT9"
            className="text-blue-600 hover:underline"
            target="_blank" rel="noopener noreferrer"
          >
            Certified in Object-Oriented Programming by CodeHelp
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Achievements;
