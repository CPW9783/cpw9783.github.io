import React from "react";
import photo from "../images/photo1.jpg";


const Header: React.FC = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row w-full items-center lg:h-screen justify-center">
      <div className="mr-auto">
        <p className="text-3xl">
          /* Hi! My name is,
          <br />
          <span className="text-[#A5BADA] text-6xl font-bold">Christopher West</span>.
          <br />
          A software engineering student at RIT. */
        </p>
      </div>
      <div className="ml-10 lg:mr-20 mt-4 mb-8">
        <img src={photo} alt="Christopher West" width={400} />
      </div>
    </div>
  );
};

export default Header;
