import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from './Pages/Home'
import Shop from './Pages/Shop';
import Layout from './components/Layout';
import ProductDetails from './Pages/ProductDetails';
import AddToCart from './Pages/AddToCart';

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
     <Route index element={<Home/>}></Route>
    <Route path="/shop" element={<Shop/>}></Route>
    <Route path="/shop/:id" element={<ProductDetails/>}></Route>
    <Route path='/cart' element={<AddToCart/>}></Route>
  </Route>
))
const App = () => {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
