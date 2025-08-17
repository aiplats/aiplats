import React from 'react'
import './Services.css'

import { Link } from 'react-router-dom';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';


import { services } from './../assets/assets'
import { Contact } from '../Contact/Contact';

function Services() {
  return (
    <>
        <div className="main-services-page">
            <div className="services-container">
                <div className="service-tags">
                    <h1>WHAT I PROVIDE</h1>
                    <p>"As a passionate developer, I offer a range of services in web development, software troubleshooting, and system support. Whether you're a small business or a startup, I'm excited to help bring ideas to life."</p>
                </div>

                <div className="services-timeline">
                    {services.map((service, index) => {
                        // Define specific key activities for each service
                        const getKeyActivities = (serviceName) => {
                            switch(serviceName.toLowerCase()) {
                                case 'web development':
                                    return [
                                        'Custom website development and implementation',
                                        'Responsive design for all devices',
                                        'Performance optimization and SEO',
                                        'Cross-browser compatibility testing'
                                    ];
                                case 'database integration':
                                    return [
                                        'Database schema design and optimization',
                                        'Data migration and synchronization',
                                        'Query optimization and indexing',
                                        'Backup and recovery solutions'
                                    ];
                                case 'api integration':
                                    return [
                                        'Third-party API connection and setup',
                                        'Custom API development and documentation',
                                        'Authentication and security implementation',
                                        'API testing and monitoring'
                                    ];
                                case 'web design':
                                    return [
                                        'UI/UX design and prototyping',
                                        'Brand identity and visual design',
                                        'Wireframing and user flow mapping',
                                        'Design system creation and maintenance'
                                    ];
                                default:
                                    return [
                                        'Custom development and implementation',
                                        'Testing and quality assurance',
                                        'Optimization and performance tuning',
                                        'Documentation and support'
                                    ];
                            }
                        };

                        return (
                            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                                <div className="timeline-marker">
                                    <span className="timeline-number">{service.number}</span>
                                </div>
                                <div className="service-card-timeline">
                                    <div className="service-icon">
                                        <img src={service.icon} alt={service.name} />
                                    </div>
                                    <div className="service-content">
                                        <h3>{service.name}</h3>
                                        <p>{service.desc}</p>
                                    </div>
                                </div>
                                <div className="key-activities-opposite">
                                    <div className="key-activities">
                                        <h4>Key Activities:</h4>
                                        <ul>
                                            {getKeyActivities(service.name).map((activity, actIndex) => (
                                                <li key={actIndex}>{activity}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="service-buttons">
                  <Link to="/About"><button>Learn More About My Technology</button></Link>
                  <a
                          href="#contact-section"
                          onClick={(e) => {
                            e.preventDefault();
                            
                            const element = document.getElementById('contact-section');
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                        >
                          <button>Need help on your website?</button>
                        </a>
                  <div className="arrow-container">
                    <FaArrowDown size={30} className="arrow-down"/>
                  </div>
                </div>
            </div>
        </div>

        <div id="contact-section">
          <Contact />
        </div>
    </>
  )
}

export default Services;