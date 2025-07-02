import React from 'react'
import './Project.css'
import { projects } from '../assets/assets'

export const Project = () => {
  return (
    <>
      <div className="main-project-page" id='Projects'>
        <div className="project-container">
          <h1>PROJECTS</h1>
          <div className="project-sub-container">
              {projects.map((proj, index) => {
                return (
                <React.Fragment  key={index}>
                  <div className="project-content">
                    <img src={proj.project} alt={proj.name}/>
                    <div className="project-details">
                      <p>{proj.name}</p>
                      <p>{proj.desc}</p>
                      <p>{proj.techstack}</p>
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
