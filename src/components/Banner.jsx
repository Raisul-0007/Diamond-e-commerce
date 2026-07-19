import React, { useContext } from 'react'
import { BsArrowRight } from 'react-icons/bs';
import {Data} from './ApiData'
import Container from './Container';
import { Link } from 'react-router';
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
        <div className='flex flex-wrap  relative'>
        <div className="lg:w-1/3">
          <h1 className='lg:text-6xl text-4xl lg:leading-14 font-bold uppercase'> New <span className='block'> Collection</span></h1>
          <p className='lg:leading-5.5 pt-3 '>Summer <span className='block'>2026</span></p>
          <div className="lg:absolute bottom-15  left-0">
            <Link to="/shop" className='lg:w-70 w-50 px-5 py-2  flex justify-between items-center lg:text-[16px] text-[10px] rounded-sm bg-[#00000020] hover:text-[#767676]' href="#">
              Go To Shop
              <BsArrowRight />
            </Link>
          </div>
        </div>
        <div className="lg:w-2/3 pt-10 flex justify-between gap-2">
        {info.slice(98,100).map((item)=>(
          <img className='lg:w-100 w-1/2  bg-white' key={item.id} src={item.thumbnail} alt="img" />
        ))}
        </div>
    </div>
      </Container>
    </div>
  )
}

export default Banner