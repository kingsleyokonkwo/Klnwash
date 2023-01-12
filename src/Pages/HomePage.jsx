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
