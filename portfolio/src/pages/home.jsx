import React from 'react';
import photo from '../imgs/photo.jpeg';
import Typewriter from 'typewriter-effect';
import '../tailwind.css';
import '../App.css';
import Icons from '../component/icons';

function Home() {
  return (
    <div className="flex flex-col lg:flex-row p-5  w-full bg-black text-white h-screen "> 
      <Icons />
      <div className="lg:flex-1 flex flex-col justify-center p-20 w-full ">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-4">I'm Youssef Hihi</h2>
          <h3 className="text-2xl mb-4 font-serif">
            <Typewriter
              options={{
                strings: ['I code cool webs', 'I build amazing applications', 'I love coding'],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <p className="text-xl font-normal mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum.</p>
          <div className="flex space-x-4">
            <button className="button" type="button">
              <span className="button__text">Download CV</span>
              <span className="button__icon">
                <.////</span>svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 35" className="svg">
                  <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                  <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                  <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="relative lg:w-1/2.5 p-6 flex justify-center items-center">
        <img src={photo} alt="profile" className="w-full h-full object-fill rounded-2xl" />
      </div>
    </div>
  );
}

export default Home;
