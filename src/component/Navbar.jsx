import React from 'react'
import './Navbar.css'
import logoESC from '../assets/Logo.png'

const Navbar = () => {
    return (
    <nav className="navbar">
        {/* 1. Logo CLB */}
        <div className="navbar-logo">
            <img src={logoESC} alt="Logo ESC" />
        </div>

        {/* 2. Danh sách các link (Menu) */}
        <ul className="navbar-links">
            <li><a href="#" data-text="Home">Home</a></li>
            <li><a href="#" data-text="About">About</a></li>
            <li><a href="#" data-text="Season">Season</a></li>
            <li><a href="#" data-text="Partner">Partner</a></li>
            <li><a href="#" data-text="Contact">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navbar