import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Achievements from "./Components/Achievements";
import Hobbies from "./Components/Hobbies";
import Coursework from "./Components/Coursework";

function App() {
  return (
    <div className="w-screen max-w-[1920px] mx-auto my-10 p-6 flex flex-col items-center border shadow-md overflow-hidden">
      <Header />

      <div className="flex flex-row mt-6 gap-8 text-xl">
        <div className="flex flex-col gap-4">
          <Education />
          <Projects />
        </div>
        <div className="flex flex-col gap-6">
          <Skills />
          <Coursework />
          <Achievements />
          <Hobbies />
        </div>
      </div>
    </div>
  );
}

export default App;
