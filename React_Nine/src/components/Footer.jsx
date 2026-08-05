import React from 'react';
import { NavLink } from 'react-router';

const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-200 bg-white mt-auto py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
        <div className="flex items-center gap-2">
          <span className="font-bold text-zinc-900 tracking-wider">NOVA</span>
          <span>© {new Date().getFullYear()} All rights reserved.</span>
        </div>

        <div className="flex items-center gap-6">
          <NavLink to="/" className="hover:text-zinc-900 transition-colors">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-zinc-900 transition-colors">
            About
          </NavLink>
          <NavLink to="/product" className="hover:text-zinc-900 transition-colors">
            Catalog
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
