// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Header from './component/header';
import Icons from './component/icons';

import './App.css'; 

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black overflow-hidden min-h-screen text-white">
      <BrowserRouter>
     
          <>
            <Header />
            <Icons />
            <div className="mt-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
          </>
      </BrowserRouter>
    </div>
  );
};

export default App;
