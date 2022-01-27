import React from 'react';
import Navigation from '../components/Navigation';
import ProjectCard from '../components/ProjectCard';
import 'bootstrap/dist/css/bootstrap.min.css'
import { projectData } from '../assets/data/projects';
import './projects.css'


const data = projectData

const Projects = () => {
  return (
    <div className='container'>
      <Navigation />
      <div className='projectsContainer'>
        {data.map( project => <div key={project.id}> <ProjectCard project={project}/> </div> )}
      </div>
    </div>
  );
};

export default Projects;
