import * as React from "react"
import Header from "../components/Header"
import Skills from "../components/Skills"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import About from "../components/About"

export default function LandingPage() {
  return (
    <div className="mx-20">
      <div className="flex w-full sticky pb-3 top-0 z-50 bg-[#09141F]">
        <nav className="flex w-full mt-3">
          <div className="flex ml-20 text-4xl">[CW]</div>
          <div className="flex justify-end w-full mt-3">
            <ul className="flex space-x-5 mr-20">
              <li><a href="#home">Home</a></li>
              <div>|</div>
              <li><a href="#about">About</a></li>
              <div>|</div>
              <li><a href="#skills">Skills</a></li>
              <div>|</div>
              <li><a href="#projects">Projects</a></li>
              <div>|</div>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="flex flex-col mx-20">
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