import React from 'react'
import './Header.css'
import me from './../assets/IMG_7606-removebg-preview.png'
import bgrightblack from './../assets/bgrightblack.png'

export const Header = () => {
  return (
    <>
        <div className="header">
            <div className="grid">
                <div className="grid-left">
                    <div className="grid-left-tag">
                        <h1>Hey there! I'm Alex,</h1>
                        <p>A passionate Full Stack Web Developer dedicated to help build functional and engaging websites, with a strong background in both Front-End & Back-End Development.</p>

                    </div>
        
                    <h2>Connect with me!</h2>

                    <div className="grid-left-buttons">
                        <button><span>Contact Info</span></button>
                        <a href="/Platon_Alexander_CV.pdf" download="Platon_Alexander_CV.pdf"><button><span>Download CV</span></button></a>
                    </div>
                </div>

                <div className="grid-right">
                    <div className="image-wrapper">
                        <img src={me} style={{width: '70%'}}/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
