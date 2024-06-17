import React from 'react';
import '../tailwind.css';
import { FaLinkedinIn, FaFacebook, FaGithub, FaTwitter,FaWhatsapp } from 'react-icons/fa';

const socialProfiles = {
  facebook: "https://facebook.com",
  github: "https://github.com/youssefhihi",
  whatsapp: "https://wa.me/+212648233165",
  linkedin: "https://www.linkedin.com/in/youssef-hihi/",
};
function Icons() {
  return (

    <div className="fixed left-3 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 p-2 z-10">

    <div className="flex flex-col space-y-4">
    <div className=' ml-1.5 h-8 w-0 border border-white'></div>

  
      <a href={socialProfiles.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
        <FaFacebook size={19} />
      </a>
      <a href={socialProfiles.github} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
        <FaGithub size={19} />
      </a>
      <a href={socialProfiles.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
        <FaWhatsapp size={19} />
      </a>
      <a href={socialProfiles.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
      <FaLinkedinIn size={19} />
      </a>
      <div className=' ml-1.5 h-8 w-0 border border-white'></div>
      
    </div>
  </div> 
     
    );
}

export default Icons;
