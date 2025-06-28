import React from 'react'
import './About.css'

import gradpic from './../assets/PLATON-GRAD.jpg'
import itflogo from './../assets/itflogo2.png'
import adscert from './../assets/adscert.png'

import discord from './../assets/icons8-discord-48.png'
import instagram from './../assets/icons8-instagram-48.png'
import facebook from './../assets/icons8-facebook-48.png'

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

export const About = () => {

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

  const certifications = [
    {
      icon: itflogo,
      title: "CompTIA IT Fundamentals+",
      credential: "Credential ID:",
      id: "2BXGK4CRMJV41DCN"
    },
    {
      icon: adscert,
      title: "AI-Powered Performance Ads",
      credential: "Credential ID:",
      id: "143449646"
    }
  ];


  return (
    <>
      <div className="about-main-page">
        <div className="about-sub-page">

          <div className="about-heading">
            <h1>ABOUT PAGE</h1>
            <div className="line"></div>
          </div>

          <div className="about-page-container">
            <div className="about-navigation">
              <ul>
                <li>About Me</li>
                <li>Skills</li>
                <li>Certifications</li>
              </ul>
              <div className="nav-vertical-line"></div>
            </div>

            <div className="about-content">

              <h1>About Me</h1>
              <div className="about-container">
                <div className="about-info">
                  <img src={gradpic}/>

                  <div className="socials">
                    <img src={facebook}/>
                    <img src={instagram}/>
                    <img src={discord}/>
                  </div>
                </div>

                <div className="about-text">
                  <h1><b>Alexander Isaac P. Platon</b></h1>

                  <p>"I am an aspiring Full-Stack Web Developer, who is passionate in building and developing Web Applications. I specialize in building functional, responsive, and engaging web applications with React Framework. </p>
                  <p>I have worked on projects for a client and personal projects throughout the start of my career, and my experience has helped me understand and provide solutions from different projects. </p>
                  <p>I'm a BSIT graduate from First Asia Institute of Technology and Humanities (FAITH Colleges), where I developed a strong foundation in Web Development. From crafting clean UI to managing server-side logic."</p>
                </div>
              </div>

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
            
              <div className="about-certification">
                <h1>CERTIFICATIONS</h1>
                <br />
                
                <div className="cert-container">
                  {certifications.map((cert, index) => (
                    <React.Fragment key={index}>
                      <div className="cert-icons">
                        <img src={cert.icon} className="icon-img" alt={`Certification ${index + 1}`} />
                        <h2>{cert.title}</h2>
                        <h3>{cert.credential} {cert.id}</h3>
                      </div>
                      {index !== certifications.length - 1 && <div className="vertical-line"></div>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>                
      </div>
    </>
  )
}