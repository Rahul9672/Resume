import React from 'react';

const Coursework = () => {
  return (
    <section className="p-6 bg-gray-100 text-gray-800">
        <div className="justify-center items-center"> 
        <h2 className="text-4xl font-bold flex items-center">COURSEWORK</h2>
        <span className="block max-w-[450px] w-full h-[4px] bg-black"></span>
        
      </div>
      <br/>
      
      <ul className='text-lg'>
        <li>Data Structures and Algorithms</li>
        <li>Object Oriented Programming</li>
        <li>Database Management System</li>
        <li>Software Development</li>
      </ul>
    </section>
  );
};

export default Coursework;
