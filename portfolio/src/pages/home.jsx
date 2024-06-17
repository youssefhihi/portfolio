import React, { useState, useEffect } from 'react';
import photo from '../imgs/photo.jpeg';
import CV from '../imgs/YoussefHihiCV.pdf';
import Typewriter from 'typewriter-effect';
import '../tailwind.css';
import '../App.css';
import Icons from '../component/icons';
import Loading from '../component/Loading';




function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout as needed
  
    return () => clearTimeout(timer);
  }, []);
 
  return (
        <>
      {loading && (
       <Loading />
      )}
      <div className={`flex flex-col lg:flex-row p-5 w-full bg-black text-white lg:h-screen ${loading ? 'blur-xl	' : ''}`}>
              <Icons />
      <div className="lg:flex-1 flex flex-col justify-center p-10 lg:p-20 w-full">
        <div className="mb-8" style={{ fontFamily: 'cursive' }}>
          <h2 className="text-4xl font-bold mb-4 ">I'm <span className='hover:text-[#3cff1e]'>Youssef Hihi</span></h2>
          <h3 className="text-2xl mb-4 font-serif">
            <Typewriter
              options={{
                strings: ['I code cool webs', 'I build amazing applications', 'I love coding'],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <p className="text-xl font-normal mb-8">
          As a dedicated full-stack developer studying at YouCode Simplon - UM6P, I build dynamic and efficient web applications.
          </p>
          <div className="flex space-x-4 justify-center md:justify-normal">
          <a href={CV} download >
              <button className="buttonCV">
              Download CV
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="hidden md:block relative lg:w-1/2.5 p-6 flex justify-center items-center">
        <img src={photo} alt="profile" className="w-full h-full object-fill hover:shadow-2xl shadow-sm shadow-[#3cff1e] border-2 border-[#3cff1e] hover:shadow-[#3cff1e] duration-300 ease-in-out hover:scale-95 rounded-2xl" />
      </div>
    </div>
    </>
  );
}

export default Home;
