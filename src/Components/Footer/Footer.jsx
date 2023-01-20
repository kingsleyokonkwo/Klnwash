import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
import google from '../../data/HomepageData/playstore.png'
import apple from '../../data/HomepageData/apple.png'
import brand from '../../data/HomepageData/brand.png'
import footer from '../../data/HomepageData/footer.png'

export default function Footer() {

    const [click, setClick] = useState(false)

    return (
      <div className="footer-outer">
        <div
          className="footer-container"
          style={{
            backgroundImage: `url(${footer})`,
            backgroundSize: "contain",
            backgroundPosition: "left bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="footer-top">
            <div className="footer-brand">
              <img src={brand} alt="brand" />
              <p className="footer-brand-text">
                Kln Wash is a network of laundry services connected through a
                web application. This laundromats are completely run by
                professionals that have been verified by our supervisors.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-quick-links">
                <p className="footer-header">QUICK LINK</p>
                <ul className={click ? "footer-pages active" : "footer-pages"}>
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
              </div>
              <div className="footer-legal">
                <p className="footer-header">LEGAL</p>
                <ul className={click ? "footer-pages active" : "footer-pages"}>
                  <li>
                    <NavLink to="/privacy policy">Privacy Policy</NavLink>
                  </li>

                  <li>
                    <NavLink to="/terms&conditions">
                      Terms and Condition
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-download">
              <p className="footer-header">DOWNLOAD NOW</p>
              <div className="download-store">
                <img src={apple} alt="apple store" />
                <img src={google} alt="google store" />
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>2022 klnwash all rights reserved.</p>
          </div>
        </div>
      </div>
    );
}
