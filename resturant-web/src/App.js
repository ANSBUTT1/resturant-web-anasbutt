import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Dishes from './components/Dishes'
import About from './components/About'
import Menu from './components/Menu'
import Review from './components/Review'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <main className='overflow-hidden'>
        <div id="home">
          <Home />
        </div>
        <div id='dishes'>
          <Dishes/>
        </div>
        <div id='about'>
          <About/>
        </div>
        <div id='menu'>
          <Menu/>
        </div>
        <div id='reviews'>
          <Review/>
        </div>
      </main>
      <Footer/>
    </>
  )
}

export default App