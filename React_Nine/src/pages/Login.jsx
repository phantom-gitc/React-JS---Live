import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router";
import { MyStore } from "../context/MyContext";

const Login = () => {
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("password123");
  const { login, isLoggedIn } = useContext(MyStore);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email });
    navigate("/product");
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-16">
      <div className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-xs">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">
            Welcome Back
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            Sign in to access protected product features
          </p>
        </div>

        {isLoggedIn ? (
          <div className="text-center py-4">
            <p className="text-sm font-medium text-emerald-600 mb-4">
              You are currently logged in!
            </p>
            <button
              onClick={() => navigate("/product")}
              className="w-full py-2.5 bg-zinc-900 text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              Go to Protected Products
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors"
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full mt-2 py-3 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors shadow-xs cursor-pointer"
            >
              Sign In
            </button>
          </form>
        )}

        <div className="text-center mt-6 pt-4 border-t border-zinc-100">
          <p className="text-xs text-zinc-500">
            Don't have an account?{" "}
            <Link to="/register" className="text-zinc-900 font-semibold hover:underline">
              Create One
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
