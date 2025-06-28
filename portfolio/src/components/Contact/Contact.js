import React from 'react';
import './Contact.css';

import { socialContact } from '../assets/assets';

export const Contact = () => {
  return (
    <>
        <div className="main-contact-page" id='Contact'>
            <div className="contact-container">
                <h1>GET IN TOUCH <br />WITH ME!</h1>
                <hr />
                <h2>I’m always open to exploring new opportunities and engaging in innovative projects. Let’s connect and discuss how we can turn your ideas into impactful solutions.</h2>

                <div className="contact-form">
                    <div className="contact-input">
                        <div className="name-email-row">
                          <input className="contact-details" placeholder="Name" />
                          <input className="contact-details" placeholder="Email" />
                        </div>

                        <input className="contact-details" placeholder="Subject"></input>
                        <input className="contact-details" placeholder="Message"></input>

                        <button>Send Message</button>
                    </div>

                    <div className="contact-vertical-line"></div>

                    <div className="contact-icons">
                        {socialContact
                        .map((contact, index) => (
                            <div key={index} className="personal-deets">
                                <img src={contact.icon}/>
                                <p>{contact.name}</p>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
