import React from "react";
import imprint from "../images/imprint.png";
import teachme from "../images/teachme.png";
import munsonrevenge from "../images/munsonrevenge.png";
import comix from "../images/comix.png";
import nightclub from "../images/nightclub.png";
import fuzzer from "../images/fuzzer.png";
import { useFadeInOnScroll } from "../utils/useFadeInOnScroll";


const Projects: React.FC = () => {
    const { ref, isVisible } = useFadeInOnScroll();

    return (
        <div
          ref={ref}
          className={`flex flex-col w-full items-center transition-opacity duration-700 ${isVisible ? "opacity-100 animate-fadeIn" : "opacity-0"}`}>
          <div className="flex flex-col mr-auto items-center justify-center mx-auto">
            <h1 className="text-4xl font-bold">&lt;projects/&gt;</h1>
            <div className="block mt-6 mb-14 h-[3px] w-20 bg-gradient-to-r from-[#dbe9ff] to-[#4a5a8c]"></div>
          </div>
          <div className="flex justify-center flex-row w-full  lg:items-start gap-6 lg:gap-10 xl:gap-16">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 sm:gap-12 lg:gap-16 mt-6 items-stretch">
                <a
                  href="https://github.com/rit-coms/COMS-Snake-Game"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(255,255,255,0.2)] rounded-2xl"
                >
                  <li className="flex flex-col items-center w-full max-w-[400px] h-full rounded-2xl bg-[#3A5B70] p-4">
                    <img src={imprint} alt="Imprint Project" className="mt-2 max-h-[200px] object-contain" />
                    <span className="text-xl m-2 underline font-medium">Imprint</span>
                    <p className="my-1 mx-2 text-center">
                      A snake-style game built with Python and Pygame, where a duck collects bread to spawn ducklings.
                    </p>
                  </li>
                </a>
                <a
                  href="https://devpost.com/software/teach-me-2bpnk6" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(255,255,255,0.2)] rounded-2xl"
                >
                  <li className="flex flex-col items-center w-full max-w-[400px] h-full rounded-2xl bg-[#3A5B70] p-4">
                    <img src={teachme} alt="TeachMe Project" className="mt-2 max-h-[200px] object-contain" />
                    <span className="text-xl m-2 underline font-medium">TeachMe</span>
                    <p className="my-1 mx-2 text-center">A web app for students, specifically ALANA members, to easily request student mentors and receive help in many different topics and subjects.</p>
                  </li>
                </a>
                <a
                  href="https://devpost.com/software/munson-s-revenge"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(255,255,255,0.2)] rounded-2xl"
                >
                  <li className="flex flex-col items-center w-full max-w-[400px] h-full rounded-2xl bg-[#3A5B70] p-4">
                    <img src={munsonrevenge} alt="Munson Revenge Project" className="mt-2 max-h-[200px] object-contain" />
                    <span className="text-xl m-2 underline font-medium">Munson Revenge</span>
                    <p className="my-1 mx-2 text-center">AI is taking over RIT, and it’s up to the students to defend the campus. Singleplayer RPG Gameboy game with multiple classes.</p>
                  </li>
                </a>
                <a
                  href="https://www.se.rit.edu/~swen-262/projects/design_project_new/DesignProjectR1.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(255,255,255,0.2)] rounded-2xl"
                >
                  <li className="flex flex-col items-center w-full max-w-[400px] h-full rounded-2xl bg-[#3A5B70] p-4">
                    <img src={comix} alt="Comix Project" className="mt-2 max-h-[200px] object-contain" />
                    <span className="text-xl m-2 underline font-medium">Comix</span>
                    <p className="my-1 mx-2 text-center">Comic app to track a comic book collections. Made with Java and JavaFX.</p>
                  </li>
                </a>
                <a
                  href="https://www.se.rit.edu/~swen-344/projects/client/client-nightclub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(255,255,255,0.2)] rounded-2xl"
                >
                  <li className="flex flex-col items-center w-full max-w-[400px] h-full rounded-2xl bg-[#3A5B70] p-4">
                    <img src={nightclub} alt="Nightclub Project" className="mt-2 max-h-[200px] object-contain" />
                    <span className="text-xl m-2 underline font-medium">Nightclub</span>
                    <p className="my-1 mx-2 text-center">A dynamic nightclub management web app, enabling users to create, edit, and delete nightclubs with real-time occupancy tracking functionality.</p>
                  </li>
                </a>
                <a
                  href="https://www.se.rit.edu/~swen-331/projects/fuzzer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_5px_rgba(255,255,255,0.2)] rounded-2xl"
                >
                  <li className="flex flex-col items-center w-full max-w-[400px] h-full rounded-2xl bg-[#3A5B70] p-4">
                    <img src={fuzzer} alt="Fuzzer Project" className="mt-2 max-h-[200px] object-contain" />
                    <span className="text-xl m-2 underline font-medium">Fuzzer</span>
                  <p className="my-1 mx-2 text-center">Testing tool for finding weaknesses in the DVWA. Made with Python and MechanicalSoup.</p>
                  </li>
                </a>
            </ul>
          </div>
        </div>
    );
}

export default Projects;