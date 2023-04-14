import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
import {FiDribbble} from 'react-icons/fi'
const HeaderSocials = () => {
  return (
    <div className='header__socials' >
        <a href="http://linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="http://github.com" target="_blank" rel="noreferrer"><FiGithub/></a>
        <a href="http://dribble.com" target="_blank" rel="noreferrer"><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials