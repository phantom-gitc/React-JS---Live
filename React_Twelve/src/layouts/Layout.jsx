import React from "react";
import { Link, NavLink, Outlet } from "react-router";
import { useProducts } from "../context/ProductContext";

const Layout = () => {
  const { filteredData } = useProducts();

  return (
    <div className="min-h-screen bg-[#f7f6f2] text-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 lg:px-14">
        <nav className="mb-20 flex items-center justify-between">
          <Link
            to="/"
            className="text-lg font-bold tracking-tight text-zinc-900 transition hover:opacity-80"
          >
            <span className="text-violet-600">N</span>OVA
          </Link>

          <div className="hidden items-center gap-8 text-xs font-medium sm:flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-violet-600 font-semibold"
                    : "text-zinc-500 hover:text-violet-600"
                }`
              }
            >
              Collection
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-violet-600 font-semibold"
                    : "text-zinc-500 hover:text-violet-600"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-pink-600 font-semibold"
                    : "text-zinc-500 hover:text-pink-600"
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-xs font-medium text-white">
            {filteredData.length}
          </div>
        </nav>

        <main>
          <Outlet />
        </main>

        <footer className="mt-24 border-t border-zinc-200 py-8">
          <div className="flex flex-col gap-3 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 NOVA</span>
            <span>Designed with intention.</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
