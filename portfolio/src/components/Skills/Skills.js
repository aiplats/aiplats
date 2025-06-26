import React from 'react'
import './Skills.css'
import css from './../assets/icons8-css3-48.png'
import git from './../assets/icons8-git-48.png'
import html from './../assets/icons8-html5-48.png'
import javascript from './../assets/icons8-javascript-48.png'
import laravel from './../assets/icons8-laravel-64.png'
import mongodb from './../assets/icons8-mongodb-48.png'
import mysql from './../assets/icons8-mysql-48.png'
import nodejs from './../assets/icons8-node-js-48.png'
import react from './../assets/icons8-react-40.png'
import supabase from './../assets/icons8-supabase-48.png'

export const Skills = () => {

  const skillsIcons = [
      css,
      git,
      html,
      javascript,
      laravel,
      mongodb,
      mysql,
      nodejs,
      react,
      supabase
    ];
  

  return (
    <>
        <div className="skills-main">
            <div className="skills-container">
                <h1>SKILLS</h1>
                <h2>01 - SOFTWARE SKILLS</h2>

                <div className="skills-carousel">
                      <div className="skills-track">
                        {[...skillsIcons].map((icon, index) => (
                          <div key={index} className="skills-icon">
                            <img src={icon} alt={`Skills ${index + 1}`} />
                          </div>
                        ))}
                      </div>
                    </div>
            </div>
        </div>
    </>
  )
}
