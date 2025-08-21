import React from "react";
import './AboutSkills.css'
import { motion } from "framer-motion";

const AboutSkills = ({ skills, title, icon, direction = "left" }) => {
  const uniqueSkills = skills.filter((skill, index, self) => 
    index === self.findIndex((s) => s.title === skill.title)
  );
  
  const duplicatedSkills = Array(6).fill(uniqueSkills).flat();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const headerVariants = {
    hidden: { 
      opacity: 0, 
      x: direction === "left" ? -50 : 50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
    }
  };

  // Carousel animation based on direction
  const carouselAnimation = direction === "left" 
    ? { x: ["0%", "-100%"] }
    : { x: ["-100%", "0%"] };

  return (
    <motion.div 
      className={`skills-section ${direction}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="skills-content">
        {/* Category Header */}
        <motion.div
          className={`skills-category-header ${direction}`}
          variants={headerVariants}
        >
          <div className="header-content">
            {icon && (
              <div className="category-icon-wrapper">
                <img src={icon} alt={`${title} icon`} className="category-icon" />
              </div>
            )}
            <div className="header-text">
              <h3 className="category-title">{title}</h3>
              <p className="skills-count">{uniqueSkills.length} Technologies</p>
            </div>
          </div>
          <div className="header-line"></div>
        </motion.div>

        {/* Skills Carousel */}
        <div className="skills-carousel-container">
          <div className="skills-carousel">
            <div className="carousel-wrapper">
              <motion.div
                className="carousel-track"
                animate={carouselAnimation}
                transition={{ 
                  repeat: Infinity, 
                  duration: 25, 
                  ease: "linear" 
                }}
              >
                {duplicatedSkills.map((skill, index) => (
                  <div className="skill-item" key={`${skill.title}-${index}`}>
                    <div className="skill-icon-wrapper">
                      <img
                        src={skill.icon}
                        alt={skill.title || skill.name || `Skill ${index}`}
                        title={skill.title || skill.name || `Skill ${index}`}
                        className="skill-icon"
                      />
                      <div className="skill-glow"></div>
                    </div>
                    <div className="skill-info">
                      <p className="skill-name">{skill.title || skill.name}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
          
          {/* Gradient Overlays */}
          <div className="carousel-gradient carousel-gradient-left"></div>
          <div className="carousel-gradient carousel-gradient-right"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutSkills;