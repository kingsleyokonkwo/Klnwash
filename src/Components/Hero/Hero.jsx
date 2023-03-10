import React from 'react'
import './Hero.css'
import video from '../../data/HomepageData/video-circle.png'
import hero from '../../data/HomepageData/hero-img.png'
import rhombus from '../../data/HomepageData/rhombus.png'
import rectangle from '../../data/HomepageData/hero-rectangle.png'
import star1 from '../../data/HomepageData/star-1.png'
import star2 from '../../data/HomepageData/star-2.png'
import star3 from '../../data/HomepageData/star-3.png'

export default function Hero() {
    return (
      <div className="herocontainer-outer">
        <div className="hero-container">
          <div className="hero-message">
            <p className="hero-message-header">
              Laundry done your way Delivered the next day Pickup and Delivery
              with Kln Wash
            </p>
            <p className="hero-message-header-mobile">
              Lorem ipsum dolor sit amet consectetur.
            </p>
            <p className="message-content">
              We are a self-managed network built to comprehend client wants and
              work in tandem with numerous laundry businesses to satisfy these
              needs.
            </p>
            <div className="hero-ad">
              <button>Learn More</button>
              <div className="hero-video">
                <img src={video} alt="video player" />
                <p>Watch Video</p>
              </div>
            </div>
            <img className="rhombus" src={rhombus} alt="rhombus shape" />
          </div>
          <div className="hero-illustrations">
            <img className="hero-img" src={hero} alt="hero image" />
            {/* <img className='green-rect' src={rectangle} alt="green rectangle" /> */}
            <img className="star1" src={star1} alt="star" />
            <img className="star2" src={star2} alt="star" />
            <img className="star3" src={star3} alt="star" />
          </div>
        </div>
      </div>
    );
}
