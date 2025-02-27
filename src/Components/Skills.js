import React from "react";

const Skills = () => {
  return (
    <section className="p-1 bg-gray-100 text-gray-800">
      <div className="justify-center items-center"> 
        <h2 className="text-2xl font-bold flex items-center">SKILLS</h2>
        <span className="block max-w-[450px] w-full h-[4px] bg-black"></span>
        <p className="gap-y-1"> <h2 className="text-xl font-bold justify-center underline "> Programming Languages:</h2> C++ (Intermediate), JavaScript (Proficient), Java (Beginner).</p>
      </div>
      
      <p className="flex-col gap-y-1">
        <h3 className="text-xl font-bold">Database and Language: </h3> Experience in MongoDb,MySQL, PostgreSQL.
      </p>
      <p className="flex-col gap-y-1">
        <h3 className="text-xl font-bold">Frameworks: </h3>  Working experience in <b> React JS, Express JS, Node JS, Bootstrap, Tailwind, Next JS, Medusa, Directus, Docker.</b>
      </p>
      <p className="flex-col gap-y-1">
        <h3 className="text-xl font-bold">Version Control Tools and IDE:  </h3> Git, Git-hub, Visual Studio Code, Postman.
      </p>
      
      
    </section>
  );
};

export default Skills;
