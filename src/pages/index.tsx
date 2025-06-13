import * as React from "react"
import Header from "../components/header"
import Skills from "../components/skills"
import Projects from "../components/projects"
import Contact from "../components/contact"
import About from "../components/about"

export default function LandingPage() {
  return (
    <div>
      <h1>Welcome to the Portfolio Site</h1>
      <p>blah blah blah.</p>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
    
  )
}