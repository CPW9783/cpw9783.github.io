import React from "react";
import imprint from "../images/imprint.png";
import teachme from "../images/teachme.png";
import munsonrevenge from "../images/munsonrevenge.png";
import comix from "../images/comix.png";
import nightclub from "../images/nightclub.png";
import fuzzer from "../images/fuzzer.png";

const Projects: React.FC = () => {
    return (
        <div className="flex flex-col w-full items-center">
          <div className="flex flex-col mr-auto items-center justify-center mx-auto">
            <h1 className="text-4xl font-bold">&lt;projects/&gt;</h1>
            <div className="block mt-6 mb-14 h-[3px] w-20 bg-gradient-to-r from-[#dbe9ff] to-[#4a5a8c]"></div>
          </div>
          <div className="flex justify-center flex-row w-full  lg:items-start gap-6 lg:gap-10 xl:gap-16">
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 sm:gap-12 lg:gap-16 mt-6">
                <li className="flex flex-col items-center w-full max-w-[400px] h-auto aspect-[451/427] rounded-2xl bg-[#3A5B70] p-4">
                  <img src={imprint} alt="Imprint Project" className="mt-2 max-h-[200px] object-contain" />
                  <span className="text-xl m-2 underline font-medium">Imprint</span>
                  <p className="my-1 mx-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit enim turpis, nec.</p>
                </li>
                <li className="flex flex-col items-center w-full max-w-[400px] h-auto aspect-[451/427] rounded-2xl bg-[#3A5B70] p-4">
                  <img src={teachme} alt="TeachMe Project" className="mt-2 max-h-[200px] object-contain" />
                  <span className="text-xl m-2 underline font-medium">TeachMe</span>
                  <p className="my-1 mx-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit enim turpis, nec.</p>
                </li>
                <li className="flex flex-col items-center w-full max-w-[400px] h-auto aspect-[451/427] rounded-2xl bg-[#3A5B70] p-4">
                  <img src={munsonrevenge} alt="Munson Revenge Project" className="mt-2 max-h-[200px] object-contain" />
                  <span className="text-xl m-2 underline font-medium">Munson Revenge</span>
                  <p className="my-1 mx-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit enim turpis, nec.</p>
                </li>
                <li className="flex flex-col items-center w-full max-w-[400px] h-auto aspect-[451/427] rounded-2xl bg-[#3A5B70] p-4">
                  <img src={comix} alt="Comix Project" className="mt-2 max-h-[200px] object-contain" />
                  <span className="text-xl m-2 underline font-medium">Comix</span>
                  <p className="my-1 mx-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit enim turpis, nec.</p>
                </li>
                <li className="flex flex-col items-center w-full max-w-[400px] h-auto aspect-[451/427] rounded-2xl bg-[#3A5B70] p-4">
                  <img src={nightclub} alt="Nightclub Project" className="mt-2 max-h-[200px] object-contain" />
                  <span className="text-xl m-2 underline font-medium">Nightclub</span>
                  <p className="my-1 mx-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit enim turpis, nec.</p>
                </li>
                <li className="flex flex-col items-center w-full max-w-[400px] h-auto aspect-[451/427] rounded-2xl bg-[#3A5B70] p-4">
                  <img src={fuzzer} alt="Fuzzer Project" className="mt-2 max-h-[200px] object-contain" />
                  <span className="text-xl m-2 underline font-medium">Fuzzer</span>
                  <p className="my-1 mx-2 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit enim turpis, nec.</p>
                </li>
            </ul>
          </div>
        </div>
    );
}

export default Projects;