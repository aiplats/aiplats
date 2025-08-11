import React, { useState, useEffect, useRef } from 'react'
import './About.css'
import { skillsIcons, certifications } from './../assets/assets'
import { motion } from 'framer-motion';

import { FiAward, FiMail, FiUser } from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';
import { HiArrowDownCircle } from 'react-icons/hi2';

import gradpic from './../assets/PLATON-GRAD.jpg'
import faith from './../assets/FAITH-Colleges-Logo.png'

import profile from './../assets/icons8-profile-48.png'
import skills from './../assets/icons8-skills-48.png'
import certificate from './../assets/icons8-certificate-48.png'

import github from './../assets/icons8-githubw-50.png'
import instagram from './../assets/icons8-instagram-48.png'
import facebook from './../assets/icons8-facebook-48.png'
import linkedin from './../assets/icons8-linkedin-48.png'

import frontend from './../assets/icons8-frontend-50.png'
import server from './../assets/icons8-server-50.png'
import paint from './../assets/icons8-paint-50.png'
import web from './../assets/icons8-webw-50.png'
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import GitHubContributions from '../GitHubContirbution/GitHubContribution';

export const About = () => {

  const [activeSection, setActiveSection] = useState('AboutMe');
  const [isScrolling, setIsScrolling] = useState(false);
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const certificationsRef = useRef(null);
  const contentContainerRef = useRef(null); 
  const scrollTimeoutRef = useRef(null);

  const handleNavigationClick = (ref, section) => {
    setActiveSection(section);
    setIsScrolling(true);
    
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    if (ref.current && contentContainerRef.current) {
      const containerTop = contentContainerRef.current.offsetTop;
      const elementTop = ref.current.offsetTop;
      const scrollPosition = elementTop - containerTop;
      
      contentContainerRef.current.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
    }

    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };

  useEffect(() => {
    const sections = document.querySelectorAll('.scroll-section');

    const observer = new IntersectionObserver(
      (entries) => {
        if (!isScrolling) {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        }
      },
      {
        threshold: 0.5,
        root: contentContainerRef.current
      }
    );

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => observer.unobserve(section));
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isScrolling]);

  return (
    <>
      <div className="about-main-page" id='About'>
        <div className="about-sub-page">
          <div className="about-heading">
            <h1 className="section-title">
              ABOUT <span className="highlight">ALEX</span>
            </h1>
            <div className="line"></div>
          </div>

          <div className="about-page-container">
            <div className="about-navigation">
              <div className="about-info">
                <figure>
                  <img src={gradpic} alt='gradpic'/>
                </figure>
              </div>
              
              <div className="navigation-links">
                <ul>
                  <li>
                    <a href="#AboutMe" onClick={(e) => {
                      e.preventDefault();
                      handleNavigationClick(aboutMeRef, 'AboutMe');
                    }}>
                      <FiUser style={{marginRight: '8px'}}/>
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#Skills" onClick={(e) => {
                      e.preventDefault();
                      handleNavigationClick(skillsRef, 'Skills');
                    }}>
                      <FaCode style={{marginRight: '8px'}}/>
                      Skills
                    </a>
                  </li>
                  <li>
                    <a href="#Certifications" onClick={(e) => {
                      e.preventDefault();
                      handleNavigationClick(certificationsRef, 'Certifications');
                    }}>
                      <FiAward style={{marginRight: '8px'}}/>
                      Certification
                    </a>
                  </li>
                </ul>

                <div className="socials">
                  <div className="social-container">
                    <h3>Social Links</h3>
                    <a href="https://www.facebook.com/aiplats"><img src={facebook} alt='facebook'/></a>
                    <a href="https://www.instagram.com/aiplatss/"><img src={instagram} alt='instagram'/></a>
                    <a href="https://github.com/aipPlaton"><img src={github} alt='github'/></a>
                    <a href="https://www.linkedin.com/in/aiplats"><img src={linkedin} alt='linkedin'/></a>
                  </div>
                </div>
                
              </div>
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
                <div className="about-container">

                  <div className="about-info-overflow">
                    <img src={gradpic} alt='gradpic'/>
                  </div>
                
                  <div className="about-description">
                    <div className="about-text">
                      <h1><b>Alexander Isaac P. Platon</b></h1>

                      <p>"I am a dedicated Full-Stack Web Developer with a strong focus on building responsive, user-centric web applications using modern technologies, particularly React. I’ve delivered diverse projects for clients and continuously expand my skills through ongoing development. With experience across the full development lifecycle—from intuitive UI design to robust backend architecture—I create end-to-end solutions that align with both user needs and business goals."</p>
                    </div>

                    <GitHubContributions />

                    <div className="about-profile">
                      <figure className="faith-div">
                        <img src={faith} alt="faith logo"/>
                        <br />
                        <br />
                        <figcaption>BS Information Technology<br/>A.Y. 2021 - 2025</figcaption>
                      </figure>

                      {/* <div className="socials">
                        <h3>Social Links</h3>
                        <a href="https://www.facebook.com/aiplats"><img src={facebook} alt='facebook'/></a>
                        <a href="https://www.instagram.com/aiplatss/"><img src={instagram} alt='instagram'/></a>
                        <a href="https://github.com/aipPlaton"><img src={github} alt='github'/></a>
                      </div> */}

                      <div className="about-contact">
                        <a href="/Platon_Alexander_CV.pdf" download="Platon_Alexander_CV.pdf"><button><HiArrowDownCircle size={25}/>Download CV</button></a>
                        <a href="#Contact"><button><FiMail size={25} />Work with Me</button></a>
                      </div>
                    </div>
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
                <h2>01 - TECHNICAL SKILLS</h2>

                <div className="skills-content">
                  <div className="skills-grid">
                    <div className="category-container">
                      <img src={frontend} className="skill-category" alt='frontend'/>
                      <p>Front-End</p>
                      <div className="skills-icon">
                      {skillsIcons
                      .filter(skill => skill.category === "Front-End")
                      .map((skill, index) => (
                        <motion.div key={index} className="icon-image" initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05, duration: 0.7 }}>
                            <img src={skill.icon} alt={skill.name || `Skill ${index}`} title={skill.title || `Skill ${index}`}/>
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
                      <img src={frontend} className="skill-category" alt='frontend'/>
                      <p>Back-End</p>
                      <div className="skills-icon">
                        {skillsIcons
                        .filter(skill => skill.category === "Back-End")
                        .map((skill, index) => (
                          <motion.div key={index} className="icon-image" initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05, duration: 0.7 }}>
                            <img src={skill.icon} alt={skill.name || `Skill ${index}`} title={skill.title || `Skill ${index}`}/>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="skills-grid">
                    <div className="category-container">
                      <img src={server} className="skill-category" alt='server'/>
                      <p>Database</p>
                      <div className="skills-icon">
                        {skillsIcons
                        .filter(skill => skill.category === "Database")
                        .map((skill, index) => (
                          <motion.div key={index} className="icon-image" initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05, duration: 0.7 }}>
                            <img src={skill.icon} alt={skill.name || `Skill ${index}`} title={skill.title || `Skill ${index}`}/>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="skills-title">
                      {skillsIcons
                      .filter(skill => skill.category === "Database")
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
                      .filter(skill => skill.category === "Design")
                      .map((skill, index) => (
                        <div key={index} className="icon-title" style={{ textAlign: 'left'}}>
                          <h2>{skill.title}</h2>
                        </div>
                      ))}
                    </div>

                    <div className="category-container">
                      <img src={paint} className="skill-category" alt='paint'/>
                      <p>Design</p>
                      <div className="skills-icon">
                        {skillsIcons
                        .filter(skill => skill.category === "Design")
                        .map((skill, index) => (
                          <motion.div key={index} className="icon-image" initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05, duration: 0.7 }}>
                              <img src={skill.icon} alt={skill.name || `Skill ${index}`} title={skill.title || `Skill ${index}`}/>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="skills-grid">
                    <div className="category-container">
                      <img src={web} className="skill-category" alt='web'/>
                      <p>DevOps & Tools</p>
                      <div className="skills-icon">
                        {skillsIcons
                        .filter(skill => skill.category === "DevOps & Tools")
                        .map((skill, index) => (
                          <motion.div key={index} className="icon-image" initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05, duration: 0.7 }}>
                            <img src={skill.icon} alt={skill.name || `Skill ${index}`} title={skill.title || `Skill ${index}`}/>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="skills-title">
                      {skillsIcons
                      .filter(skill => skill.category === "DevOps & Tools")
                      .map((skill, index) => (
                        <div key={index} className="icon-title" style={{ textAlign: 'right'}}>
                          <h2>{skill.title}</h2>
                        </div>
                      ))}
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
                          <h3>{cert.credential} {cert.id}</h3>
                          <a href={cert.url} target="_blank" rel="noopener noreferrer" className="cert-button"><button><HiArrowTopRightOnSquare size={30}/>View Certificate</button></a>
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