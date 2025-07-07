import React from 'react'
import './Services.css'
import { services } from './../assets/assets'

export const Services = () => {
  return (
    <>
        <div className="main-services-page" id="Services">
            <div className="services-container">
                <div className="service-tags">
                    <h1>WHAT I PROVIDE</h1>
                    <p>"As a passionate IT graduate, I offer a range of services in web development, software troubleshooting, and system support. Whether you're a small business or a startup, I'm excited to help bring ideas to life."</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <h1>{service.number}</h1>
                            <div className="service-icon">
                                <img src={service.icon} alt={service.name} />
                            </div>
                            <div className="service-content">
                                <h3>{service.name}</h3>
                                <p>{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}