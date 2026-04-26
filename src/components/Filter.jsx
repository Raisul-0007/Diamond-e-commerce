import React, { useContext, useState } from 'react'
import { Data } from './ApiData'
import { LuFileWarning } from 'react-icons/lu'
import Products from './Products.jsx'
import { FaListUl, FaTableCellsLarge } from 'react-icons/fa6'
import Pagination from './Pagination.jsx'

const Filter = ({filterCategory}) => {
     let {info} = useContext(Data)
    
    let [perPage, setPerPage] = useState(9)
    let [currentPage, setCurrentPage] = useState(1)
    let EveryPage = perPage * currentPage
    let firstPage = EveryPage - perPage
    let data = filterCategory.length > 0 ? filterCategory : info
    let allPage = data.slice(firstPage, EveryPage)
    
    let pageNumber = []
    for(let i=1; i<= Math.ceil(data.length / perPage); i++){
      pageNumber.push(i)
    }

    let prev = ()=>{
      if(currentPage > 1 ){
        setCurrentPage((index)=> index - 1)
      }
    }
    let paginate = (index)=>{
      setCurrentPage(index + 1)
    } 
    let next = ()=>{
      if(currentPage < pageNumber.length){
        setCurrentPage((index)=> index + 1)
      }
    }

    let HandlePageNumber =(e)=>{
      setPerPage(Number(e.target.value))
    }

    let [active, setActive] = useState("")
    let HandleActive = ()=>{
      setActive("active")
    }
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div onClick={()=>setActive("")} className={`${active == "active" ? "p-2 border border-white" : " p-2 border border-[#767676]"}`}>
            <FaTableCellsLarge/>
          </div>
          <div onClick={HandleActive} className={`${active == "active" ? " p-2 border border-[#767676]" : "p-2 border border-white "}`}>
            <FaListUl/>
          </div>
        </div>
        <div className="flex px-4 gap-3 items-center">
          <p className='font-dm text-[16px] text-[#767676]'>Show:</p>
          <select onChange={HandlePageNumber} className='cursor-pointer font-dm text-[14px] text-[#767676] border-1 border-[#737373] py-2 pr-[50px]' name="" id="">
          <option value="9">9</option>
          <option value="12">12</option>
          <option value="15">15</option>
        </select>
        </div>
      </div>
      <div className="">
        <Products active={active} allPage={allPage} />
      </div>
      <div className="py-10">
            <Pagination pageNumber={pageNumber} paginate={paginate} prev={prev} next={next} currentPage={currentPage} filterCategory={filterCategory} />
        </div>
    </div>
  )
}

export default Filter