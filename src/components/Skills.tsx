import React from "react";
import { useFadeInOnScroll } from "../utils/useFadeInOnScroll";

const Skills: React.FC = () => {
    const { ref, isVisible } = useFadeInOnScroll();

    return (
        <div
          ref={ref}
          className={`flex flex-col w-full items-center lg:min-h-screen transition-opacity duration-700 ${isVisible ? "opacity-100 animate-fadeIn" : "opacity-0"}`}>
          <div className="flex flex-col mr-auto items-center justify-center mx-auto">
            <h1 className="text-4xl font-bold">&lt;skills/&gt;</h1>
            <div className="block mt-6 mb-14 h-[3px] w-20 bg-gradient-to-r from-[#dbe9ff] to-[#4a5a8c]"></div>
          </div>
          <div className="flex flex-col justify-around lg:flex-row w-full lg:items-start gap-6 lg:gap-5 3xl:px-5">
            {/* Programming Section */}
            <div className="flex flex-col justify-center items-center space-y-14 2xl:ml-20">
              <h1 className="text-3xl">Programming</h1>
              <ul className="grid grid-cols-2 sm:grid-cols-3 3xl:grid-cols-4 gap-6 mt-6">
                {[
                  { name: "Python", icon: "python.svg", link: "https://www.python.org" },
                  { name: "Java", icon: "java.svg", link: "https://www.oracle.com/java/" },
                  { name: "C", icon: "c.png", link: "https://en.wikipedia.org/wiki/C_(programming_language)" },
                  { name: "JavaScript", icon: "javascript.svg", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
                  { name: "TypeScript", icon: "typescript.svg", link: "https://www.typescriptlang.org" },
                  { name: "HTML", icon: "html-5.svg", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
                  { name: "CSS", icon: "css-3.svg", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
                  { name: "SQL", icon: "sql.svg", link: "https://en.wikipedia.org/wiki/SQL" },
                ].map(({ name, icon, link }) => (
                  <a
                    key={name}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col justify-center items-center w-[96px] h-[96px] rounded-2xl bg-[#050C15] space-y-1 transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.3)]"
                  >
                    <img src={`/icons/${icon}`} alt={`${name} Icon`} className="h-[40px]" />
                    <span className="text-sm">{name}</span>
                  </a>
                ))}
              </ul>
            </div>

            {/* Tools & Frameworks Section */}
            <div className="flex flex-col justify-center items-center space-y-14 2xl:mr-20">
              <h1 className="text-3xl text-center">Tools & Frameworks</h1>
              <ul className="grid grid-cols-2 sm:grid-cols-3 3xl:grid-cols-4 gap-6 mt-6">
                {[
                  { name: "React.js", icon: "react.svg", link: "https://reactjs.org/" },
                  { name: "Angular", icon: "angular.svg", link: "https://angular.io/" },
                  { name: "Docker", icon: "docker.svg", link: "https://www.docker.com/" },
                  { name: "Git", icon: "git.svg", link: "https://git-scm.com/" },
                  { name: "Express.js", icon: "express.svg", link: "https://expressjs.com/" },
                  { name: "Flask", icon: "flask.svg", link: "https://flask.palletsprojects.com/" },
                  { name: "Maven", icon: "maven.svg", link: "https://maven.apache.org/" },
                  { name: "Spring Boot", icon: "spring.svg", link: "https://spring.io/projects/spring-boot" },
                  { name: "Gradle", icon: "gradle.svg", link: "https://gradle.org/" },
                  { name: "PostgreSQL", icon: "postgresql.svg", link: "https://www.postgresql.org/" },
                ].map(({ name, icon, link }) => (
                  <a
                    key={name}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col justify-center items-center w-[96px] h-[96px] rounded-2xl bg-[#050C15] space-y-1 transition-all duration-300 hover:shadow-[0_0_15px_3px_rgba(255,255,255,0.3)]"
                  >
                    <img src={`/icons/${icon}`} alt={`${name} Icon`} className="h-[40px]" />
                    <span className="text-sm">{name}</span>
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </div>
    );
}

export default Skills;