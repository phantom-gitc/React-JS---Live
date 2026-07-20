import React from 'react'

// Receives tab-switching triggers, active tab status, and cart items count from App.jsx parent
const Navbar = ({ onViewChange, currentView, cartCount }) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => onViewChange && onViewChange('home')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900 text-white transition-all group-hover:scale-105">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-zinc-900">MINIMA</span>
          </div>

          {/* Nav Items */}
          <div className="flex items-center gap-6 sm:gap-8">
            <button 
              onClick={() => onViewChange && onViewChange('home')}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                currentView === 'home' ? 'text-zinc-950 font-semibold' : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              Home
            </button>
            
            {/* Cart */}
            <button 
              onClick={() => onViewChange && onViewChange('cart')}
              className={`relative flex items-center p-2 transition-colors cursor-pointer ${
                currentView === 'cart' ? 'text-zinc-950' : 'text-zinc-500 hover:text-zinc-900'
              }`}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && ( // Display the badge only if there are items in the cart
                <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-zinc-900 text-[10px] font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Login Button */}
            <button className="rounded-full bg-zinc-900 px-5 py-2 text-xs font-semibold text-white transition-all hover:bg-zinc-800 hover:shadow-md active:scale-95 cursor-pointer">
              Log In
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
