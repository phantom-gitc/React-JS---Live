import React from 'react'
import { Routes, Route } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Product from '../pages/Product'
import ProductDetails from '../pages/ProductDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Cart from '../pages/Cart'
import Profile from '../pages/Profile'
import NotFound from '../pages/NotFound'
import ProtectedRoute from './ProtectedRoute'

// Centralized routing configuration for the application
const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes accessible to everyone */}
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      {/* Protected routes requiring login */}
      <Route
        path='/product'
        element={
          <ProtectedRoute>
            <Product />
          </ProtectedRoute>
        }
      />
      <Route
        path='/details/:id'
        element={
          <ProtectedRoute>
            <ProductDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path='/cart'
        element={
          <ProtectedRoute>
            <Cart />
          </ProtectedRoute>
        }
      />
      <Route
        path='/profile'
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />

      {/* Fallback route for invalid URLs */}
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes