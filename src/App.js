import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Achievements from "./Components/Achievements";
import Hobbies from "./Components/Hobbies";
import Coursework from "./Components/Coursework";
import Internships from "./Components/Internships";

function App() {
  return (
    <div className="w-full max-w-[1200px] mx-auto p-4 border shadow-md overflow-x-hidden overflow-y-hidden text-sm">
      <Header />

      {/* Optimized Grid Layout for One-Page */}
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-3">
          <Education />
          <Skills />
          <Coursework />
          <Achievements />
          <Hobbies />
        </div>

        <div className="space-y-3">
          <Projects />
          <Internships />
        </div>
      </div>
    </div>
  );
}

export default App;
