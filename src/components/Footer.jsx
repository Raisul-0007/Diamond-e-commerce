import React from 'react'
import Container from './Container'

const Footer = () => {
  return (
    <div className='bg-[#F5F5F5] py-30'>
      <Container>
        <div className="">
        <div className="">
          <p className='text-[#1e1e1e5f] py-10'>info</p>
        <div className="">
          <ul className='leading-6'>
            <li><a className="text-[#767676]" href="#">Pricing </a></li>
            <li><a className="text-[#767676]" href="#">About</a></li>
            <li><a className="text-[#767676]" href="#">Contacts</a></li>
          </ul>
        </div>
        </div>
        <div className="py-10">
          <p className='text-[#1e1e1e5f] py-10'>Languages</p>
        <div className="">
          <ul className='leading-6'>
            <li><a className="text-[#767676]" href="#">Eng </a></li>
            <li><a className="text-[#767676]" href="#">Esp</a></li>
            <li><a className="text-[#767676]" href="#">Sve</a></li>
          </ul>
        </div>
        </div>
      </div>
      <div className=""></div>
      </Container>
    </div>
  )
}

export default Footer
