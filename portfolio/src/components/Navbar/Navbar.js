import React, { useState, useEffect } from 'react'
import './Navbar.css'
import aiplatslogo from './../assets/aiplatslogo.jpeg'
import { Link } from 'react-router-dom'
import { FaRegMessage } from 'react-icons/fa6';

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const handleNavigationClick = (id, section) => {
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMobileMenuOpen]);

  return (
    <>
    <div className='main-nav'>
        <div className="navbar">
            <div className="navbar-left">
                <a href="/"><img src={aiplatslogo} style={{width: '50px', borderRadius: '50%'}} alt="aiplats logo"/></a>
            </div>

            <div className="navbar-right">
                <ul>
                    <li className={activeSection === 'Home' ? 'active' : ''}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={activeSection === 'About' ? 'active' : ''}>
                        <Link to="/About">About</Link>
                    </li>
                    <li className={activeSection === 'Projects' ? 'active' : ''}>
                        <Link to="/Projects">Projects</Link>
                    </li>
                    <li className={activeSection === 'Services' ? 'active' : ''}>
                        <Link to="/Services">Services</Link>
                    </li>
                </ul>
            </div>

            <div className="contact-button">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection('Contact');
                  setIsMobileMenuOpen(false);
                
                  const element = document.getElementById('contact-section');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                CONTACT <FaRegMessage size={20} />
              </button>
            </div>

            <div className="mobile-menu-button" onClick={toggleMobileMenu}>
                <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>

        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li className={activeSection === 'Home' ? 'active' : ''}>
              <Link 
                to="/" 
                onClick={() => handleNavigationClick('home-section', 'Home')}>
                Home
              </Link>
            </li>
            <li className={activeSection === 'About' ? 'active' : ''}>
              <Link 
                to="/About"
                onClick={() => handleNavigationClick('about-section', 'About')}>
                About
              </Link>
            </li>
            <li className={activeSection === 'Projects' ? 'active' : ''}>
              <Link 
                to="/Projects"
                onClick={() => handleNavigationClick('projects-section', 'Projects')}>
                Projects
              </Link>
            </li>
            <li className={activeSection === 'Services' ? 'active' : ''}>
              <Link 
                to="/Services"
                onClick={() => handleNavigationClick('services-section', 'Services')}>
                Services
              </Link>
            </li>
            <li className={activeSection === 'Contact' ? 'active' : ''}>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigationClick('contact-section', 'Contact');
                }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
    </div>
    </>
  )
}