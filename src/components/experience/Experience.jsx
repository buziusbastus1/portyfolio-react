import React from 'react'
import './experience.css'
import { MdArrowForwardIos } from 'react-icons/md'
const experience = () => {
  return (
    <section id="experience">
      <h5>what skills i have</h5>
      <h2>my experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <MdArrowForwardIos className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>

              </div>
            </article>
            <article className="experience__details">
              <MdArrowForwardIos className='experience__details-icon'/>
              <div>
                <h4>React</h4>

              </div>
            </article>
            <article className="experience__details">
              <MdArrowForwardIos className='experience__details-icon'/>
              <div><h4>CSS/SCSS</h4>
              </div>
            </article>

          <article className="experience__details">
            <MdArrowForwardIos className='experience__details-icon'/>
            <div>
              <h4>RWD</h4>

            </div>
          </article>
          <article className="experience__details">
            <MdArrowForwardIos className='experience__details-icon'/>
            <div>
              <h4>JavaScript</h4>

            </div>
          </article>
          <article className="experience__details">
            <MdArrowForwardIos className='experience__details-icon'/>
            <div>
              <h4>English</h4>

            </div>
          </article>
        </div>
</div>
        <div className="experience__backend">
          <h3>Used Libraries</h3>
          <div className="experience__content">
            <article className="experience__details">
              <MdArrowForwardIos className='experience__details-icon' />
              <div>
                <h4>GSAP</h4>

              </div>
            </article>
            <article className="experience__details">
              <MdArrowForwardIos className='experience__details-icon'/>
              <div>
                <h4>Three.js</h4>

              </div>
            </article>
            <article className="experience__details">
              <MdArrowForwardIos className='experience__details-icon'/>
              <div>
                <h4>React Router</h4>

              </div>
            </article>
            <article className="experience__details">
              <MdArrowForwardIos className='experience__details-icon'/>
              <div>
                <h4>Vitejs</h4>

              </div>
            </article>
            <article className="experience__details">
              <MdArrowForwardIos className='experience__details-icon'/>
              <div>
                <h4>EmailJS</h4>

              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience
