import React, {useEffect} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import GetStarted from '../Components/Getstarted/GetStarted'
import AboutHero from '../Components/AboutHero/AboutHero'
import Value from '../Components/Value/Value'

export default function AboutPage() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

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
