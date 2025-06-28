import React, { useState, useRef} from 'react'
import './Navbar.css'
import linkedin from './../assets/icons8-linkedin-48.png'
import whatsapp from './../assets/icons8-whatsapp-48.png'

export const Navbar = () => {

    const [activeSection, setActiveSection] = useState('About');
    const aboutRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);
    
    const handleNavigationClick = (id, section) => {
      setActiveSection(section);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <>
    <div className='main-nav'>
        <div className="navbar">
            <div className="navbar-left">
                <p><a href="/">AIPLATS</a></p>
            </div>

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
                    <li className={activeSection === 'Contact' ? 'active' : ''}>
                        <a href="#Contact" onClick={(e) => {
                            e.preventDefault();
                            handleNavigationClick('Contact', 'Contact');
                        }}>Contact</a>
                    </li>
                </ul>
            </div>

            <div className="navbar-righter">
                <a href="www.linkedin.com/in/aiplats"><img src={linkedin} style={{width: '40px', height: '40px'}}/></a>
                <img src={whatsapp} style={{width: '40px', height: '40px'}}/>
            </div>
        </div>
    </div>
    </>
  )
}
