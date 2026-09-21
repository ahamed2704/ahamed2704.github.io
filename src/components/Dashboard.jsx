import "./Dashboard.css";

function Dashboard({ setActiveSection }) {
  const cards = [
    {
      id: "01",
      title: "Professional Experience",
      subtitle: "Infosys | AIMES | Magnumwings",
      icon: "⚙",
      key: "experience",
    },
    {
      id: "02",
      title: "Projects",
      subtitle: "CATIA V5 | Academic Projects",
      icon: "📐",
      key: "projects",
    },
    {
      id: "03",
      title: "Skills",
      subtitle: "CAD | Design | Manufacturing",
      icon: "🛠",
      key: "skills",
    },
    {
      id: "04",
      title: "Academic Foundation",
      subtitle: "B.Tech | AP PGECET Rank 37",
      icon: "🎓",
      key: "education",
    },
    {
      id: "05",
      title: "Certifications",
      subtitle: "CATIA | Fusion 360 | AutoCAD",
      icon: "🏆",
      key: "certification",
    },
    {
      id: "06",
      title: "Contact",
      subtitle: "Let's Connect",
      icon: "📡",
      key: "contact",
    },
  ];

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  return (
    <section className="dashboard">

      {cards.map((card) => (
        <button
          key={card.key}
          className="tech-card"
          onClick={() => handleNavigation(card.key)}
          type="button"
        >
          <div className="card-id">{card.id}</div>

          <div className="big-number">
            {card.id}
          </div>

          <div className="card-icon">
            {card.icon}
          </div>

          <h3>
            {card.title}
          </h3>

          <p>
            {card.subtitle}
          </p>

          <div className="card-arrow">
            ↓
          </div>
        </button>
      ))}

    </section>
  );
}

export default Dashboard;