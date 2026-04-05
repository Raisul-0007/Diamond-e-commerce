import React from 'react'
import Container from './Container';
import { BsArrowRight } from 'react-icons/bs';

const Banner = () => {
  return (
    <div>
        <div className="pt-15">
          <h1 className='text-6xl font-bold'>New <br/> Collection</h1>
          <p className='leading-5.5 pt-3'>Summer <br />2026</p>
          <div className="">
            <a className='w-60 px-5 py-1.5 flex justify-between items-center rounded-sm bg-[#00000020] hover:text-[#767676]' href="#">
              Go To Shop
              <BsArrowRight />
            </a>
          </div>
        </div>
    </div>
  )
}

export default Banner
