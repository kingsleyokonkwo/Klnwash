import React, {useEffect} from 'react'
import Background from '../Components/Background/Background'
import Footer from '../Components/Footer/Footer'
import GetStarted from '../Components/Getstarted/GetStarted'
import Navbar from '../Components/Navbar/Navbar'
import PrivacyHero from '../Components/PrivacyHero/PrivacyHero'

export default function PrivacyPage() {

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])

    return (
        <div>
            <Navbar />
            <PrivacyHero />
            <Background />
            <GetStarted />
            <Footer />
        </div>
    )
}
