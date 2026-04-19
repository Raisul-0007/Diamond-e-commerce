import React, { useContext } from 'react'
import { BsArrowRight } from 'react-icons/bs';
import {Data} from './ApiData'
import Container from './Container';
const Banner = () => {
      const {info, loading} = useContext(Data)
    if (loading){
        return (
          <div className=" flex justify-center flex-row gap-2">
            <div className="loader"></div>
          </div>
        )
    }
  return (
    <div className=" py-15">
      <Container>
        <div className='flex relative'>
        <div className="w-2/6">
          <h1 className='text-[55px] leading-14 font-bold uppercase'> New <span className='block'> Collection</span></h1>
          <p className='leading-5.5 pt-3 '>Summer <span className='block'>2026</span></p>
          <div className="absolute bottom-15 left-0">
            <a className='w-70 px-5 py-2  flex justify-between items-center rounded-sm bg-[#00000020] hover:text-[#767676]' href="#">
              Go To Shop
              <BsArrowRight />
            </a>
          </div>
        </div>
        <div className="w-4/6 pt-10 flex justify-between">
        {info.slice(98,100).map((item)=>(
          <img className='w-100 bg-white' key={item.id} src={item.thumbnail} alt="img" />
        ))}
        </div>
    </div>
      </Container>
    </div>
  )
}

export default Banner
