import React, { useState } from 'react'
import './FAQ.css'
import { FaAngleUp, FaAngleDown } from 'react-icons/fa'
import question from '../../data/HomepageData/faq.png'
import triangle from '../../data/HomepageData/triangle.png'

export default function FAQ() {

    const [faq, setFaq] = useState('firstQuestion')

    return (
        <div className="faq-outer">
            <div className='Faq-container'>
                <div className="Faq-proper">
                    <p className="faq-title">FAQ</p>
                    <div className="underline faq-U"></div>
                    <div className="faqs">
                        <div className="question">
                            <div className={`faq-header ${faq === 'firstQuestion' ? "active" : ""}`} onClick={() => { setFaq('firstQuestion') }}>
                                {faq === 'firstQuestion' ? <FaAngleDown style={{ height: "24", width: "24", color: "#fff", fontWeight: "normal" }} /> : <FaAngleUp style={{ height: "24", width: "24", color: "#fff", fontWeight: "normal" }} />}

                                <p>WHAT IS KLNWASH ALL ABOUT?</p>
                            </div>
                            <div className="answer">
                                {faq === 'firstQuestion' && <p>Lorem ipsum dolor sit amet consectetur. At ut dictumst
                                    magna rhoncus purus placerat cursus elit accumsan.
                                    Ut id sed mauris turpis aliquam ut. Diam elementum
                                    congue sit odio aenean vel ut. Metus vulputate morbi
                                    dui elementum. Sit sit vestibulum aliquam aliquet
                                    pellentesque. Accumsan posuere nascetur placerat
                                    viverra tincidunt augue justo montes tristique. Sagittis</p>}

                            </div>
                        </div>

                        <div className="question">
                            <div className={`faq-header ${faq === 'secondQuestion' ? "active" : ""}`} onClick={() => { setFaq('secondQuestion') }}>
                                {faq === 'secondQuestion' ? <FaAngleDown style={{ height: "24", width: "24", color: "#fff", fontWeight: "normal" }} /> : <FaAngleUp style={{ height: "24", width: "24", color: "#fff", fontWeight: "normal" }} />}
                                <p>HOW DO I GET STARTED?</p>
                            </div>
                            <div className="answer">
                                {faq === 'secondQuestion' && <p>Lorem ipsum dolor sit amet consectetur. At ut dictumst
                                    magna rhoncus purus placerat cursus elit accumsan.
                                    Ut id sed mauris turpis aliquam ut. Diam elementum
                                    congue sit odio aenean vel ut. Metus vulputate morbi
                                    dui elementum. Sit sit vestibulum aliquam aliquet
                                    pellentesque. Accumsan posuere nascetur placerat
                                    viverra tincidunt augue justo montes tristique. Sagittis</p>}
                            </div>
                        </div>

                        <div className="question">
                            <div className={`faq-header ${faq === 'thirdQuestion' ? "active" : ""}`} onClick={() => { setFaq('thirdQuestion') }}>
                                {faq === 'thirdQuestion' ? <FaAngleDown style={{ height: "24", width: "24", color: "#fff", fontWeight: "300" }} /> : <FaAngleUp style={{ height: "24", width: "24", color: "#fff", fontWeight: "normal" }} />}
                                <p>IS KLNWASH REGISTERED?</p>
                            </div>
                            <div className="answer">
                                {faq === 'thirdQuestion' && <p>Lorem ipsum dolor sit amet consectetur. At ut dictumst
                                    magna rhoncus purus placerat cursus elit accumsan.
                                    Ut id sed mauris turpis aliquam ut. Diam elementum
                                    congue sit odio aenean vel ut. Metus vulputate morbi
                                    dui elementum. Sit sit vestibulum aliquam aliquet
                                    pellentesque. Accumsan posuere nascetur placerat
                                    viverra tincidunt augue justo montes tristique. Sagittis</p>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="faq-img">
                    <img className='question-img' src={question} alt="illustration" />
                    <img className='faq-triangle' src={triangle} alt="icon" />
                </div>
            </div>
        </div>
    )
}
