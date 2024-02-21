import React from "react";
import { useContext } from "react";
import { Mycontext } from "../App";

const Reward = () => {
  const { toggleModal, setToggleModal } = useContext(Mycontext);
  const selecthandleclickone = () => {
    setToggleModal(!toggleModal);
    window.scrollTo({
      top: 850,
      behaviour: "smooth",
    });
  };

  const selecthandleclicktwo = () => {
    setToggleModal(!toggleModal);
    window.scrollTo({
      top: 850,
      behaviour: "smooth",
    });
  };

  return (
    <>
      <div className="reward-container p-8 mb-8">
        <div className="item-and-pledge-amount flex flex-col sm:flex-row justify-between">
          <h1 className="item text-1xl sm:text-1xl  text-black about-heading">
            Bamboo Stand
          </h1>
          <h2 className="pledge-amount text-ModerateCyan ">
            Pledge $25 or more
          </h2>
        </div>

        <div className="reward-paragraph mt-0 md:mt-4">
          <h1 className="text-DarkGray">
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </h1>
        </div>

        <div className="reward-footer  flex  flex-col sm:flex-row   justify-between mt-8">
          <div className="number-remaining flex flex-row">
            <h1 className="text-3xl number-left">101</h1>
            <span className="left mt-2 text-DarkGray ml-2">left</span>
          </div>

          <div
            className="select-button cursor-pointer flex justify-center items-center bg-DarkCyan hover:bg-ModerateCyan"
            onClick={selecthandleclickone}>
            <h1 className="select-reward text-white">Select Reward</h1>
          </div>
        </div>
      </div>

      <div className="reward-container p-8  mb-8 ">
        <div className="item-and-pledge-amount flex flex-col sm:flex-row justify-between">
          <h1 className="item text-1xl sm:text-1xl  text-black about-heading">
            Black Edition Stand
          </h1>
          <h2 className="pledge-amount text-ModerateCyan ">
            Pledge $75 or more
          </h2>
        </div>

        <div className="reward-paragraph mt-4">
          <h1 className="text-DarkGray">
            You get a Black Special Edition computer stand and a personal thank
            you. You`’ll be added to our Backer member list. Shipping is
            included.
          </h1>
        </div>

        <div className="reward-footer flex  flex-col sm:flex-row    justify-between mt-8">
          <div className="number-remaining flex flex-row">
            <h1 className="text-3xl number-left">64</h1>
            <span className="left mt-2 text-DarkGray ml-2">left</span>
          </div>

          <div
            className="select-button cursor-pointer flex justify-center items-center bg-DarkCyan  hover:bg-ModerateCyan"
            onClick={selecthandleclicktwo}>
            <h1 className="select-reward text-white ">Select Reward</h1>
          </div>
        </div>
      </div>

      <div className="reward-container p-2 md:p-8">
        <div className=" flex flex-col sm:flex-row justify-between">
          <h1 className=" text-1xl sm:text-1xl last-header">
            Mahogany Special Edition
          </h1>
          <h2 className="pledge-last-amount  ">Pledge $200 or more</h2>
        </div>

        <div className="reward-paragraph">
          <h1 className="text-DarkGray  last-container-text">
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You’ll be added to our Backer member list.
            Shipping is included.
          </h1>
        </div>

        <div className="reward-footer flex flex-col sm:flex-row justify-between">
          <div className="number-remaining flex mb-2 sm:mb-0 flex-row">
            <h1 className="text-3xl number-last-left">0</h1>
            <span className="left mt-2 text-DarkGray ml-2">left</span>
          </div>

          <div className="select-button last-button flex justify-center items-center bg-DarkCyan cursor-pointer">
            <h1> Out of Stock</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reward;
