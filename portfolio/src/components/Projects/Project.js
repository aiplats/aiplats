import React from 'react'
import './Project.css'
import { projects, skillsIcons } from '../assets/assets'

export const Project = () => {

  const getIconByTitle = (title) => {
    return skillsIcons.find(skill => skill.title === title.toUpperCase());
  };

  const handleProjectClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <>
      <div className="main-project-page" id='Projects'>
        <div className="project-container">
          <h1>PROJECTS</h1>
          <div className="line"></div>
          <div className="project-sub-container">
              {projects.map((proj, index) => {
                return (
                <React.Fragment  key={index}>
                  <div className="project-content" onClick={() => handleProjectClick (proj.link)}>
                    <img src={proj.project} alt={proj.name}/>
                    <div className="project-details">
                      <p>{proj.name}</p>
                      <p>{proj.desc}</p>

                      <br />

                      <p>Tech Stack used:</p>
                      <div className="techstack-icons">
                        {proj.techstack.map((tech, i) => {
                          const techIcon = getIconByTitle(tech);
                          return techIcon ? (
                            <img 
                              key={i} 
                              src={techIcon.icon} 
                              alt={techIcon.title} 
                              title={techIcon.title}
                              className="tech-icon"
                            />
                          ) : (
                            <span key={i} className="tech-text">{tech}</span> // fallback if no icon
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </React.Fragment>
                );
              })}
          </div>
        </div>
      </div>
    </>
  )
}
