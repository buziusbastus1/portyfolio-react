import React, { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
// import emailjs from 'emailjs-com'
import './contact.css'

const contact = () => {
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = () => {
    const email = 'kubaotreba121@wp.pl'
    navigator.clipboard.writeText(email)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 1500)
  }
  return (
    <section id='contact'>
      <h5>get in touch</h5>
      <h2>contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option ">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kubaotreba121@wp.pl</h5>
            <div> <a className="email" onClick={copyToClipboard}> copy to clipboard</a></div>
            <a href="mailto:kubaotreba121@wp.pl">send an email</a>

          </article>
 {isCopied && (
        <h2 className="copy-message">
          Email copied to clipboard
        </h2>
 )}
          <article className="contact__option">
            <FaLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Jakub Otreba</h5>
            <a href="https://www.linkedin.com/in/jakub-otreba337" target="_blank" rel="noreferrer">go to profile</a>
          </article>

          <article className="contact__option">
            <FaGithub className='contact__option-icon'/>
            <h4>Github</h4>
            <h5>buziusbastus1</h5>
            <a href="https://github.com/buziusbastus1" target="_blank" rel="noreferrer">go to profile</a>
          </article>

        </div>
        <form >
          <input type="text" name="name" placeholder='your full name'required/>
          <input type="email" name="email" placeholder='your email'required />
          <textarea name="message" id="" cols="30" rows="7" placeholder='your email'required> </textarea>
          <button type="submit" className='btn btn-primary'>send message</button>
        </form>

      </div>

    </section>
  )
}

export default contact