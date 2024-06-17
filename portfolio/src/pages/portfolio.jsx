import React, { useState, useEffect } from 'react';

import Loading from '../component/Loading';
import ProjectCard from '../component/ProjectCard';
import image from '../imgs/bookify.png';
import evento from '../imgs/evento.png';
import MediConnect from '../imgs/mediConnect.png';
import wiki from '../imgs/wiki.png';
import '../tailwind.css';
import '../App.css';

const projects = [
  {
    image: image,
    title: 'Bookify',
    description: 'The project develops a modern library platform with community features, promoting interaction and efficient book management. It enhances user engagement, encourages reading, and streamlines operations with advanced functionalities.',
    link: 'https://github.com/youssefhihi/File-Rouge',
  },
  {
    image: evento,
    title: 'Evento',
    description: '"Evento" is an all-in-one platform for event management, offering booking, creation, and comprehensive administrative controls for participants, organizers, and administrators.',
    link: 'https://github.com/youssefhihi/Evento',
  },
  {
    image: MediConnect,
    title: 'MediConnect',
    description: 'MediConnect is a web platform enhancing medical communication and management, offering appointment scheduling, medication management, and consultation tracking to improve patient care and workflow efficiency.',
    link: 'https://github.com/youssefhihi/MediConnect',
  },
  {
    image: wiki,
    title: 'Wiki',
    description: 'Discover our user-friendly Wiki platform, enabling easy content management for administrators and seamless content creation, search, and sharing for users.',
    link: 'https://github.com/youssefhihi/Wiki',
  },
];

function Portfolio() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loading />}
      <div className={`w-full mt-24 pl-12 px-4 md:px-16 lg:px-28 bg-black text-white ${loading ? 'blur-xl' : ''}`}>
        <div>
          <h1 className="text-4xl md:text-7xl mb-4 text-white" style={{ fontFamily: 'cursive' }}>Portfolio</h1>
          <div className="w-full border border-white"></div>
        </div>
        <ul className='flex flex-wrap gap-8 md:gap-16 justify-center mt-10'>
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              image={project.image} 
              title={project.title}
              description={project.description} 
              link={project.link}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Portfolio;
