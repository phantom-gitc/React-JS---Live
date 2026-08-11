import React from 'react'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Service from '../pages/Service'
import MainLayout from '../layout/MainLayout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "service",
        element: <Service/>
      }
    ]
  }
 
])

const AppRoutes = () => {
  return <RouterProvider router={router}/>
}

export default AppRoutes