import * as React from "react"
import Header from "../components/Header"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import About from "../components/About"
import { useSectionObserver } from "../utils/useSectionObserver";


export default function LandingPage() {
  const sectionIds = ["home", "about", "skills", "projects", "contact"];
  const activeSection = useSectionObserver(sectionIds);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="flex w-full sticky pb-3 top-0 z-50 bg-[#09141F]">
        <nav className="flex w-full mt-3">
          <div className="flex w-full justify-center lg:justify-start lg:w-auto lg:ml-20 text-4xl">[CW]</div>
          <div className="hidden lg:flex justify-end w-full mt-3 mr-20">
            <ul className="flex space-x-5">
              {sectionIds.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`
                      relative 
                      transition-all 
                      duration-300 
                      after:content-[''] 
                      after:absolute 
                      after:left-0 
                      after:bottom-0 
                      after:h-[2px] 
                      after:bg-[#A5BADA] 
                      after:transition-all 
                      after:duration-300 
                      ${activeSection === id ? "text-[#A5BADA] after:w-full" : "after:w-0"}
                    `}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      <div className="flex flex-col">
        <div id="home" className="scroll-mt-24">
          <Header />
        </div>
        <div>
          <div className="block my-10 h-[3px] w-full bg-gradient-to-r from-[#dbe9ff] to-[#4a5a8c]"></div>
        </div>
        <div id="about" className="scroll-mt-24">
          <About />
        </div>
        <div>
          <div className="block my-10 h-[3px] w-full bg-gradient-to-r from-[#dbe9ff] to-[#4a5a8c]"></div>
        </div>
        <div id="skills" className="scroll-mt-24">
          <Skills />
        </div>
        <div>
          <div className="block my-10 h-[3px] w-full bg-gradient-to-r from-[#dbe9ff] to-[#4a5a8c]"></div>
        </div>
        <div id="projects" className="scroll-mt-24">
          <Projects />
        </div>
        <div>
          <div className="block my-10 h-[3px] w-full bg-gradient-to-r from-[#dbe9ff] to-[#4a5a8c]"></div>
        </div>
        <div id="contact" className="scroll-mt-24">
          <Contact />
        </div>
      </div>
    </div>
    
  )
}