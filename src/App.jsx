import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'  
import Halo from './components/halo.jsx'
import About from './components/about.jsx' 
import Expertise from './components/expertise.jsx'
import Solutions from './components/solutions.jsx'
import Contact from './components/contact.jsx'
import Footer from './components/footer.jsx'

function App() {

  return (
    <>
      <Header />
      <Halo/>
      <About />
      <Expertise />
      <Solutions />
      <Contact />
      <Footer />
    </>
  )
}

export default App
