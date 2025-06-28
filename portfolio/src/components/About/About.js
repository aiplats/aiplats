import React, { useRef } from 'react'
import './About.css'

import gradpic from './../assets/PLATON-GRAD.jpg'
import itflogo from './../assets/itflogo2.png'
import adscert from './../assets/adscert.png'

import discord from './../assets/icons8-discord-48.png'
import instagram from './../assets/icons8-instagram-48.png'
import facebook from './../assets/icons8-facebook-48.png'

import frontend from './../assets/icons8-frontend-50.png'
import server from './../assets/icons8-server-50.png'
import paint from './../assets/icons8-paint-50.png'
import web from './../assets/icons8-webw-50.png'

import responsive from './../assets/icons8-responsive-design-50.png'
import uiux from './../assets/icons8-ui-ux-design-50.png'
import wordpress from './../assets/icons8-wordpress-50.png'
import framer from './../assets/icons8-framer-48.png'

import git from './../assets/icons8-git-48.png'
import graphql from './../assets/icons8-graphql-50.png'
import restapi from './../assets/icons8-rest-api-50.png'

import css from './../assets/icons8-css3-48.png'
import html from './../assets/icons8-html5-48.png'
import javascript from './../assets/icons8-javascript-48.png'
import laravel from './../assets/icons8-laravel-64.png'
import mongodb from './../assets/icons8-mongodb-48.png'
import express from './../assets/icons8-express-js-50.png'
import nodejs from './../assets/icons8-node-js-48.png'
import react from './../assets/icons8-react-40.png'
import postgresql from './../assets/icons8-postgresql-48.png'

export const About = () => {

  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const certificationsRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  const skillsIcons = [
    {
      category: "Front-End",
      icon: css,
      title: "CSS"
    },
    {
      category: "Front-End",
      icon: html,
      title: "HTML"
    },
    {
      category: "Front-End",
      icon: react,
      title: "REACT"
    },
    {
      category: "Front-End",
      icon: javascript,
      title: "JAVASCRIPT"
    },
    {
      category: "Back-End",
      icon: nodejs,
      title: "NODE JS"
    },
    {
      category: "Back-End",
      icon: laravel,
      title: "LARAVEL"
    },
    {
      category: "Back-End",
      icon: mongodb,
      title: "MONGODB"
    },
    {
      category: "Back-End",
      icon: express,
      title: "EXPRESS JS"
    },
    {
      category: "Back-End",
      icon: postgresql,
      title: "POSTGRESQL"
    },
    {
      category: "Design",
      icon: wordpress,
      title: "WORDPRESS"
    },
    {
      category: "Design",
      icon: framer,
      title: "FRAMER"
    },
    {
      category: "Design",
      icon: uiux,
      title: "UI/UX Design"
    }, 
    {
      category: "Design",
      icon: responsive,
      title: "RESPONSIVE DESIGN"
    },
    {
      category: "Others",
      icon: git,
      title: "GIT"
    },
    {
      category: "Others",
      icon: graphql,
      title: "GRAPHQL"
    },
    {
      category: "Others",
      icon: restapi,
      title: "REST API"
    }
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

  const groupedSkills = skillsIcons.reduce((acc, skill) => {
  if (!acc[skill.category]) {
    acc[skill.category] = [];
  }
  acc[skill.category].push(skill);
  return acc;
}, {});

  return (
    <>
      <div className="about-main-page" id='About'>
        <div className="about-sub-page">

          <div className="about-heading">
            <h1>ABOUT PAGE</h1>
            <div className="line"></div>
          </div>

          <div className="about-page-container">
            <div className="about-navigation">
              <ul>
                <li><a href="#AboutMe" onClick={(e) => {
                  e.preventDefault();
                  scrollToRef(aboutMeRef);
                }}>About Me</a></li>
                <li><a href="#Skills" onClick={(e) => {
                  e.preventDefault();
                  scrollToRef(skillsRef);
                }}>Skills & Tech</a></li>
                <li><a href="#Certifications" onClick={(e) => {
                  e.preventDefault();
                  scrollToRef(certificationsRef);
                }}>Certifications</a></li>
              </ul>
              <div className="nav-vertical-line"></div>
            </div>

            <div className="about-content" >
              <div ref={aboutMeRef}>
                <h1 id='AboutMe'>About Me</h1>
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
              </div>

              <br />

              <div className="skills-container" ref={skillsRef} id='Skills'>
                <h1>SKILLS & TECHNOLOGIES</h1>
                <h2>01 - SOFTWARE SKILLS</h2>

                <div className="skills-content">
                  <div className="skills-grid">
                    <div className="category-container">
                      <img src={frontend}/>
                      <p>Front-End</p>
                      <div className="skills-icon">
                      {skillsIcons
                      .filter(skill => skill.category === "Front-End")
                      .map((skill, index) => (
                        <div key={index} className="icon-image">
                          <img src={skill.icon} alt={skill.name || `Skill ${index}`} />
                        </div>
                      ))}
                      </div>
                    </div>

                    <div className="skill-vertical-line"></div>

                    <div className="skills-title">
                        {skillsIcons
                        .filter(skill => skill.category === "Front-End")
                        .map((skill, index) => (
                          <div key={index} className="icon-title" style={{ textAlign: 'right'}}>
                            <h2>{skill.title}</h2>
                          </div>
                        ))}
                    </div>
                  </div>

                  <div className="skills-grid">
                    <div className="skills-title">
                      {skillsIcons
                      .filter(skill => skill.category === "Back-End")
                      .map((skill, index) => (
                        <div key={index} className="icon-title" style={{ textAlign: 'left'}}>
                          <h2>{skill.title}</h2>
                        </div>
                      ))}
                    </div>

                    <div className="skill-vertical-line"></div>

                    <div className="category-container">
                      <img src={server}/>
                      <p>Back-End</p>
                      <div className="skills-icon">
                        {skillsIcons
                        .filter(skill => skill.category === "Back-End")
                        .map((skill, index) => (
                          <div key={index} className="icon-image">
                            <img src={skill.icon} alt={skill.name || `Skill ${index}`} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="skills-grid">
                    <div className="category-container">
                      <img src={paint}/>
                      <p>Design</p>
                      <div className="skills-icon">
                        {skillsIcons
                        .filter(skill => skill.category === "Design")
                        .map((skill, index) => (
                          <div key={index} className="icon-image">
                            <img src={skill.icon} alt={skill.name || `Skill ${index}`} />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="skill-vertical-line"></div>

                    <div className="skills-title">
                      {skillsIcons
                      .filter(skill => skill.category === "Design")
                      .map((skill, index) => (
                        <div key={index} className="icon-title" style={{ textAlign: 'right'}}>
                          <h2>{skill.title}</h2>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="skills-grid">          
                    <div cla me="skills-title">
                      {skillsIcons
                      .filter(skill => skill.category === "Others")
                      .map((skill, index) => (
                        <div key={index} className="icon-title" style={{ textAlign: 'left'}}>
                          <h2>{skill.title}</h2>
                        </div>
                      ))}
                    </div>

                    <div className="skill-vertical-line"></div>

                    <div className="category-container">
                      <img src={web}/>
                      <p>Others</p>
                      <div className="skills-icon">
                        {skillsIcons
                        .filter(skill => skill.category === "Others")
                        .map((skill, index) => (
                          <div key={index} className="icon-image">
                            <img src={skill.icon} alt={skill.name || `Skill ${index}`} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <br />
            
              <div className="about-certification" ref={certificationsRef} id='Certifications'>
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