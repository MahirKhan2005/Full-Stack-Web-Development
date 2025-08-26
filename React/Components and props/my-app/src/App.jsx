import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Card from './components/Card'
const App = () => {
  return (
    <>
    <Navbar/>
    <Card name="Mahir" year="2nd"/>
    <Card name="Aisha" year="2nd"/>
   <Footer/>
    </>
  )
}

export default App
