import React from "react";

const DropDown = () => {
  return (
    <div className="dropdown bg-white ">
      <div>
        <p className="px-5 flex items-center cursor-pointer dropdownlink">
          About
        </p>
      </div>
      <div>
        <p className="  px-5 flex items-center cursor-pointer dropdownlink ">
          Discovery
        </p>
      </div>
      <div>
        <p className="   px-5 flex items-center  cursor-pointer  dropdownlink">
          Get Started
        </p>
      </div>
    </div>
  );
};

export default DropDown;
