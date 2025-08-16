import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

import aiplatslogo from './../assets/aiplatslogo.jpeg'
import linkedin from './../assets/icons8-linkedin-48.png'
import github from './../assets/icons8-white-github-50.png'

export const Footer = () => {
  return (
    <footer>
      <div className="main-footer">
        <div className="footer-container">

          <div className="footer-name">
            <img src={aiplatslogo} alt='aiplats logo' />
            <p>
              <span className="highlight">ALEX</span> delivers end-to-end web development solutions, crafting visually stunning, responsive, and high-performance websites. With expertise in front-end, back-end, and UI/UX design, I empower clients with fully customized digital experiences while handling all technical aspects from concept to deployment.
            </p>
          </div>

          <div className="footer-links">
            <h2>Quick Links</h2>
            <Link to="/About">About</Link> 
            <Link to="/Projects">Projects</Link> 
            <Link to="/Services">Services</Link> 
            <Link to="/Contact">Contact</Link>
          </div>

          <div className="footer-socials">
            <h2>Follow Me</h2>
            <a href="https://www.linkedin.com/in/aiplats" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/aipPlaton" target="_blank" rel="noopener noreferrer">
              <img src={github} alt="GitHub" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          © 2025 Aiplats. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
