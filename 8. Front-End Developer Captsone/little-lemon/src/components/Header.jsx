import React from 'react'
import logo from "../assets/imgs/Logo.svg"
import Nav from './Nav'
import "../assets/css/Header.css"

const Header = () => {
  return (
    <header className='header-section section'>
        <div className='brand-img-container'>
            <img className="brand-logo" src={logo} alt="little_lemon" />
        </div>
        <Nav />
    </header>
  )
}

export default Header