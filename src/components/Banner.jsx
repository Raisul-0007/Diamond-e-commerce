import React, { useContext } from 'react'
import { BsArrowRight } from 'react-icons/bs';
import {Data} from './ApiData'
const Banner = () => {
      const {info, loading} = useContext(Data)
    if (loading){
        return (
            <div className="flex justify-center flex-row gap-2">
          <div className="w-4 h-4 rounded-full bg-[#1B6392] animate-bounce"></div>
          <div
            className="w-4 h-4 rounded-full bg-[#1B6392] animate-bounce [animation-delay:-.3s]"
          ></div>
          <div
            className="w-4 h-4 rounded-full bg-[#1B6392] animate-bounce [animation-delay:-.5s]"
          ></div>
        </div>
        )
    }
  return (
    <div className='flex py-15 relative'>
        <div className="w-2/5">
          <h1 className='text-7xl font-bold'>New <br/> Collection</h1>
          <p className='leading-5.5 pt-3'>Summer <br />2026</p>
          <div className="absolute bottom-15 left-0">
            <a className='w-70 px-5 py-2  flex justify-between items-center rounded-sm bg-[#00000020] hover:text-[#767676]' href="#">
              Go To Shop
              <BsArrowRight />
            </a>
          </div>
        </div>
        <div className="w-3/5 pt-10 flex justify-between">
        {info.slice(98,100).map((item)=>(
          <img className='w-90 bg-white' key={item.id} src={item.thumbnail} alt="img" />
        ))}
        </div>
    </div>
  )
}

export default Banner
