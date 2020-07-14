import React from 'react'
import './navbar.style.scss'
import logo from '../../logo.png'

const Navbar = () => {
    return (
        <nav className='navbar'>
          <img 
            src={logo}
            alt='city tours logo'
          />  
        <ul className="navlinks">
            <li><a href="/" className='nav-link'>Home</a></li>
            <li><a href="/" className='nav-link'>About</a></li>
            <li><a href="/" className='nav-link'>Tours</a></li>
        </ul>

        </nav>
    )
}

export default Navbar