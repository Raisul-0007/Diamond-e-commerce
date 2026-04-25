import { useEffect, useState } from "react"
import { Link } from "react-router"


const Product = ({filterCategory, allPage}) => {
    let [allFilter, setAllFilter] = useState([])

    useEffect(()=>{
        let filterCate = filterCategory.slice(0, 6)
        setAllFilter(filterCate)
    },[filterCategory])
  return (
    <div>
        <div className="flex flex-wrap ">
            {allFilter.map ((item)=>(
           <div className="w-1/3 px-5">
                <Link className='p-4 relative' key={item.id} to="#">
        <img src={item.thumbnail} alt="" className="w-full h-90  object-cover bg-white border border-[#D7D7D7]"/>

          <p className="text-[#00000067] pt-2">{item.category.slice(0, 10)}</p>
        <div className="flex justify-between items-center ">
          <h3 className="text-lg font-semibold ">{item.title.slice(0, 20)}</h3>
          <p className="font-semibold pr-2">${item.price}</p>
        </div>
    </Link>
           </div> 
        ))}
        </div>
    </div>
  )
}

export default Product