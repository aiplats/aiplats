import React from 'react'
import './Project.css'
import { projects, freelance, wordpressProjects, skillsIcons } from '../assets/assets'

import { HiArrowTopRightOnSquare } from 'react-icons/hi2'
import { FiMail, FiBriefcase } from 'react-icons/fi';
import { Contact } from '../Contact/Contact';

function Project() {

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
      <div className="main-project-page">
        <div className="project-tags">
            <h1>FEATURED PROJECTS</h1>
            <p>"A showcase of ideas brought to life — blending creativity and code into meaningful digital experiences, each project crafted with the goal of solving real problems, pushing boundaries, and leaving a lasting impact."</p>
          </div>

        <div className="projects-container"> 
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

        <div className="projects-container"> 
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

        <div className="projects-container"> 
          <h2>03 - WORDPRESS PROJECT</h2>
          <div className="project-sub-container">
              {wordpressProjects.map((proj, index) => {
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

        <section className="project-cta-section">
          <div className="project-cta-details">
            <h2>Want to start your own website?</h2>
            <p>Explore the different ways I can help bring your website idea to life.</p>
          </div>
          <div className="project-cta-buttons">
            <a href="/Services" className="btn btn-primary"><FiBriefcase size={22} style={{ marginRight: '10px', verticalAlign: 'middle' }} />
            What I offer</a>
            <a
              href="#contact-section"
              className="btn btn-secondary"
              onClick={(e) => {
                e.preventDefault()  
                const element = document.getElementById('contact-section');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            ><FiMail size={24} style={{marginRight: '10px', verticalAlign: "middle"}}/>Let's Work Together!</a>
          </div>
        </section>
      </div>

      <div id="contact-section">
        <Contact />
      </div>
    </>
  )
}

export default Project;
