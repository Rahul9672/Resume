import React from "react";

const Skills = () => {
  return (
    <section className="p-6 bg-gray-100 text-gray-800">
      <div className="justify-center items-center"> 
        <h2 className="text-4xl font-bold flex items-center">SKILLS</h2>
        <span className="block max-w-[450px] w-full h-[4px] bg-black"></span>
        <br/>
        <h2 className="text-xl font-bold justify-center underline ">PROGRAMMING</h2>
      </div>
      <br />
      <p className="flex gap-x-3">
        <h3 className="text-xl font-bold">Languages: </h3> C++, Java, JavaScript
      </p>
      <p className="flex gap-x-2">
        <h3 className="text-xl font-bold">Android: </h3> UI Design, LifeCycle,
        Adapters, MVVM.
      </p>
      <p className="flex gap-x-2">
        <h3 className="text-xl font-bold">Libraries: </h3> Volley, Glide,
        Retrofit.
      </p>
      <p className="flex gap-x-2">
        <h3 className="text-xl font-bold">Tools: </h3> Android Studio, Intellij
        Idea, Github.
      </p>
      <br />
      <br />
      <div className="justify-center items-center">
        <h3 className="text-xl font-bold flex justify-center underline">SOFT SKILLS</h3>
        <br/>
        <p className="text-lg">
          Decision Making, Team Work, 
          Self-Motivated, Open-Minded,
          Time-Management, Leadership.
        </p>
      </div>
    </section>
  );
};

export default Skills;
