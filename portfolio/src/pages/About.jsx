import React, { useState, useEffect } from 'react';
import { Waypoint } from 'react-waypoint';
import ProgressBar from '../component/ProgressBar'; 
import Loading from '../component/Loading';

import '../App.css';
import '../tailwind.css';

const skillProgress = {
  backend: {
    Laravel: 85,
    Php: 80,
  },
  frontend: {
    JavaScript: 70,
    HTML: 98,
    CSS: 90,
    Tailwind: 85,
    React: 67,
    TypeScript: 50,
  },
  otherTools: {
    Git: 80,
    Github: 80,
    Docker: 50,
    MySQL: 80,
  },
};

function About() {
  const [progress, setProgress] = useState({
    backend: {
      Laravel: 0,
      Php: 0,
    },
    frontend: {
      JavaScript: 0,
      HTML: 0,
      CSS: 0,
      Tailwind: 0,
      React: 0,
      TypeScript: 0,
    },
    otherTools: {
      Git: 0,
      Github: 0,
      Docker: 0,
      MySQL: 0,
    },
  });

  const handleWaypointEnter = () => {
    setProgress(skillProgress);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 
  
    return () => clearTimeout(timer);
  }, []);
 
  return (
    <>
      {loading && (
        <Loading />
      )}
      <div className={`w-full mt-24 pl-12 px-4 md:px-28 bg-black text-white ${loading ? 'blur-xl' : ''}`}>
        <div className="flex flex-col gap-16">
          <div>
            <h1 className="text-4xl md:text-7xl mb-4 text-white" style={{ fontFamily: 'cursive' }}>About Me</h1>
            <div className="w-full border border-white"></div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="text-2xl flex flex-col justify-center text-white" style={{ fontFamily: 'cursive' }}>
              <p>Abit about my self</p>
            </div>
            <p className="text-lg md:text-xl  max-w-xl text-white" style={{ fontFamily: 'cursive' }}>
              Hi, I'm Youssef, a full-stack developer studying at YouCode Simplon-UP6P. I have a passion for building dynamic and user-friendly web applications using both front-end and back-end technologies. My education has equipped me with a solid understanding of the entire development lifecycle, and I love solving complex problems and staying updated with the latest industry trends. Outside of coding, I enjoy playing football, going on trips, and traveling. I'm excited about collaborating on innovative projects and bringing creative ideas to life.
            </p>
          </div>
          <div className='text-3xl md:text-5xl mb-8'>Skills</div>
          <Waypoint onEnter={handleWaypointEnter}>
            <div className="flex flex-col gap-20 w-full">
              <div className="w-full flex flex-col md:flex-row justify-between px-4">
                <div className="text-2xl mb-4 flex flex-col justify-center" style={{ fontFamily: 'cursive' }}>Frontend</div>
                <div className='max-w-2xl w-full'>
                  {Object.keys(skillProgress.frontend).map((skill) => (
                    <div key={skill} className="mb-4 w-full">
                      <p className="text-lg mb-2">{skill}</p>
                      <ProgressBar completed={progress.frontend[skill]} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-between px-4">
                <div className="text-2xl mb-4 flex flex-col justify-center" style={{ fontFamily: 'cursive' }}>Backend</div>
                <div className='max-w-2xl w-full'>
                  {Object.keys(skillProgress.backend).map((skill) => (
                    <div key={skill} className="mb-4 w-full">
                      <p className="text-lg mb-2">{skill}</p>
                      <ProgressBar completed={progress.backend[skill]} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-between px-4">
                <div className="text-2xl mb-4 flex flex-col justify-center" style={{ fontFamily: 'cursive' }}>Other Tools</div>
                <div className='max-w-2xl w-full'>
                  {Object.keys(skillProgress.otherTools).map((skill) => (
                    <div key={skill} className="mb-4 w-full">
                      <p className="text-lg mb-2">{skill}</p>
                      <ProgressBar completed={progress.otherTools[skill]} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Waypoint>
        </div>
      </div>
    </>
  );
}

export default About;
