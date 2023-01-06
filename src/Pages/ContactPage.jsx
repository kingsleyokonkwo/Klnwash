import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import GetStarted from '../Components/GetStarted'
import ContactHero from '../Components/ContactHero'

export default function ContactPage() {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <GetStarted />
      <Footer />
    </div>
  )
}
