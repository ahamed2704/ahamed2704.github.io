import "./Education.css";

function Education({ setActiveSection }) {
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
    <section className="education-page">
      <button
        className="back-btn"
        onClick={scrollToDashboard}
        type="button"
      >
        ↑ Dashboard
      </button>

      <div className="education-header">
        <span className="section-index">
          04 / EDUCATION
        </span>

        <h1 className="education-title">
          Education
        </h1>

        <p className="education-description">
          Academic foundation in Mechanical Engineering with
          continued technical development.
        </p>
      </div>

      <div className="education-grid">

        {/* =========================
            B.TECH
        ========================= */}

        <article className="education-card">

          <div className="education-card-top">
            <span className="education-number">
              01
            </span>

            <div className="education-result">
              <span>CGPA: </span>
              <strong>8.13</strong>
            </div>
          </div>

          <div className="education-content">

            <span className="education-period">
              JUL 2017 — SEP 2021
            </span>

            <h2>
              B.Tech
            </h2>

            <h3>
              Mechanical Engineering
            </h3>

            <p>
              R.V.R. & J.C. College of Engineering
            </p>

          </div>

          <div className="education-line" />

          <div className="education-bottom">
            <span>
              MECHANICAL ENGINEERING
            </span>

            <span>
              GRADUATE
            </span>
          </div>

        </article>


        {/* =========================
            AP PGECET
        ========================= */}

        <article className="education-card">

          <div className="education-card-top">
            <span className="education-number">
              02
            </span>

            <div className="education-result">
              <span>STATE RANK: </span>
              <strong>37</strong>
            </div>
          </div>

          <div className="education-content">

            <span className="education-period">
              2026
            </span>

            <h2>
              AP PGECET
            </h2>

            <h3>
              Mechanical Engineering
            </h3>

            <p>
              Andhra Pradesh Post Graduate Engineering
              Common Entrance Test
            </p>

          </div>

          <div className="education-line" />

          <div className="education-bottom">
            <span>
              ENTRANCE EXAMINATION
            </span>

            <span>
              RANK 37
            </span>
          </div>

        </article>

      </div>
    </section>
  );
}

export default Education;