import React, { useState, useEffect } from 'react';

import Loading from '../component/Loading';
import ProjectCard from '../component/ProjectCard';
import image from '../imgs/bookify.png';
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
    image: image,
    title: 'Bookify',
    description: 'The project develops a modern library platform with community features, promoting interaction and efficient book management. It enhances user engagement, encourages reading, and streamlines operations with advanced functionalities.',
    link: 'https://github.com/youssefhihi/File-Rouge',
  },
  {
    image: image,
    title: 'Project Two',
    description: 'Description of the second project.',
    link: 'https://github.com/youssefhihi/Project-Two',
  },
];
function Portfolio() {
  
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
      <div className={`w-full mt-24 px-28 bg-black text-white ${loading ? 'blur-xl	' : ''}`}>  
        <div>
          <h1 className="text-7xl mb-4 text-white" style={{ fontFamily: 'cursive' }}>Portfolio</h1>
          <div className="w-full border border-white"></div>
        </div>      
        <ul className='flex flex-wrap gap-16 justify-center mt-10 '>

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
