import React from 'react'
import './Escrow.css'
import secured from '../data/HomepageData/secured.png'
import rhombus from '../data/HomepageData/rhombus.png'
import triangle from '../data/HomepageData/triangle.png'

export default function Escrow() {
  return (
    <div className='escrow-container'>
        <div className="escrow-service">
            <p className="escrow-header">SECURED ESCROW SERVICE</p>
            <div className="underline escrow-U"></div>
            <p className="escrow-content">
                Lorem ipsum dolor sit amet consectetur. Pharetra felis nascetur eget  libero at vel. Vel nisl donec varius ornare nam accumsan vitae. Tellus id risus mattis eleifend eget faucibus. Mi pellentesque 
                amet pharetra ornare. Id praesent nisl nisi sed nibh aliquet. 
                Est praesent felis enim feugiat orci sapien rutrum porttitor.
                Vestibulum non quis sollicitudin senectus
            </p>
            <button>Learn More</button>
        </div>
        <div className="escrow-img">
            <img className='privacy-img' src={secured} alt="illustration" />
            <img className='escrow-rhombus' src={rhombus} alt="illustration" />
            <img className='escrow-triangle' src={triangle} alt="illustration" />
        </div>
    </div>
  )
}
