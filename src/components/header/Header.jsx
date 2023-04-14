import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>hello i'm</h5>
        <h1>Kuba</h1>
<h5 className="text-light">Front End</h5>
<CTA/>
<HeaderSocials/>
<div className="me">
  Experience a Showcase of My Work and Skills as a Frontend Developer Seeking Opportunities for Growth
</div>
<a href="#contact" className='scroll__down'>scroll down</a>
      </div>
    </header>
  )
}

export default Header
