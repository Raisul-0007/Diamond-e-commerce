import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem: []
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        let index = state.cartItem.findIndex((item)=> item.id === action.payload.id)
        if(index !== -1){
            state.cartItem[index].qun +=1
        }else{
            state.cartItem.push({...action.payload, qun:1})
        }
    },
    removeCart: (state, action)=>{
        let filtercart = state.cartItem.filter((item)=> item.id !== action.payload.id)
        state.cartItem = filtercart
    },
    increment: (state, action) => {
      let index = state.cartItem.findIndex((item)=> item.id === action.payload.id)
      if(index !== -1){
        state.cartItem[index].qun +=1
      }
    },
    decrement: (state, action) => {
      let index = state.cartItem.findIndex((item)=> item.id === action.payload.id)
      if(index !== -1 && state.cartItem[index].qun >1){
        state.cartItem[index].qun -=1
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const { addToCart, removeCart, increment, decrement, incrementByAmount } = productSlice.actions

export default productSlice.reducer