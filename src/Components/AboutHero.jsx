import React from 'react'
import './AboutHero.css'
import about from '../data/AboutpageData/abt-grp.png'
import ellipse from '../data/AboutpageData/ellipse.png'
import meeting from '../data/HomepageData/meeting.png'
import star from '../data/HomepageData/star4.png'

export default function AboutHero() {
    return (
        <div >
            <div className='abouthero-container'>
                <div className="abouthero-texts">
                    <p className="about-hero-title">About Klnwash</p>
                    <p className="abouthero-content">
                        Lorem ipsum dolor sit amet consectetur.
                        Lorem ipsum dolor sit amet consectetur.Lorem
                        ipsum dolor sit amet consectetur.
                    </p>
                    <button>Get Klnwash</button>
                </div>
                <div className="abouthero-img">
                    <img className='abt-hero-img' src={about} alt="illustration" />
                    <img className='abt-hero-ellipse' src={ellipse} alt="ellipse" />
                </div>
            </div>

            <div className="about-proper">
                <p className="about-proper-header">WE’RE HERE BECAUSE OF YOU</p>
                <div className="underline about-proper-U"></div>
                <div className='about-proper-container'>
                    <div className="about-img about-proper-img">
                        <img src={meeting} alt="illustration" />
                        <img className='about-proper-star' src={star} alt="star" />
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
                    
                    </div>
                </div>
            </div>
        </div>
    )
}
