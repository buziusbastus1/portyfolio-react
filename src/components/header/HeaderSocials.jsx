import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'
const HeaderSocials = () => {
  return (
    <div className='header__socials' >
        <a href="https://www.linkedin.com/in/jakub-otreba337" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/buziusbastus1" target="_blank" rel="noreferrer"><FiGithub/></a>
        <a href="mailto:kubaotreba121@wp.pl" rel="noreferrer"><MdEmail/></a>
    </div>
  )
}

export default HeaderSocials
