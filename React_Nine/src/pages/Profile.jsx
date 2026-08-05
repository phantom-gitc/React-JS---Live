import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { MyStore } from "../context/MyContext";

const Profile = () => {
  const { user, logout, cartCount } = useContext(MyStore);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white border border-zinc-200 rounded-2xl p-8 shadow-xs">
        {/* Profile Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6 pb-8 border-b border-zinc-100">
          <img
            src={user?.avatar || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"}
            alt={user?.name || "User Profile"}
            className="w-24 h-24 rounded-full object-cover border-2 border-zinc-200 shadow-xs"
          />
          <div className="text-center sm:text-left">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full">
              Authenticated Member
            </span>
            <h1 className="text-2xl font-bold text-zinc-900 mt-1">
              {user?.name || "Member Account"}
            </h1>
            <p className="text-sm text-zinc-500">{user?.email || "user@example.com"}</p>
          </div>
        </div>

        {/* User Stats / Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-b border-zinc-100">
          <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
              Cart Items
            </span>
            <span className="text-xl font-bold text-zinc-900 mt-1 block">
              {cartCount} Items
            </span>
          </div>

          <div className="p-4 bg-zinc-50 rounded-xl border border-zinc-100">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
              Account Security
            </span>
            <span className="text-xl font-bold text-emerald-600 mt-1 block">
              Active Session
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="pt-6 flex flex-col sm:flex-row gap-3 justify-end">
          <button
            onClick={() => navigate("/cart")}
            className="px-4 py-2.5 border border-zinc-200 text-zinc-700 text-xs font-semibold rounded-xl hover:bg-zinc-50 transition-colors cursor-pointer"
          >
            View Shopping Cart
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
