import { useState } from "react";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  const specification = project.specification || {};

  const toggleProject = () => {
    setExpanded((current) => !current);
  };

  return (
    <article
      className={`project-card ${expanded ? "project-card-expanded" : ""}`}
    >

      {/* =========================
          PROJECT HEADER
          ========================= */}

      <button
        className="project-header"
        onClick={toggleProject}
        type="button"
        aria-expanded={expanded}
      >

        <div className="project-header-content">

          <div className="project-number">
            {String(project.id).padStart(2, "0")}
          </div>

          <div className="project-title-area">

            <h2>
              {project.title}
            </h2>

            <div className="project-meta">

              {specification.domain && (
                <span>
                  {specification.domain}
                </span>
              )}

              {specification.software && (
                <span>
                  {specification.software}
                </span>
              )}

              {specification.status && (
                <span>
                  {specification.status}
                </span>
              )}

            </div>

          </div>

        </div>


        {/* Expand indicator */}

        <div className="project-expand">

          <span>
            {expanded ? "CLOSE" : "VIEW"}
          </span>

          <span className="expand-icon">
            {expanded ? "↑" : "↓"}
          </span>

        </div>

      </button>


      {/* =========================
          PROJECT DETAILS
          ========================= */}

      {expanded && (

        <div className="project-body">

          {/* =========================
              IMAGE
              ========================= */}

          {project.image && (

            <div className="project-image-wrapper">

              <img
                src={project.image}
                alt={`${project.title} project`}
                className="project-image"
              />

            </div>

          )}


          {/* =========================
              PROJECT SPECIFICATION
              ========================= */}

          {Object.keys(specification).length > 0 && (

            <section className="project-detail-section">

              <h3>
                PROJECT SPECIFICATION
              </h3>

              <div className="spec-grid">

                {specification.software && (

                  <div className="spec-row">

                    <span>
                      CAD Software
                    </span>

                    <strong>
                      {specification.software}
                    </strong>

                  </div>

                )}

                {specification.projectType && (

                  <div className="spec-row">

                    <span>
                      Project Type
                    </span>

                    <strong>
                      {specification.projectType}
                    </strong>

                  </div>

                )}

                {specification.designApproach && (

                  <div className="spec-row">

                    <span>
                      Design Approach
                    </span>

                    <strong>
                      {specification.designApproach}
                    </strong>

                  </div>

                )}

                {specification.domain && (

                  <div className="spec-row">

                    <span>
                      Engineering Domain
                    </span>

                    <strong>
                      {specification.domain}
                    </strong>

                  </div>

                )}

                {specification.status && (

                  <div className="spec-row">

                    <span>
                      Status
                    </span>

                    <strong>
                      {specification.status}
                    </strong>

                  </div>

                )}

              </div>

            </section>

          )}


          {/* =========================
              OVERVIEW
              ========================= */}

          {project.overview && (

            <section className="project-detail-section">

              <h3>
                PROJECT OVERVIEW
              </h3>

              <p>
                {project.overview}
              </p>

            </section>

          )}


          {/* =========================
              CATIA WORKBENCHES
              ========================= */}

          {project.workbenches &&
            project.workbenches.length > 0 && (

              <section className="project-detail-section">

                <h3>
                  CATIA WORKBENCHES
                </h3>

                <div className="tag-container">

                  {project.workbenches.map(
                    (item, index) => (

                      <span
                        className="tag"
                        key={index}
                      >
                        {item}
                      </span>

                    )
                  )}

                </div>

              </section>

            )}


          {/* =========================
              DESIGN FEATURES
              ========================= */}

          {project.designFeatures &&
            project.designFeatures.length > 0 && (

              <section className="project-detail-section">

                <h3>
                  KEY DESIGN FEATURES
                </h3>

                <ul>

                  {project.designFeatures.map(
                    (item, index) => (

                      <li key={index}>
                        {item}
                      </li>

                    )
                  )}

                </ul>

              </section>

            )}


          {/* =========================
              DESIGN CONSIDERATIONS
              ========================= */}

          {project.designConsiderations &&
            project.designConsiderations.length > 0 && (

              <section className="project-detail-section">

                <h3>
                  DESIGN CONSIDERATIONS
                </h3>

                <ul>

                  {project.designConsiderations.map(
                    (item, index) => (

                      <li key={index}>
                        {item}
                      </li>

                    )
                  )}

                </ul>

              </section>

            )}


          {/* =========================
              ANALYSIS & VALIDATION
              ========================= */}

          {project.analysisAndValidation &&
            project.analysisAndValidation.length > 0 && (

              <section className="project-detail-section">

                <h3>
                  ANALYSIS & VALIDATION
                </h3>

                <ul>

                  {project.analysisAndValidation.map(
                    (item, index) => (

                      <li key={index}>
                        {item}
                      </li>

                    )
                  )}

                </ul>

              </section>

            )}


          {/* =========================
              METHODOLOGY
              ========================= */}

          {project.methodology &&
            project.methodology.length > 0 && (

              <section className="project-detail-section">

                <h3>
                  METHODOLOGY
                </h3>

                <ul>

                  {project.methodology.map(
                    (item, index) => (

                      <li key={index}>
                        {item}
                      </li>

                    )
                  )}

                </ul>

              </section>

            )}


          {/* =========================
              OUTCOME
              ========================= */}

          {project.outcome && (

            <section className="project-detail-section">

              <h3>
                PROJECT OUTCOME
              </h3>

              <p>
                {project.outcome}
              </p>

            </section>

          )}


          {/* =========================
              TECHNICAL SKILLS
              ========================= */}

          {project.skills &&
            project.skills.length > 0 && (

              <section className="project-detail-section">

                <h3>
                  TECHNICAL SKILLS DEMONSTRATED
                </h3>

                <div className="tag-container">

                  {project.skills.map(
                    (item, index) => (

                      <span
                        className="tag"
                        key={index}
                      >
                        {item}
                      </span>

                    )
                  )}

                </div>

              </section>

            )}

        </div>

      )}

    </article>
  );
}

export default ProjectCard;