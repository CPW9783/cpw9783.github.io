import React from "react";
import photo from "../images/photo1.jpg";


const Header: React.FC = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row px-28 w-full items-center lg:h-screen justify-center">
      <div className="flex justify-center xl:mr-auto">
        <p className="items-center text-xl lg:text-3xl">
          /* Hi! My name is,
          <br />
          <span className="text-[#A5BADA] font-bold text-4xl lg:text-6xl">Christopher West</span>.
          <br />
          A software engineering student at RIT. */
        </p>
      </div>
      <div className="lg:ml-10 lg:mr-28 mt-4 mb-8">
        <img src={photo} alt="Christopher West" width={400} />
      </div>
    </div>
  );
};

export default Header;
