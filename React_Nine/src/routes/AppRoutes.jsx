import React from 'react'
import { Routes , Route } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Product from '../pages/Product'
import ProductDetails from '../pages/ProductDetails'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/product' element={<Product />} />
      <Route path='/details/:id' element={<ProductDetails />} />
    </Routes>
  )
}

export default AppRoutes