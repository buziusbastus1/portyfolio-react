import React from 'react'
import CTA from './CTA'
import Slider from './HeaderSlider'
import './header.css'
const Header = () => {
  return (
  <header>
      <div className="container header__container">
        <div className="grid">
          <div className="header__content">
            <h5>hello i&apos;m</h5>
            <h1>Kuba</h1>
            <h5 className="text-light">Front End Development</h5>

            <CTA/>

            <div className="me">
              Experience a Showcase of My Work and Skills as a Frontend Developer Seeking Opportunities for Growth
            </div>
          </div>

          <div className="header__aside">
            <Slider/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
