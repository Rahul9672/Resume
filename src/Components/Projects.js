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
        name="Random-Gif Generator"
        description="Developed a React-based Random-Gif generator to fetch and display GIFs dynamically."
        backend="Implemented API fetching for real-time updates and interactive user experiences."
        animation="Utilized advanced React techniques, including hooks and state management."
        sourceWebpage="https://calm-belekoy-87b570.netlify.app/"
        sourceCode="https://github.com/Rahul9672/Random-Gif"
      />
    </section>
  );
};

export default Projects;
