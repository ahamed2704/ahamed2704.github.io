import "./Navigation.css";

function Navigation() {
  const links = [
    {
      label: "Experience",
      target: "experience",
    },
    {
      label: "Projects",
      target: "projects",
    },
    {
      label: "Skills",
      target: "skills",
    },
    {
      label: "Education",
      target: "education",
    },
    {
      label: "Certifications",
      target: "certification",
    },
    {
      label: "Contact",
      target: "contact",
    },
  ];

  const handleNavigation = (target) => {
    const section = document.getElementById(target);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleLogoClick = () => {
    const dashboard = document.getElementById("dashboard");

    if (dashboard) {
      dashboard.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="site-navigation">

      <button
        className="nav-logo"
        onClick={handleLogoClick}
        type="button"
      >
        NR
      </button>

      <div className="nav-links">
        {links.map((link) => (
          <button
            key={link.target}
            className="nav-link"
            onClick={() => handleNavigation(link.target)}
            type="button"
          >
            {link.label}
          </button>
        ))}
      </div>

    </nav>
  );
}

export default Navigation;