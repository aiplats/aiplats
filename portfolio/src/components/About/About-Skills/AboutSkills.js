import React from "react";
import './AboutSkills.css'
import { motion } from "framer-motion";

const AboutSkills = ({ skills, title, icon }) => {
  const duplicatedSkills = [...skills, ...skills, ...skills, ...skills, ...skills];

  return (
    <div className="skills-carousel-container">

      <div className="skills-category-header">
        {icon && <img src={icon} alt={`${title} icon`} className="category-icon" />}
        <h2>{title}</h2>
      </div>

      <div className="skills-carousel">
        <motion.div
          className="carousel-track"
          animate={{ x: ["0%", "-40%"] }} 
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div className="carousel-item" key={index}>
              <img
                src={skill.icon}
                alt={skill.name || `Skill ${index}`}
                title={skill.title || `Skill ${index}`}
              />
              <p>{skill.title}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSkills;
