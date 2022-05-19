import React from 'react'
import Footer from './components/footer/Footer'
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
    </div>
  )
}

export default App
