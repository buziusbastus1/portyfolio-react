import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FiGithub } from 'react-icons/fi'
import { MdEmail } from 'react-icons/md'
const HeaderSocials = () => {
  return (
    <div className='header__socials' >
        <a href="http://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="http://github.com" target="_blank" rel="noreferrer"><FiGithub/></a>
        <a href="http://dribble.com" target="_blank" rel="noreferrer"><MdEmail/></a>
    </div>
  )
}

export default HeaderSocials
