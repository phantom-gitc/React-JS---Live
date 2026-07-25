import React, { useState, useContext } from 'react';
import { MyStore } from '../context/MyContext';

const Navbar = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(MyStore);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-100/60 dark:border-zinc-900/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Brand */}
          <div className="flex-shrink-0 flex items-center" onClick={() => setIsCartOpen(false)}>
            <span className="text-[13px] font-semibold tracking-[0.2em] text-zinc-900 dark:text-white uppercase cursor-pointer select-none">
              STUDIO
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 group/nav">
            {['Shop', 'Collections', 'Editorial', 'About'].map((item) => (
              <a
                key={item}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (item === 'Shop') setIsCartOpen(false);
                }}
                className={`text-[12px] font-medium transition-all duration-300 group-hover/nav:opacity-50 hover:!opacity-100 py-1.5 ${
                  item === 'Shop' && !isCartOpen
                    ? 'text-zinc-950 dark:text-white font-semibold'
                    : 'text-zinc-500 dark:text-zinc-400'
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right Side Actions - Minimalist Thin Stroke Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search */}
            <button className="text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors duration-200 p-2 cursor-pointer" aria-label="Search">
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Account */}
            <button className="text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors duration-200 p-2 cursor-pointer" aria-label="Account">
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </button>

            {/* Cart Icon with badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              className={`text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white transition-colors duration-200 p-2 relative cursor-pointer ${
                isCartOpen ? 'text-zinc-950 dark:text-white' : ''
              }`}
              aria-label="Cart"
            >
              <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-1.5 right-1.5 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 text-[9px] font-semibold w-4 h-4 rounded-full flex items-center justify-center scale-[0.75]">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white p-2 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile navigation drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl ${isOpen ? 'max-h-96 border-b border-zinc-100 dark:border-zinc-900/80 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="px-6 pt-2 pb-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {['Shop', 'Collections', 'Editorial', 'About'].map((item) => (
              <a
                key={item}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (item === 'Shop') {
                    setIsCartOpen(false);
                    setIsOpen(false);
                  }
                }}
                className={`text-[12px] font-medium transition-colors duration-150 py-1 ${
                  item === 'Shop' && !isCartOpen
                    ? 'text-zinc-950 dark:text-white font-semibold'
                    : 'text-zinc-550 dark:text-zinc-400'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
          
          <div className="pt-4 border-t border-zinc-100 dark:border-zinc-900/60 flex flex-col space-y-3 text-[12px] font-medium text-zinc-500">
            <button className="flex items-center gap-2.5 text-left hover:text-zinc-950 dark:hover:text-white transition-colors py-1 cursor-pointer">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </button>
            <button className="flex items-center gap-2.5 text-left hover:text-zinc-950 dark:hover:text-white transition-colors py-1 cursor-pointer">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
              Account
            </button>
            <button
              onClick={() => {
                setIsCartOpen(true);
                setIsOpen(false);
              }}
              className={`flex items-center gap-2.5 text-left hover:text-zinc-950 dark:hover:text-white transition-colors py-1 cursor-pointer ${
                isCartOpen ? 'text-zinc-950 dark:text-white font-semibold' : ''
              }`}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              Cart (3)
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;