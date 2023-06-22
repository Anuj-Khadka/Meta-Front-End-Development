import React from "react";
import ratingStar from "../../../assets/imgs/rating-star.png";
import johnDoe from "../../../assets/imgs/John Doe.jpg";
import Margreta from "../../../assets/imgs/Margreta.jpg";
import xinJong from "../../../assets/imgs/Xin Jong.jpg";

const Testimonials = () => {
  return (
    <section className="testimonials-section section">
      <h3 className="testimonials-title">Testimonials</h3>
      <div className="testimonials-cards">
        <div className="rating-card">
          <div className="rating">
            <span className="rating-star-box">
              <img src={ratingStar} alt="rating-star" />
            </span>
            <span className="rating-star-box">
              <img src={ratingStar} alt="rating-star" />
            </span>
            <span className="rating-star-box">
              <img src={ratingStar} alt="rating-star" />
            </span>
            <span className="rating-star-box">
              <img src={ratingStar} alt="rating-star" />
            </span>
            {/* <span className="rating-star-box">
              <img src={ratingStar} alt="rating-star" />
            </span> */}
          </div>
          <div className="rater-info">
            <div className="rater-img">
              <img src={johnDoe} alt="John Doe" />
            </div>
            <p className="rater-name">John Doe</p>
          </div>
          <p className="rating-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum in
            quos explicabo mollitia facere perferendis.
          </p>
        </div>
        <div className="rating-card">
          <div className="rating">
            <span className="rating-star-box">
              <img src={ratingStar} alt="rating-star" />
            </span>
            <span className="rating-star-box">
              <img src={ratingStar} alt="rating-star" />
            </span>
            <span className="rating-star-box">
              <img src={ratingStar} alt="rating-star" />
            </span>
            <span className="rating-star-box">
              <img src={ratingStar} alt="rating-star" />
            </span>
            <span className="rating-star-box">
              <img src={ratingStar} alt="rating-star" />
            </span>
          </div>
          <div className="rater-info">
            <div className="rater-img">
              <img src={Margreta} alt="John Doe" />
            </div>
            <p className="rater-name">John Doe</p>
          </div>
          <p className="rating-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum in
            quos explicabo mollitia facere perferendis.
          </p>
        </div>
        <div className="rating-card">
          <div className="rating">
            <span className="rating-star-box">
              <img src={ratingStar} alt="rating-star" />
            </span>
            <span className="rating-star-box">
              <img src={ratingStar} alt="rating-star" />
            </span>
            <span className="rating-star-box">
              <img src={ratingStar} alt="rating-star" />
            </span>
            <span className="rating-star-box">
              <img src={ratingStar} alt="rating-star" />
            </span>
            <span className="rating-star-box">
              <img src={ratingStar} alt="rating-star" />
            </span>
          </div>
          <div className="rater-info">
            <div className="rater-img">
              <img src={xinJong} alt="John Doe" />
            </div>
            <p className="rater-name">John Doe</p>
          </div>
          <p className="rating-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum in
            quos explicabo mollitia facere perferendis.
          </p>
        </div>
        {/* <div className="rating-card">
          <div className="rating">
            <span className="rating-star-box">
              <img src={ratingStar} alt="rating-star" />
            </span>
            <span className="rating-star-box">
              <img src={ratingStar} alt="rating-star" />
            </span>
            <span className="rating-star-box">
              <img src={ratingStar} alt="rating-star" />
            </span>
            <span className="rating-star-box">
              <img src={ratingStar} alt="rating-star" />
            </span>
            <span className="rating-star-box">
              <img src={ratingStar} alt="rating-star" />
            </span>
          </div>
          <div className="rater-info">
            <div className="rater-img">
              <img src={johnDoe} alt="John Doe" />
            </div>
            <p className="rater-name">John Doe</p>
          </div>
          <p className="rating-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            tenetur molestiae nesciunt voluptate, molestias voluptatibus.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;
