import React from 'react'
import Background from '../Components/Background'
import Footer from '../Components/Footer'
import GetStarted from '../Components/GetStarted'
import Navbar from '../Components/Navbar'
import PrivacyHero from '../Components/PrivacyHero'

export default function PrivacyPage() {
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
