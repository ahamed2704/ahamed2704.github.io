import { useState } from "react";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  const specification = project.specification || {};

  return (
    <div className="project-card">

      {/* Header */}

      <div
        className="project-header"
        onClick={() => setExpanded(!expanded)}
      >

        <div>

          <h2>{project.title}</h2>

          <p className="project-click">

            {expanded ? "Hide Details ▲" : "View Details ▼"}

          </p>

        </div>

      </div>

      {/* Expanded Content */}

      {expanded && (

        <div className="project-body">

          {/* Image */}

          {project.image && (

            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

          )}

          {/* Project Specification */}

          <div className="specification">

            <h3>PROJECT SPECIFICATION</h3>

            <div className="spec-grid">

              {specification.software && (

                <div className="spec-row">

                  <span>CAD Software</span>

                  <strong>{specification.software}</strong>

                </div>

              )}

              {specification.projectType && (

                <div className="spec-row">

                  <span>Project Type</span>

                  <strong>{specification.projectType}</strong>

                </div>

              )}

              {specification.designApproach && (

                <div className="spec-row">

                  <span>Design Approach</span>

                  <strong>{specification.designApproach}</strong>

                </div>

              )}

              {specification.domain && (

                <div className="spec-row">

                  <span>Engineering Domain</span>

                  <strong>{specification.domain}</strong>

                </div>

              )}

              {specification.status && (

                <div className="spec-row">

                  <span>Status</span>

                  <strong>{specification.status}</strong>

                </div>

              )}

            </div>

          </div>

          {/* Overview */}

          <section>

            <h3>PROJECT OVERVIEW</h3>

            <p>{project.overview}</p>

          </section>

          {/* CATIA */}

          {project.workbenches && (

            <section>

              <h3>CATIA WORKBENCHES</h3>

              <div className="tag-container">

                {project.workbenches.map((item, index) => (

                  <span
                    className="tag"
                    key={index}
                  >
                    {item}
                  </span>

                ))}

              </div>

            </section>

          )}

          {/* Features */}

          {project.designFeatures && (

            <section>

              <h3>KEY DESIGN FEATURES</h3>

              <ul>

                {project.designFeatures.map((item, index) => (

                  <li key={index}>

                    {item}

                  </li>

                ))}

              </ul>

            </section>

          )}

          {/* Considerations */}

          {project.designConsiderations && (

            <section>

              <h3>DESIGN CONSIDERATIONS</h3>

              <ul>

                {project.designConsiderations.map((item, index) => (

                  <li key={index}>

                    {item}

                  </li>

                ))}

              </ul>

            </section>

          )}

          {/* Methodology */}

          {project.methodology && (

            <section>

              <h3>METHODOLOGY</h3>

              <ul>

                {project.methodology.map((item, index) => (

                  <li key={index}>

                    {item}

                  </li>

                ))}

              </ul>

            </section>

          )}

          {/* Outcome */}

          {project.outcome && (

            <section>

              <h3>PROJECT OUTCOME</h3>

              <p>{project.outcome}</p>

            </section>

          )}

          {/* Skills */}

          {project.skills && (

            <section>

              <h3>TECHNICAL SKILLS DEMONSTRATED</h3>

              <div className="tag-container">

                {project.skills.map((item, index) => (

                  <span
                    className="tag"
                    key={index}
                  >
                    {item}
                  </span>

                ))}

              </div>

            </section>

          )}

        </div>

      )}

    </div>
  );
}

export default ProjectCard;