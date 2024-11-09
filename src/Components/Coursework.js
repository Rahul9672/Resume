import React from 'react';

const Coursework = () => {
  return (
    <section className="p-1 bg-gray-100 text-gray-800">
        <div className="justify-center items-center"> 
        <h2 className="text-2xl font-bold flex items-center">COURSEWORK</h2>
        <span className="block max-w-[450px] w-full h-[4px] bg-black"></span>
        
      </div>
      
      
      <ul>
        <li>Data Structures and Algorithms</li>
        <li>Object Oriented Programming</li>
        <li>Database Management System</li>
        <li>Software Development</li>
        <li>Cloud Computing</li>
        <li>Operating Systems</li>
        <li>Compuetr Networks</li>
      </ul>
    </section>
  );
};

export default Coursework;
