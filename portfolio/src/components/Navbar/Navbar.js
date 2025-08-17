import React, { useState, useRef} from 'react'
import './Navbar.css'
import aiplatslogo from './../assets/aiplatslogo.jpeg'
import { Link } from 'react-router-dom'
import { HiArrowDownCircle } from 'react-icons/hi2';

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
                <a href="/"><img src={aiplatslogo} style={{width: '50px', borderRadius: '50%'}} alt="aiplats logo"/></a>
            </div>

            {/* Desktop Navigation */}
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
                    <li className={activeSection === 'Contact' ? 'active' : ''}>
                        <a
                          href="#contact-section"
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
                          Contact
                        </a>
                    </li>
                </ul>
            </div>

            <div className="curriculum-vitae">
                <a href="/Platon_Alexander_CV.pdf" download="Platon_Alexander_CV.pdf"><button><HiArrowDownCircle size={30} style={{marginRight: '10px'}}/>Download CV</button></a>
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
                <li className={activeSection === 'Contact' ? 'active' : ''}>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </div>
    </div>
    </>
  )
}