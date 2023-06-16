import React from 'react'

const Nav = () => {
  return (
    <nav className='navbar'>
        <ul className="nav-items">
            <li className='nav-item'>
                <a href="#" className='nav-link'>Home</a>
            </li>
            <li className='nav-item'>
                <a href="#" className='nav-link'>About</a>
            </li>
            <li className='nav-item'>
                <a href="#" className='nav-link'>Menu</a>
            </li>
            <li className='nav-item'>
                <a href="#" className='nav-link'>Reservations</a>
            </li>
            <li className='nav-item'>
                <a href="#" className='nav-link'>Order Online</a>
            </li>
            <li className='nav-item'>
                <a href="#" className='nav-link'>Login</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav