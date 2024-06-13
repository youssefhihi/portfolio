// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/About';
import Portfolio from './pages/portfolio';
import Header from './component/header';
import Icons from './component/icons';
import Loading from './component/Loading';

import './App.css'; // Ensure Tailwind CSS is imported here

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
        {loading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <Icons />
            <div className="mt-10">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
              </Routes>
            </div>
          </>
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
