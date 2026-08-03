import React from 'react';
import { Routes, Route } from 'react-router';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contacat from '../pages/Contacat';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contacat />} />
    </Routes>
  );
};

export default AppRoutes;
