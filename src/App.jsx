import "./App.css";

import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certification from "./components/Certification";
import Contact from "./components/Contact";

function App() {
  const scrollToSection = (section) => {
    const target = document.getElementById(section);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="app">
      <Hero />

      <Navigation />

      <main>
        <section
          id="dashboard"
          className="portfolio-section dashboard-section"
        >
          <Dashboard setActiveSection={scrollToSection} />
        </section>

        <section
          id="experience"
          className="portfolio-section"
        >
          <Experience setActiveSection={scrollToSection} />
        </section>

        <section
          id="projects"
          className="portfolio-section"
        >
          <Projects setActiveSection={scrollToSection} />
        </section>

        <section
          id="skills"
          className="portfolio-section"
        >
          <Skills setActiveSection={scrollToSection} />
        </section>

        <section
          id="education"
          className="portfolio-section"
        >
          <Education setActiveSection={scrollToSection} />
        </section>

        <section
          id="certification"
          className="portfolio-section"
        >
          <Certification setActiveSection={scrollToSection} />
        </section>

        <section
          id="contact"
          className="portfolio-section contact-section"
        >
          <Contact setActiveSection={scrollToSection} />
        </section>
      </main>

      <footer className="portfolio-footer">
        <div className="footer-line" />

        <div className="footer-content">
          <span>AHAMED</span>

          <span>
            MECHANICAL DESIGN ENGINEER
          </span>

          <span>
            © {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;