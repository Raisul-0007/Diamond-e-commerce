import React, { useContext, useState } from 'react'
import { Data } from './ApiData'
import { LuFileWarning } from 'react-icons/lu'
import Product from './Product.jsx'

const Filter = ({filterCategory}) => {
     let {info} = useContext(Data)
    
    let [perPage, setPerPage] = useState(6)
    let [currentPage, setCurrentPage] = useState(1)
    let EveryPage = perPage * currentPage
    let lastPage = EveryPage - perPage
    let allPage = info.slice(lastPage, EveryPage)
  return (
    <div>
      <div className="">
        <Product filterCategory={filterCategory} allPage={allPage} />
      </div>
    </div>
  )
}

export default Filter