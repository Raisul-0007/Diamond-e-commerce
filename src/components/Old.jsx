import React from 'react'
import { useContext} from 'react'
import Slider from "react-slick";
import  {Data}  from './ApiData';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';

const SlickSlider = Slider.default ? Slider.default : Slider;

function SampleNextArrow(props) {
  const {  onClick } = props;
  return (
    <div
      className="absolute right-[47%] -bottom-10 z-100 p-3 border border-[#A3A3A3] cursor-pointer"
      onClick={onClick}
    ><VscChevronRight /></div>
  );
}

function SamplePrevArrow(props) {
  const {  onClick } = props;
  return (
    <div
      className='absolute left-[46%] -bottom-10  z-50 p-3  border border-[#A3A3A3] cursor-pointer'
      onClick={onClick}
    ><VscChevronLeft /></div>
  );
}

const Old = () => {
   let {info, loading} = useContext(Data)
  const settings = {
    infinite: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className='py-15'>
      <div className="flex justify-between items-end">
        <div className="text-5xl font-bold uppercase">
          <h2 >XIV </h2> 
          <div className="relative">
            <h2>
              <span className='block'>Collections</span>
              <span className='block'>23-24</span>
          </h2> 
          </div>
        </div>
        <div className="text-[#5E5E5E]">
          <a href="#">See All</a>
        </div>
      </div>
      <div className="slider-container">
      <SlickSlider  {...settings}>
        {info.slice(80, 100).map((item) => (
    <a className='p-4 relative' key={item.id} href="#">
        <img src={item.thumbnail} alt="" className="w-full h-100  object-cover bg-white border border-[#D7D7D7]"/>

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

export default Old
