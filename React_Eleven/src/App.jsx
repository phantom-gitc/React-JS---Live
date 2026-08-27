import React, { useCallback, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";

const App = () => {
  console.log("App rendering");

  const [count, setCount] = useState(0);
  const [name, setName] = useState({
    name: "Raghav",
    id: 101,
  });

  let greet = useCallback(()=>{
    console.log("Hello Buddy ");
    
  }, []);

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="mb-6">
          <p className="text-sm font-medium text-blue-600 mb-1">
            React State Demo
          </p>
          <h1 className="text-3xl font-bold text-slate-900">
            Dashboard
          </h1>
          <p className="text-slate-500 mt-1">
            A simple example of React state management.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          
          {/* Counter */}
          <section className="flex items-center justify-between pb-6 border-b border-slate-100">
            <div>
              <p className="text-sm text-slate-500">Current Count</p>
              <p className="text-4xl font-bold text-slate-900 mt-1">
                {count}
              </p>
            </div>

            <button
              onClick={() => setCount(count + 1)}
              className="px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium
                         hover:bg-blue-700 active:scale-95 transition"
            >
              Increment
            </button>
          </section>

          {/* User Info */}
          <section className="pt-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-sm text-slate-500">Profile</p>
                <h2 className="text-xl font-semibold text-slate-900">
                  User Information
                </h2>
              </div>

              <button
                onClick={() =>
                  setName({
                    ...name,
                    name: "Raghav Vashisht",
                  })
                }
                className="px-4 py-2 rounded-lg border border-slate-300
                           text-slate-700 font-medium hover:bg-slate-50
                           active:scale-95 transition"
              >
                Change Name
              </button>
            </div>

            {/* User Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  Name
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-800">
                  {name.name}
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4">
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  ID
                </p>
                <p className="mt-1 text-lg font-semibold text-slate-800">
                  {name.id}
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Components */}
        <div className="mt-6 grid gap-4">
          <Home name={name} id={name.id} greet={greet} />
          <About />
        </div>
      </div>
    </main>
  );
};

export default App;