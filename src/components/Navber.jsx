import React from 'react'
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2'
import logo from "../assets/logo.png"
import { FaRegHeart, FaUser } from 'react-icons/fa'
import { FiShoppingBag } from "react-icons/fi";
const Navber = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className="flex gap-4 items-center text-2xl">
        <HiOutlineBars3BottomLeft />
        <div className="">
          <ul className='flex gap-2'>
            <li><a className='text-[16px]' href="#">Home</a></li>
            <li><a className='text-[16px]' href="#">Collections</a></li>
            <li><a className='text-[16px]' href="#">New</a></li>
          </ul>
        </div>
      </div>
      <div className="">
        <img src={logo} alt="" />
      </div>
      <div className="flex gap-4 items-center">
        <div className="bg-[#262626] text-white rounded-full p-4">
          <FaRegHeart />
        </div>
        <div className="flex">
          <div className="bg-[#262626] text-white rounded-3xl px-6 py-3.5"
          >Cart
          </div>
          <div className="bg-white rounded-full p-2.5 border-8 border-[#262626]">
            <FiShoppingBag />
          </div>
        </div>
        <div className="bg-[#262626] text-white rounded-full p-4">
          <FaUser />
        </div>
      </div>
    </div>
  )
}

export default Navber
