import React, {useEffect} from 'react'
import Footer from '../Components/Footer/Footer'
import GetStarted from '../Components/Getstarted/GetStarted'
import Navbar from '../Components/Navbar/Navbar'
import TermsDetails from '../Components/TermsDetails/TermsDetails'
import TermsHero from '../Components/TermsHero/TermsHero'

export default function TermsPage() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <div>
      <Navbar />
      <TermsHero />
      <TermsDetails />
      <GetStarted />
      <Footer />
    </div>
  )
}
