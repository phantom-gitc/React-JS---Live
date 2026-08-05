import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router";
import { MyStore } from "../context/MyContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useContext(MyStore);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(name, email);
    navigate("/product");
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 py-16">
      <div className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-xs">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">
            Create Account
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            Join NOVA store to unlock full catalog access
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3.5 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm text-zinc-900 focus:outline-none focus:border-zinc-900 transition-colors"
              placeholder="John Doe"
            />
          </div>

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
            Create Account
          </button>
        </form>

        <div className="text-center mt-6 pt-4 border-t border-zinc-100">
          <p className="text-xs text-zinc-500">
            Already have an account?{" "}
            <Link to="/login" className="text-zinc-900 font-semibold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
