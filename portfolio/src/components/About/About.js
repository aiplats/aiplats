import React from 'react'
import './About.css'
import gradpic from './../assets/PLATON-GRAD.jpg'

export const About = () => {
  return (
    <>
        <div className="about-main-page">
            <div className="about-container">
                <div className="about-left">
                    <img src={gradpic} style={{width: '50%'}}/>
                </div>

                <div className="about-right">
                    <h1>About Me</h1>
                    <h2>Alexander Isaac P. Platon</h2>
                    <p>I am an aspiring Full-Stack Web Developer, who is passionate in building and developing Web Applications. I specialize in building functional, responsive, and engaging web applications with React Framework which offers a smooth user experience. <br />
                    I'm a IT Fresh graduate from First Asia Institute of Technology and Humanities (FAITH), where I developed a strong foundation in Web Development. From crafting clean UI to managing server-side logic. <br />
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}
