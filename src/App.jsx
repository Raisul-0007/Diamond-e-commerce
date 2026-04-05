import React from 'react'
import Navber from './components/Navber'
import Container from './components/Container'
import Banner from './components/Banner'

const App = () => {
  return (
    <div className='bg-[#1e1e1e0f]'>
    <Container>
    <Navber/>
    <Banner/>
    </Container>
    </div>
  )
}

export default App
