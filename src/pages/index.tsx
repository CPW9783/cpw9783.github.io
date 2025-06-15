import React, { useState } from "react";
import Header from "../components/Header"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import About from "../components/About"
import { useSectionObserver } from "../utils/useSectionObserver";


export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sectionIds = ["home", "about", "skills", "projects", "contact"];
  const activeSection = useSectionObserver(sectionIds);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // close menu after click
    }
  };

  return (
    <div className="flex flex-col px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="flex w-full sticky pb-3 top-0 z-50 bg-[#09141F]">
        <nav className="flex w-full mt-3 relative z-50">
          {/* Logo */}
          <div className={`
            text-4xl 
            absolute left-1/2 transform -translate-x-1/2 
            lg:static lg:transform-none 
            lg:ml-20
          `}>
            [CW]
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex justify-end w-full mt-3 mr-20">
            <ul className="flex space-x-5">
              {sectionIds.map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className={`relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#A5BADA] after:transition-all after:duration-300 ${
                      activeSection === id ? "text-[#A5BADA] after:w-full" : "after:w-0"
                    }`}
                  >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Hamburger icon */}
          <div className="lg:hidden flex justify-end w-full pr-6">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>

          {/* Overlay Menu */}
          <div
            className={`
              fixed inset-0 bg-black bg-opacity-80 text-white text-2xl 
              flex flex-col pt-10
              transition-transform duration-500 ease-out
              ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
              z-40
            `}>
            {sectionIds.map((id) => (
            <div key={id} className="pl-10 my-3">
              <button
                onClick={() => scrollToSection(id)}
                className={`
                  relative inline-block transition-all duration-300
                  after:content-[''] after:absolute after:left-0 after:bottom-0
                  after:h-[2px] after:bg-[#A5BADA] after:transition-all after:duration-300
                  after:origin-left after:scale-x-0
                  ${activeSection === id ? "text-[#A5BADA] underline after:scale-x-100" : ""}
                `}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            </div>
          ))}
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