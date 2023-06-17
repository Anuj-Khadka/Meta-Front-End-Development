import React from "react";
import greenSalad from "../assets/imgs/green salad.jpg";
import bruchetta from "../assets/imgs/bruchetta.svg";
import lemonDessert from "../assets/imgs/lemon dessert.jpg";

const Highlights = () => {
  return (
    <section className="highlights-section section">
      <div className="highlights-wrapper">
        <div className="highlights-header">
          <p className="highlights-title">THIS WEEKS SPECIAL!</p>
          <button className="highlights-btn lemon-btn">Order Online</button>
        </div>
        <div className="highlights-cards">
          <div className="highlights-card">
            <div className="card-img">
              <img src={greenSalad} alt="Green Salad" />
            </div>
            <div className="card-body">
              <div className="card-heading">
                <p className="card-title">Green Salad</p>
                <span className="card-price">$ 12.99</span>
              </div>
              <div className="card-desc">
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.{" "}
              </div>
              <div className="card-tert">Order a delivery</div>
            </div>
          </div>
          <div className="highlights-card">
            <div className="card-img">
              <img src={bruchetta} alt="" />
            </div>
            <div className="card-body">
              <div className="card-heading">
                <p className="card-title">Bruchetta</p>
                <span className="card-price">$ 5.99</span>
              </div>
              <div className="card-desc">
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.{" "}
              </div>
              <div className="card-tert">Order a delivery</div>
            </div>
          </div>
          <div className="highlights-card">
            <div className="card-img">
              <img src={lemonDessert} alt="" />
            </div>
            <div className="card-body">
              <div className="card-heading">
                <p className="card-title">Lemon Dessert</p>
                <span className="card-price">$ 5.00</span>
              </div>
              <div className="card-desc">
                This comes straight from grandma’s recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </div>
              <div className="card-tert">Order a delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
