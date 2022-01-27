import React from 'react';
import './projectCard.css';

const ProjectCard = ( {project} ) => {
  return (
    <div className="card">
      <img
        src={project.img} className="card-img-top" alt="img"
      />
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.description}</p>
        <a href={project.link} target={'_blank'} rel='noreferrer' className="btn btn-secondary">Visit Site</a>
      </div>
    </div>
  );
};

export default ProjectCard;
