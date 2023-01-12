import React from 'react'
import './Partners.css'
import lagosian from '../../data/HomepageData/lagosian.png'
import garmspot from '../../data/HomepageData/garmspot.png'
import nexus from '../../data/HomepageData/nexus.png'
import piggyvest from '../../data/HomepageData/piggyvest.png'
import pmobile from '../../data/HomepageData/P-mobile.png'
import Nmobile from '../../data/HomepageData/N-mobile.png'
import Lmobile from '../../data/HomepageData/L-mobile.png'

export default function Partners() {
  return (
    <div className="partner-outer">
      <div className='partners-container'>
        <p className="partner-header">OUR PARTNERS</p>
        <div className="underline partner-U"></div>
        <div className="partners">
          <img className='partner1' src={lagosian} alt="partner" />
          <img className='partner2' src={garmspot} alt="partner" />
          <img className='partner3' src={nexus} alt="partner" />
          <img className='partner4' src={piggyvest} alt="partner" />
        </div>

        <div className="partners-mobile">
          <img className='N-mobile' src={Nmobile} alt="partner" />
          <img className='p-mobile' src={pmobile} alt="partner" />
          <img className='l-mobile' src={Lmobile} alt="partner" />
        </div>
      </div>
    </div>
  )
}
