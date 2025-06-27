import React from 'react'
import './About.css'
import gradpic from './../assets/PLATON-GRAD.jpg'
import itflogo from './../assets/itflogo.png'
import adscert from './../assets/adscert.png'

export const About = () => {

  const certifications = [
    {
      icon: itflogo,
      title: "CompTIA IT Fundamentals+",
      credential: "Credential ID:",
      id: "2BXGK4CRMJV41DCN"
    },
    {
      icon: adscert,
      title: "AI-Powered Performance Ads",
      credential: "Credential ID:",
      id: "143449646"
    }
  ];


  return (
    <>
        <div className="about-main-page">
            <div className="about-container">
                <div className="about-left">
                    <img src={gradpic} style={{width: '50%'}}/>
                </div>
                <div className="about-right">
                  <div className="about-heading">
                    <h1>ABOUT ME</h1>
                    <div className="line"></div>
                  </div>
                  <h2><b>Alexander Isaac P. Platon</b></h2>
                  <p>I am an aspiring Full-Stack Web Developer, who is passionate in building and developing Web Applications. I specialize in building functional, responsive, and engaging web applications with React Framework. 
                  <p>I have worked on projects for a client and personal projects throughout the start of my career, and my experience has helped me understand and provide solutions from different projects. </p>
                  <p>I'm a BSIT graduate from First Asia Institute of Technology and Humanities (FAITH Colleges), where I developed a strong foundation in Web Development. From crafting clean UI to managing server-side logic. </p>
                  </p>
                </div>
            </div>
            <br/>
            <br/>
            <div className="about-bottom-container">
                <div className="about-interest">
                    <h1>CERTIFICATIONS</h1>
                    <br />
                    
                    <div className="cert-container">
                      {certifications.map((cert, index) => (
                        <React.Fragment key={index}>
                          <div className="cert-icons">
                            <img src={cert.icon} alt={`Certification ${index + 1}`} />
                            <h2>{cert.title}</h2>
                            <h3>{cert.credential} {cert.id}</h3>
                          </div>
                          {index !== certifications.length - 1 && <div className="vertical-line"></div>}
                        </React.Fragment>
                      ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}