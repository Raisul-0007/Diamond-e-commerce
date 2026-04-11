import React, { useContext} from 'react'
import Slider from "react-slick";
import  {Data}  from './ApiData';
 const SlickSlider = Slider.default ? Slider.default : Slider;
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className=""
      onClick={onClick}
    />
  );
}

const New = () => {
 let {info, loading} = useContext(Data)
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
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
        <h2 className='text-5xl font-bold'>New <span className='block'>This week</span></h2>
      </div>
      <div className="">
        <div className="slider-container">
      <SlickSlider  {...settings}>
        {info.map((item) => (
    <a href="#">
      <div key={item.id} className="p-4 relative">
      <div className=" p-3">
        <img src={item.thumbnail} alt="" className="w-full h-80 object-cover"/>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold ">{item.title.slice(0, 20)}</h3>
        <p className="text-blue-500">${item.price}</p>
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
