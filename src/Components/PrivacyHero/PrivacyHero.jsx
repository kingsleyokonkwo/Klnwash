import React from 'react'
import './PrivacyHero.css'
import secured from '../../data/HomepageData/secured.png'
import ellipse from '../../data/HomepageData/ellipse.png'
import triangle from '../../data/HomepageData/triangle.png'
import rhombus from '../../data/HomepageData/rhombus.png'

export default function PrivacyHero() {
  return (
    <div className="PrivacyHero-outer">
      <div className='privacyhero-container'>
        <div className="privacyhero-texts">
            <p className="privacyhero-header">Privacy Policy</p>
            <p className="privacyhero-content">Lorem ipsum dolor sit amet consectetur.
                Lorem ipsum dolor sit amet consectetur.Lorem
                ipsum dolor sit amet consectetur.
            </p>
        </div>
        <div className="privacyhero-img">
            <img className='privacy-img' src={secured} alt="illustration" />
            <img className='privacy-ellipse' src={ellipse} alt="ellipse" />
            <img className='privacy-triangle' src={triangle} alt="triangle" />
            <img className='privacy-rhombus' src={rhombus} alt="rhombus" />
        </div>
      </div>
    </div>
  )
}
