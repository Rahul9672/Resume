import React from "react";

const Achievements = () => {
  return (
    <section className="p-6 bg-gray-100 text-gray-800">
      <div className="justify-center items-center">
        <h2 className="text-4xl font-bold flex items-center">ACHIEVEMENTS</h2>
        <span className="block max-w-[450px] w-full h-[4px] bg-black"></span>
      </div>
      <br />

      <div className="text-lg">
        <p> <a href="https://learn.codehelp.in/share-certificate?serialno=4AVE2LFN">1.Certified By CodeHelp</a></p>
        <br/>
        <p> <a href="https://learn.codehelp.in/share-certificate?serialno=XOWRCBT9">2.Certified By CodeHelp</a></p>
        
      </div>
    
    </section>
  );
};

export default Achievements;