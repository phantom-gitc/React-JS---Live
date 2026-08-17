import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import UserCard from "../components/UserCard";

const UserPage = () => {
  const { users, loading, error, searchTerm, setSearchTerm, fetchUsers } =
    useContext(UserContext);

  // Filter users based on search input (name, username, email, city)
  const filteredUsers = users.filter((user) => {
    const term = searchTerm.toLowerCase();
    const fullName = `${user.name?.firstname || ""} ${
      user.name?.lastname || ""
    }`.toLowerCase();
    const username = (user.username || "").toLowerCase();
    const email = (user.email || "").toLowerCase();
    const city = (user.address?.city || "").toLowerCase();

    return (
      fullName.includes(term) ||
      username.includes(term) ||
      email.includes(term) ||
      city.includes(term)
    );
  });

  // Calculate stats
  const uniqueCitiesCount = new Set(
    users.map((u) => u.address?.city).filter(Boolean)
  ).size;

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200/80 pb-6">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              User Management
            </h1>
            <span className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-indigo-100">
              {users.length} Registered
            </span>
          </div>
          <p className="text-slate-500 text-xs mt-1">
            Browse and manage all registered users, address details, and geolocation data.
          </p>
        </div>

        {/* Action Controls: Refresh button */}
        <div className="flex items-center gap-3">
          <button
            onClick={fetchUsers}
            disabled={loading}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm cursor-pointer disabled:opacity-50"
          >
            <svg
              className={`w-4 h-4 text-slate-500 ${loading ? "animate-spin" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Refresh Data
          </button>
        </div>
      </div>

      {/* Stats & Search Bar Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Total Users Metric Card */}
        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm shrink-0">
            👥
          </div>
          <div>
            <p className="text-xs font-medium text-slate-400">Total Accounts</p>
            <p className="text-xl font-bold text-slate-900">{users.length}</p>
          </div>
        </div>

        {/* Unique Cities Metric Card */}
        <div className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-sm shrink-0">
            📍
          </div>
          <div>
            <p className="text-xs font-medium text-slate-400">Active Cities</p>
            <p className="text-xl font-bold text-slate-900">{uniqueCitiesCount}</p>
          </div>
        </div>

        {/* Search Bar Input */}
        <div className="bg-white rounded-2xl p-2.5 border border-slate-100 shadow-sm flex items-center gap-2.5">
          <svg
            className="w-4 h-4 text-slate-400 ml-2 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name, email, city..."
            className="w-full text-xs bg-transparent border-none outline-none text-slate-800 placeholder-slate-400 font-medium"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md cursor-pointer text-xs"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Error Banner */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-center justify-between text-red-700 text-xs">
          <div className="flex items-center gap-2.5">
            <svg className="w-5 h-5 text-red-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{error}</span>
          </div>
          <button
            onClick={fetchUsers}
            className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium cursor-pointer"
          >
            Retry
          </button>
        </div>
      )}

      {/* Loading Skeleton */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm animate-pulse space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-200" />
                <div className="space-y-2 flex-1">
                  <div className="h-4 bg-slate-200 rounded w-3/4" />
                  <div className="h-3 bg-slate-150 bg-slate-100 rounded w-1/2" />
                </div>
              </div>
              <div className="space-y-2 pt-2">
                <div className="h-3 bg-slate-100 rounded" />
                <div className="h-3 bg-slate-100 rounded" />
                <div className="h-3 bg-slate-100 rounded" />
              </div>
            </div>
          ))}
        </div>
      ) : filteredUsers.length > 0 ? (
        /* Users Card Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-2xl border border-slate-100 p-12 text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto text-xl">
            🔍
          </div>
          <h3 className="font-bold text-slate-800 text-base">No Users Found</h3>
          <p className="text-slate-400 text-xs max-w-sm mx-auto">
            No matching user records found for "{searchTerm}". Try adjusting your search query.
          </p>
          <button
            onClick={() => setSearchTerm("")}
            className="px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer"
          >
            Clear Search
          </button>
        </div>
      )}
    </div>
  );
};

export default UserPage;
