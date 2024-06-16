import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';



const Headermain = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <header className=" w-full flex justify-between items-center  ">
    <Link to="/" className="text-2xl font-bold fixed bg-black text-white z-20 top-0 left-0 p-5">
    <button class="logo" data-text="Awesome">
    <span class="actual-text">&nbsp;Youssef&nbsp;</span>
    <span aria-hidden="true" class="hover-text">&nbsp;Youssef&nbsp;</span>
    </button>
     </Link>
     
      <button onClick={handleToggle} className="text-white  fixed z-20 top-0 right-0 p-5 ">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      {isActive && (
        <div className="fixed top-0 left-0 w-full h-full bg-black flex flex-col items-center justify-between p-20 z-10 ease-in">
          <nav className=" flex flex-col space-y-10 ">
            <Link to="/" className="text-6xl font-normal italic text-white hover:text-[#3cff1e] ease-in-out duration-300" onClick={handleToggle}>Home</Link>
            <Link to="/portfolio" className="text-6xl font-normal italic text-white hover:text-[#3cff1e] ease-in-out duration-300" onClick={handleToggle}>Portfolio</Link>
            <Link to="/about" className="text-6xl font-normal italic text-white hover:text-[#3cff1e] ease-in-out duration-300" onClick={handleToggle}>About</Link>
            <Link to="/contact" className="text-6xl font-normal italic text-white hover:text-[#3cff1e] ease-in-out duration-300" onClick={handleToggle}>Contact</Link>
          </nav>
          <div className="flex justify-end  fixed bottom-5 px-10 w-full">
          <p className="  text-white">© 2024 Youssef Hihi</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Headermain;
