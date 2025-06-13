import * as React from "react"
import Header from "../components/header"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Contact from "../components/contact"
import About from "../components/about"

export default function LandingPage() {
  return (
    <div>
      <div className="text-red-500 text-3xl">Hello Tailwind</div>
      <nav className="m-5">
        <div className="m">[CW]</div>
      </nav>
      {/* <h1>Welcome to the Portfolio Site</h1>
      <p>blah blah blah.</p> 
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      */}
    </div>
    
  )
}