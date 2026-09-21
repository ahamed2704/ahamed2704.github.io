import "./Experience.css";

function Experience({ setActiveSection }) {
  const experiences = [
    {
      number: "01",
      icon: "✈️",
      company: "Magnumwings",
      role: "Junior Mechanical Engineer",
      duration: "Mar 2026 – Present",

      responsibilities: [
        "Designed and modified UAV components using CATIA V5.",
        "Prepared engineering drawings, BOMs and manufacturing documentation.",
        "Supported UAV prototype assembly and subsystem integration.",
      ],
    },

    {
      number: "02",
      icon: "📐",
      company: "AIMES IT & HEALTH CARE",
      role: "CAD Design Engineer",
      duration: "Jun 2024 – Jan 2026",

      responsibilities: [
        "Executed 5+ engineering CAD projects using AutoCAD.",
        "Developed detailed 2D engineering drawings.",
        "Prepared technical documentation and drawing revisions.",
        "Maintained dimensional accuracy and manufacturing compliance.",
      ],
    },

    {
      number: "03",
      icon: "💻",
      company: "Infosys Ltd.",
      role: "Systems Engineer",
      duration: "Nov 2021 – Jul 2023",

      responsibilities: [
        "Supported Oracle Banking production applications.",
        "Performed incident analysis and production troubleshooting.",
        "Worked in an SLA-driven production support environment.",
        "Maintained documentation and deployment quality.",
      ],
    },
  ];

  return (
    <section className="experience-section">

      {/* =========================
          BACK TO DASHBOARD
          ========================= */}

      <button
        className="back-btn"
        onClick={() => setActiveSection("dashboard")}
        type="button"
      >
        ↑ Dashboard
      </button>


      {/* =========================
          HEADER
          ========================= */}

      <div className="experience-header">

        <span className="section-index">
          01 / CAREER
        </span>

        <h1>
          Professional Experience
        </h1>

        <p>
          Professional experience across mechanical design,
          CAD development, UAV product development and
          technical production support.
        </p>

      </div>


      {/* =========================
          EXPERIENCE TIMELINE
          ========================= */}

      <div className="experience-timeline">

        {experiences.map((exp) => (

          <article
            className="experience-card"
            key={exp.number}
          >

            {/* Timeline indicator */}

            <div className="timeline-marker">

              <span>
                {exp.number}
              </span>

            </div>


            {/* Card */}

            <div className="experience-card-content">

              <div className="experience-top">

                <div className="exp-icon">
                  {exp.icon}
                </div>

                <span className="duration">
                  {exp.duration}
                </span>

              </div>


              <h2>
                {exp.company}
              </h2>

              <h3>
                {exp.role}
              </h3>


              <div className="experience-divider" />


              <ul className="responsibilities">

                {exp.responsibilities.map(
                  (item, index) => (

                    <li key={index}>
                      {item}
                    </li>

                  )
                )}

              </ul>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Experience;