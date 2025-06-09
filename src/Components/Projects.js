import React from "react";
import Project from "./Project";

const Projects = () => {
  return (
    <section className="p-4 bg-gray-100 text-gray-800 rounded-lg shadow-md">
      {/* Section Heading */}
      <div className="mb-2">
        <h2 className="text-2xl font-semibold flex items-center">Projects</h2>
        <span className="block w-40 h-[3px] bg-black mt-1"></span>
      </div>

      {/* Projects List */}
      <Project
        name="Employee Data Creation"
        description="Implemented React Context API for scalable state management."
        backend="Built and containerized backend services with Docker, PostgreSQL, and MySQL to manage employee data effectively."
        animation="Tech Stack: JavaScript, React.js, Node.js"
        sourceWebpage="https://fullstack-assignment-ivory.vercel.app/addemployee"
        sourceCode="https://github.com/Rahul9672/FullstackAssignment"
      />

      <Project
        name="StudyNotion Tech Courses"
        description="Designed and developed a full-stack application featuring an engaging UI built with React JSX and Tailwind CSS, using Redux for state management."
        backend="Implemented backend services with Node.js and MongoDB, along with Firebase Authentication and Cloud Functions for user security and serverless logic."
        animation="Applied responsive design using Tailwind CSS and media queries to ensure seamless user experience across devices."
        sourceWebpage="https://studynation-tech-courses-pgdb5lmld-rahul9672s-projects.vercel.app/"
        sourceCode="https://github.com/Rahul9672/studynation-tech-courses"
      />

      <Project
        name="Real Estate Backend System"
        description="Built a robust Node.js backend for a real estate platform, utilizing modular Mongoose models."
        backend="Created RESTful APIs using Express.js for user authentication and property listings."
        animation="Designed scalable MongoDB schemas for User and Property models, enabling efficient data operations."
        sourceWebpage="https://www.loom.com/share/32db61da19894d9fa48d59234c297e2b?sid=6a350af3-fe51-4b6f-8753-5205ee18a4d5"
        sourceCode="https://github.com/Rahul9672/RealEstateApp"
      />
    </section>
  );
};

export default Projects;
