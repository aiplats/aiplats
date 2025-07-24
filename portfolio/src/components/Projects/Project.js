import React from 'react'
import './Project.css'
import { projects, freelance, skillsIcons } from '../assets/assets'

import { HiArrowTopRightOnSquare } from 'react-icons/hi2'

export const Project = () => {

  const getIconByTitle = (title) => {
    // Normalize both the input title and skill titles for comparison
    const normalizedInput = title.toLowerCase().trim();
    return skillsIcons.find(skill => 
      skill.title.toLowerCase().trim() === normalizedInput
    );
  };

  const handleProjectClick = (link) => {
    window.open(link, '_blank');
  };

  return (
    <>
      <div className="main-project-page" id='Projects'>
        <div className="project-container"> 
          <h1>PROJECTS</h1>
          <h2>01 - PERSONAL PROJECTS</h2>
          <div className="project-sub-container">
              {projects.map((proj, index) => {
                return (
                <React.Fragment  key={index}>
                  <div className="project-content">
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
                            <span key={i} className="tech-text">{tech}</span>
                          );
                        })}
                      </div>
                      <button onClick={() => handleProjectClick (proj.link)}><HiArrowTopRightOnSquare size={30}/>View Project</button>
                    </div>
                  </div>
                </React.Fragment>
                );
              })}
          </div>
        </div>

        <div className="project-container"> 
          <h2>02 - FREELANCE PROJECT</h2>
          <div className="project-sub-container">
              {freelance.map((proj, index) => {
                return (
                <React.Fragment  key={index}>
                  <div className="project-content">
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
                            <span key={i} className="tech-text">{tech}</span>
                          );
                        })}
                      </div>
                      <button onClick={() => handleProjectClick (proj.link)}><HiArrowTopRightOnSquare size={30}/>View Project</button>
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
