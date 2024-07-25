import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-screen max-w-[1820px] mx-auto bg-gray-100 mt-5 mb-3 p-4 overflow-x-hidden">
      <div className="max-w-6xl w-full mx-auto gap-y-4">
        <div className="text-5xl font-bold text-black text-center">
          <h1>RAHUL KUMAR</h1>
        </div>
        <div className="flex flex-wrap justify-between mt-4 text-lg text-black">
          <div className="flex items-center space-x-2">
            <AiOutlineMail className="text-2xl" />
            <a href="mailto:rahulchaudhary9672@gmail.com" className="hover:underline ml-4">
              rahulchaudhary9672@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlinePhone className="text-2xl" />
            <span className="ml-4">9672166603</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaGithub className="text-2xl" />
            <a href="https://github.com/Rahul9672" className="hover:underline ml-4">
              Github Profile
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaLinkedin className="text-2xl" />
            <a href="https://www.linkedin.com/in/rahul-chaudhary-6a128b22a/" className="hover:underline ml-4">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
