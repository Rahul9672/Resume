import React from 'react';
import Project from './Project';

const Projects = () => {
  return (
    <section className="p-6 bg-gray-100 text-gray-800 rounded-lg shadow-md">
      {/* Section Heading */}
      <div className="mb-2">
        <h2 className="text-2xl font-semibold flex items-center">PROJECTS</h2>
        <span className="block w-40 h-[3px] bg-black mt-1"></span>
      </div>

      {/* Projects List */}
      <Project 
        name="Employee-Data-Creation"
        description="Utilized React Context API for advanced state management, leading to a 50% improvement in application optimization."
        backend="Integrated APIs to manage employee data using Docker with PostgreSQL and MySQL, enhancing backend functionality."
        animation="Tech Stack: JavaScript, ReactJS, NodeJS."
        sourceWebpage="https://fullstack-assignment-ivory.vercel.app/addemployee"
        sourceCode="https://github.com/Rahul9672/FullstackAssignment"
      />

      <Project
        name="StudyNotion-Tech-Courses"
        description="Crafted intuitive UIs using ReactJS and optimized data flow by integrating Redux, improving efficiency by 40%."
        backend="Integrated Firebase services like Firestore, Authentication, and Cloud Functions, boosting backend performance by 60%."
        animation="Responsive layouts using CSS3 & media queries for seamless cross-device experience."
        sourceWebpage="https://studynation-tech-courses-pgdb5lmld-rahul9672s-projects.vercel.app/"
        sourceCode="https://github.com/Rahul9672/studynation-tech-courses"
      />

      <Project
        name="Real Estate Backend System"
        description="Developed a Node.js backend for a real estate platform with modular Mongoose models."
        backend="Designed RESTful APIs for user management and property listings using Express.js."
        database="Structured MongoDB schemas for User and Property models, enabling efficient data handling and queries."
        sourceWebpage="https://www.loom.com/share/32db61da19894d9fa48d59234c297e2b?sid=6a350af3-fe51-4b6f-8753-5205ee18a4d5"
        sourceCode="https://github.com/Rahul9672/RealEstateApp"
      />
    </section>
  );
};

export default Projects;
