import React, { useState } from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const activeLinkClass = ({ isActive }) =>
    `text-xs font-medium uppercase tracking-wider transition-colors ${
      isActive ? 'text-zinc-900 font-semibold' : 'text-zinc-500 hover:text-zinc-900'
    }`

  return (
    <nav className="fixed top-0 left-0 w-full z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Minimalist Logo */}
        <NavLink to="/" className="text-base font-medium tracking-wide text-zinc-900">
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
            Product
          </NavLink>
        </div>

      
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-500 hover:text-zinc-900 focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-zinc-100 bg-white/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4">
          <NavLink to="/" onClick={() => setIsOpen(false)} className={activeLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" onClick={() => setIsOpen(false)} className={activeLinkClass}>
            About
          </NavLink>
          <NavLink to="/product" onClick={() => setIsOpen(false)} className={activeLinkClass}>
            Product
          </NavLink>
        </div>
      )}
    </nav>
  )
}

export default Navbar
