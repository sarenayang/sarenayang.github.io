import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Funfacts from './components/MoreInfo/MoreInfo'
import './App.css'
import React from 'react'

function App() {

  return (
    <>
      <Navbar />
      <About />

      <hr></hr>

      <Funfacts />
    </>
  )
}

export default App
