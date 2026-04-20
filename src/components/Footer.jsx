import React from 'react'
import Container from './Container'
import logo from "../assets/logo.png"
const Footer = () => {
  return (
    <div className='bg-[#F5F5F5] py-30'>
      <Container className="flex">
        <div className="w-1/2">
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
      <div className="w-1/2 ">
       <p className='py-20 text-[#7676765f]'>Technologies</p>
      <div className="flex items-center gap-20">
        <div className="relative">
          <h2 className='text-7xl text-[#76767612]'>VR
            <span><img className='absolute top-5 left-0' src={logo} alt="" /></span>
          </h2>
          <h2 className='text-7xl'>XIV</h2>
        <h2 className='text-7xl leading-20'>XQ</h2>
        </div>
        <div className="">
          <p className='text-[#7676765f]'>Near-field communication </p>
        </div>
        </div>
      </div>
      </Container>
    </div>
  )
}

export default Footer
