import React, {useEffect} from 'react'
import Background from '../Components/Background/Background'
import Footer from '../Components/Footer/Footer'
import GetStarted from '../Components/Getstarted/GetStarted'
import Navbar from '../Components/Navbar/Navbar'
import TermsHero from '../Components/TermsHero/TermsHero'

export default function TermsPage() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

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
