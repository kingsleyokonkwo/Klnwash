import React, {useEffect} from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

export default function ServicePage() {

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  )
}
