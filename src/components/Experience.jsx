import "./Experience.css";

function Experience({ setActiveSection }) {
  const experiences = [
    {
      icon: "✈️",
      company: "Magnumwings",
      role: "Junior Mechanical Engineer",
      duration: "Mar 2026 – Present",

      responsibilities: [
        "Designing and modified UAV components using CATIA V5.",
        "Preparing engineering drawings, BOMs and manufacturing documentation.",
        "Supporting UAV prototype assembly and subsystem integration.",
      ]
    },

    {
      icon: "📐",
      company: "AIMES IT & HEALTH CARE",
      role: "CAD Design Engineer",
      duration: "Jun 2024 – Jan 2026",

      responsibilities: [
        "Executed 5+ engineering CAD projects using AutoCAD.",
        "Developed detailed 2D engineering drawings.",
        "Prepared technical documentation and drawing revisions.",
        "Maintained dimensional accuracy and manufacturing compliance."
      ]
    },

    {
      icon: "💻",
      company: "Infosys Ltd.",
      role: "Systems Engineer",
      duration: "Nov 2021 – Jul 2023",

      responsibilities: [
        "Supported Oracle Banking production applications.",
        "Performed incident analysis and production troubleshooting.",
        "Worked in SLA-driven production support environment.",
        "Maintained documentation and deployment quality."
      ]
    }
  ];

  return (
    <section className="experience-section">

      <button
        className="back-btn"
        onClick={() => setActiveSection(null)}
      >
        ← Dashboard
      </button>

      <h1>Professional Experience</h1>

      <div className="experience-grid">

        {experiences.map((exp, index) => (

          <div className="experience-card" key={index}>

            <div className="exp-icon">
              {exp.icon}
            </div>

            <h2>{exp.company}</h2>

            <h3>{exp.role}</h3>

            <span className="duration">
              {exp.duration}
            </span>

            <ul className="responsibilities">

              {exp.responsibilities.map((item, i) => (

                <li key={i}>{item}</li>

              ))}

            </ul>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Experience;