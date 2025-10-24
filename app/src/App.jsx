import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'  
import Halo from './components/halo.jsx'
import About from './components/about.jsx' 
import Footer from './components/footer.jsx'

function App() {

  return (
    <>
      <Header />
      <Halo/>
      <About />
      <Footer />
    </>
  )
}

export default App
