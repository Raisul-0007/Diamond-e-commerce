import React from 'react'
import Navber from './components/Navber'
import Banner from './components/Banner'
import New from './components/New'
import Old from './components/Old'
import Approach from './components/Approach'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-[#d7d7d766]'>
    <Navber/>
    <Banner/>
    <New/>
    <Old/>
    <Approach/>
    <Footer/>
    </div>
  )
}

export default App
