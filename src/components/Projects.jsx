import "./Projects.css";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects({ setActiveSection }) {
  return (
    <section className="projects-page">

      {/* Back Button */}

      <button
        className="back-btn"
        onClick={() => setActiveSection(null)}
      >
        ← Dashboard
      </button>

      {/* Page Header */}

      <div className="portfolio-header">

        <h1 className="portfolio-label">
          PROJECTS
        </h1>

        <p className="portfolio-description">
          A collection of mechanical design, CAD modelling,
          engineering documentation and academic engineering
          projects showcasing practical design knowledge and
          product development experience.
        </p>

      </div>

      {/* Navigation */}

      <div className="portfolio-navigation">

        <a href="#mechanical">
          Mechanical Design
        </a>

        <a href="#academic">
          Academic Projects
        </a>

      </div>

      {/* Mechanical Design */}

      <section
        id="mechanical"
        className="project-category"
      >

        <div className="category-header">

          <h2>
            Mechanical Design Projects
          </h2>

          <span>
            {projects.mechanical.length} Projects
          </span>

        </div>

        <p className="category-description">

          Personal CAD design projects developed using CATIA V5
          focusing on product design, assemblies,
          engineering drawings and practical mechanical systems.

        </p>

        {projects.mechanical.map(project => (

          <ProjectCard
            key={project.id}
            project={project}
          />

        ))}

      </section>

      {/* Academic */}

      <section
        id="academic"
        className="project-category"
      >

        <div className="category-header">

          <h2>
            Academic Engineering Projects
          </h2>

          <span>
            {projects.academic.length} Projects
          </span>

        </div>

        <p className="category-description">

          Research and analytical engineering projects completed
          during undergraduate studies.

        </p>

        {projects.academic.map(project => (

          <ProjectCard
            key={project.id}
            project={project}
          />

        ))}

      </section>

      {/* Professional */}

      {/* <section
        id="professional"
        className="project-category"
      >

        <div className="category-header">

          <h2>
            Professional Engineering
          </h2>

          <span>
            Current
          </span>

        </div>

        <p className="category-description">

          Engineering work carried out during professional
          experience at Magnum Wings.

        </p>

        <div className="professional-box">

          <h3>
            {projects.professional[0].title}
          </h3>

          <h4>
            {projects.professional[0].company}
          </h4>

          <p>

            {projects.professional[0].description}

          </p>

          <div className="status">

            {projects.professional[0].status}

          </div>

        </div>

      </section> */}

    </section>
  );
}

export default Projects;