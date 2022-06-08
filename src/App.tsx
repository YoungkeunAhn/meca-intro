import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import Notice from './pages/Notice'
import Portfolio from './pages/Portfolio'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='portfolio' element={<Portfolio />} />
      <Route path='notice' element={<Notice />} />
    </Routes>
  )
}

export default App
