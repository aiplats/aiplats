import React, { useRef } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { socialContact } from '../assets/assets';

import { FiMail } from 'react-icons/fi';
import { RiSendPlaneFill } from 'react-icons/ri';

const Contact = () => {
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
          alert("Email sent successfully!");
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
                <h1>GET IN TOUCH <br />WITH <span className="highlight">ALEX!</span></h1>
                <hr />
                <h2>I’m always open to exploring new opportunities and engaging in innovative projects. Let’s connect and discuss how we can turn your ideas into impactful solutions.</h2>

                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="contact-input">
                        <div className="name-email-row">
                          <input className="contact-details" placeholder="Name" name="user_name" required/>
                          <input className="contact-details" placeholder="Email" name="user_email" required/>
                        </div>

                        <input className="contact-details" placeholder="Subject" name="subject" required />
                        <input className="contact-details" placeholder="Message" name="message" required />

                        <button type="submit"><RiSendPlaneFill  size={25} />Send Message</button>
                    </div>

                    <div className="contact-vertical-line"></div>

                    <div className="contact-icons">
                        {socialContact
                        .map((contact, index) => (
                            <div key={index} className="personal-deets">
                                <img src={contact.icon} alt='contact-icon'/>
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

export default Contact;