import React, { useEffect, useState } from 'react'
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2'
import logo from "../assets/logo.png"
import { FaRegHeart, FaUser } from 'react-icons/fa'
import { FiShoppingBag } from "react-icons/fi";
import Container from './Container';
import Shop from './../Pages/Shop';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navber = () => {
   let addToCart = useSelector((state)=>state.product.cartItem)

   let [sticky, setsticky] = useState(false)

   useEffect(()=>{
    const handleScroll = ()=>{
      if(window.scrollY > 50){
        setsticky(true)
      }else{
        setsticky(false)
      }
    }
    window.addEventListener("scroll", handleScroll)

   return ()=> window.removeEventListener("scroll", handleScroll)
   },[])

  return (
    <div className= {`w-full py-5 bg-white border-b border-[#767676cd] transition-all duration-1000 ease-in-out ${sticky ? "fixed top-0 left-0 z-999 shadow-lg " : "relative"}`}>
      <Container>
        <div className='flex justify-between items-center'>
      <div className="hidden lg:flex gap-4 items-center text-2xl">
        <div className="">
          <ul className='flex pl-4 gap-8'>
            <li><Link className='text-[16px] hover:text-[#767676]' to="/">Home</Link></li>
            <li><Link  className='text-[16px] hover:text-[#767676]' to="/shop">Shop</Link></li>
            <li><a className='text-[16px] hover:text-[#767676]' href="#">Collections</a></li>
            <li><Link className='text-[16px] hover:text-[#767676]' to="/cart">Cart</Link></li>
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
        <div className="flex gap-3">
          <Link className="bg-[#262626] relative cursor-pointer hover:bg-[#767676] text-white rounded-3xl px-6 py-3.5" to="/cart">
            <h2>Cart</h2>
            {addToCart.length > 0 &&
            <div className="absolute top-[-5px] right-[-5px] bg-[#FF0000] text-white rounded-full w-6 h-6 flex items-center justify-center">
              {addToCart.length}
            </div>
            }
          </Link>
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
