import { createContext, useState, useEffect } from "react";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
    // 1. Load initial states from localStorage
    const [registerUser, setRegisterUser] = useState(() => {
        const savedUsers = localStorage.getItem("registerUser");
        return savedUsers ? JSON.parse(savedUsers) : [];
    });

    const [loginUser, setLoginUser] = useState(() => {
        const savedLoginUser = localStorage.getItem("loginUser");
        return savedLoginUser ? JSON.parse(savedLoginUser) : null;
    });

    // 2. Sync registerUser to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("registerUser", JSON.stringify(registerUser));
    }, [registerUser]);

    // 3. Sync loginUser to localStorage whenever it changes
    useEffect(() => {
        if (loginUser) {
            localStorage.setItem("loginUser", JSON.stringify(loginUser));
        } else {
            localStorage.removeItem("loginUser");
        }
    }, [loginUser]);

    const logoutUser = () => {
        setLoginUser(null);
        localStorage.removeItem("loginUser");
    };

    console.log("Registered Users: ", registerUser);
    console.log("Logged In User: ", loginUser);

    return (
        <Auth.Provider value={{ registerUser, setRegisterUser, loginUser, setLoginUser, logoutUser }}>
            {children}
        </Auth.Provider>
    );
};

export default AuthProvider;