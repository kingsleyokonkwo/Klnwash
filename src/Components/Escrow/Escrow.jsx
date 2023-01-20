import React from 'react'
import './Escrow.css'
import secured from '../../data/HomepageData/secured.png'
import rhombus from '../../data/HomepageData/rhombus.png'
import triangle from '../../data/HomepageData/triangle.png'

export default function Escrow() {
  return (
    <div className="escrow-outer">
      <div className="escrow-container">
        <div className="escrow-service" data-aos="fade-right" data-aos-duration="1500">
          <p className="escrow-header">SECURED ESCROW SERVICE</p>
          <div className="underline escrow-U"></div>
          <p className="escrow-content">
            The user experience is enhanced by the Kln Wash app's well-designed
            UI, which is oriented on usability and functionality. The security
            measures in the app prevent malware from being installed into apps
            and onto devices where it can access data and steal screen lock
            passcodes, intercept sensitive information being transmitted over
            networks, steal customer data for identity theft or fraud, or seize
            private corporate assets.
          </p>
          <button>Learn More</button>
        </div>
        <div className="escrow-img">
          <img
            className=" privacy-img-escrow"
            src={secured}
            alt="illustration"
          />
          <img className="escrow-rhombus" src={rhombus} alt="illustration" />
          <img className="escrow-triangle" src={triangle} alt="illustration" />
        </div>
      </div>
    </div>
  );
}
