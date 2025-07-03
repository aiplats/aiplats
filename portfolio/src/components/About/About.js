import React, { useState, useEffect, useRef } from 'react'
import './About.css'
import { skillsIcons, certifications } from './../assets/assets'
import { motion } from 'framer-motion';

import gradpic from './../assets/PLATON-GRAD.jpg'

import github from './../assets/icons8-githubw-50.png'
import instagram from './../assets/icons8-instagram-48.png'
import facebook from './../assets/icons8-facebook-48.png'

import frontend from './../assets/icons8-frontend-50.png'
import server from './../assets/icons8-server-50.png'
import paint from './../assets/icons8-paint-50.png'
import web from './../assets/icons8-webw-50.png'

export const About = () => {

  const [activeSection, setActiveSection] = useState('AboutMe');
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const certificationsRef = useRef(null);
  const contentContainerRef = useRef(null); // Add ref for the scrollable container

  const handleNavigationClick = (ref, section) => {
    setActiveSection(section);
    
    // Calculate the position relative to the scrollable container
    if (ref.current && contentContainerRef.current) {
      const containerTop = contentContainerRef.current.offsetTop;
      const elementTop = ref.current.offsetTop;
      const scrollPosition = elementTop - containerTop;
      
      // Scroll within the container instead of the whole page
      contentContainerRef.current.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const groupedSkills = skillsIcons.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  useEffect(() => {
    const sections = document.querySelectorAll('.scroll-section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
        root: contentContainerRef.current // Set the scrollable container as the root
      }
    );

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <div className="about-main-page" id='About'>
        <div className="about-sub-page">

          <div className="about-heading">
            <h1 className="section-title">ABOUT ME</h1>
            <div className="line"></div>
          </div>

          <div className="about-page-container">
            <div className="about-navigation">
              <ul>
                <li className={activeSection === 'AboutMe' ? 'active' : ''}>
                  <a href="#AboutMe" onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    handleNavigationClick(aboutMeRef, 'AboutMe');
                  }}>About Me</a>
                </li>
                <li className={activeSection === 'Skills' ? 'active' : ''}>
                  <a href="#Skills" onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    handleNavigationClick(skillsRef, 'Skills');
                  }}>Skills & Tech</a>
                </li>
                <li className={activeSection === 'Certifications' ? 'active' : ''}>
                  <a href="#Certifications" onClick={(e) => {
                    e.preventDefault(); // Prevent default anchor behavior
                    handleNavigationClick(certificationsRef, 'Certifications');
                  }}>Certifications</a>
                </li>
              </ul>
            </div>

            <div className="about-content" ref={contentContainerRef}>
              <div ref={aboutMeRef} className="scroll-section" id='AboutMe'>
                <motion.div 
                  className="scroll-section"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                <h1></h1>
                <div className="about-container">
                  <div className="about-info">
                    <img src={gradpic}/>

                    <div className="socials">
                      <a href="https://www.facebook.com/aiplats"><img src={facebook} /></a>
                      <a href="https://www.instagram.com/aiplatss/"><img src={instagram}/></a>
                      <a href="https://github.com/aipPlaton"><img src={github}/></a>
                    </div>
                  </div>

                  <div className="about-text">
                    <h1><b>Alexander Isaac P. Platon</b></h1>

                    <p>"I am an aspiring Full-Stack Web Developer, who is passionate in building and developing Web Applications. I specialize in building functional, responsive, and engaging web applications with React Framework. </p>
                    <p>I have worked on projects for a client and personal projects throughout the start of my career, and my experience has helped me understand and provide solutions from different projects. </p>
                    <p>I'm a BSIT graduate from First Asia Institute of Technology and Humanities (FAITH Colleges), where I developed a strong foundation in Web Development. From crafting clean UI to managing server-side logic."</p>
                  </div>
                </div>
                </motion.div>
              </div>

              <div className="skills-container scroll-section" ref={skillsRef} id='Skills'>
                <motion.div
                  className="skills-container scroll-section"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
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
                        <motion.div key={index} className="icon-image" initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05, duration: 0.7 }}>
                            <img src={skill.icon} alt={skill.name || `Skill ${index}`} />
                          </motion.div>
                      ))}
                      </div>
                    </div>

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

                    <div className="category-container">
                      <img src={server}/>
                      <p>Back-End</p>
                      <div className="skills-icon">
                        {skillsIcons
                        .filter(skill => skill.category === "Back-End")
                        .map((skill, index) => (
                          <motion.div key={index} className="icon-image" initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05, duration: 0.7 }}>
                            <img src={skill.icon} alt={skill.name || `Skill ${index}`} />
                          </motion.div>
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
                          <motion.div key={index} className="icon-image" initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05, duration: 0.7 }}>
                            <img src={skill.icon} alt={skill.name || `Skill ${index}`} />
                          </motion.div>
                        ))}
                      </div>
                    </div>

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
                    <div className="skills-title">
                      {skillsIcons
                      .filter(skill => skill.category === "Others")
                      .map((skill, index) => (
                        <div key={index} className="icon-title" style={{ textAlign: 'left'}}>
                          <h2>{skill.title}</h2>
                        </div>
                      ))}
                    </div>

                    <div className="category-container">
                      <img src={web}/>
                      <p>Others</p>
                      <div className="skills-icon">
                        {skillsIcons
                        .filter(skill => skill.category === "Others")
                        .map((skill, index) => (
                          <motion.div key={index} className="icon-image" initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05, duration: 0.7 }}>
                              <img src={skill.icon} alt={skill.name || `Skill ${index}`} />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
                </motion.div>
              </div>
            
              <div className="about-certification scroll-section" ref={certificationsRef} id='Certifications'>
                <motion.div
                  className="about-certification scroll-section"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                <h1>CERTIFICATIONS</h1>
                <br />
                
                <div className="cert-container">
                  {certifications.map((cert, index) => (
                    <React.Fragment key={index}>
                      <div className="cert-icons">
                        <img src={cert.icon} className="icon-img" alt={`Certification ${index + 1}`} />

                        <div className="cert-details">
                          <h2>{cert.title}</h2>
                          <h2>{cert.issuer} {cert.company}</h2>
                          <h3><b>{cert.credential}</b> {cert.id}</h3>
                          <a href={cert.url} target="_blank" rel="noopener noreferrer" className="cert-button"><button>View Certificate</button></a>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
                </motion.div>
              </div>

            </div>

          </div>

        </div>                
      </div>
    </>
  )
}