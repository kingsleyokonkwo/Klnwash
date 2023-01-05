import React from 'react'
import AboutUs from '../Components/AboutUs'
import Escrow from '../Components/Escrow'
import FAQ from '../Components/FAQ'
import Footer from '../Components/Footer'
import GetStarted from '../Components/GetStarted'
import Hero from '../Components/Hero'
import MobileApp from '../Components/MobileApp'
import Navbar from '../Components/Navbar'


export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Escrow />
      <MobileApp />
      <FAQ />
      <GetStarted />
      <Footer />
    </div>
  )
}
