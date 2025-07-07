import React, { useState, useRef} from 'react'
import './Navbar.css'
import linkedin from './../assets/icons8-linkedin-48.png'
import whatsapp from './../assets/icons8-whatsapp-48.png'

export const Navbar = () => {

    const [activeSection, setActiveSection] = useState('About');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    
    const handleNavigationClick = (id, section) => {
      setActiveSection(section);
      setIsMobileMenuOpen(false); // Close mobile menu when clicking a link
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

  return (
    <>
    <div className='main-nav'>
        <div className="navbar">
            <div className="navbar-left">
                <p><a href="/">AIPLATS</a></p>
            </div>

            {/* Desktop Navigation */}
            <div className="navbar-right">
                <ul>
                    <li className={activeSection === 'About' ? 'active' : ''}>
                        <a href="#About" onClick={(e) => {
                            e.preventDefault();
                            handleNavigationClick('About', 'About');
                        }}>About</a>
                    </li>
                    <li className={activeSection === 'Projects' ? 'active' : ''}>
                        <a href="#Projects" onClick={(e) => {
                            e.preventDefault();
                            handleNavigationClick('Projects', 'Projects');
                        }}>Projects</a>
                    </li>
                    <li className={activeSection === 'Projects' ? 'active' : ''}>
                        <a href="#Services" onClick={(e) => {
                            e.preventDefault();
                            handleNavigationClick('Services', 'Services');
                        }}>Services</a>
                    </li>
                    <li className={activeSection === 'Contact' ? 'active' : ''}>
                        <a href="#Contact" onClick={(e) => {
                            e.preventDefault();
                            handleNavigationClick('Contact', 'Contact');
                        }}>Contact</a>
                    </li>
                </ul>
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
                <li className={activeSection === 'About' ? 'active' : ''}>
                    <a href="#About" onClick={(e) => {
                        e.preventDefault();
                        handleNavigationClick('About', 'About');
                    }}>About</a>
                </li>
                <li className={activeSection === 'Projects' ? 'active' : ''}>
                    <a href="#Projects" onClick={(e) => {
                        e.preventDefault();
                        handleNavigationClick('Projects', 'Projects');
                    }}>Projects</a>
                </li>
                <li className={activeSection === 'Contact' ? 'active' : ''}>
                    <a href="#Contact" onClick={(e) => {
                        e.preventDefault();
                        handleNavigationClick('Contact', 'Contact');
                    }}>Contact</a>
                </li>
            </ul>
            
            {/* Mobile Social Links */}
            <div className="mobile-social">
                <a href="https://www.linkedin.com/in/aiplats" target="_blank" rel="noopener noreferrer">
                    <img src={linkedin} alt="LinkedIn" style={{width: '40px', height: '40px'}}/>
                </a>
                <img src={whatsapp} alt="WhatsApp" style={{width: '40px', height: '40px'}}/>
            </div>
        </div>
    </div>
    </>
  )
}