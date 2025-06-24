import React from 'react'
import './Header.css'
import me from './../assets/IMG_7606.JPG'

export const Header = () => {
  return (
    <>
        <div className="header">
            <div className="grid">
                <div className="grid-left">
                    <h1>Hello! This is Alex.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna
                    </p>
                </div>

                <div className="grid-right">
                    <img src={me} style={{width: '60%'}}/>
                </div>
            </div>
        </div>
    </>
  )
}
