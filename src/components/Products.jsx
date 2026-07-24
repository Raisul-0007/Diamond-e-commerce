import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



const Products = ({active, allPage}) => {
  return (
    <div>
     <div >
        {active === "active" ?
        <div className="">
          {allPage?.map ((item)=>(
          <div key={item.id} className="lg:py-5 py-3 px-5 my-2 border border-[#D7D7D7] rounded-2xl">
          <Link className="flex gap-5 justify-between " to={`/Shop/${item.id}`}>
          <div className="w-1/5 flex items-center">
            <img className=" lg:h-35 lg:w-35 object-cover bg-white border border-[#D7D7D7]" src={item.thumbnail} alt="" />
          </div>
          <div className="w-3/5">
            <h3 className="lg:text-lg font-semibold ">{item.title.slice(0, 10)}</h3>
            <p className="text-[#00000067]">{item.category.slice(0, 10)}</p>
          </div>
          <div className="w-1/5">
            <p className="lg:text-[16px] text-[14px] font-semibold pr-2">${item.price}</p>
          </div>
          </Link>
          </div>
))}
        </div>
        :
        <div className="flex flex-wrap">
            {allPage?.map ((item)=>(
           <div key={item.id} className="lg:w-1/3 w-1/2 lg:px-5 px-1">
                <Link className='p-4' to={`/Shop/${item.id}`}>
        <img src={item.thumbnail} alt="" className=" lg:h-90  object-cover h-40 bg-white border border-[#D7D7D7]"/>

          <p className="text-[#00000067] pt-2 lg:text-[16px] capitalize text-[10px]">{item.category.slice(0, 10)}</p>
        <div className="flex justify-between items-center gap-1">
          <h3 className="lg:text-lg text-[12px] font-semibold ">{item.title.slice(0, 10)}</h3>
          <p className="font-semibold pr-2 lg:text-[16px] text-[10px]">${item.price}</p>
        </div>
    </Link>
           </div> 
        ))}
        </div>
}
        </div>
    </div>
  )
}

export default Products