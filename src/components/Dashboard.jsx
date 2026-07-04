import "./Dashboard.css";

function Dashboard({ setActiveSection }) {
  const cards = [
    {
      title: "Professional Experience",
      subtitle: "Infosys | AIMES | Magnumwings",
      icon: "⚙",
      key: "experience",
    },

    {
      title: "Projects",
      subtitle: "CATIA V5 | Academic Projects",
      icon: "📐",
      key: "projects",
    },

    {
      title: "Skills",
      subtitle: "CAD | Design | Manufacturing",
      icon: "🛠",
      key: "skills",
    },

    {
      title: "Academic Foundation",
      subtitle: "B.Tech | AP PGECET Rank 37",
      icon: "🎓",
      key: "education",
    },

    {
      title: "Certifications",
      subtitle: "CATIA | Fusion 360 | AutoCAD",
      icon: "🏆",
      key: "certification",
    },

    {
      title: "Contact",
      subtitle: "Let's Connect",
      icon: "📡",
      key: "contact",
    },
  ];

  return (
    <section className="dashboard">
      {cards.map((card) => (
        <div
          key={card.key}
          className="tech-card"
          onClick={() => setActiveSection(card.key)}
        >

          <div className="card-icon">{card.icon}</div>

          <h3>{card.title}</h3>

          <p>{card.subtitle}</p>
        </div>
      ))}
    </section>
  );
}

export default Dashboard;