import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({
    name: "Rohan",
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-sm border border-gray-200 p-8">
        <h1 className="text-2xl font-semibold text-gray-900 text-center">
          React State Demo
        </h1>

        <div className="mt-8 space-y-6">
          {/* Count */}
          <div className="flex items-center justify-between border-b border-gray-100 pb-4">
            <span className="text-gray-500">Count</span>
            <span className="text-3xl font-bold text-gray-900">{count}</span>
          </div>

          {/* User */}
          <div className="flex items-center justify-between">
            <span className="text-gray-500">User</span>
            <span className="text-xl font-medium text-gray-900">
              {user.name}
            </span>
          </div>
        </div>

        <div className="mt-10 flex gap-3">
          <button
            onClick={() => setCount(count + 1)}
            className="flex-1 rounded-xl bg-black text-white py-3 font-medium transition hover:bg-gray-800 active:scale-95"
          >
            Increment
          </button>

          <button
            onClick={() =>
              setUser({
                ...user,
                name: "Rohit",
              })
            }
            className="flex-1 rounded-xl border border-gray-300 bg-white py-3 font-medium text-gray-700 transition hover:bg-gray-50 active:scale-95"
          >
            Change Name
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;