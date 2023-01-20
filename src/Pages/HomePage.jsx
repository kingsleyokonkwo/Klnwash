<<<<<<< Updated upstream
import React,{useEffect} from 'react'
import AboutUs from '../Components/AboutUS/AboutUs'
import Escrow from '../Components/Escrow/Escrow'
import FAQ from '../Components/Faq/FAQ'
import Footer from '../Components/Footer/Footer'
import GetStarted from '../Components/Getstarted/GetStarted'
import Hero from '../Components/Hero/Hero'
import MobileApp from '../Components/Mobile/MobileApp'
import Navbar from '../Components/Navbar/Navbar'


export default function HomePage() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

=======
import React from 'react'
import { useEffect } from 'react';
import AboutUs from '../Components/AboutUs'
import Escrow from '../Components/Escrow'
import FAQ from '../Components/FAQ'
import Footer from '../Components/Footer'
import GetStarted from '../Components/GetStarted'
import Hero from '../Components/Hero'
import MobileApp from '../Components/MobileApp'
import Navbar from '../Components/Navbar'


export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
>>>>>>> Stashed changes
  return (
    <div>
      <div className='inner-background'>
        <Navbar />
        <Hero />
      </div>
      <AboutUs />
      <Escrow />
      <MobileApp />
      <FAQ />
      <GetStarted />
      <Footer />
    </div>
  )
}
