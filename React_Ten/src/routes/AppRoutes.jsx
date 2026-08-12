import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layout/AuthLayout'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import MainLayout from '../layout/MainLayout'
import ProtectedRoutes from './ProtectedRoutes'
import PublicRoutes from './PublicRoutes'
import UserPage from '../pages/UserPage'
import ProductPage from '../pages/ProductPage'
import HomePage from '../pages/HomePage'

const router = createBrowserRouter([
  {
    path:'/',
    element: <PublicRoutes />,
    children: [
      {
        path: '',
        element: <AuthLayout />,
        children: [
          {
            path: '',
            element: <LoginPage />
          },
          {
            path: 'login',
            element: <LoginPage />
          },
          {
            path: 'register',
            element: <RegisterPage />
          }
        ]
      }
    ]
  },
  {
    path: '/main',
    element: <ProtectedRoutes />,
    children: [
      {
        path: '',
        element: <MainLayout />,
        children : [{
          path : '',
          element : <HomePage />
        },
        {
          path : 'product',
          element : <ProductPage />
        },
        {
          path : 'user',
          element : <UserPage />
        }
        ]
      }
    ]
  }
])

const AppRoutes = () => {
  return <RouterProvider router={router} />
}

export default AppRoutes
