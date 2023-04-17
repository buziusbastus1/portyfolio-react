import React from 'react'
import './footer.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import { MdEmail } from 'react-icons/md'
const footer = () => {
  return (
    <footer>
        <ul className='permalinks'>
        <li><a href="#">home</a></li>
        <li><a href="#">experience</a></li>
        <li><a href="#">services</a></li>
        <li><a href="#">portfolio</a></li>
        <li><a href="#">contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="http://facebook.com"> <FaGithub/></a>
        <a href="http://instagram.com"><FaLinkedin/></a>
        <a href="http://twitter.com"><MdEmail/></a>
      </div>
    </footer>
  )
}

export default footer
