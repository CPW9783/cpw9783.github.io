import React from "react";
import { Typewriter } from "react-simple-typewriter";
import photo from "../images/shape.png";



const Header: React.FC = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center lg:flex-row md:px-28 w-full lg:h-screen">
      <div className="flex justify-center items-center text-center lg:text-left xl:mr-auto px-6">
        <p className="items-center text-xl lg:text-3xl">
          Hi! My name is,
          <br />
          <span
            className="text-[#A5BADA] font-bold text-4xl lg:text-6xl inline-block"
            style={{ minWidth: "400px", display: "inline-block" }} // Adjust width as needed
          >
            <Typewriter
              words={['Christopher West']}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          <br />
          A software engineering student at RIT.
        </p>
      </div>
      <div className="lg:mr-auto lg:ml-24 mt-4 mb-8 min-w-[300px] md:min-w-[400px]">
        <img src={photo} 
            alt="Christopher West" 
            className="block w-[300px] md:w-[400px] lg:w-[550px]" 
            />
      </div>
    </div>
  );
};

export default Header;
