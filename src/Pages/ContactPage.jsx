import React, {useEffect} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import GetStarted from '../Components/Getstarted/GetStarted'
import ContactHero from '../Components/ContactHero/ContactHero'

export default function ContactPage() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <div>
      <Navbar />
      <ContactHero />
      <GetStarted />
      <Footer />
    </div>
  )
}
