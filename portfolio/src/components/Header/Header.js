import React, { useEffect, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom';

import { HiArrowRightEndOnRectangle  } from "react-icons/hi2";

import me from './../assets/IMG_3093.PNG'
import Statistics from '../Statistics/Statistics';
import { freelance, projects, providedServices } from '../assets/assets';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Contact } from '../Contact/Contact';

export const Header = () => {

    const phrases = [
      "Full-Stack Developer.", 
    ]

    const [text, setText] = useState('');
    const [phraseIndex, setPhraseIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const slides = [...projects, ...freelance].map(item => item.project);
    const [currentIndex, setCurrentIndex] = useState(0);

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

    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 4000); 
    
      return () => clearInterval(interval);
    }, [currentIndex]);

    const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
      setCurrentIndex((prev) =>
        prev === 0 ? slides.length - 1 : prev - 1
      );
    };

    const goToSlide = (index) => {
      setCurrentIndex(index);
    };

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
        
        <div className="container">
          <div className="text-tag">
            <p>Insights</p>
            <h3>Combining technical skill and creative design, I build dynamic, visually engaging, and optimized web solutions that connect with audiences and drive results.</h3>
          </div>
          <div className="sub-container">
            <div className="sub-header">
              {providedServices.map((providedServices, index) => (
                <div key={index} className="services">
                  <div className="services-icon">
                    <img src={providedServices.icon} alt={providedServices.name} />
                  </div>
                  <div className="services-details">
                    <h3>{providedServices.name}</h3>
                    <p>{providedServices.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sub-header-text">
            <Link to="/Services"><button><span>Need help on your website?<FaArrowRight size={20}/></span></button></Link>
            <Link to="/About"><button><span>Learn More About My Technology<FaArrowRight size={20}/></span></button></Link>
          </div>
        </div>

        <div className="project-container">
          <Statistics />
          <div className="text-tag">
            <p>Project Showcase</p>
            <h3>Where innovation meets execution—each project is a testament to my ability to transform ideas into functional, visually stunning digital experiences. By blending cutting-edge technology with user-centric design, I deliver solutions that not only captivate audiences but also drive measurable success. Explore my work to see how I turn challenges into opportunities and visions into reality.</h3>
          </div>

          <button className="arrow left" onClick={prevSlide}>
            <FaChevronLeft size={30} className="react-icon-arrow"/>
          </button>

          <div className="project-slide">
            <div
              className="project-slide-inner"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <img key={index} src={slide} alt={`Slide ${index}`} className="single-slide-image"/>
              ))}
            </div>
          </div>

          <button className="arrow right" onClick={nextSlide}>
            <FaChevronRight size={30} className="react-icon-arrow"/>
          </button>

          <div className="dots">
            {slides.map((_, dotIndex) => (
              <span
                key={dotIndex}
                className={`dot ${dotIndex === currentIndex ? "active" : ""}`}
                onClick={() => goToSlide(dotIndex)}
              ></span>
            ))}
          </div>

          <div className="project-buttons">
            <h3>Want to know more?</h3>
            <Link to="/Projects"><button><span><HiArrowRightEndOnRectangle size={30}/>Explore Projects</span></button></Link>
          </div>
        </div>

        <div id="contact-section">
          <Contact />
        </div>
      </div>
    </>
  )
}