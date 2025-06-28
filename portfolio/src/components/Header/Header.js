import React, { useEffect, useState } from 'react'
import './Header.css'
import me from './../assets/IMG_7606-removebg-preview.png'

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
                    <div className="grid-left-tag">
                        <h1>Hey there! I'm Alex,</h1>
                        <p className="typing-text">A {text}<span className="cursor">|</span></p>
                    </div>
        
                    <h2>Connect with me!</h2>

                    <div className="grid-left-buttons">
                        <button><span>Get In Touch</span></button>
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
