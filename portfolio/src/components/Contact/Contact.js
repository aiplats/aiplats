import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { socialContact } from '../assets/assets';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_4rjdsta',    
        'template_3y0d3cc',       
        form.current,
        'roty9GMb-hPkQlOsU'         
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <>
        <div className="main-contact-page" id='Contact'>
            <div className="contact-container">
                <h1>GET IN TOUCH <br />WITH ME!</h1>
                <hr />
                <h2>I’m always open to exploring new opportunities and engaging in innovative projects. Let’s connect and discuss how we can turn your ideas into impactful solutions.</h2>

                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="contact-input">
                        <div className="name-email-row">
                          <input className="contact-details" placeholder="Name" />
                          <input className="contact-details" placeholder="Email" />
                        </div>

                        <input className="contact-details" placeholder="Subject"></input>
                        <input className="contact-details" placeholder="Message"></input>

                        <button type="submit">Send Message</button>
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
                </form>
            </div>
        </div>
    </>
  )
}
