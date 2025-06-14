import React from "react";
import photo from "../images/me-with-tree.png";

const Contact: React.FC = () => {
    return (
        <div className="flex flex-col lg:h-screen w-full mb-10">
          <div className="flex flex-col items-center justify-center lg:mr-auto">
            <h1 className="text-4xl font-bold">&lt;contact/&gt;</h1>
            <div className="block mt-6 mb-14 h-[3px] w-20 bg-gradient-to-r from-[#dbe9ff] to-[#4a5a8c]"></div>
          </div>
          <div className="flex flex-col items-center justify-center lg:flex-row-reverse">
            <img 
              src={photo} 
              alt="Christopher West" 
              className="block w-[300px] md:w-[350px] lg:w-[400px] mx-20" 
            />
            <div className="flex flex-col justify-center items-center text-center max-w-xl w-full py-10 xl:mr-20">
              <p className="text-3xl">
                Feel free to interact with me on these platforms!
              </p>
              <div>
              <ul className="flex flex-row items-center space-x-10 mt-10">
                {[
                  { href: "https://github.com/CPW9783", src: "/icons/github.svg", alt: "GitHub Icon" },
                  { href: "https://www.linkedin.com/in/christopherpaulwest/", src: "/icons/linkedin.svg", alt: "LinkedIn Icon" },
                  { href: "mailto:cpw9783@g.rit.edu", src: "/icons/gmail.svg", alt: "Gmail Icon" },
                ].map(({ href, src, alt }, idx) => (
                  <li key={idx} className="relative group">
                    <a href={href} target="_blank" rel="noopener noreferrer" className="relative z-10 block">
                      <img src={src} alt={alt} className="h-[45px]" />
                      <span className="absolute inset-0 rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-all duration-300 blur-lg z-[-1] bg-gradient-to-r from-[#dbe9ff] to-[#4a5a8c]"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            </div>
          </div>
        </div>
    );
}

export default Contact;