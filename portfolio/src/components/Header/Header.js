import React, { useEffect, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

import { HiArrowDownCircle, HiArrowRightEndOnRectangle  } from "react-icons/hi2";

import me from './../assets/IMG_3093.PNG'

export const Header = () => {

    const phrases = [
        "Full-Stack Developer.", 
        "Front-End Developer.", 
        "Back-End Developer.", 
        "UI/UX Designer.", 
    ]

    const [text, setText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentPhrase = phrases[phraseIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentPhrase.substring(0, charIndex + 1));
                setCharIndex(charIndex + 1);

                if (charIndex + 1 === currentPhrase.length) {
                    setIsDeleting(true);
                    setTimeout(() => {}, 1000);
                }
            } else {
                setText(currentPhrase.substring(0, charIndex - 1));
                setCharIndex(charIndex - 1);

                if (charIndex === 0) {
                    setIsDeleting(false);
                    setPhraseIndex((prev) => (prev + 1) % phrases.length);
                }
            }
        }, isDeleting ? 100 : 200);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, phraseIndex]);

  return (
    <>
        <div className="header">
            <div className="grid">
                <div className="grid-left">
                  <h1 className="fullscreen-header">ALEXANDER<br /> ISAAC <br />PLATON</h1>
                </div>

                <div className="grid-center">
                  <div className="image-wrapper">
                    <img src={me} alt="Alex" />
                  </div>
                </div>

                <div className="grid-right">
                  <div className="typing-block">
                    <h2>"Progress over Perfection"</h2>
                    <h1 className="typing-text">A {text}<span className="cursor">|</span></h1>
                    <div className="grid-right-buttons">
                      <Link to="/About"><button><span><HiArrowRightEndOnRectangle size={30}/>Learn More!</span></button></Link>
                      <Link to="/Projects"><button><span><HiArrowRightEndOnRectangle size={30}/>Explore Projects</span></button></Link>
                      {/* <a href="/Platon_Alexander_CV.pdf" download="Platon_Alexander_CV.pdf"><button><span><HiArrowDownCircle size={30}/>Download CV</span></button></a> */}
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}