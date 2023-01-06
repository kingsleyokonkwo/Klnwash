import React from 'react'
import Background from '../Components/Background'
import Footer from '../Components/Footer'
import GetStarted from '../Components/GetStarted'
import Navbar from '../Components/Navbar'
import TermsHero from '../Components/TermsHero'

export default function TermsPage() {
  return (
    <div>
      <Navbar />
      <TermsHero />
      <Background />
      <GetStarted />
      <Footer />
    </div>
  )
}
