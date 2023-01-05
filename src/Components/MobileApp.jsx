import React from 'react'
import './MobileApp.css'
import launch from '../data/HomepageData/launch.png'
import star from '../data/HomepageData/star4.png'

export default function MobileApp() {
  return (
    <div className='mobile-container'>
        <div className="mobile-img">
            <img src={launch} alt="illustration" />
            <img className='mobile-star' src={star} alt="" />
        </div>
        <div className="mobile-texts">
            <p className="mobile-header">SECURED MOBILE APP</p>
            <div className="underline mobile-U"></div>
            <p className="mobile-content">
                Lorem ipsum dolor sit amet consectetur. Pharetra felis nascetur eget  libero at vel. Vel nisl donec varius ornare nam accumsan vitae. Tellus id risus mattis eleifend eget faucibus. Mi pellentesque 
                amet pharetra ornare. Id praesent nisl nisi sed nibh aliquet. 
                Est praesent felis enim feugiat orci sapien rutrum porttitor.
                Vestibulum non quis sollicitudin senectus
            </p>
            <button>Learm More</button>
        </div>
    </div>
  )
}
