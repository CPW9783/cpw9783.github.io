import React from "react";
import photo from "../images/photo2.jpg";
import { FiDownload } from "react-icons/fi";

const About: React.FC = () => {
    return (
        <div className="flex flex-col h-screen w-full">
          <div className="flex flex-col mr-auto items-center justify-center">
            <h1 className="text-4xl font-bold">&lt;about/&gt;</h1>
            <div className="block mt-6 mb-14 h-[3px] w-20 bg-gradient-to-r from-[#dbe9ff] to-[#4a5a8c]"></div>
          </div>
          <div className="flex flex-row items-center justify-center space-x-20">
            <img src={photo} alt="Christopher West" width={400} className="mr-auto ml-10" />
            <div className="flex flex-col space-y-7 ml-20 px-10">
              <p className="text-xl ml-20 px-10">
                Hi, I'm Christopher West, a passionate software developer with a love for creating dynamic 
                and user-friendly web applications. Welcome to my portfolio!
              </p>
              <a href="/resume.pdf" download className="self-center">
                <button className="inline-flex items-center w-auto px-4 py-2 bg-[#3A5B70] rounded hover:bg-blue-700 transition">
                  <FiDownload className="mr-2 h-5 w-5" />
                  Resume
                </button>
              </a>
            </div>
          </div>
        </div>
    );
}

export default About;