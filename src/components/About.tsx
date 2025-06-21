import React from "react";
import photo from "../images/photo2.jpg";
import { FiDownload } from "react-icons/fi";
import { useFadeInOnScroll } from "../utils/useFadeInOnScroll";

const About: React.FC = () => {
    const { ref, isVisible } = useFadeInOnScroll();
    return (
        <div
          ref={ref}
          className={`flex flex-col lg:min-h-screen w-full transition-opacity duration-700 ${isVisible ? "opacity-100 animate-fadeIn" : "opacity-0"}`}>
          <div className="flex flex-col mr-auto items-center justify-center">
            <h1 className="text-4xl font-bold">&lt;about/&gt;</h1>
            <div className="block mt-6 mb-14 h-[3px] w-20 bg-gradient-to-r from-[#dbe9ff] to-[#4a5a8c]"></div>
          </div>
          <div className="flex flex-row items-center justify-center lg:mx-20">
            <img src={photo} alt="Christopher West" width={400} className="hidden xl:block mr-20 2xl:w-[300px] 3xl:w-[400px] flex-shrink-0" />
            <div className="flex flex-col space-y-7">
              <p className="text-xl max-w-5xl">
                Hello, I'm Christopher West, a fourth-year Software Engineering student at RIT. I recently interned as a Software Engineer at <a href="https://www.ridgelineintl.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#A5BADA] hover:underline">Ridgeline International</a>
                , where I worked as a full-stack developer. 
                On campus, I serve as the president of the <a href="https://www.rit.edu/computing/coms/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#A5BADA] hover:underline">Computer Organization for Multicultural Students (COMS)</a> and play bass as part of the band BIRCH. 
                Outside of tech, I enjoy cooking, gaming, working out, music, and traveling. 
                Thanks for visiting, I hope you enjoy exploring my site and the skills and projects I’ve developed along the way!
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