import React from 'react'
import ScrollTopBtn from '../common/scroll-top-btn/ScrollTopBtn'
import Footer from '../components/footer/Footer'
import NavBar from '../components/nav/NavBar'
import AboutUs from '../components/sections/AboutUs'
import BroadcasterPrograms from '../components/sections/BroadcasterPrograms'
import Contact from '../components/sections/Contact'
import Entertainments from '../components/sections/Entertainments'
import MainSection from '../components/sections/MainSection'
import Portfoilo from '../components/sections/Portfoilo'
import Service from '../components/sections/Service'

function Main() {
  return (
    <div>
      <MainSection />
      <Service />
      <Portfoilo />
      <AboutUs />
      <BroadcasterPrograms />
      <Entertainments />
      <Contact />
      <Footer />
      <NavBar />
      <ScrollTopBtn />
    </div>
  )
}

export default Main
