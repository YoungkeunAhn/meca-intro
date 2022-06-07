import React from 'react'
import ScrollTopBtn from './common/scroll-top-btn/ScrollTopBtn'
import Footer from './components/footer/Footer'
import NavMenu from './components/nav/NavMenu'
import AboutUs from './components/sections/AboutUs'
import BroadcaterPrograms from './components/sections/BroadcaterPrograms'
import Contact from './components/sections/Contact'
import Entertainments from './components/sections/Entertainments'
import MainSection from './components/sections/MainSection'
import Portfoilo from './components/sections/Portfoilo'
import Service from './components/sections/Service'

function App() {
  return (
    <div>
      <MainSection />
      <Service />
      <Portfoilo />
      <AboutUs />
      <BroadcaterPrograms />
      <Entertainments />
      <Contact />
      <Footer />
      <NavMenu />
      <ScrollTopBtn />
    </div>
  )
}

export default App
