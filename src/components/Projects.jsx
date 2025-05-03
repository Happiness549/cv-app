import React, { useState } from 'react';

const Projects = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [projects, setProjects] = useState([]);

  const handleAddProject = (e) => {
    e.preventDefault();
    if (title && description) {
      const newProject = { title, description };
      setProjects([...projects, newProject]);
      setTitle('');
      setDescription('');
    }
  };

  return (
    <section className="projects">
      <h2>Projects</h2>
      <form onSubmit={handleAddProject}>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /><br />
        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
        /><br />
        <button type="submit">Add Project</button>
      </form>

      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <strong>{project.title}</strong>: {project.description}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;