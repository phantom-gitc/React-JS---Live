import React from "react";
import { User } from "lucide-react";

const Navbar = ({ toggle, setToggle }) => {
  return (
    <header className="w-full border-b border-zinc-100 bg-white px-6 py-4">
      <nav className="mx-auto flex max-w-5xl items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-900">
            <User size={17} className="text-white" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-zinc-900">UserHub</h2>
            <p className="text-[11px] text-zinc-400">Dashboard</p>
          </div>
        </div>

        {/* Center */}
        <ul className="hidden items-center gap-8 md:flex">
          {["Home", "About", "Contact"].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="relative text-sm font-medium text-zinc-400 transition-all duration-300 hover:text-zinc-900 after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-zinc-900 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right */}
        <button
          onClick={() => setToggle((prev) => !prev)}
          className="rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-zinc-700 active:scale-95"
        >
          {toggle ? "Create User" : "View Users"}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
