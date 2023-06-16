import React from "react";
import restaurantFood from "../assets/imgs/restauranfood.jpg"

const Hero = () => {
  return (
    <section className="hero-section section">
      <div className="hero-content">
        <h1 className="hero-title">Little Lemon</h1>
        <h2 className="hero-subtitle">Chicago</h2>
        <p className="hero-desc">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with modern twists.
        </p>
        <button className="hero-btn lemon-btn">Reserve a Table</button>
      </div>
      <div className="hero-image">
        <img src={restaurantFood} alt="restaurant-food" />
      </div>
    </section>
  );
};

export default Hero;
