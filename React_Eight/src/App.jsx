import React from 'react';
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contacat from './pages/Contacat';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 font-sans antialiased flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contacat />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;