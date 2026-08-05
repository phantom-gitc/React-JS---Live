import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { MyStore } from '../context/MyContext'

// Wrapper component to guard protected pages
const ProtectedRoute = ({ children }) => {
  // Get authentication state from context
  const { isLoggedIn } = useContext(MyStore)

  // Redirect to login page if user is not logged in
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }

  // Render children components if user is authenticated
  return children ? children : <Outlet />
}

export default ProtectedRoute