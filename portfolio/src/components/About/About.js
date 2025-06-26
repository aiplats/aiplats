import React from 'react'
import './About.css'
import gradpic from './../assets/PLATON-GRAD.jpg'
import coffee from './../assets/icons8-coffee-50.png'
import spotify from './../assets/icons8-spotify-48.png'
import steam from './../assets/icons8-steam-48.png'
import netflix from './../assets/icons8-netflix-48.png'
import crunchyroll from './../assets/icons8-crunchyroll-48.png'
import tachiyomi from './../assets/icons8-tachiyomi-50.png'
import workout from './../assets/icons8-muscle-50.png'
import socmed from './../assets/icons8-web-50.png'

export const About = () => {
  const interestIcons = [
    coffee,
    spotify,
    steam,
    netflix,
    crunchyroll,
    tachiyomi,
    workout,
    socmed
  ];

  return (
    <>
        <div className="about-main-page">
            <div className="about-container">
                <div className="about-left">
                    <img src={gradpic} style={{width: '50%'}}/>
                </div>
                <div className="about-right">
                    <h1>About Me</h1>
                    <h2><b>Alexander Isaac P. Platon</b></h2>
                    <p>I am an aspiring Full-Stack Web Developer, who is passionate in building and developing Web Applications. I specialize in building functional, responsive, and engaging web applications with React Framework. <br />
                    I have worked on projects for a client and personal projects throughout the start of my career, and my experience has helped me understand and provide solutions from different projects. <br />
                    I'm a BSIT graduate from First Asia Institute of Technology and Humanities (FAITH Colleges), where I developed a strong foundation in Web Development. From crafting clean UI to managing server-side logic. <br />
                    </p>
                </div>
            </div>
            <br/>
            <br/>
            <div className="about-bottom-container">
                <div className="about-interest">
                    <h1>INTERESTS</h1>
                    <p>Outside my career, these are the things I mostly enjoy and do in my free time.</p>
                    <div className="interest-carousel">
                      <div className="interest-track">
                        {[...interestIcons].map((icon, index) => (
                          <div key={index} className="interest-icon">
                            <img src={icon} alt={`Interest ${index + 1}`} />
                          </div>
                        ))}
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}