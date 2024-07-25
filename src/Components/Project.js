import React from "react";

const Project = ({ name, description, backend, animation, sourceCode }) => {
  return (
    <div>
      <h3 className="text-xl font-bold">{name}</h3>
      <br/>
      <div>
        <ul className="list-disc list-inside">
          <li>{description}</li>
          <li>{backend}</li>
          <li>{animation}</li>
        </ul>
      </div>
      <br/>
      <p>
        <a href={sourceCode} className="curser-pointer" > Source Code Github</a>
      </p>
    </div>
  );
};

export default Project;
