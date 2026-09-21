import "./Hero.css";

function Hero() {
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
    <section className="hero">

      <div className="hero-content">

        <div className="hero-wing">
          ✈
        </div>

        <h1>
          Nasar Ahamed Shaik
        </h1>

        <h2>
          Mechanical Design Engineer
        </h2>

        <p>
          Mechanical Engineer with hands-on experience in CAD modeling, mechanical design, assembly development, and surface modeling using CATIA V5, AutoCAD, and Fusion 360.
          Currently involved in UAV product development, designing components and assemblies, preparing engineering drawings and BOMs, and supporting prototype and assembly activities.
        </p>

        <button
          className="hero-scroll"
          onClick={scrollToDashboard}
          type="button"
        >
          <span>
            Explore Portfolio
          </span>

          <span className="hero-scroll-arrow">
            ↓
          </span>
        </button>

      </div>

    </section>
  );
}

export default Hero;