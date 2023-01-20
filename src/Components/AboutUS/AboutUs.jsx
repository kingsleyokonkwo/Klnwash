import React from 'react'
import './AboutUs.css'
import meeting from '../../data/HomepageData/meeting.png'
import Partners from '../Partners/Partners'

export default function AboutUs() {
  return (
    <div className="AboutUs-outer">
      <div className="aboutUs">
        <Partners />
        <div className="about-us-container">
          <div className="about-img">
            <img src={meeting} alt="illustration" />
          </div>
          <div className="about-texts" data-aos="fade-up" data-aos-duration="1500">
            <p className="about-text-header">WHO WE ARE</p>
            <div className="underline"></div>
            <p className="about-text-main">
              Kln Wash is a new business that was founded in Nigeria as a
              limited liability company. A regular home pick-up and delivery
              service will be offered by the business. The business will have a
              facility for its activities.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
}
