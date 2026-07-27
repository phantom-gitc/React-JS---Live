import React from 'react';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 font-sans antialiased">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 mb-4">
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        </p>
      </main>
    </div>
  );
};

export default App;