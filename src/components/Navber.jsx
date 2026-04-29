import React from 'react'
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2'
import logo from "../assets/logo.png"
import { FaRegHeart, FaUser } from 'react-icons/fa'
import { FiShoppingBag } from "react-icons/fi";
import Container from './Container';
import Shop from './../Pages/Shop';
import { Link } from 'react-router-dom';

const Navber = () => {
  return (
    <div className="">
      <Container>
        <div className='flex justify-between items-center'>
      <div className="flex gap-4 items-center text-2xl">
        <HiOutlineBars3BottomLeft />
        <div className="">
          <ul className='flex pl-4 gap-8'>
            <li><Link className='text-[16px] hover:text-[#767676]' to="/">Home</Link></li>
            <li><Link  className='text-[16px] hover:text-[#767676]' to="/shop">Shop</Link></li>
            <li><a className='text-[16px] hover:text-[#767676]' href="#">Collections</a></li>
            <li><a className='text-[16px] hover:text-[#767676]' href="#">New</a></li>
          </ul>
        </div>
      </div>
      <div className="">
        <a href="#"><img src={logo} alt="" /></a>
      </div>
      <div className="flex gap-8 items-center">
        <div className="bg-[#262626] text-white rounded-full p-4 cursor-pointer hover:bg-[#767676]">
          <FaRegHeart />
        </div>
        <div className="flex">
          <div className="bg-[#262626] cursor-pointer hover:bg-[#767676] text-white rounded-3xl px-6 py-3.5">
            <Link to="/cart">Cart</Link>
          </div>
          <div className="bg-white cursor-pointer hover:border-[#767676] rounded-full p-2.5 border-8 border-[#262626]">
            <FiShoppingBag />
          </div>
        </div>
        <div className="bg-[#262626] cursor-pointer hover:bg-[#767676] text-white rounded-full p-4">
          <FaUser />
        </div>
      </div>
    </div>
      </Container>
    </div>
  )
}

export default Navber
