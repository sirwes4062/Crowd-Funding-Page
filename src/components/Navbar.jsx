import React, { useState } from "react";
import Logo from "../images/logo.svg";
import HamburgerIcon from "../images/icon-hamburger.svg";
import Dropdown from "./DropDown";
import CloseMenu from "../images/icon-close-menu.svg";
import HeroImage from "../images/image-hero-desktop.jpg";
import HeroImageMobile from "../images/image-hero-mobile.jpg";

const Navbar = () => {
  const [toggleDrop, setToggleDrop] = useState(false);

  const handleclick = () => {
    setToggleDrop(!toggleDrop);
  };

  return (
    <section className="navbar">
      <div className="HeroImage absolute m-auto">
        <img src={HeroImage} alt="" className="hidden md:block" />
        <img src={HeroImageMobile} alt="" className=" md:hidden" />
      </div>

      <div className=" flex justify-around py-6">
        <div>
          <img src={Logo} alt="" className="logo" />
        </div>
        <div className="hidden text-white md:flex space-x-8 ">
          <p className="cursor-pointer hover:text-DarkGray">About</p>
          <p className="cursor-pointer  hover:text-DarkGray">Discovery</p>
          <p className="cursor-pointer  hover:text-DarkGray">Get Started</p>
        </div>
        <div
          className="hamburger mt-3 block md:hidden cursor-pointer"
          onClick={handleclick}>
          <img src={toggleDrop ? CloseMenu : HamburgerIcon} alt="" />
        </div>
      </div>

      <div className=" md:hidden dropdown mx-auto mt-6">
        {toggleDrop ? <Dropdown /> : <></>}
      </div>
    </section>
  );
};

export default Navbar;
