import React, { useState, useRef, useEffect } from 'react'
import { MdEmail } from 'react-icons/md'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import observeIntersection from '../../intersectionObserver'
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

  const form = useRef()
  const cop = useRef(null)

  useEffect(() => {
    const options = {
      threshold: 0.3
    }

    const contactObserver = observeIntersection(cop, options)
    const formObserver = observeIntersection(form, options)

    return () => {
      contactObserver.disconnect()
      formObserver.disconnect()
    }
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_p4glurc', 'template_z4q7nzk', form.current, 'l1HA2UxqXtdFZQsjr')
      .then((result) => {
        console.log(result.text)
        alert('Your message has been sent!')
      }, (error) => {
        console.log(error.text)
        alert('Sorry, there was an error. Please try again later.')
      })
  }

  return (
    <section id='contact'>
      <h5>get in touch</h5>
      <h2>contact me</h2>
      <div className="container contact__container">
        <div ref={cop} className="contact__options">
{/* {console.log(cop)} */}
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

        <form ref={form} onSubmit={sendEmail} id="contact-form" className='form'>
          {/* {console.log(form)} */}
          <input type="text" name="name" placeholder='your full name'required/>
          <input type="email" name="email" placeholder='your email'required />
          <textarea name="message" id="" cols="30" rows="7" placeholder='your message' required />
          <button type="submit" className='btn btn-primary'value="Send">send message</button>
        </form>

      </div>

    </section>
  )
}

export default contact
