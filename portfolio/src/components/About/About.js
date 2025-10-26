import React, { useState, useEffect, useRef } from 'react'
import './About.css'
import { skillsIcons, certifications } from './../assets/assets'
import AboutSkills from './About-Skills/AboutSkills';
import { motion } from 'framer-motion';

import { FiAward, FiUser } from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';
import { HiArrowDownCircle, HiArrowRightEndOnRectangle } from 'react-icons/hi2';
import { FiMail } from 'react-icons/fi';

import gradpic from './../assets/PLATON-GRAD.jpg'

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
import { Contact } from '../Contact/Contact';
import { Link } from 'react-router-dom';

function About() {

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
            
            <h2>I’m a passionate Full-Stack Web Developer dedicated to creating responsive, user-focused applications that bridge intuitive design with powerful backend solutions.</h2>
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
                    <a href="https://github.com/aiplats"><img src={github} alt='github'/></a>
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

                    <div className="about-profile">
                      <GitHubContributions />
                    </div>
                  </div>
                </div>
                </motion.div>
              </div>

              <div className="skills-carousel-main-container" ref={skillsRef} id="Skills">
                <div className="skills-text">
                  <h1>SKILLS & TECHNOLOGIES</h1>     
                  <h3>A comprehensive overview of my technical experiences</h3>
                </div>

                <div className="skills-container">
                  <AboutSkills 
                    title="Languages"
                    icon={frontend}
                    direction="left"
                    skills={skillsIcons.filter(skill => skill.category === "Languages")} 
                  />

                  <AboutSkills 
                    title="Front-End"
                    icon={frontend}
                    direction="right"
                    skills={skillsIcons.filter(skill => skill.category === "Front-End")} 
                  />

                  <AboutSkills
                    title="Back-End"
                    icon={server}
                    direction="left"
                    skills={skillsIcons.filter(skill => skill.category === "Back-End")}
                  />

                  <AboutSkills
                    title="Database"
                    icon={server}
                    direction="right"
                    skills={skillsIcons.filter(skill => skill.category === "Database")}
                  />

                  <AboutSkills
                    title="Design"
                    icon={paint}
                    direction="left"
                    skills={skillsIcons.filter(skill => skill.category === "Design")}
                  />

                  <AboutSkills
                    title="DevOps & Tools"
                    icon={web}
                    direction="right"
                    skills={skillsIcons.filter(skill => skill.category === "DevOps & Tools")}
                  />
                </div>

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
                          <h3>{cert.title}</h3>
                          <h3>{cert.issuer} {cert.company}</h3>
                          <h3>{cert.credential} {cert.id}</h3>
                        </div>
                        <a href={cert.url} target="_blank" rel="noopener noreferrer" className="cert-button"><button><HiArrowTopRightOnSquare size={30}/>View Certificate</button></a>
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

      <section className="about-cta-section">
        <div className="about-cta-details">
          <h2>Want to know more about <span className="highlight">ALEX?</span></h2>
          <p>My professional background is an open book. Feel free to take a closer look.</p>
        </div>
        <div className="about-cta-buttons">            
          <a href="#contact-section"
            className="about-btn btn-primary"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('contact-section');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
            <FiMail size={24} style={{marginRight: '10px', verticalAlign: "middle"}}/>Let's Work Together!
          </a>
          <a href="/Platon_Alexander_Isaac_CV.pdf" className="about-btn btn-secondary" download="Platon_Alexander_Isaac_CV.pdf">
            <HiArrowDownCircle size={25} style={{marginRight: '10px', verticalAlign: "middle"}}/>Grab My CV
          </a>
        </div>
          
        <br />
          
        <div className="projects-cta-subsection">
          <div className="projects-cta-details">
            <p>From concepts to creations, my work speaks louder than words. Discover the projects that shaped my journey.</p>
          </div>
          <div className="projects-cta-buttons">
            <Link to="/Projects" className="projects-link">
              <button className="projects-btn btn-secondary">
                <HiArrowRightEndOnRectangle size={24} style={{marginRight: '10px', verticalAlign: "middle"}}/>
                <span>See My Work in Action</span>
              </button>
            </Link>
          </div>
        </div>
      </section>

      <div id="contact-section">
        <Contact />
      </div> 
    </>
  )
}

export default About;