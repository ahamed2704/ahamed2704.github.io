import "./Certification.css";

function Certification({ setActiveSection }) {
  const certifications = [
    {
      number: "01",
      title: "CATIA V5",
      category: "CAD / PRODUCT DESIGN",
      description:
        "Training and practical application of CATIA V5 for mechanical part modelling, surface design, assembly development and engineering design workflows.",
      skills: [
        "Part Design",
        "Generative Shape Design",
        "Assembly Design",
        "3D Modelling",
        "Engineering Drawings",
      ],
    },

    {
      number: "02",
      title: "Fusion 360",
      category: "CAD / MECHANICAL DESIGN",
      description:
        "CAD modelling and mechanical product development using Autodesk Fusion 360, including component modelling and assembly-oriented design.",
      skills: [
        "3D Modelling",
        "Mechanical Design",
        "Parametric CAD",
        "Assembly Development",
      ],
    },

    {
      number: "03",
      title: "AutoCAD",
      category: "CAD / ENGINEERING DRAWING",
      description:
        "Engineering drafting and technical drawing development using AutoCAD for detailed 2D mechanical documentation.",
      skills: [
        "2D Drafting",
        "Engineering Drawings",
        "Dimensioning",
        "Technical Documentation",
      ],
    },
  ];

  return (
    <section className="certification-section">

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

      <div className="certification-header">

        <span className="section-index">
          05 / CREDENTIALS
        </span>

        <h1>
          Certifications
        </h1>

        <p>
          Professional CAD and engineering software training
          supporting practical mechanical design and technical
          documentation capabilities.
        </p>

      </div>


      {/* =========================
          CERTIFICATION GRID
          ========================= */}

      <div className="certification-grid">

        {certifications.map((cert) => (

          <article
            className="certification-card"
            key={cert.number}
          >

            {/* Number */}

            <div className="certification-number">
              {cert.number}
            </div>


            {/* Header */}

            <div className="certification-card-header">

              <span className="certification-category">
                {cert.category}
              </span>

              <div className="certification-symbol">
                ✓
              </div>

            </div>


            {/* Title */}

            <h2>
              {cert.title}
            </h2>


            {/* Description */}

            <p className="certification-description">
              {cert.description}
            </p>


            {/* Skills */}

            <div className="certification-skills">

              {cert.skills.map((skill) => (

                <span
                  key={skill}
                >
                  {skill}
                </span>

              ))}

            </div>


            {/* Bottom line */}

            <div className="certification-footer">

              <span>
                CAD / ENGINEERING
              </span>

              <span>
                VERIFIED SKILLS
              </span>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Certification;