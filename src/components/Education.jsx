import "./Education.css";

function Education({ setActiveSection }) {

  return (

    <section className="education-section">

      <button
        className="back-btn"
        onClick={() => setActiveSection(null)}
      >
        ← Dashboard
      </button>

      <h1>Education</h1>

      <div className="education-card">

        <h2>
          B.Tech in Mechanical Engineering
        </h2>

        <p>
          R.V.R. & J.C. College of Engineering
        </p>

        <h3>
          CGPA: 8.13
        </h3>

        <p>
          Graduated: 2021
        </p>

      </div>

      <div className="education-card">

        <h2>
          AP PGECET 2026
        </h2>

        <p>
          Mechanical Engineering
        </p>

        <h3>
          State Rank: 37
        </h3>

      </div>

    </section>

  );
}

export default Education;