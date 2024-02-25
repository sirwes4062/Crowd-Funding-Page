import React from "react";
import Reward from "./Reward";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container m-auto p-12 md:p-12 sm:p-3 mb-24">
        <div className="about-section">
          <h1 className=" about-heading text-2xl mb-6  text-Black">
            About this project
          </h1>
          <p className="text-DarkGray mb-6 ">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>

          <p className="text-DarkGray  mb-6 ">
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </div>

        <Reward />
      </div>
    </section>
  );
};

export default About;
