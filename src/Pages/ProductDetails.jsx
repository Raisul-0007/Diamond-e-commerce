import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const ProductDetails = () => {
   window.scrollTo(0,0)
   let productsId = useParams()
   let [oneProduct, setOneProduct] = useState([])
   let singleProduct = async () => {
    try {
        let res = await fetch(`https://dummyjson.com/products/${productsId.id}`)
        let data = await res.json()
        setOneProduct(data)
    } catch (err) {
        console.log(err)
    }
}
useEffect(() => {
    singleProduct()
}, [productsId.id])
  return (
    <div className='flex'>
      <div className="w-1/2">
        <img className='w-1/2 mx-auto bg-white border border-[#D7D7D7]' src={oneProduct.thumbnail} alt="" />
      </div>
      <div className="w-1/2">
        <div className="w-120 px-10 py-20 border border-[#D7D7D7]">
          <h2 className='text-2xl font-bold'>{oneProduct?.title?.slice(0, 20)}</h2>
        <h3 className='text-xl font-semibold'>$ {oneProduct?.price?.toFixed(2)}</h3>
        <div className="py-2">
          <h4 className='text-[#767676]'>MRP incl. of all taxes</h4>
        </div>
        <div className="py-10">
          <p>{oneProduct?.description}</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails