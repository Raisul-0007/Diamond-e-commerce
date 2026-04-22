import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from './Pages/Home'
import Shop from './Pages/Shop';
import Layout from './components/Layout';

let router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout/>}>
     <Route index element={<Home/>}></Route>
    <Route path="/shop" element={<Shop/>}></Route>
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
