import { useState } from "react";
import "./App.css";

import Hero from "./components/Hero";
import Dashboard from "./components/Dashboard";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certification from "./components/Certification";
import Contact from "./components/Contact";

function App() {
  const [activeSection, setActiveSection] = useState("dashboard");

  const renderSection = () => {
    switch (activeSection) {
      case "experience":
        return <Experience setActiveSection={setActiveSection} />;

      case "projects":
        return <Projects setActiveSection={setActiveSection} />;

      case "skills":
        return <Skills setActiveSection={setActiveSection} />;

      case "education":
        return <Education setActiveSection={setActiveSection} />;

      case "certification":
        return <Certification setActiveSection={setActiveSection} />;

      case "contact":
        return <Contact setActiveSection={setActiveSection} />;

      default:
        return <Dashboard setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="app">
      <Hero />
      {renderSection()}
    </div>
  );
}

export default App;