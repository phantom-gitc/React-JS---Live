import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router";
import { MyStore } from "../context/MyContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn, user, logout, cartCount } = useContext(MyStore);
  const navigate = useNavigate();

  const activeLinkClass = ({ isActive }) =>
    `text-xs font-medium uppercase tracking-wider transition-colors ${
      isActive ? "text-zinc-900 font-semibold" : "text-zinc-500 hover:text-zinc-900"
    }`;

  const handleAuthAction = () => {
    if (isLoggedIn) {
      logout();
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-200/80 bg-white/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Minimalist Logo */}
        <NavLink to="/" className="text-base font-bold tracking-widest text-zinc-900">
          NOVA
        </NavLink>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/" className={activeLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={activeLinkClass}>
            About
          </NavLink>
          <NavLink to="/product" className={activeLinkClass}>
            Catalog
          </NavLink>
        </div>

        {/* Right Actions (Cart & Auth) */}
        <div className="hidden md:flex items-center gap-5">
          {/* Cart Icon Badge */}
          <NavLink
            to="/cart"
            className="relative p-2 text-zinc-700 hover:text-zinc-900 transition-colors"
            title="Shopping Cart"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.75"
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-zinc-900 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </NavLink>

          {/* User Profile Badge or Login Button */}
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <NavLink
                to="/profile"
                className="flex items-center gap-2 hover:opacity-85 transition-opacity"
              >
                <img
                  src={user?.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"}
                  alt={user?.name || "Profile"}
                  className="w-7 h-7 rounded-full object-cover border border-zinc-300"
                />
                <span className="text-xs font-semibold text-zinc-900">
                  {user?.name}
                </span>
              </NavLink>
              <button
                onClick={handleAuthAction}
                className="px-3 py-1.5 border border-zinc-200 hover:bg-zinc-100 text-zinc-700 text-xs font-medium rounded-lg transition-colors cursor-pointer"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="px-3.5 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              Login
            </button>
          )}
        </div>

        {/* Mobile menu controls */}
        <div className="md:hidden flex items-center gap-3">
          <NavLink to="/cart" className="relative p-1.5 text-zinc-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-zinc-900 text-white text-[9px] font-bold w-3.5 h-3.5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </NavLink>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-500 hover:text-zinc-900 focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-b border-zinc-200 bg-white/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={activeLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={activeLinkClass}>
            About
          </NavLink>
          <NavLink to="/product" onClick={() => setIsOpen(false)} className={activeLinkClass}>
            Catalog
          </NavLink>
          {isLoggedIn ? (
            <>
              <NavLink to="/profile" onClick={() => setIsOpen(false)} className={activeLinkClass}>
                Profile ({user?.name})
              </NavLink>
              <button
                onClick={() => {
                  setIsOpen(false);
                  logout();
                }}
                className="text-left text-xs text-red-600 font-semibold uppercase tracking-wider pt-2 border-t border-zinc-100"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              onClick={() => setIsOpen(false)}
              className="text-xs font-semibold text-zinc-900 uppercase tracking-wider pt-2 border-t border-zinc-100"
            >
              Login / Register
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
