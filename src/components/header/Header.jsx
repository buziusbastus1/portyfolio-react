import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>hello i&apos;m</h5>
        <h1>Kuba</h1>
<h5 className="text-light">Front End</h5>

<HeaderSocials/>
<CTA/>
<div className="me">
  Experience a Showcase of My Work and Skills as a Frontend Developer Seeking Opportunities for Growth
</div>
      </div>
    </header>
  )
}

export default Header
