import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import GetStarted from '../Components/GetStarted'
import AboutHero from '../Components/AboutHero'
import Value from '../Components/Value'

export default function AboutPage() {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <Value />
      <GetStarted />
      <Footer />
    </div>
  )
}
