import React from 'react'
import Navber from './components/Navber'
import Container from './components/Container'
import Banner from './components/Banner'
import New from './components/New'

const App = () => {
  return (
    <div className='bg-[#1e1e1e0f]'>
    <Container>
    <Navber/>
    <Banner/>
    <New/>
    </Container>
    </div>
  )
}

export default App
