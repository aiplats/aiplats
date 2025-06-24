import React from 'react'
import './Navbar.css'
import nognog from './../assets/nognog-1x1.png';

export const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div className="navbar-left">
                <img src={nognog} style={{width: '70px'}}/>
            </div>

            <div className="navbar-right">
                <ul>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    </>
  )
}
