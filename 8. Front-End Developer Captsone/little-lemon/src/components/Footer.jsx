import React from "react";
import logo from "../assets/imgs/Logo.svg";

import "../App.css";

const Footer = () => {
  return (
    <footer className="footer-section section">
      <div className="brand-img-container">
        <img className="brand-logo" src={logo} alt="little_lemon" />
      </div>
      <div className="footer-links">
        <ul className="doormat-links">
          <h3>Doormat Links</h3>
          <li className="nav-item">
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#menu" className="nav-link">
              Menu
            </a>
          </li>
          <li className="nav-item">
            <a href="#reservations" className="nav-link">
              Reservations
            </a>
          </li>
          <li className="nav-item">
            <a href="#order-online" className="nav-link">
              Order Online
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Login
            </a>
          </li>
        </ul>
        <ul className="contact-links">
          <h3>Contacts</h3>
          <li>
            <a href="">Chicago, USA</a>
          </li>
          <li>
            <a href="tel:9876543210">9874562310</a>
          </li>
          <li>
            <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
          </li>
        </ul>
        <ul className="social-links">
          <h3>Social Medias</h3>
          <li>
            <a href="https://linkedin.com">Linkedin</a>
          </li>
          <li>
            <a href="https://facebook.com">Facebook</a>
          </li>
          <li>
            <a href="https://instagram.com">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
