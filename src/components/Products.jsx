import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



const Products = ({active, allPage}) => {
  return (
    <div>
     <div >
        {active === "active" ?
        <div className="">
          {allPage?.map ((item)=>(
          <div key={item.id} className="py-5 px-5 my-2 border border-[#D7D7D7] rounded-2xl">
          <Link className="flex gap-5 justify-between " to="#">
          <div className="w-1/5">
            <img className=" h-35 w-35 object-cover bg-white border border-[#D7D7D7]" src={item.thumbnail} alt="" />
          </div>
          <div className="w-3/5">
            <h3 className="text-lg font-semibold ">{item.title.slice(0, 10)}</h3>
            <p className="text-[#00000067]">{item.category.slice(0, 10)}</p>
          </div>
          <div className="w-1/5">
            <p className="font-semibold pr-2">${item.price}</p>
          </div>
          </Link>
          </div>
))}
        </div>
        :
        <div className="flex flex-wrap">
            {allPage?.map ((item)=>(
           <div key={item.id} className="w-1/3 px-5">
                <Link className='p-4' to="#">
        <img src={item.thumbnail} alt="" className="w-full h-90  object-cover bg-white border border-[#D7D7D7]"/>

          <p className="text-[#00000067] pt-2">{item.category.slice(0, 10)}</p>
        <div className="flex justify-between items-center ">
          <h3 className="text-lg font-semibold ">{item.title.slice(0, 10)}</h3>
          <p className="font-semibold pr-2">${item.price}</p>
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