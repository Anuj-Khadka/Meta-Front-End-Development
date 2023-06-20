import React from "react";
import marioAndrianA from "../assets/imgs/Mario and Adrian A.jpg";
import marioAndrianB from "../assets/imgs/Mario and Adrian b.jpg";

const About = () => {
  return (
    <section className="about-section section">
      <div className="about-content">
        <h3 className="about-title">Little Lemon</h3>
        <p className="about-subtitle">Chicago</p>
        <p className="about-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
          voluptatem quam error vitae soluta labore.
        </p>
      </div>
      <div className="about-img-container">
        <div className="imgs-gallery">
          <div className="img-box" id="image-a">
            <img src={marioAndrianA} alt="mario and andrian" />
          </div>
          <div className="img-box" id="image-b">
            <img src={marioAndrianB} alt="mario and andrian" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
