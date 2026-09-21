import "./Certification.css";

function Certification({ setActiveSection }) {
  const certifications = [
    {
      number: "01",
      title: "CATIA V5",
      /*category: "CAD / PRODUCT DESIGN",*/
      description:
        "3DEXPERIENCE - Mechanical Designer at the level of PROFESSIONAL",
      skills: [
        "Part Design",
        "3D Modelling",
        "Engineering Drawings",
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


          </article>

        ))}

      </div>

    </section>
  );
}

export default Certification;