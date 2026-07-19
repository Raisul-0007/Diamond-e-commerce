import React, { useContext} from 'react'
import Slider from "react-slick";
import  {Data}  from './ApiData';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';
import Container from './Container';
import { Link } from 'react-router';

const SlickSlider = Slider.default ? Slider.default : Slider;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute lg:right-[47%] right-[43%] -bottom-10 z-100 lg:p-3 p-1 lg:text-[16px] text-[12px] border border-[#A3A3A3] text-[#A3A3A3] cursor-pointer hover:text-black hover:border-black hover:font-bold ease-in-out duration-300"
      onClick={onClick}
    ><VscChevronRight /></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className='absolute lg:left-[46%] left-[43%] -bottom-10  z-50 lg:p-3 p-1 lg:text-[16px] text-[12px]  border border-[#A3A3A3] text-[#A3A3A3] cursor-pointer hover:text-black hover:border-black hover:font-bold ease-in-out duration-300'
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
    responsive:[
       {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          initialSlide: 2
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1
        },
      },
    ],
  };


  return (
    <div className='py-10 '>
      <Container>
        <div className="flex justify-between items-end">
        <div className="lg:text-6xl text-3xl font-bold uppercase">
          <h2 >New </h2> 
          <div className="">
            <p className='relative block'>This week 
            <span className='absolute lg:-top-4 -top-2.5 
            lg:-right-10 -right-5 font-extrabold lg:text-xl text-[12px] text-[#000E8A] '>({info.slice(60, 80).length})</span>
            </p>
          </div>
        </div>
        <div className="text-[#5E5E5E] cursor-pointer">
          <Link to="/shop">See All</Link>
        </div>
      </div>
      <div className="slider-container">
      <SlickSlider  {...settings}>
        {info.slice(60, 80).map((item) => (
    <Link to="/shop" className='p-4 relative' key={item.id} href="#">
        <img src={item.thumbnail} alt="" className="w-full lg:h-90 h-70  object-cover bg-white border border-[#D7D7D7]"/>

          <p className="text-[#00000067] pt-2">{item.category.slice(0, 10)}</p>
        <div className="flex justify-between items-center ">
          <h3 className="text-lg font-semibold ">{item.title.slice(0, 20)}</h3>
          <p className="font-semibold pr-2">${item.price}</p>
        </div>
    </Link>
  ))}
      </SlickSlider>
    </div>
      </Container>
    </div>
  )
}

export default New
