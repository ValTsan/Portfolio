import "./Projects.css";
import "../../utils/projectsData";

function Projects() {
  return (
    <section className="projects">
      <div className="projects__title">My Projects</div>
      <div className="projects__grid">
        <div className="project__card">
          <div className="project__image"></div>
          <div className="project__content"></div>
          <h3 className="project__title">Project Title</h3>
          <p className="project__description">
            A brief description of the project goes here. It should be concise
            and informative.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
