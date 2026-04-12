import React from 'react'
import Navber from './components/Navber'
import Container from './components/Container'
import Banner from './components/Banner'
import New from './components/New'
import Old from './components/Old'

const App = () => {
  return (
    <div className='bg-[#d7d7d766]'>
    <Container>
    <Navber/>
    <Banner/>
    <New/>
    <Old/>
    </Container>
    </div>
  )
}

export default App
