import React from 'react';
import Project from './Project';

const Projects = () => {
  return (
    <section className='p-1 bg-gray-100 text-gray-800"'>
      <h2 className="text-2xl font-semibold flex iterms-cente">PROJECTS</h2>
      <span className="block max-w-[600px] w-full h-[4px] bg-black"></span>
      
      <Project 
        name="Employee-Data-Creation"
        description="Utilized React Context API for advanced state management, leading to a 50% improvement in application optimization."
        backend="Integrated various APIs to manage employee data in the backend using Docker with PostgreSQL and MySQL, enhancing application functionality."
        animation="Tech stack used: JavaScript, ReactJs, NodeJs."
        sourceWebpage="https://fullstack-assignment-ivory.vercel.app/addemployee"
        sourceCode="https://github.com/Rahul9672/FullstackAssignment"
      />
      <br/>
      <Project
        name="StudyNotion-Tech-Courses"
        description="Crafted intuitive user interfaces using ReactJS and optimized data flow by integrating Redux, improving efficiency by 40%."
        backend="Integrated Firebase services like Firestore, Authentication, and Cloud Functions, boosting backend performance by 60% while ensuring real-time data management and secure user authentication."
        animation="Implemented responsive layouts using CSS3 and media queries to deliver a seamless experience across devices, enhancing usability and accessibility."
        
        sourceWebpage="https://studynation-tech-courses-pgdb5lmld-rahul9672s-projects.vercel.app/"
        sourceCode="https://github.com/Rahul9672/studynation-tech-courses"
      />
      <br/>
      <Project
        name="Random-Gif "
        description="Developed a dynamic Random-Gif using React, enabling users to fetch and display random GIFs from API."
        backend="Implemented API to fetch GIF data, ensuring real-time updates and interactive user experiences."
        animation="Utilized advanced React, including hooks and state management, to create an efficient interface."
        sourceWebpage="https://calm-belekoy-87b570.netlify.app/"
        sourceCode="https://github.com/Rahul9672/Random-Gif"
      />
    </section>
  );
};

export default Projects;

