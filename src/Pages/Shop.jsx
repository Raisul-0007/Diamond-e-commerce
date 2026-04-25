import React, { useContext, useEffect, useState } from 'react'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'
import Container from '../components/Container'
import { SlArrowRight } from 'react-icons/sl'
import { Data } from '../components/ApiData'
import Filter from '../components/Filter'


const Shop = () => {
  let {info} = useContext(Data)

    let [cate,cateShow] =useState(true)
    let [cateSet, cateSetShow] = useState([])
     let [filterCategory,setfilterCategory] = useState([])
    useEffect(()=>{
        cateSetShow([...new Set(info.map((item)=>item.category))])
    },[info])
    let HandleCategory = (cItem)=>{
        let filterItem = info.filter((item)=>item.category == cItem)
        setfilterCategory(filterItem)
    }
  return (
    <div>
      <Container>
        <div className="py-5">
          <p className='text-[#767676] text-sm flex items-center gap-1'>Home < SlArrowRight /> Products</p>
        </div>
        <div className="flex gap-5">
        <div className="w-1/4">
           <div className="">
        <h2>
            Filter
        </h2>
    <div className="">
        <div onClick={(()=>{cateShow(!cate)})} className="flex justify-between border items-center">
            <h3 className='text-20'>Category</h3>
            <div className="py-3 font-dm text-[20px]">
                   {cate ? <MdArrowDropUp/> : <MdArrowDropDown/>}
                </div>
        </div>
        <div className="">
            {cate && (
            <ul>
            {cateSet.map((item)=>(
                <li key={item} onClick={()=>{HandleCategory(item)}} className='flex justify-between py-2'>
                    <p className='font-dm text-[16px] text-[#767676]'> {item}</p>
                    <div className="p-1">
                        <AiOutlinePlus/>
                    </div>
                </li>
            ))}

            </ul>
            )}
        </div>
    </div>
    </div>
        </div>
        <div className="w-3/4">
        <Filter filterCategory={filterCategory}/>
        </div>
        </div>
      </Container>
    </div>
  )
}

export default Shop