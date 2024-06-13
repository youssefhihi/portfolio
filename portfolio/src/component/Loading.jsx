// src/components/Loading.js
import React from 'react';
import './style.css';


const Loading = () => {
  return (
    <div class="loader fixed top-1/2 left-1/2  ">
    <div class="circle">
      <div class="dot"></div>
      <div class="outline"></div>
    </div>
    <div class="circle">
      <div class="dot"></div>
      <div class="outline"></div>
    </div>
    <div class="circle">
      <div class="dot"></div>
      <div class="outline"></div>
    </div>
    <div class="circle">
      <div class="dot"></div>
      <div class="outline"></div>
    </div>
  </div>
  );
};

export default Loading;
