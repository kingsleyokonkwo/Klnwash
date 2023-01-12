import React from 'react'
import './TermsHero.css'
import terms from '../../data/AboutpageData/terms.png'
import ellipse from '../../data/AboutpageData/ellipse.png'
import triangle from '../../data/HomepageData/triangle.png'

export default function TermsHero() {
  return (
    <div className="termshero-outer">
      <div className='termshero-container'>
        <div className="termshero-texts">
            <p className="termshero-header">Terms & Condition</p>
            <p className="termshero-content">Lorem ipsum dolor sit amet consectetur.
                Lorem ipsum dolor sit amet consectetur.Lorem
                ipsum dolor sit amet consectetur.
            </p>
        </div>
        <div className="termshero-img">
            <img className='termshero-image' src={terms} alt="illustration" />
            <img className='termshero-triangle' src={triangle} alt="triangle" />
            <img className='transhero-ellipse' src={ellipse} alt="ellipse" />
        </div>
      </div>
    </div>
  )
}
