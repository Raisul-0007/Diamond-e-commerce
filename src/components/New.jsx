import React, { useContext} from 'react'
import Slider from "react-slick";
import  {Data}  from './ApiData';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';

const SlickSlider = Slider.default ? Slider.default : Slider;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute right-[47%] bottom-0 z-100 p-3 border border-[#A3A3A3] cursor-pointer"
      onClick={onClick}
    ><VscChevronRight /></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='absolute left-[46%] bottom-0  z-100 p-3  border border-[#A3A3A3] cursor-pointer'
      onClick={onClick}
    ><VscChevronLeft /></div>
  );
}
const New = () => {
 let {info, loading} = useContext(Data)
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

 if (loading){
        return (
          <div className=" flex justify-center flex-row gap-2">
            <div className="loader"></div>
          </div>
        )
    }
  return (
    <div>
      <div className="">
        <div className="text-6xl font-bold uppercase">
          <h2 >New </h2> 
          <div className="relative">
            <span className='block'>This week</span> 
            <span className='absolute -top-4 left-84 font-extrabold text-xl text-[#000E8A] '>({info.slice(60, 80).length})</span>
          </div>
        </div>
      </div>
      <div className="">
        <div className="slider-container">
      <SlickSlider  {...settings}>
        {info.slice(60, 80).map((item) => (
    <a href="#">
      <div key={item.id} className="p-4 relative">
      <div className=" p-3">
        <img src={item.thumbnail} alt="" className="w-full h-80  object-cover bg-white border border-[#D7D7D7]"/>
        <p className="text-[#00000067] py-1">{item.category.slice(0, 10)}</p>
        <div className="flex justify-between items-center py-1">
          <h3 className="text-lg font-semibold ">{item.title.slice(0, 20)}</h3>
        <p className="font-semibold">${item.price}</p>
        </div>
      </div>
    </div>
    </a>
  ))}
      </SlickSlider>
    </div>
      </div>
    </div>
  )
}

export default New
