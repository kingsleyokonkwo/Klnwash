import React from 'react'
import './AboutUs.css'
import meeting from '../../data/HomepageData/meeting.png'
import Partners from '../Partners/Partners'

export default function AboutUs() {
  return (
    <div className="AboutUs-outer">
      <div className="aboutUs">
        <Partners />
        <div className='about-us-container'>
          <div className="about-img">
            <img src={meeting} alt="illustration" />
          </div>
          <div className="about-texts">
            <p className="about-text-header">WHO WE ARE</p>
            <div className="underline"></div>
            <p className="about-text-main">
              Lorem ipsum dolor sit amet consectetur. Pharetra felis nascetur eget  libero at vel. Vel nisl donec varius ornare nam accumsan vitae. Tellus id risus mattis eleifend eget faucibus. Mi pellentesque
              amet pharetra ornare. Id praesent nisl nisi sed nibh aliquet.
              Est praesent felis enim feugiat orci sapien rutrum porttitor.
              Vestibulum non quis sollicitudin senectus
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}
