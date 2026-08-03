import React from 'react';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 font-sans antialiased flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <AppRoutes />
      </main>
    </div>
  );
};

export default App;