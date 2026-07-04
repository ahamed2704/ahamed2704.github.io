import { FaBriefcase } from "react-icons/fa";
import { FaProjectDiagram } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import "./SectionCards.css";

function SectionCards() {
  const sections = [
    {
      title: "Experience",
      icon: <FaBriefcase />,
    },
    {
      title: "Projects",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Skills",
      icon: <FaTools />,
    },
    {
      title: "Education",
      icon: <FaGraduationCap />,
    },
    {
      title: "Contact",
      icon: <FaEnvelope />,
    },
  ];

  return (
    <div className="card-grid">
      {sections.map((item, index) => (
        <div className="main-card" key={index}>
          {item.icon}
          <h3>{item.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default SectionCards;