import React, { useContext} from 'react'
import Slider from "react-slick";
import  {Data}  from './ApiData';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';

const SlickSlider = Slider.default ? Slider.default : Slider;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute right-[47%] -bottom-10 z-100 p-3 border border-[#A3A3A3] text-[#A3A3A3] cursor-pointer hover:text-black hover:border-black hover:font-bold ease-in-out duration-300"
      onClick={onClick}
    ><VscChevronRight /></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='absolute left-[46%] -bottom-10  z-50 p-3  border border-[#A3A3A3] text-[#A3A3A3] cursor-pointer hover:text-black hover:border-black hover:font-bold ease-in-out duration-300'
      onClick={onClick}
    ><VscChevronLeft /></div>
  );
}
const New = () => {
 let {info, loading} = useContext(Data)
  const settings = {
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3.5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };


  return (
    <div className='py-10'>
      <div className="flex justify-between items-end">
        <div className="text-6xl font-bold uppercase">
          <h2 >New </h2> 
          <div className="relative">
            <span className='block'>This week</span> 
            <span className='absolute -top-4 left-84 font-extrabold text-xl text-[#000E8A] '>({info.slice(60, 80).length})</span>
          </div>
        </div>
        <div className="text-[#5E5E5E]">
          <a href="#">See All</a>
        </div>
      </div>
      <div className="slider-container">
      <SlickSlider  {...settings}>
        {info.slice(60, 80).map((item) => (
    <a className='p-4 relative' key={item.id} href="#">
        <img src={item.thumbnail} alt="" className="w-full h-90  object-cover bg-white border border-[#D7D7D7]"/>

          <p className="text-[#00000067] pt-2">{item.category.slice(0, 10)}</p>
        <div className="flex justify-between items-center ">
          <h3 className="text-lg font-semibold ">{item.title.slice(0, 20)}</h3>
          <p className="font-semibold pr-2">${item.price}</p>
        </div>
    </a>
  ))}
      </SlickSlider>
    </div>
    </div>
  )
}

export default New
