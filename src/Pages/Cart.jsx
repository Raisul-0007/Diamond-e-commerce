import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, removeCart } from '../components/product/productSlice'
import { RxCross2 } from 'react-icons/rx'
import { FiPlus } from 'react-icons/fi'
import { FiMinus } from "react-icons/fi";
import Container from '../components/Container';
const Cart = () => {
  window.scrollTo(0,0)
  let dispatch = useDispatch()
  let cartData = useSelector((state)=>state.product.cartItem)

  let handleRemove =(item)=>{
    dispatch(removeCart(item))
  }
  let handlePlus =(item)=>{
    dispatch(increment(item))
  }
  let handleMinus =(item)=>{
    dispatch(decrement(item))
  }
  return (
    <div className='py-20'>
      <Container>
        <div className="">
          <h1 className='text-5xl'>Add To Cart</h1>
        </div>
        <div className="">
          <div className="flex justify-between">
            <div className="w-2/4">
              <h3>Product Details</h3>
            </div>
            <div className="w-1/4">
              <h3>Price</h3>
              <h3>Quantity</h3>
            </div>            
            <div className="w-1/4">
              <h3>Total</h3>
            </div>
          </div>
          <div className="">
              {cartData.length > 0 ? 
              (cartData.map((item)=>(
              <div className="flex items-center justify-between border border-[#7676763e] rounded-2xl p-5">
              <div className='w-2/4 flex items-center gap-10' onClick={()=>handleRemove(item)} >
                  <div className="flex items-center justify-center h-6 w-6 border border-[#7676763e] hover:bg-[#76767607] cursor-pointer"><RxCross2/></div>
                  <div className="">
              <img className='h-20 w-20 bg-white border border-[#7676763e]' src={item.thumbnail} alt="" />
              </div>
              <div className="">
                <h3>{item.title}</h3>
              </div>
                </div>
              <div className="w-1/4 flex justify-between">
                <h5>${item.price}</h5>
                <div className="flex items-center gap-3">
                  <button onClick={()=>handleMinus(item)} className="p-1 border border-[#7676763e] hover:bg-[#76767607] cursor-pointer"><FiMinus/></button>
                <div className="">{item.qun}</div>
                <button onClick={()=>handlePlus(item)} className="p-1 border border-[#7676763e] hover:bg-[#76767607] cursor-pointer"><FiPlus/></button>
              </div>
              </div>
              <div className="w-1/4 flex items-center justify-center gap-20">
                <h6>${item.qun * item.price}</h6>
              </div>
              </div>
            ))):
            <div className=""></div> }
            </div>
      </div>
      </Container>
    </div>
  )
}

export default Cart
