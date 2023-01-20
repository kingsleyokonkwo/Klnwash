import React from 'react'
import './MobileApp.css'
import launch from '../../data/HomepageData/launch.png'
import star from '../../data/HomepageData/star4.png'

export default function MobileApp() {
  return (
    <div className="mobile-outer">
      <div className="mobile-container">
        <div className="mobile-img">
          <img className="mobile-launch" src={launch} alt="illustration" />
          <img className="mobile-star" src={star} alt="" />
        </div>
        <div className="mobile-texts" data-aos="fade-left" data-aos-duration="1500">
          <p className="mobile-header">SECURED MOBILE APP</p>
          <div className="underline mobile-U"></div>
          <p className="mobile-content">
            The Kln Wash app has a built-in user protection feature and
            guarantees quick payment and prompt transfer of monies between users
            and laundromats. Any device can be used to conduct transactions
            securely and safely anywhere, at any time.
          </p>
          <button>Learm More</button>
        </div>
      </div>
    </div>
  );
}
