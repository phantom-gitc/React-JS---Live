import { createRoot } from "react-dom/client";
import "./index.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import { AuthProvider } from "./context/Authcontext.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
    <AuthProvider>
        <AppRoutes />
        <ToastContainer position="top-right" autoClose={3000} />
    </AuthProvider>
);

