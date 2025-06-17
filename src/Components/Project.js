import React from "react";

const Project = ({ name, description, backend, animation, sourceWebpage, sourceCode, LoginDetails }) => {
  return (
    <div className="mb-2 p-3 bg-white shadow-sm rounded-lg border">
      <h3 className="text-xl font-bold text-gray-900">{name}</h3>
      <ul className="list-disc list-inside mt-1 text-gray-700 leading-relaxed">
      {LoginDetails && <li>{LoginDetails}</li>}
        <li>{description}</li>
        <li>{backend}</li>
        <li>{animation}</li>
      </ul>

      <div className="mt-3 text-md font-medium">
        <a href={sourceWebpage} className="text-blue-600 hover:underline mr-4">🌐 Live Demo</a>
        <a href={sourceCode} className="text-blue-600 hover:underline">📂 Source Code</a>
      </div>
    </div>
  );
};

export default Project;
