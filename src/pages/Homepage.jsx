import React from "react";
import Navbar from "../components/Navbar";
import Content from "../components/Content";
import About from "../components/About";
import Modal from "../components/Modal";
import { useContext } from "react";
import { Mycontext } from "../App";
import ThanksModal from "../components/ThanksModal";

const Homepage = () => {
  const { toggleModal, toggleCongratsModal } = useContext(Mycontext);

  return (
    <>
      <section className="homepage">
        {toggleModal && <Modal />}
        <Navbar />
        <Content />
        <About />
        {/* TOGGLE THE COMPONENT WHEN THE GOT IT BUTTON IS CLICKED*/}
        {toggleCongratsModal && <ThanksModal />}
      </section>
    </>
  );
};

export default Homepage;
