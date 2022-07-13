import React from 'react'
import { useRef } from 'react';
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {AiOutlineInstagram} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"
import emailjs from "emailjs-com"
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
      emailjs.sendForm('service_09ekq2d', 'template_sgivvbe', form.current, 'ahv6IjMagnqiuw1Hn')

      e.target.reset()
        };

  return (
    <section id='contact'>
      <h5>In Kontakt treten</h5>
      <h2>Unverbindlich Aufnahmen anfragen</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <a href="mailto:fjodorlundgren@gmail.com" target="_blank">
          <article className="contact__option" >
            <MdOutlineEmail size={25} className='contact__option-icon'/>
            <h4>Email</h4>
            <a>Eine Email schreiben</a>
          </article>
          </a>
          <a href="https://api.whatsapp.com/send?phone=491748127825" target="_blank">
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <a>Eine Nachricht schreiben</a>
          </article>
          </a>
          <a href="https://www.instagram.com/fjodorlundgren/" target="_blank">
          <article className="contact__option">
            <AiOutlineInstagram size={25} className='contact__option-icon'/>
            <h4>Instagram DM</h4>
            <a>Eine DM schreiben</a>
          </article>
          </a>

        </div>
        <form ref= {form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" rows="7" placeholder="Deine Nachricht" required ></textarea>
          <button type="submit" className='btn btn-primary'>Absenden</button>
        </form>

      </div>
    </section>
  )
}

export default Contact