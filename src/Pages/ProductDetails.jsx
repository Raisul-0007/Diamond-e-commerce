import React, { useEffect, useState } from 'react'
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io'
import { Link, useParams } from 'react-router-dom'
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

let rating = oneProduct?.rating || 0;

let clientRating = Array.from({length: 5}, (_, index)=>{
  let number = index + 0.5
  return oneProduct.rating >= index + 1 ? (
    <IoIosStar />
  ) : oneProduct.rating >= number ? (<IoIosStarHalf/>)
    :
    (<IoIosStarOutline />)
})
useEffect(() => {
    singleProduct()
}, [productsId.id])
  return (
    <div className='flex gap-5 py-20 '>
      <div className="w-1/2">
        <img className='w-135 ml-auto bg-white border border-[#D7D7D7] bg-cover ' src={oneProduct.thumbnail} alt="" />
      </div>
      <div className="w-1/2">
        <div className="w-100 px-10 py-20 border shadow-xl border-[#D7D7D7]">
          <div className="flex gap-0.5 py-3 text-[#ffcf00] text-lg">{clientRating}</div>
          <h2 className='text-2xl font-bold '>{oneProduct?.title?.slice(0, 20)}</h2>
        <h3 className='text-xl font-semibold text-[#262626e4]'>$ {oneProduct?.price?.toFixed(2)}</h3>
        <div className="py-2">
          <h4 className='text-[#767676]'>MRP incl. of all taxes</h4>
        </div>
        <div className="py-9.5">
          <p>{oneProduct?.description}</p>
        </div>
        <div className="flex gap-5 justify-center">
          <Link className='px-5 py-2 border border-[#262626] bg-[#262626] hover:bg-[#767676] rounded-[20px] text-white' to="">Add To Cart</Link>
          <Link className='px-5 py-2 border border-[#262626] hover:bg-[#262626] rounded-[20px] hover:text-white' to="">Add To Favourite</Link>        
        </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails