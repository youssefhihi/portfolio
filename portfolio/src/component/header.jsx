import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Headermain = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <header className="w-full flex justify-between items-center p-5">
      <Link to="/" className="text-xl md:text-2xl font-bold fixed bg-black text-white z-20 top-0 left-0 p-5">
        <button className="logo" data-text="Awesome">
          <span className="actual-text">&nbsp;Youssef&nbsp;</span>
          <span aria-hidden="true" className="hover-text">&nbsp;Youssef&nbsp;</span>
        </button>
      </Link>
      
      <button onClick={handleToggle} className="text-white fixed z-20 top-0 right-0 p-5">
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>

      {isActive && (
        <div className="fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-center p-5 md:p-20 z-10 ease-in">
          <nav className="flex flex-col space-y-10 text-center">
            <Link to="/" className="text-4xl md:text-6xl font-normal italic text-white hover:text-[#3cff1e] ease-in-out duration-300" onClick={handleToggle}>Home</Link>
            <Link to="/portfolio" className="text-4xl md:text-6xl font-normal italic text-white hover:text-[#3cff1e] ease-in-out duration-300" onClick={handleToggle}>Portfolio</Link>
            <Link to="/about" className="text-4xl md:text-6xl font-normal italic text-white hover:text-[#3cff1e] ease-in-out duration-300" onClick={handleToggle}>About</Link>
            <Link to="/contact" className="text-4xl md:text-6xl font-normal italic text-white hover:text-[#3cff1e] ease-in-out duration-300" onClick={handleToggle}>Contact</Link>
          </nav>
          <div className="flex justify-end fixed bottom-5 px-10 w-full">
            <p className="text-white">© 2024 Youssef Hihi</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Headermain;
