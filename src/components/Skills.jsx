import "./Skills.css";

function Skills({ setActiveSection }) {
  const skillGroups = [
    {
      number: "01",
      title: "CAD & Product Design",
      description:
        "Computer-aided design and product development capabilities focused on mechanical components, assemblies and engineering documentation.",
      skills: [
        "CATIA V5",
        "Fusion 360",
        "AutoCAD",
        "3D Modelling",
        "Assembly Design",
        "Surface Design",
        "Engineering Drawings",
      ],
    },
    {
      number: "02",
      title: "Analysis & Engineering",
      description:
        "Engineering fundamentals and simulation exposure supporting structural and mechanical design decisions.",
      skills: [
        "ANSYS",
        "FEA",
        "CFD",
      ],
    },
    {
      number: "03",
      title: "Programming & Technical Tools",
      description:
        "Supporting technical tools used for engineering workflows, data handling and computational tasks.",
      skills: [
        "Python",
        "SQL",
        "Linux",
        "Data Analysis",
      ],
    },
  ];

  const scrollToDashboard = () => {
    const dashboard = document.getElementById("dashboard");

    if (dashboard) {
      dashboard.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="skills-section">
      <button
        className="back-btn"
        onClick={scrollToDashboard}
        type="button"
      >
        ↑ Dashboard
      </button>

      <div className="skills-header">
        <span className="section-index">
          03 / CAPABILITIES
        </span>

        <h1>Technical Skills</h1>

        <p>
          A combination of CAD design, mechanical engineering,
          analysis, manufacturing knowledge and technical tools
          developed through academic projects and professional
          experience.
        </p>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article
            className="skill-group"
            key={group.number}
          >
            <div className="skill-group-top">
              <span className="skill-number">
                {group.number}
              </span>

              <span className="skill-line" />
            </div>

            <h2>{group.title}</h2>

            <p className="skill-description">
              {group.description}
            </p>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <div
                  className="skill-item"
                  key={skill}
                >
                  <span className="skill-dot" />

                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;