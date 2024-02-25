import React, { useState } from "react";
import Masterkraft from "../images/logo-mastercraft.svg";
import Bookmark from "../images/icon-bookmark.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Mycontext } from "../App";

const Content = () => {
  const { toggleModal, setToggleModal } = useContext(Mycontext);
  const [toggleBookmarkButton, SetToggleBookmarkButton] = useState(
    localStorage.getItem("clicked") ? localStorage.getItem("clicked") : false
  );

  const bookmarkClick = () => {
    SetToggleBookmarkButton(!toggleBookmarkButton);
    localStorage.setItem("clicked", toggleBookmarkButton);
  };

  const handleModalClick = () => {
    setToggleModal(!toggleModal);

    window.scrollTo({
      top: 400,
      behaviour: "smooth",
    });
  };

  return (
    <section className="column-one">
      <div className="middleContent m-auto relative">
        <img src={Masterkraft} alt="" className="m-auto masterkraft absolute" />
        <div className="header-and-paragraph flex justify-center items-center md:mb-4  mb-7">
          <h1 className="header-text  lg:text-4xl md:text-2xl  text-Black ">
            Mastercraft Bamboo Monitor Riser
          </h1>
          <p className="text-DarkGray md:ml-3 sm:ml-3">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
        </div>

        <div className=" mt-4  back-and-bookmark-button flex flex-row justify-around ">
          <div
            className="back hover:bg-ModerateCyan cursor-pointer flex justify-center items-center bg-DarkCyan text-white"
            onClick={handleModalClick}>
            <p>Back this project</p>
          </div>
          <div
            className="bookmark cursor-pointer text-DarkGray flex justify-between items-center bg"
            onClick={bookmarkClick}>
            {toggleBookmarkButton ? (
              <div className="bookmark-green bookmark-green-image  rounded-full flex justify-center items-center">
                <FontAwesomeIcon icon={faBookmark} className="fontawesome" />
              </div>
            ) : (
              <div className="">
                <img src={Bookmark} alt="" className="" />
              </div>
            )}

            <p
              className={
                toggleBookmarkButton ? "bookmark-green m-auto" : "m-auto"
              }>
              {toggleBookmarkButton ? "Bookmarked" : "Bookmark"}
            </p>
          </div>
        </div>
      </div>

      <div className="money-and-days m-auto flex mt-7 mb-6 justify-around items-center flex-col">
        <div className="block sm:flex sm:flex-row lg:space-x-5 md:space-x-3 sm:space-x-1">
          <div className="money">
            <h1 className="lg:text-4xl md:text-2xl text-Black">89,914</h1>
            <p className=" text-DarkGray"> of $1,000,000 backed</p>
          </div>

          <div className="total-backers">
            <h1 className="lg:text-4xl  md:text-2xl text-Black"> 5,007</h1>
            <p className=" text-DarkGray"> total backers </p>
          </div>

          <div className="days">
            <h1 className="lg:text-4xl  md:text-2xl text-Black"> 56 </h1>
            <p className=" text-DarkGray"> days left</p>
          </div>
        </div>

        <div className="outer-green-loader ">
          <div className="green-loader bg-ModerateCyan"></div>
        </div>
      </div>
    </section>
  );
};

export default Content;
