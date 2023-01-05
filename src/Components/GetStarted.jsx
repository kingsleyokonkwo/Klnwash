import React from 'react'
import logo from '../data/HomepageData/logo.png'
import register from '../data/HomepageData/register.png'
import semi from '../data/HomepageData/semi.png'
import './GetStarted.css'

export default function GetStarted() {
  return (
    <div className='getstarted-container' >
        <div className="getstarted-inner"  style={{ backgroundImage: `url(${semi})`, backgroundSize: "contain", backgroundPosition: "right bottom", backgroundRepeat: "no-repeat"}}>
            <div className="getstarted-texts">
                <p className="getstarted-title">Ready to get started?</p>
                <p className="getstarted-content">Click the link below to download the app.</p>
                <button className='getstarted-btn'>Get Klnwash</button>
            </div>
            <div className="getstarted-img">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <img className='getstarted-demo' src={register} alt="register illustration" />
            </div>
        </div>
    </div>
  )
}
