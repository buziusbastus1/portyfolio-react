import React from 'react'
import './contact.css'
import {MdEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const contact = () => {
  
  return (
    <section id='contact'>
      <h5>get in touch</h5>
      <h2>contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option ">
            <MdEmail className='contact__option-icon'/>
            <h4>email</h4>
            <h5>dumeyygat@gmail.com</h5>
            <a href="mailto:kubaotreba121@wp.pl">send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>messenger</h4>
            <h5>egatutorials</h5>
            <a href="https://facebook.com">send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>whatsapp</h4>
            <h5>23242534512</h5>
            <a href="https://facebook.com">send a message</a>
          </article>

        </div>
        <form >
          <input type="text" name="name"  placeholder='your full name'required/>
          <input type="email" name="email" placeholder='your email'required />
          <textarea name="message" id="" cols="30" rows="7" placeholder='your email'required> </textarea>
          <button type="submit" className='btn btn-primary'>send message</button>
        </form>

      </div>
     
    </section>
  )
}

export default contact