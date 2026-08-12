import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { Auth } from '../context/Authcontext'

const ProtectedRoutes = () => {

    const {loginUser} = useContext(Auth);

    if (!loginUser) {
        return <Navigate to="/login" replace />
    }
    return <Outlet />
}

export default ProtectedRoutes