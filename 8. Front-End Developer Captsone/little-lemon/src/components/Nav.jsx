import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='navbar'>
        <ul className="nav-items">
            <li className='nav-item'>
                <NavLink to="/" className='nav-link'>Home</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to="/about" className='nav-link'>About</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to="/menu" className='nav-link'>Menu</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to="/reservations" className='nav-link'>Reservations</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to="/order-online" className='nav-link'>Order Online</NavLink>
            </li>
            <li className='nav-item'>
                <NavLink to="/login" className='nav-link'>Login</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Nav