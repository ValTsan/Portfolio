import { useState } from "react";
import "./Projects.css";
import projects from "../../utils/projectsData";

function Projects() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="projects">
      <div className="projects__title">My Projects</div>
      <div className="projects__grid">
        {projects.map((project, index) => (
          <div className="project__card" key={index}>
            <img
              src={project.image}
              alt={project.title}
              className="project__image"
            />
            <div className="project__content">
              <h3 className="project__title">{project.title}</h3>
              <p className="project__description">{project.description}</p>
              <p className="project__tech">
                {project.tech.map((tag, index) => (
                  <span className="tech-tag" key={index}>
                    {tag}
                  </span>
                ))}
              </p>
              <div className="project__links">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project__link"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="project__buttons">
        <a href="/projects" className="project__buttons-projects">
          View All Projects
        </a>
      </div>
    </section>
  );
}

export default Projects;
