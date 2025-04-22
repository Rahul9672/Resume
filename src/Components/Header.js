import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full max-w-[1820px] mx-auto bg-gray-100 my-3 p-4 shadow-md">
      <div className="max-w-6xl w-full mx-auto">
        <h1 className="text-3xl font-bold text-black text-center uppercase tracking-wide">
        RAHUL KUMAR
        </h1>
        <h1 className="text-xl font-bold text-blue-500 text-center  tracking-wide">
        Aspiring Software Developer
        </h1>


        <div className="flex flex-wrap justify-center mt-4 text-lg text-black gap-6">
          <div className="flex items-center space-x-2">
            <AiOutlineMail className="text-2xl" />
            <a
              href="mailto:rahulchaudhary9672@gmail.com"
              className="hover:underline ml-2"
            >
              rahulchaudhary9672@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <IoIosCall className="text-2xl" />
            <span className="ml-2">9672166603</span>
          </div>

          <div className="flex items-center space-x-2">
            <FaGithub className="text-2xl" />
            <a
              href="https://github.com/Rahul9672"
              className="hover:underline ml-2"
            >
              Github Profile
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <FaLinkedin className="text-2xl" />
            <a
              href="https://www.linkedin.com/in/rahul-chaudhary-6a128b22a/"
              className="hover:underline ml-2"
            >
              LinkedIn
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <IoLocationSharp className="text-2xl" />
            <span className="ml-2">Delhi, India</span>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
