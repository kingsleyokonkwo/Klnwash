import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import '../index.css'
import brand from '../data/HomepageData/brand.png'

export default function Navbar() {

    const [click, setClick] = useState(false)

  return (
    <div className='nav-container'>
        <NavLink to="/" className="brand">
            <img src={brand} alt="brand" />
        </NavLink>

        <div className={click ? "nav-links active" : "nav-links"}>
            <ul className="nav-pages">
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>

                <li>
                    <NavLink to="/about">About Us</NavLink>
                </li>

                <li>
                    <NavLink to="/services">Our Services</NavLink>
                </li>

                <li>
                    <NavLink to="/contact">Contact Us</NavLink>
                </li>
            </ul>

            <div className="autenticate">
                <button className='nav-sign-in'>Sign In</button>
                <button className="get-klnwash">Get Klnwash</button>
            </div>
        </div>
    </div>
  )
}
