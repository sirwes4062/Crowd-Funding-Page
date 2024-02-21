import React from "react";
import { useContext } from "react";
import { Mycontext } from "../App";
import Cross from "../images/icon-close-modal.svg";
import { useState } from "react";

const Modal = () => {
  const {
    toggleModal,
    setToggleModal,
    togglePledgeOne,
    setTogglePlegeOne,
    togglePledgeTwo,
    setTogglePledgeTwo,
    togglePledgeThree,
    setTogglePlegeThree,
    setToggleCongratsModal,
    toggleCongratsModal,
  } = useContext(Mycontext);

  const [noPledgeAmount, setNoPledgeAmount] = useState();

  const [firstPledgeAmount, setfirstPledgeAmount] = useState();
  let [OriginalTotalPrice, setOriginalTotalPrice] = useState(101);

  const [secondPledgeAmount, setsecondPledgeAmount] = useState();
  let [secondOriginalTotalPrice, setSecondOriginalTotalPrice] = useState(64);

  const noPledgehandlechange = (e) => {
    setNoPledgeAmount(e.target.value);
  };

  const handlechange = (e) => {
    setfirstPledgeAmount(e.target.value);
  };

  const handlesecondchange = (e) => {
    setsecondPledgeAmount(e.target.value);
  };

  // CONTINUE CLICK BUTTON
  const handleContinueClick = () => {
    if (
      firstPledgeAmount &&
      firstPledgeAmount > 25 &&
      !isNaN(firstPledgeAmount)
    ) {
      setOriginalTotalPrice(OriginalTotalPrice - 1);
    }

    setToggleCongratsModal(!toggleCongratsModal);

    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });

    setToggleModal(!toggleModal);
  };

  // CONTINUE CLICK BUTTON
  const handleSecondContinueClick = () => {
    if (
      secondPledgeAmount &&
      secondPledgeAmount > 75 &&
      !isNaN(firstPledgeAmount)
    ) {
      setSecondOriginalTotalPrice(secondOriginalTotalPrice - 1);
    }

    setToggleCongratsModal(true);

    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });

    setToggleModal(!toggleModal);
  };

  const removeModal = () => {
    setToggleModal(!toggleModal);
  };

  const pledgeOneHandler = () => {
    setTogglePlegeOne(!togglePledgeOne);
  };
  const pledgeTwoHandler = () => {
    setTogglePledgeTwo(!togglePledgeTwo);
  };

  const pledgeThreeHandler = () => {
    setTogglePlegeThree(!togglePledgeThree);
  };

  return (
    <section className="Modal-container">
      <div className="modal-content m-auto p-8">
        <div>
          <header className="flex justify-between">
            <h1 className=" modal-header-text text-2xl">Back this Project</h1>

            <div className="mt-3">
              <img src={Cross} alt="" onClick={removeModal} />
            </div>
          </header>
          <p className="mt-6 mb-10">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
        </div>

        {/* NO REWARD PLEDGE */}
        <>
          <div
            className={
              togglePledgeOne
                ? "green-border first-modal-box p-8 mt-8"
                : "first-modal-box p-8 mb-8 mt-8"
            }>
            <div>
              <div className="flex">
                <div
                  className={
                    togglePledgeOne
                      ? "mr-3 circular dark-gray-class rounded-full flex justify-center items-center"
                      : "mr-3 circular outer-click-button-two  rounded-full flex justify-center items-center "
                  }
                  onClick={pledgeOneHandler}>
                  {togglePledgeOne ? (
                    <div className="internal rounded-full"></div>
                  ) : (
                    <></>
                  )}
                </div>

                <h1
                  className={
                    togglePledgeOne
                      ? "text-Black first-box-heading cursor-pointer"
                      : "text-DarkCyan first-box-heading cursor-pointer"
                  }
                  onClick={pledgeOneHandler}>
                  Pledge with no reward
                </h1>
              </div>
            </div>

            <div className="first-box-paragraph mt-4">
              <h1>
                Choose to support us without a reward if you simply believe in
                our project. As a backer, you will be signed up to receive
                product updates via email.
              </h1>
            </div>
          </div>

          {/* NO PLEDGE DROPDOWN */}
          <div
            className={
              togglePledgeOne ? "modal-dropdown  mb-12 pt-0 md:pt-4" : "hidden"
            }>
            <div className="enter-pledge  flex justify-center items-center  font-semibold text-DarkGray p-2 md:hidden">
              Enter your pledge
            </div>

            <div className=" flex items-center justify-around mb-6">
              <div className="font-semibold text-DarkGray hidden md:block">
                Enter your pledge
              </div>
              <div className="flex">
                <div className="button-NaN flex-col">
                  <div className="input-price  flex-col border-2 border-ModerateCyan flex justify-center items-center  ">
                    <div className="input-Dollar">
                      {noPledgeAmount ? "$." : ""}
                      <input
                        style={{ fontWeight: "500", fontSize: "bold" }}
                        onChange={noPledgehandlechange}
                        type="text"
                        className="inputted-price bg-transparent outline-none"
                      />
                    </div>
                  </div>
                  {isNaN(noPledgeAmount) && noPledgeAmount ? (
                    <h1
                      style={{ fontWeight: "500", fontSize: "12px" }}
                      className="text-red-600 ml-3">
                      not a number
                    </h1>
                  ) : (
                    ""
                  )}
                </div>

                <div
                  onClick={handleContinueClick}
                  className="flex  justify-center items-center 
              continue-button text-white  ml-3">
                  <h1 className="font-bold cursor-pointer"> Continue</h1>
                </div>
              </div>
            </div>
          </div>
        </>

        {/* END OF NO REWARD PLEDGE */}

        {/* FIRST PLEGDE */}
        <>
          <div
            className={
              togglePledgeTwo
                ? "green-border second-modal-box p-8 mt-8 "
                : "second-modal-box p-8 mb-8 mt-8"
            }>
            <div className=" md:flex  md:flex-row">
              <div className="flex">
                <div
                  className="circular-container mr-3 md-0 sm:m-3"
                  onClick={pledgeTwoHandler}>
                  <div
                    className={
                      togglePledgeTwo
                        ? " circular dark-gray-class  rounded-full flex justify-center items-center"
                        : " circular outer-click-button-two  rounded-full  flex justify-center items-center "
                    }>
                    {togglePledgeTwo ? (
                      <div className="internal rounded-full "></div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>

                <div className="text-left block md:flex">
                  <h1
                    className={
                      togglePledgeTwo
                        ? "text-Black first-header-first-pledge cursor-pointer mr-6"
                        : "text-DarkCyan first-header-first-pledge cursor-pointer mr-6"
                    }
                    onClick={pledgeTwoHandler}>
                    Bamboo Stand
                  </h1>

                  <h1
                    className={
                      togglePledgeTwo
                        ? "text-DarkCyan"
                        : "text_DarkGray first-box-heading"
                    }>
                    Pledge $25 or more
                  </h1>
                </div>
              </div>

              <div className="price hidden md:mt-0   sm:flex md:justify-end">
                <h1 className="text-Black mr-1">{OriginalTotalPrice}</h1>
                <p className="text-DarkGray">left</p>
              </div>
            </div>

            <div className="first-box-paragraph mt-4">
              <h1 className="">
                You get an ergonomic stand made of natural bamboo. You've helped
                us launch our promotional campaign, and you’ll be added to a
                special Backer member list. 101 left
              </h1>
            </div>

            <div className="price  sm:hidden  mt-4 flex md:justify-end">
              <h1 className="text-Black mr-1 text-2xl">{OriginalTotalPrice}</h1>
              <p className="text-DarkGray">left</p>
            </div>
          </div>

          {/* FISRT REWARD DROPDOWN */}
          <div
            className={
              togglePledgeTwo ? "modal-dropdown mb-12 pt-0 md:pt-4" : "hidden"
            }>
            <div className="enter-pledge  flex justify-center items-center  font-semibold text-DarkGray p-2 md:hidden">
              Enter your pledge
            </div>

            <div className=" flex items-center justify-around mb-6">
              <div className="font-semibold text-DarkGray hidden md:block ">
                Enter your pledge
              </div>
              <div className="flex">
                <div className="button-NaN flex-col">
                  <div className="input-price  flex-col border-2 border-ModerateCyan flex justify-center items-center  ">
                    <div className="input-Dollar">
                      {firstPledgeAmount ? "$." : ""}
                      <input
                        style={{ fontWeight: "500" }}
                        onChange={handlechange}
                        type="text"
                        placeholder="$ 25"
                        className="inputted-price bg-transparent outline-none"
                      />
                    </div>
                  </div>
                  {isNaN(firstPledgeAmount) && firstPledgeAmount ? (
                    <h1
                      style={{ fontWeight: "500", fontSize: "12px" }}
                      className="text-red-600 ml-3">
                      not a number
                    </h1>
                  ) : (
                    ""
                  )}

                  {firstPledgeAmount < 25 && firstPledgeAmount ? (
                    <h1
                      style={{ fontWeight: "500", fontSize: "12px" }}
                      className="text-red-600 ml-30">
                      less than $25
                    </h1>
                  ) : (
                    ""
                  )}
                </div>

                <div
                  onClick={handleContinueClick}
                  className="flex  justify-center items-center 
              continue-button text-white  ml-3">
                  <h1 className="font-bold cursor-pointer"> Continue</h1>
                </div>
              </div>
            </div>
          </div>
        </>

        {/* SECOND REWARD PLEDGE*/}
        <>
          <div
            className={
              togglePledgeThree
                ? "green-border second-modal-box p-8 mt-8"
                : "second-modal-box p-8 mb-8 mt-8 "
            }>
            <div className=" md:flex  md:flex-row">
              <div className="flex">
                <div
                  className="circular-container mr-3 md-0 sm:m-3"
                  onClick={pledgeThreeHandler}>
                  <div
                    className={
                      togglePledgeThree
                        ? " circular dark-gray-class  rounded-full flex justify-center items-center"
                        : " circular outer-click-button-two  rounded-full  flex justify-center items-center "
                    }>
                    {togglePledgeThree ? (
                      <div className="internal rounded-full "></div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>

                <div className="text-left block md:flex">
                  <h1
                    className={
                      togglePledgeThree
                        ? "text-Black first-header-first-pledge cursor-pointer mr-6"
                        : "text-DarkCyan first-header-first-pledge cursor-pointer mr-6"
                    }
                    onClick={pledgeTwoHandler}>
                    Black Edition Stand
                  </h1>

                  <h1
                    className={
                      togglePledgeThree
                        ? "text-DarkCyan"
                        : "text_DarkGray first-box-heading"
                    }>
                    Pledge $75 or more
                  </h1>
                </div>
              </div>

              <div className="price hidden md:mt-0   sm:flex md:justify-end">
                <h1 className="text-Black text-2xl  mr-1">
                  {secondOriginalTotalPrice}
                </h1>
                <p className="text-DarkGray">left</p>
              </div>
            </div>

            <div className="first-box-paragraph mt-4">
              <h1 className="">
                You get a Black Special Edition computer stand and a personal
                thank you. You’ll be added to our Backer member list. Shipping
                is included.
              </h1>
            </div>

            <div className="price  sm:hidden  mt-4 flex md:justify-end">
              <h1 className="text-Black   text-2xl mr-1">
                {secondOriginalTotalPrice}
              </h1>
              <p className="text-DarkGray">left</p>
            </div>
          </div>

          {/* SECOND REWARD DROPDOWN */}
          <div
            className={
              togglePledgeThree ? "modal-dropdown mb-12 pt-0 md:pt-4" : "hidden"
            }>
            <div className="enter-pledge  flex justify-center items-center  font-semibold text-DarkGray p-2 md:hidden">
              Enter your pledge
            </div>

            <div className=" flex items-center justify-around mb-6">
              <div className="font-semibold text-DarkGray hidden md:block ">
                Enter your pledge
              </div>
              <div className="flex">
                <div className="button-NaN flex-col">
                  <div className="input-price  flex-col border-2 border-ModerateCyan flex justify-center items-center  ">
                    <div className="input-Dollar">
                      {secondPledgeAmount ? "$." : ""}
                      <input
                        style={{ fontWeight: "500" }}
                        onChange={handlesecondchange}
                        type="text"
                        placeholder="$ 25"
                        className="inputted-price bg-transparent outline-none"
                      />
                    </div>
                  </div>
                  {isNaN(secondPledgeAmount) && secondPledgeAmount ? (
                    <h1
                      style={{ fontWeight: "500", fontSize: "12px" }}
                      className="text-red-600 ml-3">
                      not a number
                    </h1>
                  ) : (
                    ""
                  )}

                  {secondPledgeAmount < 75 && secondPledgeAmount ? (
                    <h1
                      style={{ fontWeight: "500", fontSize: "12px" }}
                      className="text-red-600 ml-30">
                      less than $75
                    </h1>
                  ) : (
                    ""
                  )}
                </div>

                <div
                  onClick={handleSecondContinueClick}
                  className="flex  justify-center items-center 
              continue-button text-white  ml-3">
                  <h1 className="font-bold cursor-pointer"> Continue</h1>
                </div>
              </div>
            </div>
          </div>
        </>

        {/* NEW LOCKED PLEDGE */}
        <>
          <div className="second-modal-box p-8 mb-8 ">
            <div className="md:flex ">
              <div className="flex">
                <div className="circular-container   mr-3 md-0 sm:m-3">
                  <div className="locked-button rounded-full flex justify-center items-center "></div>
                </div>

                <div className="text-left block md:flex font-bold">
                  <h1 className="mr-3 text-green-300 ">
                    Mahogany Special Edition
                  </h1>
                  <h1 className="text-gray-500"> Pledge $200 or more</h1>
                </div>
              </div>

              <div className="price hidden md:mt-0   sm:flex md:justify-end">
                <h1 className="text-Black text-2xl  mr-1">0</h1>
                <p className="text-DarkGray">left</p>
              </div>
            </div>

            <div className="first-box-paragraph mt-4">
              <h1 className=" text-gray-500">
                You get two Special Edition Mahogany stands, a Backer T-Shirt,
                and a personal thank you. You’ll be added to our Backer member
                list. Shipping is included. 0 left
              </h1>
            </div>

            <div className="price  sm:hidden  mt-4 flex md:justify-end">
              <h1 className="text-Black   text-2xl mr-1">0</h1>
              <p className="text-DarkGray">left</p>
            </div>
          </div>
        </>

        {/* NEW LOCKED PLEDGE */}
      </div>
    </section>
  );
};

export default Modal;
