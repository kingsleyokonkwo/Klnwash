import React from 'react'
import './ContactHero.css'
import { TfiAngleRight } from "react-icons/tfi"
import contact from '../../data/AboutpageData/contact.png'
import ellipse from '../../data/AboutpageData/ellipse.png'

export default function ContactHero() {
  return (
    <div className="ContactHero-outer">
      <div className='contacthero-container'>
        <div className="contacthero-texts">
            <p className="contacthero-header">Contact Us</p>
            <p className="contacthero-content">Lorem ipsum dolor sit amet consectetur.
                Lorem ipsum dolor sit amet consectetur.Lorem
                ipsum dolor sit amet consectetur.
            </p>
            <p className="contact">Call: 07061040682 <TfiAngleRight/></p>
            <p className="contact">Email: support@klnwash.com <TfiAngleRight/></p>
        </div>
        <div className="contacthero-img">
            <img className='contact-img' src={contact} alt="illustracion" />
            <img className='contact-ellipse' src={ellipse} alt="ellipse" />
        </div>
      </div>
    </div>
  )
}
