import React from 'react'
import './Navbar.css'
import linkedin from './../assets/icons8-linkedin-48.png'
import whatsapp from './../assets/icons8-whatsapp-48.png'

export const Navbar = () => {
  return (
    <>
    <div className='main-nav'>
        <div className="navbar">
            <div className="navbar-left">
                <p><a href="/">AIPLATS</a></p>
            </div>

            <div className="navbar-right">
                <ul>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>

            <div className="navbar-righter">
                <img src={linkedin} style={{width: '40px', height: '40px'}}/>
                <img src={whatsapp} style={{width: '40px', height: '40px'}}/>
            </div>
        </div>
    </div>
    </>
  )
}
