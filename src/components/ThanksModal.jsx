import React from "react";
import { useContext } from "react";
import { Mycontext } from "../App";
import Check from "../images/icon-check.svg";

const ThanksModal = () => {
  const { toggleCongratsModal, setToggleCongratsModal } = useContext(Mycontext);

  const handleGoItclick = () => {
    setToggleCongratsModal(!toggleCongratsModal);
  };

  // POSITION THE CONTAINER ABOVE OTHER CONTAINER AND AT THE CENTER
  return (
    <div className=" thanksModalContainer  absolute flex justify-center">
      <div className="thanksModal p-12 mt-20 flex items-center flex-col rounded-xl">
        <div className="">
          <img src={Check} alt="" className="thanks-logo" />
        </div>

        <div className="">
          <div className="message-header-container flex justify-center m-5">
            <h1 className="message-header text-black text-2xl font-500">
              Thanks for your support!
            </h1>
          </div>

          <div className="paragraph-container">
            <p className="text-DarkGray ">
              Your pledge brings us one step closer to sharing Mastercraft
              Bamboo Monitor Riser worldwide. You will get an email once our
              campaign is completed. Got it!
            </p>
          </div>
        </div>

        {/* CHANGE THE BACKGROUND USING CSS */}
        <div
          onClick={handleGoItclick}
          className="GotIt-button mt-12  cursor-pointer text-white bg-Cyan flex justify-center items-center rounded-3xl ">
          Got it
        </div>
      </div>
    </div>
  );
};

export default ThanksModal;
