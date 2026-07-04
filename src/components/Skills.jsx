import "./Skills.css";

function Skills({ setActiveSection }) {

  return (

    <section className="skills-section">

      <button
        className="back-btn"
        onClick={() => setActiveSection(null)}
      >
        ← Dashboard
      </button>

      <h1>Skills</h1>

      <div className="skills-grid">

        <div className="skill-card">

          <h3>CAD Design & Tools</h3>

          <div className="skill-tags">
            <span>CATIA V5</span>
            <span>Fusion 360</span>
            <span>AutoCAD</span>
          </div>

        </div>

        <div className="skill-card">

          <h3>Mechanical Design</h3>

          <div className="skill-tags">
            <span>3D Modelling</span>
            <span>Surface Modelling</span>
            <span>Engineering Drafting</span>
            <span>BOM Preparation</span>
          </div>

        </div>

        <div className="skill-card">

          <h3>Technical Exposure</h3>

          <div className="skill-tags">
            <span>Linux</span>
            <span>Python</span>
            <span>SQL</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;