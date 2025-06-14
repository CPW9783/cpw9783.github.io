import React from "react";

const Skills: React.FC = () => {
    return (
        <div className="flex flex-col w-full items-center lg:h-screen">
          <div className="flex flex-col mr-auto items-center justify-center mx-auto">
            <h1 className="text-4xl font-bold">&lt;skills/&gt;</h1>
            <div className="block mt-6 mb-14 h-[3px] w-20 bg-gradient-to-r from-[#dbe9ff] to-[#4a5a8c]"></div>
          </div>
          <div className="flex flex-col justify-between lg:flex-row w-full mx-20 lg:items-start gap-6 lg:gap-10 xl:px-28 gap-16">
            <div className="flex flex-col justify-center items-center space-y-14">
              <h1 className="text-3xl">
                Programming
              </h1>
              <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                <li className="flex flex-col justify-center items-center w-[96px] h-[96px] rounded-2xl bg-[#050C15] space-y-1">
                  <img src="/icons/python.svg" alt="Python Icon" className="h-[40px]" />
                  <span className="text-sm">Python</span>
                </li>
                <li className="flex flex-col justify-center items-center w-[96px] h-[96px] rounded-2xl bg-[#050C15] space-y-1">
                  <img src="/icons/java.svg" alt="Java Icon" className="h-[40px]" />
                  <span className="text-sm">Java</span>
                </li>
                <li className="flex flex-col justify-center items-center w-[96px] h-[96px] rounded-2xl bg-[#050C15] space-y-1">
                  <img src="/icons/c.png" alt="C Icon" className="h-[40px]" />
                  <span className="text-sm">C</span>
                </li>
                <li className="flex flex-col justify-center items-center w-[96px] h-[96px] rounded-2xl bg-[#050C15] space-y-1">
                  <img src="/icons/javascript.svg" alt="JavaScript Icon" className="h-[40px]" />
                  <span className="text-sm">JavaScript</span>
                </li>
                <li className="flex flex-col justify-center items-center w-[96px] h-[96px] rounded-2xl bg-[#050C15] space-y-1">
                  <img src="/icons/typescript.svg" alt="TypeScript Icon" className="h-[40px]" />
                  <span className="text-sm">TypeScript</span>
                </li>
                <li className="flex flex-col justify-center items-center w-[96px] h-[96px] rounded-2xl bg-[#050C15] space-y-1">
                  <img src="/icons/html-5.svg" alt="HTML Icon" className="h-[40px]" />
                  <span className="text-sm">HTML</span>
                </li>
                <li className="flex flex-col justify-center items-center w-[96px] h-[96px] rounded-2xl bg-[#050C15] space-y-1">
                  <img src="/icons/css-3.svg" alt="CSS Icon" className="h-[40px]" />
                  <span className="text-sm">CSS</span>
                </li>
                <li className="flex flex-col justify-center items-center w-[96px] h-[96px] rounded-2xl bg-[#050C15] space-y-1">
                  <img src="/icons/sql.svg" alt="SQL Icon" className="h-[40px]" />
                  <span className="text-sm">SQL</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center space-y-14">
              <h1 className="text-3xl">
                Tools & Frameworks
              </h1>
              <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                <li className="flex flex-col justify-center items-center w-[96px] h-[96px] rounded-2xl bg-[#050C15] space-y-1">
                  <img src="/icons/react.svg" alt="React Icon" className="h-[40px]" />
                  <span className="text-sm">React.js</span>
                </li>
                <li className="flex flex-col justify-center items-center w-[96px] h-[96px] rounded-2xl bg-[#050C15] space-y-1">
                  <img src="/icons/angular.svg" alt="Angular Icon" className="h-[40px]" />
                  <span className="text-sm">Angular</span>
                </li>
                <li className="flex flex-col justify-center items-center w-[96px] h-[96px] rounded-2xl bg-[#050C15] space-y-1">
                  <img src="/icons/docker.svg" alt="Docker Icon" className="h-[40px]" />
                  <span className="text-sm">Docker</span>
                </li>
                <li className="flex flex-col justify-center items-center w-[96px] h-[96px] rounded-2xl bg-[#050C15] space-y-1">
                  <img src="/icons/git.svg" alt="Git Icon" className="h-[40px]" />
                  <span className="text-sm">Git</span>
                </li>
                <li className="flex flex-col justify-center items-center w-[96px] h-[96px] rounded-2xl bg-[#050C15] space-y-1">
                  <img src="/icons/express.svg" alt="Express Icon" className="h-[40px]" />
                  <span className="text-sm">Express.js</span>
                </li>
                <li className="flex flex-col justify-center items-center w-[96px] h-[96px] rounded-2xl bg-[#050C15] space-y-1">
                  <img src="/icons/flask.svg" alt="Flask Icon" className="h-[40px]" />
                  <span className="text-sm">Flask</span>
                </li>
                <li className="flex flex-col justify-center items-center w-[96px] h-[96px] rounded-2xl bg-[#050C15] space-y-1">
                  <img src="/icons/maven.svg" alt="Maven Icon" className="h-[40px]" />
                  <span className="text-sm">Maven</span>
                </li>
                <li className="flex flex-col justify-center items-center w-[96px] h-[96px] rounded-2xl bg-[#050C15] space-y-1">
                  <img src="/icons/spring.svg" alt="Spring Icon" className="h-[40px]" />
                  <span className="text-sm">Spring Boot</span>
                </li>
                <li className="flex flex-col justify-center items-center w-[96px] h-[96px] rounded-2xl bg-[#050C15] space-y-1">
                  <img src="/icons/gradle.svg" alt="Gradle Icon" className="h-[40px]" />
                  <span className="text-sm">Gradle</span>
                </li>
                <li className="flex flex-col justify-center items-center w-[96px] h-[96px] rounded-2xl bg-[#050C15] space-y-1">
                  <img src="/icons/postgresql.svg" alt="PostgreSQL Icon" className="h-[40px]" />
                  <span className="text-sm">PostgreSQL</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
    );
}

export default Skills;