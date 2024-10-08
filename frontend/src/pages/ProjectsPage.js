import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/projects`)
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.log('Error fetching projects:', error);
      });
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map(project => (
          <li key={project._id}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectsPage;
