import React from "react";
import { FaUniversity, FaSchool } from "react-icons/fa";

const Education = () => {
  return (
    <section className="p-6 bg-gray-100 text-gray-800">
      <div className="mb-4">
        <h2 className="text-4xl font-bold flex items-center">
          
          EDUCATION
        </h2>
        <span className="block max-w-[350px] w-full h-[4px] bg-black"></span>
      </div>
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
            
          
          <div>
          <br/>
            <p className="text-xl font-bold">B.TECH IN INFORMATION TECHNOLOGY (GEOINFORMATICS)</p>
            <br/>
            
            
            <div className="flex gap-3"><FaUniversity className="text-xl" /><p className="text-xl pr-1">  Netaji Subhas University of Technology (NSUT)</p> </div>
            <p className="px-5">August 2020 - 2024</p>
            <p className="text-xl font-medium px-5"> CGPA: 7</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <FaSchool className="text-xl" />
          <div>
            <p className="text-lg font-bold">INTERMEDIATE</p>
            <p>Arcadian Public School, Bajna, Mathura (2017-2019)</p>
            <p className="text-xl font-medium">Percentage: 78%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
