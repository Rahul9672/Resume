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
    <div className="w-screen max-w-[1920px]  mx-auto flex flex-col items-center border shadow-md overflow-hidden">
      <Header />

      <div className="max-w-fit justify-items-center px-l-[10] flex flex-row  gap-1 text-l">
        <div className="w-[45%] flex flex-col mx-[10px]">
          <Education />
          <Projects />
        </div>
        <div className="w-[45%] flex flex-col ">
          <Skills />
          <Coursework />
          <Achievements />
          <Hobbies />
          <Internships />
        </div>
      </div>
    </div>
  );
}

export default App;
