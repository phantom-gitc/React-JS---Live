import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-gray-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer decoration-none">
            <div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white font-bold text-lg shadow-sm">
              N
            </div>
            <span className="font-semibold text-lg tracking-tight text-gray-900">
              Minimal.
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              return (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-gray-900 bg-gray-100/80 shadow-xs font-semibold'
                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Action Button */}
          <div className="hidden md:flex items-center space-x-3">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors cursor-pointer">
              Log in
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-black hover:bg-gray-800 rounded-full transition-all duration-200 shadow-sm cursor-pointer hover:shadow">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b border-gray-100 bg-white/95 backdrop-blur-md px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => {
            return (
              <NavLink
                key={item.name}
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-gray-100 text-gray-900 font-semibold'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
              >
                {item.name}
              </NavLink>
            );
          })}
          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <button className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors">
              Log in
            </button>
            <button className="w-full text-center px-4 py-2.5 text-base font-medium text-white bg-black hover:bg-gray-800 rounded-xl transition-colors shadow-sm">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
