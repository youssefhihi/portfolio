import React from 'react';
import { IoEyeOutline } from "react-icons/io5";
import '../App.css';



const ProjectCard =({ image, title, description, link }) => {
    return (
        <li className="project-item active">
            <a target='_blank' rel='noreferrer' href={link}>
          <figure className="project-img">
            <div className="project-item-icon-box backdrop-blur-xl p-6 rounded-full ">
            <IoEyeOutline className='  text-white  text-xl'/>
            </div>
            <img src={image} alt="Fundo project screenshot" loading="lazy" />
          </figure>
          <h3 className="text-center text-xl text-white mb-2 " style={{ fontFamily: 'cursive' }}>{title}</h3>
          <p className="text-sm text-white max-w-sm text-center " style={{ fontFamily: 'cursive' }}>{description}</p>
        </a>
      </li>
    );
};

export default ProjectCard;