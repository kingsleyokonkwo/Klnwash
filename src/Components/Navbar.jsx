import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import '../index.css'
import brand from '../data/HomepageData/brand.png'
import cancel from '../data/HomepageData/cancel.png'
import menu from '../data/HomepageData/menu.png'
import google from '../data/HomepageData/playstore.png'
import apple from '../data/HomepageData/apple.png'

export default function Navbar() {

    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

  return (
    <div className='nav-container'>
        <NavLink to="/" className="brand">
            <img className="brand-logo" src={brand} alt="brand" />
        </NavLink>

        <div className={click ? "nav-links active" : "nav-links"}>
            <ul className={click ? "nav-pages active" : "nav-pages" }>

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

                <div className="download-store download-store-mobile">
                    <p className="download-now-mobile">DOWNLOAD NOW</p>
                    <img src={apple} alt="apple store" />
                    <img src={google} alt="google store" />
                </div>

                <ul className={click ? "footer-pages active" : "footer-pages footer-pages-mobile"}>
                        <li>
                        <NavLink to="/privacy policy">Privacy Policy</NavLink>
                        </li>

                        <li>
                            <NavLink to="/terms&conditions">Terms and Condition</NavLink>
                        </li>
                </ul>
            </ul>

            <div className="autenticate">
                <button className='nav-sign-in'>Sign In</button>
                <button className="get-klnwash">Get Klnwash</button>
            </div>
        </div>

        <div className="hamburger" onClick={handleClick}>
            {click ? (
            <img className='cancel' src={cancel} alt="cancel" />
            ) : (
            <img className='menu' src={menu} alt="menu" />
            )}
        </div>
    </div>
  )
}
