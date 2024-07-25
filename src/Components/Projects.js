import React from 'react';
import Project from './Project';

const Projects = () => {
  return (
    <section className='p-6 bg-gray-100 text-gray-800"'>
      <h2 className="text-4xl font-semibold flex iterms-cente">PROJECTS</h2>
      <span className="block max-w-[600px] w-full h-[4px] bg-black"></span>
      <br/>
      <Project 
        name="Courses-WebPage"
        description="Designed and implemented a responsive webpage for online courses using JavaScript, React."
        backend="Utilized state management libraries to efficiently manage the application's state."
        animation=" Integrated interactive UI components to enhance user experience."
        sourceCode="https://github.com/Rahul9672/Courses-webpage"
      />
      <br/>
      <Project
        name="StudyNation-Tech-Courses"
        description="Delivering an interactive and user-friendly platform for browsing and enrolling in various tech courses. "
        backend="Implemented using Node.js and Express for efficient handling of API requests."
        animation="Utilized CSS transitions and React Spring for smooth and dynamic UI interactions."
        sourceCode="https://github.com/Rahul9672/studynation-tech-courses"
      />
      <br/>
      <Project
        name="Random-Gif "
        description="Developed a dynamic Random-Gif using React, enabling users to fetch and display random GIFs from API."
        backend="Implemented API to fetch GIF data, ensuring real-time updates and interactive user experiences."
        animation="Utilized advanced React, including hooks and state management, to create an efficient interface."
        sourceCode="https://github.com/Rahul9672/Random-Gif"
      />
    </section>
  );
};

export default Projects;

