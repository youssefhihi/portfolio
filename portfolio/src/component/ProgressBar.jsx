import React from 'react';


const ProgressBar = ({ completed }) => {
  return (
    <div className="relative">
      <div className="bg-black h-2 rounded-xl overflow-hidden">
        <div
          className="bg-[#3cff1e] h-full transition-all duration-1000 "
          style={{ width: `${completed}%` }}
        ></div>
      </div>
      <p className="text-white text-sm absolute top-0 right-0 -mt-3">{completed}%</p>
    </div>
  );
};


export default ProgressBar;
