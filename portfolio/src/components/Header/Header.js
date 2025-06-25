import React from 'react'
import './Header.css'
import me from './../assets/IMG_7606-removebg-preview.png'

export const Header = () => {
  return (
    <>
        <div className="header">
            <div className="grid">
                <div className="grid-left">
                    <h1>Hello! I'm Alex,</h1>
                    <p>A passionate Full Stack Web Developer dedicated to help build functional and engaging websites, with a strong background in both Front-End & Back-End Development.  <br /> <br />
                        I'm here to turn ideas into interactive digital experiences that are not only visually appealing but also seamlessly performant. 
                    </p>
        
                    <h2>Connect with me!</h2>

                    <div className="grid-left-buttons">
                        <button><span>Contact Info</span></button>
                        <a href="/Platon_Alexander_CV.pdf" download="Platon_Alexander_CV.pdf"><button><span>Download CV</span></button></a>
                    </div>
                </div>

                <div className="grid-right">
                    <div className="image-wrapper">
                        <img src={me} style={{width: '70%'}}/>
                        <span className="circle"></span>
                        <span className="circle2"></span>
                    </div>
                </div>
            </div>
        </div>
        <br id="About"/>
    </>
  )
}
