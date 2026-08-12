import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { Auth } from "../context/Authcontext";


const PublicRoutes = () => {

    const { loginUser } = useContext(Auth);

    if (loginUser) {
        return <Navigate to="/main" replace />
    }
    return <Outlet />
}

export default PublicRoutes