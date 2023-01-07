import React from 'react'
import "./Value.css"
import eye from '../data/AboutpageData/eye.png'
import receipt from '../data/AboutpageData/receipt.png'
import founder1 from '../data/AboutpageData/founder1.png'
import founder2 from '../data/AboutpageData/founder2.png'

export default function Value() {
    return (
        <div className='value-container'>
            <p className="value-header">OUR UNIQUE VALUE</p>
            <div className="underline value-U"></div>
            <div className="value-goals">
                <div className="value-goal">
                    <div className="goal-icon">
                        <img src={receipt} alt="receipt" />
                    </div>
                    <p className="value-mission-title">Our Mission</p>
                    <p className="value-mission">
                        Lorem ipsum dolor sit amet consectetur. Nec males
                        uada egestas magna nec. Egestas sem sed ut justo
                        suspendisse. Vestibulum nec proin felis vitae tortor
                        orci mauris lacinia porttitor. Est enim consequat leo
                        imperdiet pulvinar rhoncus elementum. 
                    </p>
                </div>

                <div className="value-goal">
                    <div className="goal-icon">
                        <img src={eye} alt="eye logo" />
                    </div>
                    <p className="value-mission-title">Our Vision</p>
                    <p className="value-mission">
                        Lorem ipsum dolor sit amet consectetur. Nec males
                        uada egestas magna nec. Egestas sem sed ut justo
                        suspendisse. Vestibulum nec proin felis vitae tortor
                        orci mauris lacinia porttitor. Est enim consequat leo
                        imperdiet pulvinar rhoncus elementum. 
                    </p>
                </div>
            </div>

            <p className="founder-header">MEET OUR FOUNDERS</p>
            <div className="underline founder-U"></div>
            <div className="founders">
                <div className="founder">
                    <img className='founder-img' src={founder1} alt="founder" />
                    <p className="founder-name">Edem Victor</p>
                    <p className="founder-position">CO-FOUNDER & CEO</p>
                </div>

                <div className="founder">
                    <img className='founder-img' src={founder2} alt="founder" />
                    <p className="founder-name">Jessica Ruth</p>
                    <p className="founder-position">CO-FOUNDER & CTO</p>
                </div>
            </div>
        </div>
    )
}
